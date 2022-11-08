import React, { useEffect, useState } from 'react';
import "../Parent-Dashboard.css";
import { BiUser } from "react-icons/bi";
import ParentDashboard from "../Parent-Dashboard";
import axios from 'axios';

const Home = () => {

    const [parentID] = useState('633dbcff955d79864fe11c0e')
    const [data, setData] = useState([])

    // const getInfo = () => {
    //     axios.get(`/students/getStudentByParentID/632ca5d0c8b6153d1ebfb54a`)
    //         .then( (res) => {
    //             setData(res.data) 
    //             console.log(data);
    //         })
            
    // }

    const getInfo=()=>{
        axios.get(`/students/getStudentByParentID/${parentID}`)
            .then(res=>{
                setData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(getInfo)

    const getFee = (Class) => {
        let fee;
        switch (Class) {
            case "JSS 1":
              fee = 100;
              break;
            case "JSS 2":
              fee = 200;
              break;
            case 'JSS #':
               fee = 300;
              break;
            case "SSS 1":
              fee = 400;
              break;
            case "SSS 2":
              fee = 500;
              break;
            case "SSS 3":
              fee = 600;
              break;
            default:
                return 0
          }

        return fee
    }

    let childrenData = data.map((e, index)=>{
        return (
          
            <div className="child-data" key={index} >
            <div className="child-name">
                <span className="child-image"> <BiUser> </BiUser> </span>
                <div className="nameDiv">
                    <div>
                        <div> First Name: </div>
                        <div> Surname: </div>
                        <div> Class: </div>
                        <div> Gender:</div>
                        {/* <div> Student ID:</div> */}
                        <div> Section: </div>
                        <div> Outstanding fee: </div>
                    </div>
                <div className="childDets">
                    <div> {e.firstName} </div>
                    <div> {e.lastName} </div>
                    <div>{e.Class}</div>
                    <div>{e.gender} </div>
                    {/* <div> 12345</div> */}
                    <div> First Term </div>
                    <div> {getFee(e.Class)}</div>
                </div>
            </div>
        </div>
        <div className="child-btn">
            <button>Generate Result</button>
        </div>
    </div>
        )
       })


    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <ParentDashboard />
            <div className="parent-home">
                <div className="welcome">
                    <h3>Welcome to LandMark College </h3><span> School Management System</span>
                </div>
                <h2> Parent/Guardian's ID: {parentID} </h2>
                <span>Number of wards: {data.length} </span>

                <div className="details-arrange">
                  {childrenData} 
                </div>
            <button className="payment"> Pay for All </button>
            </div>
        </div>

    );
}
 
export default Home;