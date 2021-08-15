
// import CanvasJSReact from './canvasjs.react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// function Admin (){	
//   const [slp,setSlp] = useState({})
//     const options = {
      
//       title: {
//         text: "Daily SLP"
//       },
//       data: [{				
//                 type: "column",
//                 dataPoints: [
//                     { label: new Date().toLocaleDateString('en-GB', {  
//                       day : 'numeric',
//                       month : 'short',
//                       year : 'numeric'}),  y: slp.total_slp  }
//                 ]
//        }]
//    }	

   
//    useEffect(()=>{
//     fetch("https://api.lunaciarover.com/stats/0x005ded4cf72a6642be48c8833c84444f150d66b0").then(res=>res.json()).then(res=>setSlp(res))
//    },[])
//    return (
//       <div className="dark" >
//         <CanvasJSChart options = {options} 
//             /* onRef = {ref => this.chart = ref} */
//         />
//       </div>
//     );
//   }


// import BarChart from 'react-bar-chart';
// const Admin = ()=>{

//     return (
//         <div >
//             <div> 
//                 <BarChart ylabel='Quantity'
                 
//                   height={500}
//                   />
//             </div>
//         </div>
//     );}
// import { Bar } from "react-chartjs-2";
  
// function Admin() {
//   return (
//     <div className="App">
//       <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
//       <div style={{ maxWidth: "650px" }}>
//         <Bar
//           data={{
//             // Name of the variables on x-axies for each bar
//             labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
//             datasets: [
//               {
//                 // Label for bars
//                 label: "total count/value",
//                 // Data or value of your each variable
//                 data: [1552, 1319, 613, 1400],
//                 // Color of each bar
//                 backgroundColor: ["aqua", "green", "red", "yellow"],
//                 // Border color of each bar
//                 borderColor: ["aqua", "green", "red", "yellow"],
//                 borderWidth: 0.5,
//               },
//             ],
//           }}
//           // Height of graph
//           height={400}
//           options={{
//             maintainAspectRatio: false,
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     // The y-axis value will start from zero
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//             legend: {
//               labels: {
//                 fontSize: 15,
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }

import Axios from 'axios'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    fontFamily:"verdana",

    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  // mydiv:{
  //   backgroundColor:'gray',
  //   display:'flex',
  //   justifyContent: 'center',
  //   width: '350px',
  //   alignItems: 'center',
  //   marginLeft:'500px'

  // }
}));

const Admin = () => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const handleAdd=()=>{

    if(firstName && address){

      Axios.post('http://localhost:5000/add',
      {
        Name:firstName, 
        Ronin_Address:address
      }).then(
      resp=>{
        toast.success("User Added Successfully");
      }
    )

    }
    else{
      toast.error("ERROR!")
    }
  }

  return (
    <div className={classes.mydiv}>

      <div className="container bg-dark">
          
      <div className="card" >
        <div className="card-body">
          <h5 className="text-center display-4" style={{color:"Blue",fontFamily:"sans-serif"}}>Add new User</h5>
          <form className={classes.root}>
        <TextField
          label="Full Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="Ronin Address"
          variant="filled"
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        
        <div>

          <Button variant="contained" className="lg" color="primary" onClick={handleAdd} >
            Add
          </Button>
          <ToastContainer/>
        </div>
      </form>
    
        </div>
      </div>
      </div>
    </div>
  );
};

export default Admin