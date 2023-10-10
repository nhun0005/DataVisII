document.addEventListener('DOMContentLoaded', (event) => {

var defaultWindChart = "default_wind_diag.vg.json"
vegaEmbed("#default_wind", defaultWindChart, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vis1 = "adel_wind_diag.vg.json";
vegaEmbed("#adel_wind", vis1, {actions: false}).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('adel_wind').style.display = 'block';
        document.getElementById('line_graph_for_adel_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForAdel = "line_graph_for_adel_wind.vg.json";
vegaEmbed("#line_graph_for_adel_wind", lineGraphForAdel, {actions: false
}).catch(console.error)


var vis2 = "bris_wind_diag.vg.json";
vegaEmbed("#bris_wind", vis2, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';

        // Show only the clicked visualization and the line graph
        document.getElementById('bris_wind').style.display = 'block';
        document.getElementById('line_graph_for_bris_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForBris = "line_graph_for_bris_wind.vg.json";
vegaEmbed("#line_graph_for_bris_wind", lineGraphForBris, {actions: false
}).catch(console.error)

var vis3 = "hob_wind_diag.vg.json";
vegaEmbed("#hob_wind", vis3, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
        
    
        // Show only the clicked visualization and the line graph
        document.getElementById('hob_wind').style.display = 'block';
        document.getElementById('line_graph_for_hob_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForHob = "line_graph_for_hob_wind.vg.json";
vegaEmbed("#line_graph_for_hob_wind", lineGraphForHob, {actions: false
}).catch(console.error)

var vis4 = "melb_wind_diag.vg.json";
vegaEmbed("#melb_wind", vis4, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';

    
        // Show only the clicked visualization and the line graph
        document.getElementById('melb_wind').style.display = 'block';
        document.getElementById('line_graph_for_melb_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForMelb = "line_graph_for_melb_wind.vg.json";
vegaEmbed("#line_graph_for_melb_wind", lineGraphForMelb, {actions: false
}).catch(console.error)

var vis5 = "perth_wind_diag.vg.json";
vegaEmbed("#perth_wind", vis5, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';

        // Show only the clicked visualization and the line graph
        document.getElementById('perth_wind').style.display = 'block';
        document.getElementById('line_graph_for_perth_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForPerth = "line_graph_for_perth_wind.vg.json";
vegaEmbed("#line_graph_for_perth_wind", lineGraphForPerth, {actions: false
}).catch(console.error)

var vis6 = "syd_wind_diag.vg.json";
vegaEmbed("#syd_wind", vis6, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';

        // Show only the clicked visualization and the line graph
        document.getElementById('syd_wind').style.display = 'block';
        document.getElementById('line_graph_for_syd_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForSyd = "line_graph_for_syd_wind.vg.json";
vegaEmbed("#line_graph_for_syd_wind", lineGraphForSyd, {actions: false
}).catch(console.error)

var vis7 = "as_wind_diag.vg.json";
vegaEmbed("#as_wind", vis7, {actions: false}).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('as_wind').style.display = 'block';
        document.getElementById('line_graph_for_as_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForAS = "line_graph_for_as_wind.vg.json";
vegaEmbed("#line_graph_for_as_wind", lineGraphForAS, {actions: false
}).catch(console.error)

var vis8 = "ball_wind_diag.vg.json";
vegaEmbed("#ball_wind", vis8, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });
    
        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';

        // Show only the clicked visualization and the line graph
        document.getElementById('ball_wind').style.display = 'block';
        document.getElementById('line_graph_for_ball_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForBall = "line_graph_for_ball_wind.vg.json";
vegaEmbed("#line_graph_for_ball_wind", lineGraphForBall, {actions: false
}).catch(console.error)

var vis9 = "broome_wind_diag.vg.json";
vegaEmbed("#broome_wind", vis9, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('broome_wind').style.display = 'block';
        document.getElementById('line_graph_for_broome_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForBroome = "line_graph_for_broome_wind.vg.json";
vegaEmbed("#line_graph_for_broome_wind", lineGraphForBroome, {actions: false
}).catch(console.error)

var vis10 = "canb_wind_diag.vg.json";
vegaEmbed("#canb_wind", vis10, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('canb_wind').style.display = 'block';
        document.getElementById('line_graph_for_canb_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForCanb = "line_graph_for_canb_wind.vg.json";
vegaEmbed("#line_graph_for_canb_wind", lineGraphForCanb, {actions: false
}).catch(console.error)

var vis11 = "darw_wind_diag.vg.json";
vegaEmbed("#darw_wind", vis11, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('darw_wind').style.display = 'block';
        document.getElementById('line_graph_for_darw_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForDarw = "line_graph_for_darw_wind.vg.json";
vegaEmbed("#line_graph_for_darw_wind", lineGraphForDarw, {actions: false
}).catch(console.error)

var vis12 = "towns_wind_diag.vg.json";
vegaEmbed("#towns_wind", vis12, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    var view = result.view;

    view.addEventListener('click', function(event, item) {
        // Hide all visualizations
        document.querySelectorAll('.clickable-vis').forEach(function(vis) {
            vis.style.display = 'none';
        });

        // Hide the default plot and the <p> in item4
        document.getElementById('default_wind').style.display = 'none';
        document.querySelector('.item4 p').style.display = 'none';
    
        // Show only the clicked visualization and the line graph
        document.getElementById('towns_wind').style.display = 'block';
        document.getElementById('line_graph_for_towns_wind').style.display = 'block';
        // Show the back button
        document.getElementById('backButton').style.display = 'block';
    });
}).catch(console.error)

var lineGraphForTowns = "line_graph_for_towns_wind.vg.json";
vegaEmbed("#line_graph_for_towns_wind", lineGraphForTowns, {actions: false
}).catch(console.error)

var specVis1 = "interactive_scatterplot.vg.json"
vegaEmbed("#vis1", specVis1, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var specVis2 = "animated_map.vg.json"
vegaEmbed("#vis2", specVis2, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var specVis3 = "heat_map_mean_temp.vg.json"
vegaEmbed("#vis3", specVis3, { "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);


  // Back button event listener
document.getElementById('backButton').addEventListener('click', function() {
    console.log("Back button clicked");
    // Show all visualizations
    document.querySelectorAll('.clickable-vis').forEach(function(vis) {
        vis.style.display = 'block';
    });

    // Show the default plot and the <p> in item4
    document.getElementById('default_wind').style.display = 'block';
    document.querySelector('.item4 p').style.display = 'block';

    // Hide all line graphs
    document.querySelectorAll('.line-graph').forEach(function(graph) {
        graph.style.display = 'none';
    });

    // Hide the back button
    document.getElementById('backButton').style.display = 'none';
});

});
