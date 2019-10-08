module.exports = function(context) {
    
    var fs = require("fs");
    const path = require('path');

    function moverArquivo(arquivoOrigem, arquivoDestino){

        let data = fs.readFileSync(arquivoOrigem);
        fs.writeFileSync(arquivoDestino, data);
    }

    function apagarArquivosDiretorio(directory){

        let files = fs.readdirSync(directory);
        for (const file of files) {
            fs.unlinkSync(path.join(directory, file));
        }
    }

    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-hdpi-v26/");
    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-ldpi-v26/");
    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-mdpi-v26/");
    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-xhdpi-v26/");
    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-xxhdpi-v26/");
    apagarArquivosDiretorio("platforms/android/app/src/main/res/mipmap-xxxhdpi-v26/");


    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-hdpi-v26/ic_launcher.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-ldpi-v26/ic_launcher.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-mdpi-v26/ic_launcher.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-xhdpi-v26/ic_launcher.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-xxhdpi-v26/ic_launcher.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher.xml", "platforms/android/app/src/main/res/mipmap-xxxhdpi-v26/ic_launcher.xml");

    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-hdpi-v26/ic_launcher_round.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-ldpi-v26/ic_launcher_round.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-mdpi-v26/ic_launcher_round.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-xhdpi-v26/ic_launcher_round.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-xxhdpi-v26/ic_launcher_round.xml");
    moverArquivo("resources/android/mipmap-anydpi-v26/ic_launcher_round.xml", "platforms/android/app/src/main/res/mipmap-xxxhdpi-v26/ic_launcher_round.xml");

    moverArquivo("resources/android/mipmap-hdpi/ic_launcher.png", "platforms/android/app/src/main/res/mipmap-hdpi/ic_launcher.png");
    moverArquivo("resources/android/mipmap-hdpi/ic_launcher_foreground.png", "platforms/android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png");
    moverArquivo("resources/android/mipmap-hdpi/ic_launcher_round.png", "platforms/android/app/src/main/res//mipmap-hdpi/ic_launcher_round.png");
    moverArquivo("resources/android/mipmap-mdpi/ic_launcher.png", "platforms/android/app/src/main/res/mipmap-mdpi/ic_launcher.png");
    moverArquivo("resources/android/mipmap-mdpi/ic_launcher_foreground.png", "platforms/android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png");
    moverArquivo("resources/android/mipmap-mdpi/ic_launcher_round.png", "platforms/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png");
    moverArquivo("resources/android/mipmap-xhdpi/ic_launcher.png", "platforms/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png");
    moverArquivo("resources/android/mipmap-xhdpi/ic_launcher_foreground.png", "platforms/android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png");
    moverArquivo("resources/android/mipmap-xhdpi/ic_launcher_round.png", "platforms/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png");
    moverArquivo("resources/android/mipmap-xxhdpi/ic_launcher.png", "platforms/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png");
    moverArquivo("resources/android/mipmap-xxhdpi/ic_launcher_foreground.png", "platforms/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png");
    moverArquivo("resources/android/mipmap-xxhdpi/ic_launcher_round.png", "platforms/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png");
    moverArquivo("resources/android/mipmap-xxxhdpi/ic_launcher.png", "platforms/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png");
    moverArquivo("resources/android/mipmap-xxxhdpi/ic_launcher_foreground.png", "platforms/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png");
    moverArquivo("resources/android/mipmap-xxxhdpi/ic_launcher_round.png", "platforms/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png");
    moverArquivo("resources/android/values/ic_launcher_background.xml", "platforms/android/app/src/main/res/values/ic_launcher_background.xml");

}