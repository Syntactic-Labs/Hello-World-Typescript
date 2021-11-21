"use strict";
var hwt = "Hello TypeScript world!";
var greg = "Mike";
console.log(greg, hwt);
var loaded = function (abc) {
    var hw = document.getElementById("hw");
    if (hw !== null) {
        hw.innerText = greg + " " + hwt;
    }
};
