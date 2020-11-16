function BuildStart() {
  d3.json("data/samples.json").then(function (data) {
    console.log(data);
    console.log(data)
    // var metadata = data.metadata;
    var names = data.names;
    console.log(names)
    // var samples = data.samples;
    var select = d3.select("#selDataset");
    names.forEach(function (name) {
      select.append("option").text(name).property("value", name);
    })
    BuildBarChart(data);
    }
  )};
BuildStart();

function BuildBarChart(data) {
  var samples = data.samples;
  // var dataId = samples.filter(sample => sample.id == variableID);

  // var Ids10 = dataId[0].otu_ids.slice(0, 10);
  // var IdsAsString = Ids10.map(Id => "OTU " + Id);

  // var sample_value10 = dataId[0].sample_values.slice(0, 10).reverse();

  // var sample_labels10 = dataId[0].otu_labels.slice(0, 10);


  var sample_value10 = data.samples[0].sample_values.slice(0, 10).reverse();
  var sample_labels10 = data.samples[0].sample_values.slice(0, 10);
  var otu_Top = (data.samples[0].otu_ids.slice(0,10)).reverse();
  var IdsAsString = otu_Top.map(d => "OTU" +d);

  // Create the trace, layout and the plot
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


function optionChanged() {
  var dropdownmenu = d3.select("#selDataset");
  var variableID = dropdownmenu.property("value");
  console.log(variableID);
  Buildingfunction(variableID)
};

function Buildingfunction(variableID) {
  d3.json("data/samples.json").then(function (data) {
    BuildBarChart(data);
  }

  )
};

