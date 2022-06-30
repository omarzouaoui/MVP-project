import React,{ useState,useEffect } from 'react';
import './App.css';
import  Axios  from 'axios';
import axios from 'axios';
//same of database
function App() {
  const[studentName,setStudentName]=useState('')
  const[Email,setEmail]=useState('')
  const[Age,setAge]=useState(0)
  const[cohort,setCohort]=useState('')

  //addStudent
  const addStudent=()=>{
    //path of .create server/index
    Axios.post('http://localhost:5000/create',{studentName,Email,Age,cohort})
  }

  //show the list
  const[student,setStudent]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:5000/').then(res=>{
      setStudent(res.data)
    })
  })
  //delete one
  const deleteStudent=(id)=>{
    Axios.delete(`http://localhost:5000/delete/${id}`)
  }
  //update one 
  const [newStudent, setNewStudent] = useState(0)
  const updateStudent=(id)=>{
    Axios.put('http://localhost:5000/update',{id, newStudent}).then(res=>{
      setNewStudent(res.data)
    })
    }

    //what we see
  return (
    //inputs 
    <div className="App">
      
      <div id='input'>
      <input placeholder='Name' className='x' type="text"  onChange={(e)=>{setStudentName(e.target.value)}}></input>
      
      <input placeholder='Email' className='x' type="text"  onChange={(e)=>{setEmail(e.target.value)}}></input>
      
      <input placeholder='Age' className='x' type="Number"  onChange={(e)=>{setAge(e.target.value)}}></input>
      
      <input placeholder='Cohort' className='x' type="text"  onChange={(e)=>{setCohort(e.target.value)}}></input>


      <button onClick={addStudent} id='add'>ADD</button>
      </div>

  
      {//maping and getting data
        student.map((val,key)=>{
          return <div key={key} id='s'>
            <h3>{val.studentName} | {val.Email} | {val.Age} | {val.cohort}</h3><button  className='delete'onClick={() =>{deleteStudent(val._id)}} id='delete'>x</button> <button id="update"  onClick={() => {updateStudent(val._id)}}>+</button>
          </div>
        })
      }
    </div>
  );
}

export default App;
