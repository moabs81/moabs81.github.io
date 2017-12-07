'use strict';
const pageLayoutMod = require('./components/pageLayout/jsModules/pageLayout'),
    pageLayout = pageLayoutMod.pageLayout();
const controllerMod = require('./components/tableComponent/jsModules/controller'),
    controller = controllerMod.controller();

pageLayout.buildTableComponent(function(result) {
    if (result == 'bddAppContainer') {
        controller.buildTableContainer(result, function(result) {
            console.log(result + ' with building application');
        });
    } else {
        console.log('whoops, something happened');
    }
});