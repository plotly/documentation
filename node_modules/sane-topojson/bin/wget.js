var fs = require('fs');
var exec = require('child_process').exec;

var wget = require('wget');

var common = require('./common');

fs.readFile(common.pathToConfig, 'utf8', main);

function main(err, configFile) {
    if(err) throw err;

    var config = JSON.parse(configFile);

    var bar = common.makeBar(
        'Downloading shapefiles: [:bar] :current/:total',
        [config.resolutions, config.vectors]
    );

    function unzip(r, v) {
        return [
            'unzip -o',
            common.wgetDir + common.srcPrefix + common.bn(r, v.src, 'zip'),
            '-d', common.wgetDir
        ].join(' ');
    }

    config.resolutions.forEach(function(r) {
        config.vectors.forEach(function(v) {

            var url = [
                    common.urlBase,
                    r, 'm/', v.type + '/',
                    common.srcPrefix,
                    common.bn(r, v.src, 'zip')
                ].join(''),
                out = [
                    common.wgetDir,
                    common.srcPrefix,
                    common.bn(r, v.src, 'zip')
                ].join('');

            var download = wget.download(url, out, {});

            download.on('error', function(err) {
                console.log(err);
            });

            download.on('end', function() {
                exec(unzip(r, v), function() {
                    bar.tick();
                    if(bar.complete) process.exit();
                });
            });
        });
    });
}
