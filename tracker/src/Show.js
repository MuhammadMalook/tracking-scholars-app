import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
function Show(){
    const [data,setData] = useState([])

useEffect(  ()=>
{   
  console.log("effect");
    // fetch('https://api.lunaciarover.com/stats/0x005ded4cf72a6642be48c8833c84444f150d66b0').then(data=> data.json()).then(results=> setData(results));
    Axios.get('http://localhost:5000/search').then(
    resp=>{
      const{row}=resp.data
      console.log(row)
      setData(row)
    }
  ).catch(res=>console.log(res))
},[])
return (
    <>
  <Table striped bordered hover variant="dark" className="mt-3">
  <thead>
    <tr>
      <th>Name</th>
      <th>Ronin Address</th>
      <th>Total_SLP</th>
      <th>in_game_SLP</th>
      <th>MMR</th>
    </tr>
  </thead>

    <tbody>
     {data.map(itm=>{
      return (
      <tr>
          <td>{itm.Name}</td>
          <td>{itm.Ronin_Address}</td>
          <td>{itm.total_slp}</td>
          <td>{itm.in_game_slp}</td>
          <td>{itm.mmr}</td>
        </tr>
       )
     })}  
        
      </tbody>
    
</Table>
</>
    )
}
export default Show;