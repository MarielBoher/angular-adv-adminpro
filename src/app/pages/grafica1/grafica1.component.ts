import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  doughnutChartLabels: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
public data1:ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [ {  data: [ 40, 10, 100 ],
             backgroundColor: ['#7DD8D9','#D97D93','#77DA9A'],
             hoverBackgroundColor: ['#22D5D7','#D95373','#50D981'],
             hoverBorderColor:['#FFFFFF','#FFFFFF','#FFFFFF']
              },
            ]
};


  }


