import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
// import FormControl from "@mui/material/FormControl";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./Register.css";
import { setLogin } from "../state";
import Dropzone from "react-dropzone";
import input from "./input";
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  // email: yup.string().email("invalid email").required("required"),
  email_new: yup.string().email("invalid email").required("required"),
  password_new: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string(),
});

const loginSchema = yup.object().shape({
  email_new: yup.string().email("invalid email").required("required"),
  password_new: yup.string().required("required"),

});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  email_new:"",
  password: "",
  password_new:'',
  location: "",
  occupation: "",
  picture: "",
};
const initialValuesLogin = {
  email: "",
  password: "",

};

const Form = () => {
  const [pageType, setpageType] = useState("login");
  const dispatch = useDispatch;
  const navigate = useNavigate;
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const formdata= new FormData();
  const Register=async(values,onSubmitProps)=>{
   
    for(let value in values){
        formdata.append(value,values[value])
    }
    formdata.append('picturepath',values.picture.name)

    const savedUserResponse=await fetch("http://localhost:5000/auth/register" ,
    {
        method:"POST",
        body:formdata,
    });
    const savedUser = await savedUserResponse().json();
    onSubmitProps.resetForm();
    if(savedUser){
        setpageType("login");
    }
  }

  const Login =async(values,onSubmitProps)=>{
    const loggedInResponse=await fetch("http://localhost:5000/auth/login",
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values),
    }); 
    const loggedIn= await loggedInResponse.json();
    onSubmitProps.resetForm();
    if(loggedIn){
        dispatch(setLogin({
            user:loggedIn.user,
            token:loggedIn.token,
        }));
        navigate('/homepage')
    }
  }

  const handleFormSubmit = async (values, onSubmitProps,e) => {
    e.preventDefault();
        console.log("btn");
        if(isLogin)await Login(values,onSubmitProps);
        if(isRegister)await Register(values,onSubmitProps);
        

  };

  return (
    <div className="body">
      <div className="header-top">SOCiAlS</div>
     < Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="form_container">
                <div className="header">
                  <label className="note">
                    Welcome to SOCiALS,CODED BY SAMBHAV
                  </label>
                </div>
                <div className="first">
                  <TextField
                    error={
                      Boolean(touched.firstName) && Boolean(errors.firstName)
                    }
                    helperText={touched.firstName && errors.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    sx={{ margin: "3vh", width: "19vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="FirstName"
                    variant="filled"
                  />
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    sx={{ margin: "3vh", width: "19vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="LastName"
                    variant="filled"
                  />
                </div>

                <div className="second">
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.location}
                    sx={{ margin: "3vh", width: "40vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="Location"
                    variant="filled"
                  />
                </div>
                <div className="third">
                  <TextField
                    // onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.occupation}
                    sx={{ margin: "3vh", width: "40vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="Occupation"
                    variant="filled"
                  />
                </div>
                <div className="four">
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed `}
                        p="1rem"
                        sx={{
                          "&:hover": { cursor: "pointer" },
                          color: "blue",
                          height: "4vh",
                          width: "37vw",
                        }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                          values.picture.name
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </div>
                <div className="five">
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email_new}
                    sx={{ margin: "3vh", width: "40vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="email"
                    variant="filled"
                  />
                </div>
                <div className="six">
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_new}
                    sx={{ margin: "3vh", width: "40vw" }}
                    className="all_input"
                    type="password"
                    id="filled-basic"
                    label="password"
                    variant="filled"
                  />
                </div>
                <Button
                  type="submit"
                  
                  sx={{
                    background: "blue",
                    color: "white",
                    mb: "1vh",
                    "&:hover": { color: "white", background: "red" },
                  }}
                >
                  {" "}
                  {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                <Button
                  onClick={() => {
                    setpageType(isLogin ? "register" : "login");
                    resetForm();
                  }}
                  sx={{ textDecoration: "underline" }}
                >
                  {isLogin
                    ? "Dont have an account?register here!!"
                    : "already have an account?Login here"}{" "}
                </Button>
              </div>
            )}{" "}
            {isLogin && (
              <div className="form_container2">
                <div className="eandp">
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email_new}
                    sx={{ margin: "3vh", width: "30vw" }}
                    className="all_input"
                    id="filled-basic"
                    label="email"
                    variant="filled"
                  />
                  
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_new}
                    sx={{ margin: "3vh", width: "30vw" }}
                    className="all_input"
                    type="password"
                    id="filled-basic"
                    label="password"
                    variant="filled"
                  />
                </div>
                <Button
               

                  type="submit"
                  sx={{
                    background: "blue",
                    color: "white",
                    mb: "1vh",
                    "&:hover": { color: "white", background: "red" },
                  }}
                >
                  {" "}
                  {isLogin ? "LOGIN" : "REGISTER"}
                </Button>
                <Button
                  onClick={() => {
                    setpageType(isLogin ? "register" : "login");
                    resetForm();
                  }}
                  sx={{ textDecoration: "underline" }}
                >
                  {isLogin
                    ? "Dont have an account?register here!!"
                    : "already have an account?Login here"}{" "}
                </Button>
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Form;
