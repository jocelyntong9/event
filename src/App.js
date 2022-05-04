import './App.css';
import { AddEvent } from './components/AddEvent';
import Slider from './components/Slider';
//import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import moment from "moment";

//const Chart = require("react-chartjs-2").Chart;

//const chartColors = {
 // red: "rgb(255, 99, 132)",
 // orange: "rgb(255, 159, 64)",
 // yellow: "rgb(255, 205, 86)",
 // green: "rgb(75, 192, 192)",
 // blue: "rgb(54, 162, 235)",
//  purple: "rgb(153, 102, 255)",
//  grey: "rgb(201, 203, 207)"
//};

//const color = Chart.helpers.color;
//const data = {
 // datasets: [
 //   {
 //     label: "Temperature",
 //     backgroundColor: color(chartColors.blue)
 //       .alpha(0.5)
 //       .rgbString(),
 //     borderColor: chartColors.blue,
 //     fill: false,
//      lineTension: 0,
 //     borderDash: [0],
//      data: []
//   }
//  ]
//};

//const options = {
 // elements: {
  //  line: {
    //  tension: 0.5
   // }
 // },
 // scales: {
  //  xAxes: [
   //   {
     //   type: "realtime",
     //   distribution: "linear",
     //   realtime: {
     //     onRefresh: function(chart) {
     //       chart.data.datasets[0].data.push({
     //         x: moment(),
     //         y: Math.random() *(35 - 20) + 20
     //       });
     //     },
     //     delay: 0,
     //     time: {
     //       displayFormat: "h:mm"
     //     }
     //   },
     //   ticks: {
     //     displayFormats: 0,
     //     maxRotation: 0,
      //    minRotation: 0,
      //    stepSize: 1,
      //    maxTicksLimit: 30,
      //    minUnit: "second",
      //    source: "auto",
      //    autoSkip: true,
      //    callback: function(value) {
      //      return moment(value, "HH:mm:ss").format("mm:ss");
      //    }
      //  }
     // }
   // ],
   // yAxes: [
   //   {
   //     ticks: {
   //       beginAtZero: true,
   //       max: 40
   //     }
   //   }
   // ]
 // }
//};
//<Line data={data} options={options} />

function App() {
  return (
    <div>
      <div className="view">
        <div className="container mt-5" >
          <div className="desc">
            <h1>Input your new event here</h1>
          </div>
          <div className="col-md-5">
            <div className="test">
              <AddEvent />
            </div>
          </div>
        </div>
      </div>
      <div className="list">
        <h1>Event List</h1>
      </div>
      <div id="body">
        <Slider/>
      </div>
      <div id="graph">
        <h1>Temperature Graph</h1>
      </div>
    </div>

  );
}

export default App;
