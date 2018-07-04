require(["lib/knockout-2.2.0.debug", "formbind", "domReady!"],//depends on formbind.js and domReady plugin to be loaded 
function (ko, formbindAppObject) { 
	ko.applyBindings(new formbindAppObject());
});
