/*\
title: $:/plugins/tobibeer/sysinfo/sysinfo.js
type: application/javascript
module-type: macro

<<sysinfo scope property>>, e.g: <<sysinfo location href>>

@preserve
\*/
(function(){"use strict";exports.name="sysinfo";exports.params=[{name:"scope"},{name:"property"}];exports.run=function(n,e){if(["env","document","location","navigator"].indexOf(n)>=0){if(n==="env"){return $tw.browser?"browser":$tw.node?"node":"unknown"}else{try{return window[n][e].toString()}catch(o){}}}}})();