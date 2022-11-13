import React, {useState, createContext} from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [studentsData, setStudentsData] = useState('')
    const [parentsData, setParentsData] = useState('')

    const loadParents = async () => {
        await axios.get(`/parents/`)
        .then(res =>{
            setParentsData(res.data)
        })
    }

    const loadStudents = async () => {
        await axios.get(`/students/`)
        .then(res =>{
            setStudentsData(res.data)
        })
    }

//     useEffect(() => { async () => {
//         await axios.get(`/parents/`)
//         .then(res =>{
//             setParentsData(res.data)
//         })
//     }})
//     useEffect(() => { async () => {
//         await axios.get(`/students/`)
//         .then(res =>{
//             setStudentsData(res.data)
//         })
//     }
// })

    // loadParents();
    // loadStudents();

    return (
        <DataContext.Provider value={{studentsData, parentsData}} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;