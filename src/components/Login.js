import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


function Login() {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });
    // const [data, setData] = useState([]);
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
        const getuserArr = localStorage.getItem("userData");
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
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/home")
                }
            }
        }

    }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center'>
        
        <div className='w-[500px] h-[600px] flex bg-slate-300 rounded-xl'>
        <form className='w-[500px] h-[600px] border bg-slate-300 border-[#888] flex items-center flex-col p-10 rounded-xl' onChange={getdata} >
            <h1 className='text-3xl font-bold uppercase'>Login</h1>
            <div className='w-full h-full flex flex-col justify-around '>
                <div className='w-full'>
                    <h1 className='mb-3 text-lg uppercase'>Email</h1>
                    <input 
                    type="email" 
                    name='email'
                    className='w-full h-16 rounded-xl text-xl p-3 border-none outline-none' 
                    placeholder='Enter your Email'/>
                </div>
                <div className='w-full'>
                    <h1 className='mb-3 text-lg uppercase'>Password</h1>
                    <input 
                    type="password" 
                    name='password'
                    className='w-full h-16 rounded-xl text-xl p-3 border-none outline-none' 
                    placeholder='Password' />
                </div>
                <div className='w-full h-auto flex flex-col justify-center items-center'>
                    <button type='submit' className='bg-blue-400 w-32 h-11 rounded-xl cursor-pointer text-lg items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' onClick={addData} >Login</button>
                    <p className='cursor-pointer mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300' ><NavLink to="/">Register here!</NavLink></p>
                    
                </div>                
            </div>
        </form>
        
        </div>
    </div>
  )
}

export default Login