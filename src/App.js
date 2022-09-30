import {React, useState} from 'react';
import './App.css';
import axios from 'axios';
import StudentRegistration from './components/StudentRegistration';
import ParentRegistration from './components/ParentRegistration';



function App() {

  const [data,setData]=useState([]);

  let tade = data.map((e, index)=>{
    return (
      
      <div key={index} className="table-content">
			<div className="table-row">		
				<div className="table-data">{e.id}</div>
				<div className="table-data">{e.firstname}</div>
				<div className="table-data">{e.lastname}</div>
				<div className="table-data"> <button>Pay</button> </div>
				<div className="table-data"><button>View Results</button></div>
			</div>
      </div>
    )
   })

  let baseUrl = "http://localhost:3030/more/eniola"

  // const getInfo = (url) => {
  //   fetch(url)
  //   .then(res=>{
  //     //res.json()
  //     console.log(res.body);
  //   }).then(data=>{
  //     result.push(data);
  //   })
  // }

  const getInfo=()=>{
    axios.get(baseUrl)
        .then(res=>{
            setData([res.data]);
        })
        .catch(err=>{
            console.log(err);
        })
}
    
  
  return (
    <div className="App">
      {tade}
      <button onClick={getInfo} >Get</button>
      <StudentRegistration></StudentRegistration>
      <ParentRegistration></ParentRegistration>
     
    </div>
  );
}

export default App;
