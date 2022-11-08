import { useState } from "react";
import SchoolDashboard from "../SchoolDashboard";

const SchoolCalendar = () => {

    const data = [
        {
            "id": "1",
            "todo" : "Students will be going for an Excursion to the  Lekki Conservation Center",
            "date" : "25th November, 2020"
        },
        {
            "id": "2",
            "todo" : "P.T.A meeting",
            "date" : "2nd December, 2020"
        }
    ]
    const [activity,setActivity] = useState(data)
    const [addData, setAddData] = useState({
        todo : '',
        date : '', 
    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newInputs = {
            id : Math.floor(Math.random()* 1000) + 1,
            todo : addData.todo,
            date : addData.date,
        }; 
        const newInputData = [...activity, newInputs]
        setActivity(newInputData);
    }
    const handleAddition = (e) => {
        e.preventDefault()
        const inputs = e.target.getAttribute("name")
        const inputValue = e.target.value
        const newData = { ...addData }
        newData[inputs] = inputValue;

        setAddData(newData);
    }

    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="calendar">
                <h3>School Calendar</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea className="heytext" name="todo" onChange={handleAddition} required placeholder="Enter your Event" />
                        <input type="text" name="date" onChange={handleAddition} required placeholder="Enter the date" />
                        <button onClick={handleSubmit} className="calendarBtn">Submit</button>
                    </form>
                </div>
                <div>
                    <h3>Activities</h3>
                    {activity.map((activity, index) => {
                        return <div key={index} className="activityOutput">
                            <span>{activity.todo}</span> <span> {activity.date}</span>
                        </div>
                    } ) }
                </div>
            </div>
        </div>
    );
}
 
export default SchoolCalendar;