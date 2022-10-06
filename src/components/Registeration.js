import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Registeration() {
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [data, setData] = useState([]);
    const getdata = (e) => {
        const {value, name} = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]:value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();
        const {name, email, password} = inpval;
        if(name === "") {
            alert("Name field require")
        }else if(email === ""){
            alert("email field require")
        }else if(!email.includes("@")){
            alert("Plz enter valid email")
        }else if(password === ""){
            alert("Password field require")
        }else if(password.length < 5){
            alert("password length greater that 5 character")
        }else{
            localStorage.setItem("userData", JSON.stringify([ ...data ,inpval ]));
        }
    }
  return (

    <div className='w-full h-[100vh] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center'>
        <form className='w-[500px] h-[600px] border bg-slate-300 border-[#888] flex items-center flex-col p-10 rounded-xl' onChange={getdata}>
            <h1 className='text-3xl font-bold uppercase'>Register</h1>
            <div className='w-full h-full flex flex-col justify-around '>
                <div className='w-full'>
                    <h1 className='mb-3 text-lg uppercase'>Name</h1>
                    <input 
                    type="text" 
                    className='w-full h-16 rounded-xl text-xl p-3 border-none outline-none' 
                    name='name'
                    placeholder='Enter your Name' />
                </div>
                <div className='w-full'>
                    <h1 className='mb-3 text-lg uppercase'>Email</h1>
                    <input 
                    type="email" 
                    className='w-full h-16 rounded-xl text-xl p-3 border-none outline-none' 
                    name='email'
                    placeholder='Enter your Email'/>
                </div>
                <div className='w-full'>
                    <h1 className='mb-3 text-lg uppercase'>Password</h1>
                    <input 
                    type="password" 
                    className='w-full h-16 rounded-xl text-xl p-3 border-none outline-none' 
                    name='password'
                    placeholder='Password' />
                </div>
                <div className='w-full h-auto flex flex-col justify-center items-center'>
                    <button type='submit' className='bg-blue-400 w-32 h-11 rounded-xl cursor-pointer text-lg items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' onClick={addData}>Save</button>
                    <p className='cursor-pointer mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'><NavLink to="/login">Already registed login in?</NavLink> </p>
                </div>                
            </div>
        </form>
        
    </div>
  )
}

export default Registeration