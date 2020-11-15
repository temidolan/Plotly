d3.json("/data/samples.json").then(sampleData => {
    console.log(sampleData)

    var ids = sampleData.samples[0].otu_ids;
    console.log(ids);
    var sampleValues = sampleData.samples[0].sample_values.slice(0, 10).reverse();
    console.log(sampleValues)
    var labels = sampleData.samples[0].sample_values.slice(0, 10);
    console.log(labels);
    var otu_Top = (sampleData.samples[0].otu_ids.slice(0,10)).reverse();
    var otu_ID = otu_Top.map(d => "OTU" +d);
    console.log(`otu_labels: ${labels}`)

var trace = {
    x: sampleValues,
    y: otu_ID,
    text: labels,
    marker:{
        color: 'green'},
        type: "bar",
        orientation: 'h',
    };
    var data = [trace];
    var layout = {
        title: 'Top Ten Operational Taxonomic Units (OTU)',
        yaxis:{
        tickmode: 'linear',
    },
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30,
    }
    };

Plotly.newPlot("bar", data, layout);