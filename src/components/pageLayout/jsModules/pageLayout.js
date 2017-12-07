'use strict';
require('../lessStyles/pageLayout.less');
exports.pageLayout = function() {
    const buildTableComponent = function(cbReturn) {
        $(function() {
            $('.contentContainer').append('<div class="appContainer" id="bddAppContainer"></div>');
            cbReturn('bddAppContainer');
        })
    }
    const returnMethods = {
        buildTableComponent: buildTableComponent
    };
    return returnMethods;
}