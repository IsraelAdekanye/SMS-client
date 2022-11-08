import { useState, useRef } from "react";
import data from './Data/account.json';
import { FaMoneyBillAlt, FaTrashAlt } from "react-icons/fa";
import SchoolDashboard from "../SchoolDashboard";

const SchoolAccount = () => {
    const [expenses, setExpenses] = useState(data);
    const [income,setIncome] = useState(100);
    const [expense,setExpense] = useState(80000);
    const [price,setPrice] = useState(5000000);
    const radiosWrapper = useRef();
    const [checked, setChecked] = useState(null)
    const [addData, setAddData] = useState({
        text : '',
        amount : '', 
    })

    // handles addition of data
    const handleAddition = (e) => {
        e.preventDefault()
        const inputs = e.target.getAttribute("name")
        const inputValue = e.target.value
        const newData = { ...addData }
        newData[inputs] = inputValue;

        setAddData(newData);
    }

    // handles output of data after submitting
    const handleSubmit = (e) => {
        e.preventDefault()
        const newInputs = {
            id : Math.floor(Math.random()* 1000) + 1,
            title : addData.title,
            amount : addData.amount,
        };
        const newInputData = [...expenses, newInputs];
        setExpenses(newInputData);
        const inputAmount = Number(`${addData.amount}`)
        
        const checkedInput = radiosWrapper.current.querySelector('input:checked');
            if(checkedInput.name === "income"){
                const inc = income + inputAmount
                const priceAdd = inputAmount + price
                setPrice(priceAdd)
                setIncome(inc) 
            }
            else if(checkedInput.name === "expense"){
                const exp = expense + inputAmount  
                const nowtotal = price - inputAmount  
                setExpense(exp)
                setPrice(nowtotal)
            }
        e.target.reset();   
    }

    // handles allowing of one checked radio at a time
    const changeHandler = (item) => {   
        item === checked ? setChecked(null) : setChecked(item)   
    }

    // handles deleting of data
    const handleDelete = (id) =>{
        const deleteit = [...expenses]
        const index = expenses.findIndex((i)=> i.id === id)
        deleteit.splice(index,1)
        setExpenses(deleteit)
    }
    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}> 
            <SchoolDashboard />
            <div className="account">
                <h2>Accounts</h2>
                <div>
                    <div className="flexTwo">
                        <div className="totalStudents">
                            <h3> NGN{price}</h3>
                            <div>
                                <FaMoneyBillAlt />
                                <span>Total Income</span>
                            </div>
                        </div>
                        <div className="totalStudents">
                            <h3> NGN{expense}</h3>
                            <div>
                                <FaMoneyBillAlt />
                                <span>Total Expenses</span>
                            </div>
                        </div>
                    </div>
                    <div className="flexTwo">
                        <div className="history">
                            <h3>History</h3>
                            <ul>
                                {expenses.map((expense, id) => {
                                return <li key={id}>{expense.title} 
                                        <span className="amount"> ${expense.amount}</span>
                                        <p className="delete" onClick={()=>handleDelete(expense.id)}> <FaTrashAlt /></p> 
                                    </li>  })}
                            </ul>
                        </div>
                            
                        <div className="addData"> 
                            <h3>Add new transaction</h3>
                            <div className="form2">
                                <form onSubmit={handleSubmit} >
                                    <label> Title </label> <br></br>
                                        <input type="text"  name="title" className="forum" required
                                        onChange={handleAddition}
                                        placeholder="Enter the title"></input> <br></br>
                                    <label> Amount </label> <br></br>
                                        <input type="text" className="forum" required  name="amount"
                                        onChange={handleAddition}
                                        placeholder="Enter the amount" ></input>
                                    <div ref={radiosWrapper} >
                                        <label className="radi" > 
                                            <input type="radio"  key={1} checked={checked === "Income"} onChange={()=> changeHandler("Income") } name="income" /> Income 
                                        </label>
                                        <label className="radi" > 
                                            <input type="radio" key={2} checked={checked === "expense"} onChange={()=> changeHandler("expense") } name="expense" />Expenses
                                        </label>
                                    </div>
                                    <button onSubmit={handleSubmit}>Add transaction</button>
                                </form>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
       </div>
    );
}
 
export default SchoolAccount;