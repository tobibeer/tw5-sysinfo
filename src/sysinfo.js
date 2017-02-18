/*\
title: $:/plugins/tobibeer/sysinfo/sysinfo.js
type: application/javascript
module-type: macro

<<sysinfo scope property>>, e.g: <<sysinfo location href>>

@preserve
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "sysinfo";

exports.params = [
	{name: "scope"},
	{name: "property"}
];
/*
Run the macro
*/

exports.run = function(scope, property) {
	if(["env","document", "location", "navigator"].indexOf(scope) >= 0) {
		// Inspect environment?
		if(scope === 'env') {
			// Return environment
			return $tw.browser ? 'browser' : $tw.node ? 'node' : 'unknown';
		// Inspect window properties?
		} else {
			try {
				// Try and get it
				return window[scope][property].toString();
			} catch(e) {
				// Ignore errors
			}
		}
	}
};

})();