node-json2json
=========

What is node-json2json?
------------------
node-json2json is a node module that implements the json restructuring engine <a href='https://github.com/moappi/json2json'>json2json</a> for node.js

Installation
------------

	npm install node-json2html

Usage
-----
```javascript
	var json2json = require('node-json2json');
	
	var data = {'c:areaChart':{'needthis':{'propArea':'value'},'dontneedthis':{}},
		    'c:pieChart':{'needthis':{'propPie':'value'},'dontneedthis':{}}};

	var transform = {'$[var=c:(.+)Chart]':'','chart':'$(var)','stuff':'${c:$(var)Chart.needthis}'};
        
	console.log( json2json.transform(data,transform) );
```

Need more Information?
--------------
json2json is still in a pre-beta mode (hence the 0.0.1 version) so any changes/improvements are greatly appreciated.
