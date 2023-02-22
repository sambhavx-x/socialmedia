
import React from 'react'
import './Register.css'
import { useState ,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const registerSchema=yup.object().shape({
//     firstName : yup.string().required("required"),
//     lastName:yup.string().required("required"),
//     email:yup.string().email("invalid email").required("required"),
//     password:yup.string().required("required"),
//     location:yup.string().required("required"),
//     occupation:yup.string().required("required"),
//     picture:yup.string().required("required")   ,

// })

// const loginSchema=yup.object().shape({
//     email:yup.string().email("invalid email").required("required"),
//         password:yup.string().required("required")
// })

// const initialValuesRegister={
//     firstName:"",lastName:"",email:"",
//     password:"",
//     location:"",
//     occupation:"",
//     picture:"",
// }
// const initialValuesLogin={
//     firstName:"",lastName:"",email:"",
//     password:"",
//     location:"",
//     occupation:"",
//     picture:"",
// }

const Form =()=>{
  
const email=useRef();
const emailr=useRef();
const password=useRef();
const passwordr=useRef();
const location=useRef();
const profilepic=useRef();
const firstName=useRef();
const lastName=useRef();
const navigate = useNavigate();
const handleSubmitLogin=async(e)=>{
    e.preventDefault();

const loggedInResponse=await fetch("http://localhost:5001/auth/login",{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email:email.current.value,password:password.current.value}),
})
const loggedIn = await loggedInResponse.json();
if(loggedIn){
    navigate('/homepage')
}
}



const handleSubmitRegister=async()=>{
  const registeredResponse= await fetch("http://localhost:5001/auth/register",{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify({email:emailr.current.value,password:passwordr.current.value,firstName:firstName.current.value,
        lastName:lastName.current.value,location:location.current.value})
  }).then(console.log('registered'))
}

const dispatch = useDispatch();

const [isLogin, setisLogin] = useState('login')
const login=isLogin==='login'
const register=isLogin==='register'
const setPageType=()=>{
setisLogin(login?'register':'login')

}
return(
    // <Formik onSubmit ={handleFormSubmit}  
    //     initialValues={isLogin?initialValuesLogin:initialValuesRegister}
    //     validationSchema={isLogin?initialValuesLogin:initialValuesRegister}>
    //         {({
    //             values,errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue,resetForm  
    //         })=>(
    //             <form onSubmit={handleSubmit}>

                    
    //             </form>
    //         )}
    //     </Formik>  
// 
<>
<div id="body">
<div className="blob absolute bg-slate-900 h-64 w-64"></div>
<div className="blob absolute ml-4 mt-4 bg-slate-900 h-48 w-48"></div>
<div id="blur"></div>

    {login&&(
        <div className='container fixed z-10 mx-auto bg-opacity-20 rounded-xl    bg-stone-900  lg:w-5/12 h-80 lg:mt-52 lg:ml-96  sm:mr-8 sm:w-3/5 '>
    <form className='flex flex-col  ' onSubmit={handleSubmitLogin}>
    <input placeholder='email' ref={email} required type='email' className=' w-2/3 ml-auto mr-auto rounded-lg mt-10 mb-10 h-16 '></input>
    <input placeholder='password' ref={password} required='true' type='password' className='  w-2/3 ml-auto mr-auto rounded-lg  mb-5 h-16  '></input>
    <button type='submit' className=' bg-blue-600 w-20 ml-auto mr-auto rounded-lg  active:bg-blue-900 '>Submit</button>
    </form>
    <button onClick={setPageType} className='text-white ml-48 mt-3   ' >{login?'Dont have an account?Click here':'Already have an account?Click here to sign in'}</button>
    </div>
)}{
   register&&(
    
    <div className='container fixed z-10 mx-auto mt-6 bg-opacity-20 rounded-xl    bg-stone-900  lg:w-5/12 h-80 lg:mt-52 lg:ml-96  sm:mr-8 sm:w-3/5 '>

<form onSubmit={handleSubmitRegister}>
    <input ref={firstName} required  className='w-64 rounded-xl h-12 m-4 ' placeholder='First Name'/>
    <input ref={lastName} required className='m-4 rounded-xl w-64 ml-12 h-12' placeholder='Second Name'/>
    <input ref={emailr} required type='email' className='m-4 rounded-xl h-12 w-11/12' placeholder='email '/>
    <input ref={passwordr} type='password' required className='m-4 rounded-xl h-12 w-11/12' placeholder='Password '/>
    <input ref={location} required className='m-4 rounded-xl h-12 w-11/12' placeholder='Lcoation'/>
    <input ref={profilepic} required className='m-4 rounded-xl h-12 w-11/12' placeholder='Profile Picture'/>
    <button type='submit' className='bg-blue-600 ml-72 rounded-lg w-20 h-8 ' >Submit</button>
</form>
<button onClick={setPageType} className='text-white ml-48 mt-3   ' >{login?'Dont have an account?Click here':'Already have an account?Click here to sign in'}</button>
</div>
    
)}
   

</div>

</>
)}
export default Form;