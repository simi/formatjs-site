'use strict';

var renderComponent = require('../lib/component').render;

module.exports = function (route) {
    route.name = 'home';

    route.get(function (req, res, next) {
        var splashExample = {
            name     : 'Eric',
            numPhotos: 1000,
            takenDate: Date.now()
        };

        res.expose('home', 'pageType');
        res.expose(splashExample, 'examples.splash');

        res.render('home', {
            examples: {
                splash: renderComponent('splash-example',
                    Object.assign({}, res.intl, splashExample)
                )
            }
        });
    });
};
