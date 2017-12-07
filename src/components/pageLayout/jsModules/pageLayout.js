'use strict';
require('../lessStyles/pageLayout.less');
exports.pageLayout = function() {

    const buildApp = function(htmlToBuildApp, setEvents) {
        $(function() {
            $('.contentContainer').append('<div class="appContainer" id="bddAppContainer"></div>');
            $('#bddAppContainer').append(htmlToBuildApp.join(''));
            setEvents();
        });
    }

    const buildTableComponent = function(cbReturn) {
        $(function() {
            $('.contentContainer').append('<div class="appContainer" id="bddAppContainer"></div>');
            cbReturn('bddAppContainer');
        })
    }


    const privateReturnMethods = {
        buildApp: buildApp,
        buildTableComponent: buildTableComponent
    }

    const returnMethods = {
        privateReturnMethods: privateReturnMethods
    };
    return returnMethods;
}