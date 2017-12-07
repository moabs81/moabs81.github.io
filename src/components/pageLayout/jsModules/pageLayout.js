'use strict';
require('../lessStyles/pageLayout.less');
exports.pageLayout = function() {
    const buildTableComponent = function(cbReturn) {
        $(function() {
            $('.contentContainer').append('<div class="appContainer" id="bddAppContainer"></div>');
            window.onscroll = function(e) {
                var viewPort = document.getElementById('contentContainer').getBoundingClientRect();
                if (viewPort.top < -50) {
                    $('.titleContainer').addClass('titleContainerSolid');
                } else {
                    $('.titleContainer').removeClass('titleContainerSolid');
                }
            };
            cbReturn('bddAppContainer');
        })
    }
    const returnMethods = {
        buildTableComponent: buildTableComponent
    };
    return returnMethods;
}