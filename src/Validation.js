import React, { useState } from 'react'
import './App.css'
function Validation() {
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const[nameError, setNameError] = useState(false);
    const[emailError, setemailError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 
    const handleName = (e) => {
        let name = e.target.value;
        if(name.length < 3){
            setNameError(true);
        }
        else{
            setNameError(false)
        }
        setName(name);
    }
    const handleEmail = (e) => {
        let email = e.target.value;
        if(!email.match(emailRegex)){
            { 
                setemailError(true);
            }}
        else
        { 
            setemailError(false);

        }
        setEmail(email);
        }
      const handleSubmit = (e) => {
        e.preventDefault();

        let name = e.target[0].value;
        if(name.length < 3){
            setNameError(true);
        }
        else{
            setNameError(false)
        }
        setName(name);

         let email = e.target[1].value;
        if(!email.match(emailRegex)){
            { 
                setemailError(true);
            }}
        else
        { 
            setemailError(false);

        }
        setEmail(email);

        if((!name.length < 3) && (email.match(emailRegex)))
            {
                alert('Form has been Submitted');
            }


      }
  return (
    <div className='form'>
      <h1> Form Validation </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''> Enter Name: </label>
        <input type='text' name='name' onChange={handleName} value={name} required />
        <br/>
        {nameError ? <span style={{color:"red"}}>Name Length must be greater than two characters </span> : ""}
        <br></br>
        <label htmlFor=''> Enter Email: </label>
        <input type='text' name='email' onChange={handleEmail} value={email} required />
        <br/>
        {emailError ? <span style ={{color: 'red'}}> Invalid Email </span>: ''}
        <br></br>
        <input type='submit' name='Submit' className='form-button'/>
      </form>
    </div>
  )
}


export default Validation
