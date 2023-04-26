import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart=(props)=>{
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
      ];

      for(const expense of props.expenses){
          const expenseMonthIndex=expense.date.getMonth(); //this return index 0-11 respectively extracting the months from the date
          chartDataPoints[expenseMonthIndex].value+=expense.amount;
      }
    
      const dataPointValuesList=chartDataPoints.map((dataPoint)=>{return dataPoint.value})
      const maxValueComparingAllMonths=Math.max(...dataPointValuesList);

    return(
        <div className="chart">
        {chartDataPoints.map((dataPoint)=>(
            <ChartBar label={dataPoint.label} value={dataPoint.value} maxValue={maxValueComparingAllMonths}></ChartBar>
            )
            )
        }
        </div>
    )
}
export default Chart;