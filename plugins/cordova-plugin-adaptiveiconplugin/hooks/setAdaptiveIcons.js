// Global vars
var deferral, fs, elementtree, path;

var setAdaptativeIcons = (function () {

    var setAdaptativeIcons = {};

    var manifestPaths = {
        cordovaAndroid6: "platforms/android/AndroidManifest.xml",
        cordovaAndroid7: "platforms/android/app/src/main/AndroidManifest.xml"
    };

    var rootDir;
    
    setAdaptativeIcons.fileExists = function (filePath) {
        try {
            return fs.statSync(filePath).isFile();
        } catch (error) {
            return false;
        }
    };

    setAdaptativeIcons.parseElementtreeSync = function (filename) {
        var content = fs.readFileSync(filename, 'utf-8');
        return new elementtree.ElementTree(elementtree.XML(content));
    };

    setAdaptativeIcons.getAndroidManifestPath = function () {
        var cordovaAndroid6Path = path.join(rootDir, manifestPaths.cordovaAndroid6);
        var cordovaAndroid7Path = path.join(rootDir, manifestPaths.cordovaAndroid7);

        if (this.fileExists(cordovaAndroid6Path)) {
            return cordovaAndroid6Path;
        } else if (this.fileExists(cordovaAndroid7Path)) {
            return cordovaAndroid7Path;
        } else {
            return undefined;
        }
    };

    setAdaptativeIcons.apply = function (ctx) {
        debugger;
        rootDir = ctx.opts.projectRoot;

        var androidManifestPath = this.getAndroidManifestPath();
        if(!androidManifestPath) {
            throw new Error("Unable to find AndroidManifest.xml");
        }
        
        console.log(androidManifestPath);
        
        var manifestTree = this.parseElementtreeSync(androidManifestPath);
        var root = manifestTree.getroot();

        if (root) {
            var applicationElement = root.find("./application");
            if (applicationElement) {
                 root.set("xmlns:tools", "http://schemas.android.com/tools");
//                applicationElement.set("android:allowBackup", "false");
//                applicationElement.set("tools:replace", "android:allowBackup");
                  applicationElement.set("android:icon", "@mipmap/ic_launcher.png");
                  applicationElement.set("tools:replace", "android:icon");
                  applicationElement.set("android:roundIcon", "@mipmap/ic_launcher_round.png");   
                  applicationElement.set("tools:replace", "android:roundIcon");  
                } else {
                throw new Error("Invalid AndroidManifest.xml structure. No <application> tag found.");
            }

            

            fs.writeFileSync(androidManifestPath, manifestTree.write({indent:4}, 'utf-8'));
        } else {
            throw new Error("Invalid AndroidManifest.xml structure. No <manifest> tag found.");
        }
    };

    return setAdaptativeIcons;
})();

module.exports = function (ctx) {
    var Q = ctx.requireCordovaModule("q");
    fs = ctx.requireCordovaModule("fs");
    path = ctx.requireCordovaModule("path");
    elementtree = ctx.requireCordovaModule("elementtree");

    deferral = Q.defer();

    try {
        setAdaptativeIcons.apply(ctx);
        deferral.resolve();
    } catch (error) {
        deferral.reject(error);
        return deferral.promise;
    }

    return deferral.promise;
};
