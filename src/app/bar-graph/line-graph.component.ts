import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns';
import * as testData from '../../assets/data/newTremorData_PD17.json';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})

export class LineGraphComponent {

  dataPoints: any = JSON.parse(JSON.stringify(testData));

  y_points: any = []
  test_labels: any = []
  lineChartTitle: string = ''


  ngOnInit(): void {
    this.btnDisabled = false
  }


  public chart2: any = null;


  createChart(Data: any) {
    console.log('createChart called')

    // if (this.chart2!=null){
    //   this.chart2.destroy(); // have to destroy the previous chart before the new one can be created
    // }

    this.y_points = this.getYpoints(Data)
    for (let i=0; i < Data.length; i++) {
      const curT = Math.round(Data[i].time)
       const label = curT.toString();
      this.test_labels[i] = label
    }
    console.log(this.test_labels)

    this.chart2 = new Chart("lineChart2", {
      //add in time scale
      type: 'line',
      data: {
        labels: this.test_labels,
        datasets: [{
          label: 'Data Recorded from Watch',
          data: this.y_points,
        }],
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (minutes)',
              font: {
                size: 20,
                weight: 'bold'
              },
            },
            ticks: {
              maxTicksLimit: 7,
              font: {
                size: 15,
                weight: 'bold'
              },
            },
          },
          y: {
            max: 6,
            title: {
              display: true,
              text: 'Tremor Score',
              font: {
                size: 20,
                weight: 'bold'
              },
            },
            ticks: {
              maxTicksLimit: 7,
              font: {
                size: 15,
                weight: 'bold'
              },
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

  btnDisabled!: boolean

   plotLineChart() { // When button is clicked, this function is called to perform creation of line chart
    this.btnDisabled = true
    this.lineChartTitle = "Tremor Scores Recorded from Watch" // will show up along with chart
    this.createChart(this.dataPoints)
    return this.btnDisabled, this.lineChartTitle

  }
}
