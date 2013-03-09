	
	var json2json = require('node-json2json');
	
	var transform = {'$[var=c:(.+)Chart]':'','chart':'$(var)','stuff':'${c:$(var)Chart.needthis}','$(var)-variables':function(obj,vars){

		//do something fantastic!
		//or just return the variables because we're lazy
		return(vars);
	}};

	var obj = {'c:areaChart':{'needthis':{'propArea':'value'},'dontneedthis':{}},
		       'c:pieChart':{'needthis':{'propPie':'value'},'dontneedthis':{}}};
			   

	console.log( JSON.stringify( json2json.transform(obj,transform) ) );