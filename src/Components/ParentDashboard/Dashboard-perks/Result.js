import data from "./StudentResultdata/studentResult.json";
// import Empty from "../Images/Empty.svg"
import { useState } from "react";
import ParentDashboard from "../Parent-Dashboard";

const Result = () => {

    const [resultDetails ] = useState(data)

    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <ParentDashboard />
            <div className="result">
                <h2>Result</h2>
                {/* <img src={Empty} alt="loading.."></img> */}
                <div  className="resultbox">
                    <div className="nameDetails">
                        <h3> Name: <span>Lawal Adunola Suliat</span></h3>
                        <h3>Class: <span> JSS 2 </span></h3>
                        <h3>Gender: <span> Female </span></h3>
                    </div>
                    <div className="nameDetails">
                        <h3>Term: <span>First </span>  </h3>
                        <h3>Session: <span>2021/2022</span> </h3>
                    </div>

                    <div className="flexResult">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>S/N</td>
                                        <td>Subject</td>
                                        <td>Score</td>
                                        <td>Grade</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {resultDetails.map( (result, index) => {
                                return <tr>
                                    <td>{index + 1} </td> 
                                    <td>{result.subject}</td> 
                                    <td>{result.score}</td>
                                    <td>{result.grade}</td>
                                </tr> } )}
                                </tbody>
                            </table>
                        </div>
                        <div className="grades">
                            <span> Keys </span>
                            <p>A : 80-100 - Excellent </p> <p>B : 70-80 - Good</p> <p>C : 60-70 - Credit</p> 
                            <p>D : 50-60 </p> <p>E : 40-50 </p>   <p>F : 40 - Fail </p>
                            <p className="total"> Total Score = 80% </p>
                        </div>
                    </div>

                    <div className="commentDetails">
                        <h4>Class Teacher's Remark: </h4> <h4> She is a bright and well-behaved Student </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Result;