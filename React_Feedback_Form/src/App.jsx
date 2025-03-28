import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ nameData, setNameData]  = useState("");
  const [ departmentData, setDepartmentData ] = useState("");
  const [ feedbackData, setFeedbackData ] = useState("");
  const [ ratingData, setRatingData ] = useState("");
  const [ submittedData, setSubmittedData ] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const newData = {
      name: nameData,
      department: departmentData,
      feedback: feedbackData,
      rating: ratingData,
    };
    setSubmittedData([...submittedData, newData]);

    setNameData("");
    setDepartmentData("");
    setFeedbackData("");
    setRatingData("");
  };

  return (
    <>
     <div className="formData">
      <h2>Fill the Form</h2>
      <hr/>
<br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name  </label>
        <input 
        type="text" 
        id="name" 
        value = {nameData}
        onChange = {(e)=>setNameData(e.target.value)}
        />

        <br/>
        
        <label for="department">Department </label>
        <select 
        id="department"
        value = {departmentData}
        onChange = {(e)=>setDepartmentData(e.target.value)}
        >
          <option value="">Select your department </option>
          <option value="CSE">CSE</option>
          <option value="Civil">Civil</option>
          <option value="Mechanical">Mechanical</option>
        </select>

        <br />

        <label for="feedback">Feedback</label>
        <textarea 
        id="feedback" 
        value = {feedbackData}
        onChange = {(e)=>setFeedbackData(e.target.value)}
        ></textarea>

        <br />
         
         <label>Rating</label>
        <div className="rating" >
          1<input type="radio" id="one" className="rating" checked={ratingData === "1"} value="1" onChange={(e)=>setRatingData(e.target.value)} />
          2<input type="radio" id="two" className="rating" checked={ratingData === "2"} value="2" onChange={(e)=>setRatingData(e.target.value)}/>
          3<input type="radio" id="three" className="rating" checked={ratingData === "3"} value="3" onChange={(e)=>setRatingData(e.target.value)}/>
          4<input type="radio" id="four" className="rating" checked={ratingData === "4"}value="4" onChange={(e)=>setRatingData(e.target.value)}/>
          5<input type="radio" id="five" className="rating" checked={ratingData === "5"} value="5" onChange={(e)=>setRatingData(e.target.value)}/>
        </div>

        <br/>

        <button type="submit">Submit</button>

      </form>
      <br/>
</div>

<hr class="seperateLine"/>

  <div className="printData">
      <h2>Form Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Feedback</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            submittedData.map((data,index) => (
             <tr>
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.feedback}</td>
              <td>{data.rating}</td>
            </tr>
          ))
         }
        </tbody>
      </table>
     </div>
    </>
  )
}
export default App
