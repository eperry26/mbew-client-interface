import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Chart} from 'chart.js'
import * as data1 from '../../assets/data/data1.json';
import * as data2 from '../../assets/data/data2.json';
import * as data3 from '../../assets/data/data3.json';
import * as data4 from '../../assets/data/data4.json';
import { max } from 'd3';
//import { TremordataService, DataPoints } from '../tremordata.service';


@Component({
  selector: 'app-tremor-graph',
  templateUrl: './tremor-graph.component.html',
  styleUrls: ['./tremor-graph.component.css'],
  //providers: [TremordataService]
})


export class TremorGraphComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() {
  }

  dataIndex?: number;

  dataPoints: any = JSON.parse(JSON.stringify(data1));
  dataPoints2: any=JSON.parse(JSON.stringify(data2));
  dataPoints3: any=JSON.parse(JSON.stringify(data3));
  dataPoints4: any=JSON.parse(JSON.stringify(data4));

  y_points1: any = []
  y_points2: any = []
  y_points3: any = []
  y_points4: any = []

  test_labels: any = [];

  // graphChoice!: string;
  graphChoices = ['Line','Bar'];
  // labs: Array<string> = [];
  y = 100;

  getData() {
   this.createBarChart(this.dataPoints, this.dataPoints2, this.dataPoints3, this.dataPoints4);
  }

  ngOnInit(): void {
    //this.graphChoice = "Line"
    this.getData()
    //this.createBarChart(this.data1)


  }

  onChange(event: any) {
    console.log(event.value)
    //return this.graphChoice = event.value;
  }






  public chart: any;

  // createChart(Data: any) {
  //   console.log(Data)
  //   for (let i = 0; i < Data.length ; i++) {
  //     this.test_labels.push(Data[i].x);
  //     //this.y_points.push(this.y + Math.round(Math.random() * 10 - 5));
  //     this.y_points.push(Data[i].y)
  //   }
  //   console.log(Math.max(...this.y_points))

  //   // if (graphChoice == "Line") {
  //   this.chart = new Chart("myChart", {
  //     type: 'line', //this denotes tha type of chart

  //     data: {
  //       labels: this.test_labels,
  //       //labels: ['9AM', '10AM', '11AM', '12PM'],
  //       datasets: [
  //         {
  //           label: "Tremor Reading",
  //           data: this.y_points,
  //           backgroundColor: 'black',
  //           pointBackgroundColor: 'blue'
  //         }
  //       ]
  //     },
  //     options: {
  //       aspectRatio: 2.7,
  //       borderColor: 'black',
  //       plugins: {
  //         zoom: {
  //           pan: {
  //             enabled: true,
  //             mode: 'xy'
  //           },
  //           zoom: {
  //             mode: 'y'
  //           }
  //         }
  //       },
  //       elements: {
  //         point: {
  //           radius: 0
  //         },
  //         line: {
  //           tension: 0.05
  //         }
  //       },
  //       //spanGaps: false,
  //       scales: {
  //         x: {
  //           ticks: {
  //             maxTicksLimit: 5,
  //             // display: false,
  //           }
  //         },
  //         // y: {
  //         //   max: 120
  //         // }
  //       }
  //     },

  //   });


  // }


  //Bar chart
  // data1 = [
  //   [10,30], [15,26], [8,35], [24,50],
  //   [4,10], [16,31], [11,20], [13,27]
  //   ];

  createBarChart(Data: any, Data2: any, Data3: any, Data4: any){

    Data = Data.datapoints1
    Data2 = Data2.datapoints2
    Data3 = Data3.datapoints3
    Data4 = Data4.datapoints4
    // console.log("Day "+(1+1))


    this.y_points1 = this.getYpoints(Data);
    this.y_points2 = this.getYpoints(Data2);
    this.y_points3 = this.getYpoints(Data3);
    this.y_points4 = this.getYpoints(Data4);

    const range1 = [Math.min(...this.y_points1), Math.max(...this.y_points1)]
    const range2 = [Math.min(...this.y_points2), Math.max(...this.y_points2)]
    const range3 = [Math.min(...this.y_points3), Math.max(...this.y_points3)]
    const range4 = [Math.min(...this.y_points4), Math.max(...this.y_points4)]


    for (let i = 0; i < 4 ; i++) {
      this.test_labels.push("Day "+(i+1))
    }

    //will need to make for loops for border color and background color

    // console.log(Math.min(...this.y_points))
    // console.log(Math.max(...this.y_points))


    this.chart = new Chart("myChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.test_labels,
	       datasets: [
          {
            label: "Tremor Reading",
            data: [range1, range2, range3, range4],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)', //red rgba(255, 26, 104, 0.2)
                'rgba(54, 162, 235, 0.2)', // blue rgba(54, 162, 235, 0.2)
                'rgba(255, 206, 86, 0.2)', // yellow rgba(255, 206, 86, 0.2)
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1,
              borderSkipped: false
          },
        ]
      },
      options: {
        aspectRatio:2.5,
      }

    });
  }


  private getYpoints(Data: any) {
    const y_pts = []
    for (let i = 0; i < Data.length; i++) {
      y_pts.push(Data[i].y);
    }
    return y_pts
  }

  clickHandler(click: any) {
    //const ctx = document.getElementById("myChart")
    const points = this.chart.getElementsAtEventForMode(click, 'nearest', {intersect: true}, false);
    //if(points.length) {
      //console.log(points[0].index + 1) // getting index for that bar's dataset
      this.childEvent.emit(points[0].index)
    //}
  }
}

