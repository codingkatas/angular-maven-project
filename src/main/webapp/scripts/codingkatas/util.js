/**
 * Utility method that creates or reuses namespaces for use in the Javascript module pattern.
 * Sets the created namespace in the window scope
 *
 * @param namespaceString - A namespace on the form 'myCompany.myModule.myDomain' or just 'myCompany'
 * @returns {*|window|window}
 */
/*jshint unused: false */
function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = ''
        ;

    angular.forEach(parts, function (value) {
        currentPart = value;
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    });

    return parent;
}

/*jshint unused: false */
function log(message) {
    if (typeof(console) !== 'undefined' && console !== null) {
        console.log(message);
    }
}
