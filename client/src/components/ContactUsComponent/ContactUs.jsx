import { Alert, Button, FormControl, FormHelperText, FormLabel, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {React,  useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import "./ContactUs.css"
import validation from './validations';
import { Check, PriorityHigh } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';



const ContactComponent = () => {
  const [errors, setErrors] = useState({})
    const [result, setResult] = useState(false)
    const [contactInfo, setContactInfo] = useState({
      phone:"",
      fullName:"",
      email:""
    })

    
   
    function handleChange(e){
      setContactInfo({
           ...contactInfo,
           [e.target.name] : e.target.value
       }) 
       setErrors(validation({
           ...contactInfo,
           [e.target.name]:e.target.value
   }))
   
   }

    // function handleChange(e) {
    //   const value = e.target.value;
    //   const name = e.target.name;
  
    //   setContactInfo((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    // }

    // useEffect(() => {
    //   const check = validation(contactInfo);
    //   setErrors(check);
      
    // }, [contactInfo]);

   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dnv4ntv', 'template_hnrenol', e.target, '4zpSHHNBQ0hkdXKkq')
          
          e.target.reset();
          setResult(true)
          Swal.fire({
            icon:"success",
            text:"Your message has been successfully sent. We will contact you soon!"
          })
      };

    
      
      
      return(
        <div>
        <Card sx={{minWidth:345 ,maxWidth:"100%", marginTop:"5%" }} >
<Box
component="form"
sx={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  backgroundColor:"rgb(237, 237, 237)",
  width:"100%"
}}
noValidate
autoComplete="off"
>

  


      
      
   
   
   <Typography sx={{marginTop:"5%"}}  variant='h5' gutterBottom fontWeight={"bold"}>
          Contact Us!
      </Typography>



{(!errors.fullName)? <FormControl sx={{width:"50%"}}  variant="standard">
                            <InputLabel  htmlFor="component-simple">Name</InputLabel>
                            <Input id="component-simple" name="fullName" value={contactInfo.fullName} onChange={handleChange} />
                        </FormControl>
                            :
                        <FormControl sx={{width:"50%"}}  error variant="standard">
                            <InputLabel htmlFor="component-error">Name</InputLabel>
                            <Input
                            id="component-error"
                            name="fullName"
                            value={contactInfo.fullName}
                            onChange={handleChange}
                            aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text">{errors.fullName}</FormHelperText>
                        </FormControl>}

{console.log(errors)}






{(!errors.phone)? <FormControl sx={{width:"50%"}}   variant="standard">
                            <InputLabel  htmlFor="component-simple">Phone</InputLabel>
                            <Input id="component-simple" name="phone" value={contactInfo.phone} onChange={handleChange} />
                        </FormControl>
                            :
                        <FormControl sx={{width:"50%"}}  error variant="standard">
                            <InputLabel htmlFor="component-error">Phone</InputLabel>
                            <Input
                            id="component-error"
                            name="phone"
                            value={contactInfo.phone}
                            onChange={handleChange}
                            aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text">{errors.phone}</FormHelperText>
                        </FormControl>}

      
     

      

     
    


     {!errors.email? <FormControl sx={{width:"50%"}}  variant="standard">
                            <InputLabel  htmlFor="component-simple">Email</InputLabel>
                            <Input id="component-simple" name="email" value={contactInfo.email} onChange={handleChange} />
                        </FormControl>
                            :
                        <FormControl sx={{width:"50%"}}  error variant="standard">
                            <InputLabel htmlFor="component-error">Email</InputLabel>
                            <Input
                            id="component-error"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleChange}
                            aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text">{errors.email}</FormHelperText>
                        </FormControl>}
      

        
      
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={3}
        sx={{marginRight:"20px", boxShadow:"3", backgroundColor:"white", width:"50%" }}
        color={window.localStorage.getItem("themeMode") === "dark" ? "primary" : "primary"}
        InputProps={{ inputProps: { style: { color: 'black' }}}}
        placeholder="Message"
        
        />

        
        <Button onClick={(e)=>sendEmail(e)} type='submit' sx={{backgroundColor:"#5e83ba", width:"50%", color:"#091d36",marginBottom:"5%" ,marginTop:"50px" ,"&:hover": {backgroundColor:"#091d36", color:"#5e83ba"}}} disabled={!errors?.email && !errors?.phone && contactInfo.phone!=="" && contactInfo.email!=="" ? false : true} >Submit</Button>



  </Box>
  </Card>
  </div>
      )
 }


export default ContactComponent;