'use strict';
exports.functionality = function() {
    const sortEvent = function(e, cbReturn) {
        var dataOut = {};
        console.log(e);
        dataOut.whichDirection = e.srcElement.classList[1];
        dataOut.whichHeader = e.path[2].childNodes[0].innerText;
        console.log(e.srcElement.classList[1]);
        console.log(e.path[2].childNodes[0].innerText);
    }
    const returnMethods = {
        sortEvent: sortEvent
    };
    return returnMethods;
}