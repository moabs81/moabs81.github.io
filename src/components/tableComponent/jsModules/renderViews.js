'use strict';
require('../lessStyles/tableComponentStyles.less');
exports.renderViews = function() {
    //************************THE MAIN CONTAINER********************************************************************
    const buildTableContainer = function(propsObj, stateObj, cbReturn) {
        var tHeaderContainerPropsObj = {},
            tBodyContainerPropsObj = {};
        tHeaderContainerPropsObj.headerText = propsObj.headerText;
        tHeaderContainerPropsObj.sortOrder = stateObj.whichDirection;
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
            tHeaderSortButtonPropsObj = {};
        tHeaderTextPropsObj.targetDiv = 'tHeaderRow';
        $('.' + propsObj.targetDiv).append(
            '<div class="tHeaderRow">' +
            '</div>'
        );
        propsObj.headerText.forEach(function(element, index) {
            tHeaderTextPropsObj.headerText = element;
            tHeaderTextPropsObj.columnClass = 'tCol' + index;
            buildTHeaderText(tHeaderTextPropsObj, function(result) {
                console.log(index + ' - ' + result + ' with building the table header text fields');
            });
        });
        cbReturn('done');
    }; //************ END buildTHeaderContainer ****************************************
    //******************
    const buildTHeaderText = function(propsObj, cbReturn) {
        $('.' + propsObj.targetDiv).append('<div class="tHeaderText ' + propsObj.columnClass + '">' + propsObj.headerText + '</div>');
        cbReturn('done');
    }; //************ END buildTHeaderText ****************************************
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
            '<div class="tBodyCell tCol0"><div class="tBodyCol1">' + propsObj.path + '</div></div>' +
            '<div class="tBodyCell tCol1"><div class="tBodyCol2Title">' + propsObj.name + '</div><div class="tBodyCol2Body">' + propsObj.steps + '</div></div>' +
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
            if (propsObj.more == 1) {
                $('.tBodyButtonRow .tCol1').append('<button type="button" id="getMoreButton">More!</button>');
            } else {
                $('.tBodyButtonRow .tCol1').append('<button type="button" id="getMoreButton">No More!</button>');
            }
            const setInitialView = function() {
                $('.tBodyContentRow').slice(0, 4).addClass('visible');
                setButtonEvent();
            }
            const setButtonEvent = function() {
                document.getElementById('getMoreButton').addEventListener('click', function(e) {

                })
            }
            setInitialView();
            cbReturn('done');
        }
        //************************END OF THE BODY********************************************************************    
    const returnMethods = {
        buildTableContainer: buildTableContainer
    };
    return returnMethods;
}