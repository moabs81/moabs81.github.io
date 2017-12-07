'use strict';
const renderViewsMod = require('./renderViews'),
    renderViews = renderViewsMod.renderViews();
const functionalityMod = require('./functionality'),
    componentFunctions = functionalityMod.functionality();
exports.controller = function() {
    const mockAPICall = function() { //mock API call - would really fetch data, but in this case is importing a test data module
        const dataMod = require('../../../testData/bddDatav4'),
            testData = dataMod.bddData();
        return testData;
    };

    const setState = function(cbReturn) {
        var originalObj = mockAPICall(),
            originalObj = originalObj[0],
            stepsArr = [],
            rowObj = {},
            dataArr = [],
            user = 1;
        originalObj.user[user].scenarios.forEach(function(element) {
            rowObj.name = element.name;
            rowObj.path = element.paths[0].name;
            element.paths[0].steps.forEach(function(element) {
                stepsArr.push(element.Given);
                stepsArr.push(element.When);
                stepsArr.push(element.Then);
            })
            rowObj.steps = stepsArr.join('');
            dataArr.push(rowObj);
            rowObj = {};
            if (element.paths[1]) {
                rowObj.name = element.name;
                rowObj.path = element.paths[1].name;
                element.paths[1].steps.forEach(function(element) {
                    stepsArr.push(element.Given);
                    stepsArr.push(element.When);
                    stepsArr.push(element.Then);
                })
                rowObj.steps = stepsArr.join('');
                dataArr.push(rowObj);
                rowObj = {};
            }
        });

        cbReturn(dataArr);
    };

    const sortDataArr = function(dataArr, sortCol, sortOrd, cbReturn) {

        const sortAsc = function() {
            console.log('ASC - sorting ' + sortCol + ' in order: ' + sortOrd);
            dataArr.sort(function(firstEl, secondEl) {
                if (firstEl[sortCol] < secondEl[sortCol]) {
                    return -1;
                };
                if (firstEl[sortCol] > secondEl[sortCol]) {
                    return 1;
                };
                return 0;
            })
        };
        const sortDec = function() {
            console.log('DEC - sorting ' + sortCol + ' in order: ' + sortOrd);
            dataArr.sort(function(firstEl, secondEl) {
                if (firstEl[sortCol] > secondEl[sortCol]) {
                    return -1;
                };
                if (firstEl[sortCol] < secondEl[sortCol]) {
                    return 1;
                };
                return 0;
            })
        };

        sortOrd == 'asc' ? sortAsc() : sortDec();

        cbReturn(dataArr);
    };

    const buildTableContainer = function(targetDiv, cbReturn) {
        var tableContainerpropsObj = {},
            tableContainerstateObj = {},
            eventListenersPropsObj = {};
        //add title to propsObj
        tableContainerpropsObj.componentTitle = 'BDD Scenarios';
        //add headers to propsObj        
        tableContainerpropsObj.headerText = ['Path', 'Scenario'];
        //add targetDiv to propsObj
        tableContainerpropsObj.targetDiv = targetDiv;
        //add sort state to stateObj
        tableContainerstateObj.whichHeader = 1;
        tableContainerstateObj.whichDirection = 'asc';
        //add dataSet to stateObj
        setState(function(dataArr) {
            tableContainerstateObj.data = dataArr;
        });
        renderViews.buildTableContainer(tableContainerpropsObj, tableContainerstateObj, function(result) {
            console.log(result + ' with building the appliation container');
            renderViews.eventListenersOnTableContainer(eventListenersPropsObj, function(result) {
                console.log(result + ' with setting events');
            })
        });
        cbReturn('done');
        sortDataArr(tableContainerstateObj.data, 'path', 'dec', function(result) {
            console.log('sorted, baby');
        })
    };


    const returnMethods = {
        buildTableContainer: buildTableContainer
    };
    return returnMethods;
}