'use strict';
const pageLayoutMod = require('./components/pageLayout/jsModules/pageLayout'),
    pageLayout = pageLayoutMod.pageLayout();
/*const controlllerMod = require('./components/reportViewGenerator/jsModules/reportViewGeneratorController'),
    viewController = controlllerMod.reportViewGeneratorController();
viewController.privateReturnMethods.buildTableContainer(function(result) {
    console.log(result);
    pageLayout.privateReturnMethods.buildApp(result, viewController.setAllEvents);
});*/

const controllerMod = require('./components/tableComponent/jsModules/controller'),
    controller = controllerMod.controller();

pageLayout.privateReturnMethods.buildTableComponent(function(result) {
    if (result == 'bddAppContainer') {
        controller.buildTableContainer(result, function(props, state) {});
    } else {
        console.log('whoops, something happened');
    }
});