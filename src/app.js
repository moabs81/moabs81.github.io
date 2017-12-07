'use strict';
const pageLayoutMod = require('./components/pageLayout/jsModules/pageLayout'),
    pageLayout = pageLayoutMod.pageLayout();
const controlViewStateMod = require('./components/serverReviewsComponent/jsModules/controlVIewState'),
    controller = controlViewStateMod.controller();

pageLayout.buildTableComponent(function(result) {
    if (result == 'bddAppContainer') {
        controller.setInitialState(result, function(result) {
            console.log(result + ' with building application');
        });
    } else {
        console.log('whoops, something happened');
    }
});