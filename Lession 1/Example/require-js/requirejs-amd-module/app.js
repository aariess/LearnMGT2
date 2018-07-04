require(["events"],//depends on events.js to be loaded 
function (eventsUltilObject) { 
    var elem = document.getElementById("target"); 
    eventsUltilObject.addEvent(elem, "click", function () { 
        alert("clicked"); 
    }); 
});
