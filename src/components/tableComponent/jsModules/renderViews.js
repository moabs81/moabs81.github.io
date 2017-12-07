'use strict';
require('../lessStyles/tableComponentStyles.less');
const functionalityMod = require('./functionality'),
    componentFunctions = functionalityMod.functionality();
exports.renderViews = function() {
    //************************THE MAIN CONTAINER********************************************************************
    const buildTableContainer = function(propsObj, stateObj, cbReturn) {
        var tHeaderContainerPropsObj = {},
            tBodyContainerPropsObj = {};
        tHeaderContainerPropsObj.headerText = propsObj.headerText;
        tHeaderContainerPropsObj.whichHeader = stateObj.whichHeader;
        tHeaderContainerPropsObj.whichDirection = stateObj.whichDirection;
        tHeaderContainerPropsObj.targetDiv = 'tableContainer';
        tBodyContainerPropsObj.targetDiv = 'tableContainer';
        tBodyContainerPropsObj.data = stateObj.data;
        $('#' + propsObj.targetDiv).append(
            '<div class="componentContainer">' +
            '<div class="componentContainerTitle">' + propsObj.componentTitle + '</div>' +
            '<div class="tableContainer">' +
            '</div>' +
            '</div>'
        );
        buildTHeaderContainer(tHeaderContainerPropsObj, function(result) {
            console.log(result + ' with building the header container');
        });
        buildTBodyContainer(tBodyContainerPropsObj, function(result) {
            console.log(result + ' with building the body container');
        });
        cbReturn('done');
    };
    //************************END OF THE MAIN CONTAINER********************************************************************
    //******************
    //******************
    //******************
    //************************THE HEADER********************************************************************
    const buildTHeaderContainer = function(propsObj, cbReturn) {
        var tHeaderTextPropsObj = {},
            tHeaderButtonPropsObj = {};
        $('.' + propsObj.targetDiv).append(
            '<div class="tHeaderRow">' +
            '</div>'
        );
        propsObj.headerText.forEach(function(element, index) {
            tHeaderTextPropsObj.headerText = element;
            tHeaderTextPropsObj.targetDiv = 'tCol' + index;
            tHeaderButtonPropsObj.targetDiv = 'tCol' + index;
            tHeaderButtonPropsObj.whichDirection = propsObj.whichDirection;
            if (propsObj.whichHeader == index) {
                tHeaderButtonPropsObj.whichHeader = true;
            } else {
                tHeaderButtonPropsObj.whichHeader = false;
            };

            $('.tHeaderRow').append('<div class="tHeaderCell tCol' + index + '"></div>');
            buildTHeaderText(tHeaderTextPropsObj, function(result) {
                console.log(index + ' - ' + result + ' with building the table header text');
            });
            buildTHeaderButton(tHeaderButtonPropsObj, function(result) {
                console.log(index + ' - ' + result + ' with building the table header button');
            });
        });
        cbReturn('done');
    }; //************ END buildTHeaderContainer ****************************************
    //******************
    const buildTHeaderText = function(propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append(
            '<div class="tHeadertext">' +
            propsObj.headerText +
            '</div>'
        );
        cbReturn('done');
    }; //************ END buildTHeaderText ****************************************    
    const buildTHeaderButton = function(propsObj, cbReturn) {
        console.log(propsObj.whichDirection);
        console.log(propsObj.whichHeader);
        var activeSort = ' inactive';
        if (propsObj.whichHeader == true) {
            activeSort = ' ' + propsObj.whichDirection;
        };
        $('.' + propsObj.targetDiv).append(
            '<div class="tHeaderButton">' +
            '<span class = "tHeaderButtonSpan' + activeSort + '">' + activeSort + '</span>' +
            '</div>'
        );
        cbReturn('done');
    }; //************ END buildTHeaderButton ****************************************    
    //************************END OF THE HEADER*******************************************************************
    //******************
    //******************
    //******************
    //************************THE BODY********************************************************************
    const buildTBodyContainer = function(propsObj, cbReturn) {
        var tBodyRowPropsObj = {},
            tBodyMoreButtonPropsObj = {};
        tBodyMoreButtonPropsObj.targetDiv = propsObj.targetDiv;
        propsObj.data.forEach(function(element, index) {
            tBodyRowPropsObj.targetDiv = propsObj.targetDiv;
            tBodyRowPropsObj.path = element.path;
            tBodyRowPropsObj.name = element.name;
            tBodyRowPropsObj.steps = element.steps;
            buildTBodyRow(tBodyRowPropsObj, function(result) {
                console.log(index + ' - ' + result + ' with building the body content rows');
            })
            tBodyRowPropsObj = {};
        });
        buildTBodyMoreButton(tBodyMoreButtonPropsObj, function(result) {
            console.log(result + ' with building the button');
        })
        cbReturn('done');
    }; //************ END buildTBodyContainer ****************************************
    //******************
    const buildTBodyRow = function(propsObj, cbReturn) {

        $('.' + propsObj.targetDiv).append(
            '<div class="tBodyRow tBodyContentRow">' +
            '<div class="tBodyCell tCol0"><div class="tBodyCol0">' + propsObj.path + '</div></div>' +
            '<div class="tBodyCell tCol1"><div class="tBodyCol1Title">' + propsObj.name + '</div><div class="tBodyCol1Body">' + propsObj.steps + '</div></div>' +
            '</div>'
        )
        cbReturn('done');
    }; //************ END BuildTBodyRow ****************************************
    const buildTBodyMoreButton = function(propsObj, cbReturn) {
            $('.' + propsObj.targetDiv).append(
                '<div class="tBodyRow tBodyButtonRow">' +
                '<div class="tBodyCell tCol0"></div>' +
                '<div class="tBodyCell tCol1">' +
                '</div>' +
                '</div>'
            );
            $('.tBodyButtonRow .tCol1').append('<button type="button" id="getMoreButton"><span></span></button>');
            cbReturn('done');
        }
        //************************END OF THE BODY********************************************************************
    const eventListenersOnTableContainer = function(propsObj, cbReturn) {
        const setInitialView = function() {
            $('.tBodyContentRow').slice(0, 4).fadeIn('fast');
            setButtonEvent();
            setSortEvent();
        }

        const setSortEvent = function() {
            for (var i = 0; i < document.getElementsByClassName('tHeaderButtonSpan').length; i++) {
                document.getElementsByClassName('tHeaderButton')[i].addEventListener('click', function(e) {
                    componentFunctions.sortEvent(e);
                });
            }
        }

        const doStuffWithSort = function(e) {
            console.log(e);
            console.log(e.srcElement.classList[1]);
            console.log(e.path[2].childNodes[0].innerText);
        }

        const setButtonEvent = function() {
            document.getElementById('getMoreButton').addEventListener('click', function(e) {
                e.preventDefault();
                $('.tBodyContentRow:hidden').slice(0, 4).fadeIn('slow');
                if ($('.tBodyContentRow:hidden').length == 0) {
                    console.log('no more hidden!');
                    $('.tBodyButtonRow .tCol1').html('<button type="button" id="getNoMoreButton">No More!</button>');
                }
            })
        }
        setInitialView();
        cbReturn('done');
    }
    const returnMethods = {
        buildTableContainer: buildTableContainer,
        eventListenersOnTableContainer: eventListenersOnTableContainer
    };
    return returnMethods;
}