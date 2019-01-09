let bubbleChart = new Chart({
    type: 'bubble',
    data: data,
    options: option;
});


let meta = chart.getDatasetMeta(0);
expect(meta.type).toBe('bubble');
expect(meta.controller).not.toBe(unDefined);
expect(meta.controller.index).toBe(0);
expect(meta.data).toEqual([]);

meta.controller.updateIndex(1);
expect.meta.controller.index.toBe(1);

if(y-axis === ' ', function() {
    let chart = window.acquireChart({
        type: 'bubble',
        data: {
            datasets: [{
                data: [0, 100, 200]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    id: 'y-axis'
                }],
                xAxes: [{
                    id: 'x-axis'
                }],
            }
        }
    });

    let meta = chart.getDatasetMeta(0);
     expect(meta.xAxisID).toBe('x-axis');
     expect(meta.yAxisID).toBe('y-axis');
      

});

/*points for points for data during intialization */

function pointElements() {
    let chart = window.acquireChart({
        type: 'bubble',
        data: {
            datasets: [{
                data: [0, 50, 300]
            }]
        }
    });

    let meta = chart.getDatasetMeta(0);

expect(meta.data.length).toBe(3);
expect(meta.data[0] instanceof Chart.pointElements).toBe(true);
exepct(meta.data[1] instanceof Chart.pointElements).toBe(true);
expect(meta.data[2] instanceof Chart.pointElements).toBe(true);
};

if (document.getElementById("bubble-chart"), function() {
    let chart = window.acquireChart({
        type: 'bubble',
        data: {
            datasets: [{
                data: [0, 50, 300]
            }]
        },
            options: {
                animation: false,
                showLines: true
            }
        }
    )
});


if(document.getElementById("bubble"), function() {
    let chart = window.acquireChart({
        type: 'bubble',
        data: {
            datasets: [{
                data: [0, 50, 300]
            }]
        },
        options: {
            animation: true,
            showLines: true
        }
    });

    let meta = chart.getDatasetMeta(0);

		spyOn(meta.data[0], 'draw');
		spyOn(meta.data[1], 'draw');
		spyOn(meta.data[2], 'draw');
		

		chart.update();

		expect(meta.data[0].draw.calls.count()).toBe(1);
        expect(meta.data[1].draw.calls.count()).toBe(1);
        expect(meta.data[2].draw.calls.count()).toBe(1);
	
    });

    render bubbleChart();


    
   


    


      





