import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Chart, plugins } from 'chart.js'
import 'chartjs-adapter-date-fns';
import * as tremorDataControl from '../../assets/data/newTremorData_control.json';
import * as tremorData6 from '../../assets/data/newTremorData_PD6.json';
import * as tremorData12 from '../../assets/data/newTremorData12.json';
import * as tremorData17 from '../../assets/data/newTremorData_PD17.json';
import * as tremorData23 from '../../assets/data/newTremorData_PD23.json';


@Component({
  selector: 'app-tremor-graph',
  templateUrl: './tremor-graph.component.html',
  styleUrls: ['./tremor-graph.component.css'],
})


export class TremorGraphComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() {
  }

  timePoint: any // time stamp for whatever bar was clicked
  maxScore: any // max score of the time segment (bar)

  y_points: any = []

  tremorDataControl: any = JSON.parse(JSON.stringify(tremorDataControl));
  tremorData6: any = JSON.parse(JSON.stringify(tremorData6));
  tremorData12: any = JSON.parse(JSON.stringify(tremorData12));
  tremorData17: any = JSON.parse(JSON.stringify(tremorData17));
  tremorData23: any = JSON.parse(JSON.stringify(tremorData23));

  test_labels: any = [];

  graphChoice!: string;
  graphChoices = ['Control', '6', '12', '17', '23'];
  patientID!: string; //purpose: have the chart title be specific to the patient chosen

  getData(tData: any) {
    this.createBarChart(tData)
  }

  ngOnInit(): void {
    this.patientID = "PD Patient 6"
    this.getData(this.tremorData6)
  }

  onChange(event: any) {
    //console.log(event.value)
    if (event.value == 'Control') {
      this.patientID = "Control Patient"
      this.getData(this.tremorDataControl)
      console.log('Control patient was chosen')
    }
    else if (event.value == '6') {
      this.patientID = "PD Patient 6"
      this.getData(this.tremorData6)
      console.log('Patient 6 was chosen')
    }
    else if (event.value == '12') {
      this.patientID = "PD Patient 12"
      this.getData(this.tremorData12)
      console.log('Patient 12 was chosen')
    }
    else if (event.value == '17') {
      this.patientID = "PD Patient 17"
      this.getData(this.tremorData17)
      console.log('Patient 17 was chosen')
    }
    else if (event.value == '23') {
      this.patientID = "PD Patient 23"
      this.getData(this.tremorData23)
      console.log('Patient 23 was chosen')
    }
  }






  public chart: any;


  createBarChart(Data: any) {
    if (this.chart != null) {
      this.chart.destroy(); // have to destroy the previous chart before the new one can be created
    }

    this.y_points = this.getYpoints(Data);



    //will need to make for loop for border color and background color
    const barColors = []
    let splitData = []
    let x = 0
    let z = '24.458756'
    z = z.split('.')[0]
    console.log(z.length)
    console.log(Date.now())


    for (let i = 0; i < this.y_points.length; i += 5) {
      const chunk = [ // grabbing ~12 minutes worth of data
        this.y_points[i],
        this.y_points[i + 1],
        this.y_points[i + 2],
        this.y_points[i + 3],
        this.y_points[i + 4]
      ]
      splitData[x] = [Math.min(...chunk), Math.max(...chunk)]
      x++

    }




    // for loop for assigning color to each bar (time chunk)
    for (let i = 0; i < splitData.length; i++) {
      const maxVal = splitData[i][1]
      if (maxVal < 3) { //Mild // blue rgba(54, 162, 235, 0.2)
        barColors[i] = 'rgba(54, 162, 235, 0.5)'
      }
      else if (maxVal > 3 && maxVal <= 5) { // yellow rgba(255, 206, 86, 0.2)
        barColors[i] = 'rgba(255, 206, 86, 0.5)'
      }
      else if (maxVal > 5) { //red rgba(255, 26, 104, 0.2)
        barColors[i] = 'rgba(255, 26, 104, 0.5)'
      }
    }

    // for loop for creating labels
    let j = 0
    let label = 0
    let curT: any = 0
    for (let i = 0; i < Data.length; i += 5) {
      curT = Math.round(Data[i].time)
      label = curT.toString();
      this.test_labels[j] = label
      j++
    }
    console.log(this.test_labels)


    this.chart = new Chart("myChart", {
      type: 'bar', //this denotes the type of chart

      data: {// values on X-Axis
        // will need to automate labels. Instead of plotting the actual time of day, could display the timestamps on x-axis
        // let base = '2023-04-28T'
        // let milliS = ':00'
        // for (i=0; i < splitData.length; i++) {
        // this.test_labels[i] =
        // this.test_labels[i] = tremorData[i].time
        // }

        //   labels: ['2023-04-16T09:00:00', '2023-04-16T09:12:00', '2023-04-16T09:24:00', '2023-04-16T09:36:00',
        //   '2023-04-16T09:48:00', '2023-04-16T10:00:00', '2023-04-16T10:12:00', '2023-04-16T10:24:00',
        //   '2023-04-16T10:36:00', '2023-04-16T10:48:00', '2023-04-16T11:00:00', '2023-04-16T11:12:00',
        //   '2023-04-16T11:24:00', '2023-04-16T11:36:00', '2023-04-16T11:48:00', '2023-04-16T12:00:00',
        //   '2023-04-16T12:12:00', '2023-04-16T12:24:00', '2023-04-16T12:36:00', '2023-04-16T12:48:00',
        //   '2023-04-16T13:00:00', '2023-04-16T13:12:00', '2023-04-16T13:24:00', '2023-04-16T13:36:00',
        //   '2023-04-16T13:48:00', '2023-04-16T14:00:00', '2023-04-16T14:12:00', '2023-04-16T14:24:00',
        //   '2023-04-16T14:36:00', '2023-04-16T14:48:00', '2023-04-16T15:00:00', '2023-04-16T15:12:00',
        //   '2023-04-16T15:24:00', '2023-04-16T15:36:00', '2023-04-16T15:48:00', '2023-04-16T16:00:00',
        //   '2023-04-16T16:12:00', '2023-04-16T16:24:00', '2023-04-16T16:36:00', '2023-04-16T16:48:00',
        //   '2023-04-16T17:00:00', '2023-04-16T17:12:00', '2023-04-16T17:24:00', '2023-04-16T17:36:00',
        //   '2023-04-16T17:48:00', '2023-04-16T18:00:00', '2023-04-16T18:12:00', '2023-04-16T18:24:00',
        //   '2023-04-16T18:36:00', '2023-04-16T18:48:00', '2023-04-16T19:00:00', '2023-04-16T19:12:00',
        //   '2023-04-16T19:24:00', '2023-04-16T19:36:00', '2023-04-16T19:48:00', '2023-04-16T20:12:00',
        //   '2023-04-16T20:24:00', '2023-04-16T20:36:00', '2023-04-16T20:48:00', '2023-04-16T21:00:00',
        // ],
        labels: this.test_labels,
        datasets: [
          {
            label: "Tremor Reading",
            data: splitData,
            backgroundColor: barColors,
            borderColor: barColors,
            borderWidth: 1,
            borderSkipped: false
          },
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            max: this.test_labels[-1],
            title: {
              display: true,
              text: 'Time (minutes)',
              font: {
                size: 20,
                weight: 'bold'
              },
            },
            //type: 'timeseries',
            ticks: {
              font: {
                size: 17,
                weight: 'bold'
              },
              maxTicksLimit: 4
            },
            // time: {
            //   unit: 'hour',
            // }
          },
          y: {
            max: 6,
            suggestedMin: 0,
            title: {
              display: true,
              text: 'Tremor Score',
              font: {
                size: 20,
                weight: 'bold',
              },
            },
            ticks: {
              font: {
                size: 17,
                weight: 'bold'
              }
            },
          }
        },
        plugins: {
          legend: {
            display: false
          },
        }
      }

    });
  }


  private getYpoints(Data: any) {
    const y_pts = []
    for (let i = 0; i < Data.length; i++) {
      y_pts.push(Data[i].tremorScore);
    }
    return y_pts
  }

  clickHandler(click: any) {
    //const ctx = document.getElementById("myChart")
    const points = this.chart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, false);
    const clickedBar = points[0]
    this.maxScore = clickedBar.element.$context.raw[1]
    this.maxScore = Number(this.maxScore.toFixed(2))
    const barIndex = clickedBar.index // tells us what bar the user clicked on
    this.timePoint = this.test_labels[barIndex] + ' min'
    return this.maxScore, this.timePoint
    //this.childEvent.emit(points[0].index)
  }
}

