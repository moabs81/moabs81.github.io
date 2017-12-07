'use strict';
require('../lessStyles/tableContainerStyles.less');
exports.tableContainer = function() {
    //************************THE MAIN CONTAINER********************************************************************
    const buildTableContainer = function(propsObj, stateObj, cbReturn) {
        var tHeaderContainerPropsObj = {},
            tBodyContainerPropsObj = {},
            returnHtml = [];
        tHeaderContainerPropsObj.headerText = propsObj.headerText;
        tHeaderContainerPropsObj.sortOrder = stateObj.whichDirection;
        tBodyContainerPropsObj.data = stateObj.data;
        returnHtml.push('<div class="componentContainer">');
        returnHtml.push('<div class="componentContainerTitle">' + propsObj.componentTitle + '</div>')
        returnHtml.push('<div class="tableContainer">');
        buildTHeaderContainer(tHeaderContainerPropsObj, function(result) {
            returnHtml.push(result.join(''));
        });
        buildTBodyContainer(tBodyContainerPropsObj, function(result) {
            returnHtml.push(result.join(''));
        })
        returnHtml.push('</div>');
        returnHtml.push('</div>');
        cbReturn(returnHtml);
    };
    //************************END OF THE MAIN CONTAINER********************************************************************
    //******************
    //******************
    //******************
    //************************THE HEADER********************************************************************
    const buildTHeaderContainer = function(propsObj, cbReturn) {
        var tHeaderTextPropsObj = {},
            tHeaderSortButtonPropsObj = {},
            returnHtml = [];
        returnHtml.push('<div class="tHeaderRow">');
        propsObj.headerText.forEach(function(element, index) {
            tHeaderTextPropsObj.headerText = element;
            tHeaderTextPropsObj.columnClass = 'tCol' + index;
            buildTHeaderText(tHeaderTextPropsObj, function(result) {
                returnHtml.push(result.join(''));
            });
        })
        returnHtml.push('</div>');
        cbReturn(returnHtml);
    }; //************ END buildTHeaderContainer ****************************************
    //******************
    const buildTHeaderText = function(propsObj, cbReturn) {
        var returnHtml = [];
        returnHtml.push('<div class="tHeaderText ' + propsObj.columnClass + '">' + propsObj.headerText + '</div>');
        cbReturn(returnHtml);
    }; //************ END buildTHeaderText ****************************************
    //************************END OF THE HEADER*******************************************************************
    //******************
    //******************
    //******************
    //************************THE BODY********************************************************************
    const buildTBodyContainer = function(propsObj, cbReturn) {
        var tBodyRowPropsObj = {},
            tBodyMoreButtonPropsObj = {},
            returnHtml = [];
        var stateObj = {};
        stateObj.currentLastRow = 0;
        if (propsObj.data.length < 5) {
            propsObj.pagingData = propsObj.data;
            stateObj.currentLastRow = propsObj.data.length;
            tBodyMoreButtonPropsObj.more = 0;
        } else {
            propsObj.pagingData = propsObj.data.slice(0, 5);
            tBodyMoreButtonPropsObj.more = 1;
        }

        propsObj.pagingData.forEach(function(element) {
            tBodyRowPropsObj.path = element.path;
            tBodyRowPropsObj.name = element.name;
            tBodyRowPropsObj.steps = element.steps;
            buildTBodyRow(tBodyRowPropsObj, function(result) {
                returnHtml.push(result.join(''));
            })
            tBodyRowPropsObj = {};
        });
        buildTBodyMoreButton(tBodyMoreButtonPropsObj, function(result) {
            returnHtml.push(result.join(''));
        })
        cbReturn(returnHtml);
    }; //************ END buildTBodyContainer ****************************************
    //******************
    const buildTBodyRow = function(propsObj, cbReturn) {
        var returnHtml = [];
        returnHtml.push('<div class="tBodyRow tBodyContentRow">');
        returnHtml.push('<div class="tBodyCell tCol0"><div class="tBodyCol1">' + propsObj.path + '</div></div>');
        returnHtml.push('<div class="tBodyCell tCol1"><div class="tBodyCol2Title">' + propsObj.name + '</div><div class="tBodyCol2Body">' + propsObj.steps + '</div></div>');
        returnHtml.push('</div>');
        cbReturn(returnHtml);
    }; //************ END BuildTBodyRow ****************************************
    const buildTBodyMoreButton = function(propsObj, cbReturn) {
            var returnHtml = [];

            returnHtml.push('<div class="tBodyRow tBodyButtonRow">');
            returnHtml.push('<div class="tBodyCell tCol0"></div>');
            returnHtml.push('<div class="tBodyCell tCol1">');
            if (propsObj.more = 1) {
                returnHtml.push('<button type="button" id="getMoreButton">More!</button>');
            } else {
                returnHtml.push('<button type="button" id="getMoreButton">No More!</button>');
            }
            returnHtml.push('</div>');
            returnHtml.push('</div>');
            cbReturn(returnHtml);
        }
        //************************END OF THE BODY********************************************************************    
    const returnMethods = {
        buildTableContainer: buildTableContainer
    };
    return returnMethods;
}