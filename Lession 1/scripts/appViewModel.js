// Main viewmodel class
define(['knockout-3.5.0rc'], function(ko) {
    return function appViewModel() {
        this.name = ko.observable('Linh');
        this.nameCaps = ko.pureComputed(function() {
            return this.name();
        }, this);
    };
});