/*\
title: $:/plugins/tobibeer/sysinfo/sysinfo.js
type: application/javascript
module-type: macro

<<sysinfo scope property>>, e.g: <<sysinfo location href>>

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
	if(["document", "location", "navigator"].indexOf(scope) >= 0) {
		try {
			return window[scope][property].toString();
		} catch(e) {
			//ignore
		}
	}
};

})();