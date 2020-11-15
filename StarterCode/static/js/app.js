function BuildStart() {
  d3.json("samples.json").then(function (data) {

    console.log(data)
    var metadata = data.metadata;
    var names = data.names;
    var samples = data.samples;




    var select = d3.select("#selDataset");
    names.foreach(id => {
      var options = select.append("options");
      options.text(id)
    })


  })
};
BuildStart();

function optionChanged() {
  var dropdownmenu = d3.select("#selDataset");
  var variableID = dropdownmenu.property("value");
  console.log(variableID);
  BuildwithFilter(variableID);
};


function buildBarChart(data, variableID) {

  // Extract the needed data from the data(JSON), and save it as a variables
  var samples = data.samples;
  var dataId = samples.filter(sample => sample.id == variableID);

  var Ids10 = dataId[0].otu_ids.slice(0, 10);
  var IdsAsString = Ids10.map(Id => "OTU " + Id);

  var sample_value10 = dataId[0].sample_values.slice(0, 10).reverse();

  var sample_labels10 = dataId[0].otu_labels.slice(0, 10);

  var trace1 = {
    x: sample_value10,
    y: IdsAsString,
    type: 'bar',
    orientation: "h",
    text: sample_labels10,
    marker: {
      color: 'rgb(142,124,195)'
    }
  };

  var data = [trace1];

  var layout = {
    title: 'Top 10 OTUs found',
    font: {
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    yaxis: {
      zeroline: false,
      gridwidth: 2
    },
    bargap: 0.1
  };

  Plotly.newPlot("bar", data, layout);

};