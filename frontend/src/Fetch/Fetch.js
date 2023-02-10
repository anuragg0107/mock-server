import React,{useState,useEffect} from 'react';
import "./Fetch.css";
import axios from "axios";

const Fetch = () => {
  const [userData,setUserData]=useState([])

  const userFetchData=async()=>{
await axios.get("http://localhost:4000/data")
    .then((res)=>setUserData(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
     userFetchData()
  },[])
  
  const handleDelete=(id)=>{
  let deleteData= userData.filter((el)=>el.id!==id)
  setUserData(deleteData)
  // console.log(deleteData)
  }

  return (
    <div>
      <h1>user details</h1>
      <div className='table-container'>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='user-list'>
        {userData.map((el)=>(
          <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.mobile_no}</td>
              <td>{el.email}</td>
              <td>{el.city}</td>
              <td>{el.state}</td>
              <td>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>
              </td>
            </tr>
        ))}
           
        </tbody>
      </table>
      </div>
    
    </div>
  )
}

export default Fetch