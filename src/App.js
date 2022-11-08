import React from 'react';

import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './Components/Landing-page/Landing-page';
import SignUp from './Components/Landing-page/SignUp';
import SignIn from './Components/Landing-page/SignIn';
import Home from './Components/ParentDashboard/Dashboard-perks/Home';
import Payment from './Components/ParentDashboard/Dashboard-perks/Payment';
import Result from './Components/ParentDashboard/Dashboard-perks/Result';
import Transactions from './Components/ParentDashboard/Dashboard-perks/Transactions';
import SchoolHome from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolHome';
import Students from './Components/SchoolDashboard/SchoolDashboardPerks/Students';
import SchoolParents from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolParents';
import SchoolCalendar from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolCalendar'
import SchoolAccount from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolAccount';
import SchoolResults from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolResults';
import SchoolPayment from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolPayment';
import Forms from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolForms/Forms';
import StudentForm from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolForms/StudentForm' ;
import Staff from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolForms/Staff';
import ParentForm from './Components/SchoolDashboard/SchoolDashboardPerks/SchoolForms/ParentForm';
import DataContextProvider from './contexts/StudentsParentsContext';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter >
      
        <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/signUp" element={ <SignUp /> } />
            <Route path="/signIn" element={ <SignIn />} />
            <Route path="/Parent-Dashboard" element={  <Home />  } />
            <Route path="/Payment" element={<Payment />  } />
            <Route path="/Result" element={ <Result /> } /> 
            <Route path="/Transactions" element={ <Transactions /> } /> 
          
            <Route path="/School-Dashboard" element={
               <DataContextProvider> 
                < SchoolHome /> 
               </DataContextProvider> 
            } /> 
            
            <Route path="/Students" element={ < Students />  } /> 
            <Route path="/Parents" element={ < SchoolParents />  } /> 
            <Route path="/SchoolCalendar" element={ < SchoolCalendar />  } /> 
            <Route path="/SchoolAccount" element={ < SchoolAccount />  } /> 
            <Route path="/SchoolResults" element={ < SchoolResults />  } /> 
            <Route path="/SchoolPayment" element={ < SchoolPayment/>  } /> 
            <Route path="/Forms" element={ < Forms />  } /> 
            <Route path="/Forms/Student-Form" element={ <StudentForm />  } /> 
            <Route path="/Forms/Parent-Form" element={ <ParentForm />  } /> 
            <Route path="/Forms/Staff-Form" element={ < Staff /> } /> 
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
