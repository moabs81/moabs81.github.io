'use strict';
require('../lessStyles/pageLayout.less');
exports.pageLayout = function () {
    const buildTableComponent = function (tile, cbReturn) {
        $(function () {
            var backgroundImg = document.getElementById('backgroundImg');
            backgroundImg.src = tile;
            $('.contentContainer').append('<div class="appContainer" id="bddAppContainer"></div>');
            document.getElementById('allContentDiv').onscroll = function (e) {
                var viewPort = document.getElementById('contentContainer').getBoundingClientRect();
                console.log(viewPort);
                if (viewPort.top < 140) {
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
};