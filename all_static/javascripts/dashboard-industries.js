/*****************************************/
/* Toggles trace shown in choropleth map */ 
/*****************************************/

var lastMapValue = -1;
function changeMapQuarter(){
	var plot = document.getElementById('usaSalesPlot').contentWindow;
	var selection = document.getElementById('selectQuarter').value;
	var showScale = false;
	if( selection.toString() == "0" ) showScale = true;	
	plot.postMessage({
            task: 'restyle',
            update: {visible: true, showscale: showScale},
				indices: [selection]
        },
        'https://plot.ly');
	plot.postMessage({
            task: 'restyle',
            update: {visible: false, showscale: showScale},
				indices: [lastMapValue]
        },
        'https://plot.ly');
	lastMapValue = selection;
}

// Sample from a normal distribution with mean 0, stddev 1.
function normal() {
  var x = 0, y = 0, rds, c;
  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    rds = x * x + y * y;
  } while (rds == 0 || rds > 1);
  c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
  return x * c; // throw away extra sample y * c
}