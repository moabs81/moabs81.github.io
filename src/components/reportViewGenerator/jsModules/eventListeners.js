'use strict';
exports.eventListeners = function() {
    const setWindowObj = function() {
        window.reportViewGenearator = {};
        window.reportViewGenearator.ctx = {};
    }
    const setMoreButton = function() {
        document.getElementById('getMoreButton').addEventListener('click', function(e) {
            console.log(e);
        });
    };

    const setAllListeners = function() {
        setWindowObj();
        setMoreButton();
    };

    const returnMethods = {
        setAllListeners: setAllListeners
    };
    return returnMethods;
}