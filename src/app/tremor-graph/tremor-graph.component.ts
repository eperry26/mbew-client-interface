import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-tremor-graph',
  templateUrl: './tremor-graph.component.html',
  styleUrls: ['./tremor-graph.component.css']
})


export class TremorGraphComponent implements OnInit {
  graphChoice!: string;
  ngOnInit(): void {
    this.graphChoice = "Line";
  }


  onChange(event: any) {
    console.log(event.value)
    return this.graphChoice = event.value;
  }

  title = 'ng2-charts-demo';
  graphOptions = ["Line", "Bar"]

 //Line chart
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM'
    ],
    datasets: [
      {
        data: [ 10, 14, 35, 30, 45, 25, 15 ],
        label: 'Tremor Readings',
        fill: false,
        tension: 0,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;


  // Bar chart
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM'
    ],
    datasets: [
      {
        data: [ 10, 14, 35, 30, 45, 25, 15 ],
        label: 'Tremor Readings',
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true
  };

  constructor() {
  }


}
