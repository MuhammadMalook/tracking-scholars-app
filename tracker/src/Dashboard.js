import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import Axios from "axios";

var data=[];

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }
  componentDidMount()
  {
      //alert("hii")
    Axios.get('http://localhost:5000/graph').then(
        resp=>{
          const{row}=resp.data
          console.log(row);
               row.map(itm=>{
                   this.setState((prev)=>{
                       return{data:[...prev.data,{date:itm.date,total_slp:itm.total_slp}]}
                   }
                   )}
               )
               
        console.log(data);
    }).catch(res=>console.log(res+"hello"))
    // fetch("https://api.lunaciarover.com/stats/0x005ded4cf72a6642be48c8833c84444f150d66b0").then(res=>res.json()).then(res=>this.setState((prev)=>{
    //     return{data:[...prev.data,{value:new Date().toLocaleDateString(
    //         'en-GB', {  
    //                                   day : 'numeric',
    //                                   month : 'short',
    //                                   year : 'numeric'}
    //     ),val:res.total_slp}]}
    //    }))
   
  }
  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="total_slp" argumentField="date" />
          <Title text="Total SLP" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}