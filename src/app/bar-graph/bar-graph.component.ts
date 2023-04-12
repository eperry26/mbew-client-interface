import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns';
import * as data1 from '../../assets/data/data1.json';
import * as data2 from '../../assets/data/data2.json';
import * as data3 from '../../assets/data/data3.json';
import * as data4 from '../../assets/data/data4.json';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})

// want to get the selected data from tremor graph component, then plot it
export class BarGraphComponent implements OnChanges {
  @Input() lineData: any; //receiving index of bar that was clicked on

  dataPoints: any = JSON.parse(JSON.stringify(data1));
  dataPoints2: any = JSON.parse(JSON.stringify(data2));
  dataPoints3: any = JSON.parse(JSON.stringify(data3));
  dataPoints4: any = JSON.parse(JSON.stringify(data4));

  y_points1: any = []
  y_points2: any = []
  y_points3: any = []
  y_points4: any = []

  Data = this.dataPoints.datapoints1
  Data2 = this.dataPoints2.datapoints2
  Data3 = this.dataPoints3.datapoints3
  Data4 = this.dataPoints4.datapoints4

  barIndex: any

  ngOnChanges(changes: SimpleChanges) {
    this.y_points1 = this.getYpoints(this.Data);
    this.y_points2 = this.getYpoints(this.Data2);
    this.y_points3 = this.getYpoints(this.Data3);
    this.y_points4 = this.getYpoints(this.Data4);

    const allData = [this.y_points1, this.y_points2, this.y_points3, this.y_points4]
     this.barIndex = changes['lineData'].currentValue

    //console.log(allData[barIndex])
    const data_line = allData[this.barIndex]
    this.createChart(data_line)
    console.log(changes); //can see the value the bar index when a bar is clicked on
    console.log(changes['lineData'].firstChange) //only show graph if firstChange is set to false
  }

  // ngOnInit(): void {

  //    console.log(this.lineData) //showing up as undefined
  // }

  data1 = [15, 10, 12, 23, 26, 30]

  public chart2: any = null;


  createChart(Data: any) {

    if (this.chart2!=null){
      this.chart2.destroy(); // have to destroy the previous chart before the new one can be created
    }

    this.chart2 = new Chart("lineChart2", {
      //add in time scale
      type: 'line',
      data: {
        labels: ['0', '3', '5', '7', '10', '15'],
        datasets: [{
          label: 'Data for Specified Segment',
          data: Data,
        }],
      },
      options: {
        scales: {
          x: {
            ticks: {
              maxTicksLimit: 1,
              major: {
                enabled: true
              }
            },
          }
        }
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

}
