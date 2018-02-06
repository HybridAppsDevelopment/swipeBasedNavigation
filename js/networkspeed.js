function detectNetworkSpeed(){


var arrTimes = [];
var i = 0; // start
var timesToTest = 5;
var tThreshold = 150; //ms
var testImage = "https://www.alexessaytool.com/img/px.gif"; // small image in your server
var dummyImage = new Image();
var isConnectedFast = false;

testLatency(function(avg){
    isConnectedFast = (avg <= tThreshold);
    //run just after the SPA appshell has initialised,
    //save the current speed to storage for later usage
    localStorage.setItem('UserNetSpeed', isConnectedFast );
    //console.log("fast network speed:"+isConnectedFast);

});

/** test and average time took to download image from server, called recursively timesToTest times */
function testLatency(cb) {
    var tStart = new Date().getTime();
    if (i<timesToTest-1) {
        dummyImage.src = testImage + '?t=' + tStart;
        dummyImage.onload = function() {
            var tEnd = new Date().getTime();
            var tTimeTook = tEnd-tStart;
            arrTimes[i] = tTimeTook;
            testLatency(cb);
            i++;
        };
    } else {
        /** calculate average of array items then callback */
        var sum = arrTimes.reduce(function(a, b) { return a + b; });
        var avg = sum / arrTimes.length;
        cb(avg);
    }
}

}//end function
