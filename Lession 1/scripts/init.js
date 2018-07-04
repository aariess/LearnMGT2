require(['knockout-3.5.0rc', 'appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});