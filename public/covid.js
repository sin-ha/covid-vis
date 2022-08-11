/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("/data/covid-data.csv", {
		download: true,
		complete: function(results) {
			// console.log(results);
			createGraph(results.data);
		}
	});
}
let pp = ["USA"];
function createGraph(data) {
	var vals = {};
	var dates ={};
	for(var i =1 ;i<data.length;i++){
		if(data[i][0]!=pp[0]);
		if(vals.hasOwnProperty(data[i][0])){
			if(data[i][8].length) {
				vals[data[i][0]].push(data[i][8]);
				dates[data[i][0]].push(data[i][3]);
			}
		}
		else{
			vals[data[i][0]]=[data[i][0]];
			dates[data[i][0]]=[data[i][0]];
			vals[data[i][0]].push(data[i][8]);
			dates[data[i][0]].push(data[i][3]);

		}
	}
	ans1 = [];
	ans2=[];
	Object.entries(vals).forEach((entry) => {
		const [key, value] = entry;
		if(pp.includes(key)){
			ans1.push(value);
		}

	});
	Object.entries(dates).forEach((entry) => {
		const [key, value] = entry;
		if(pp.includes(key))
		ans2.push(value);
	});
	console.log(ans1,ans2);
	// console.log(vals,dates);
	var chart = c3.generate({
		bindto: '#chart',
		data: {
			columns: [
				ans1[0]
			]
		},
		axis: {
			x: {
				type: 'category',
				label:{text:'Timeline',position: 'outer-center',},

				categories:ans2[0],
				tick: {
					multiline: false,
					culling: {
						max: 10
					}
				}
			},
			y: {
				label: {
					text:'Total Covid Cases per 1e6',
					position: 'outer-middle'
				},

			}

		},
		zoom: {
			enabled: true
		},
		legend: {
			position: 'right'
		},

	});
}

function report(stra){
	pp = stra;
	parseData(createGraph)
}

parseData(createGraph);