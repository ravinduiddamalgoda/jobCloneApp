import { CV_data } from "../component/CV";
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField , Container } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../component/AuthProvider';
// import { useSnackbar } from 'notistack';
import { useSnackbar } from 'notistack';
import axios from 'axios';


const useStyle = makeStyles((theme)=>({
    root: {
      background: "white",
      // height: "100vh",
      // margin: "0 auto",
      marginTop: '2%',
      marginLeft: '2%',
      marginRight: 'auto',
      marginBottom: '5%',
      paddingBottom: '5%',
    //   height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop:'2%',
      // paddingBottom: '0%', 
      // borderColor: 'black',
      // background: "white",
    //   borderRadius: '6px',
    //   borderBlockWidth :'thick',
      // border: 'solid',
      // borderTopColor: '#824AAF',
      // borderRightColor: '#824AAF',
      // borderLeftColor: '#824AAF',
      // borderBottomColor: '#824AAF',
  
      [theme.breakpoints.up('900')]: {
        width: '70%',
      },
      [theme.breakpoints.down('900')]: {
        width: '60%',
      },
      [theme.breakpoints.down('600')]: {
        width: '95%',
      },
  
    },
    formCtrl: {
      marginTop: '10px',
      padding: '3%', 
    //   flexDirection:'row'

    },
    login: {
      fontFamily: '"Segoe UI"',
      // paddingLeft: '13%'
      flex: '1',
      textAlign: 'center'
    }
  
  }))
  
  

export function CvGenerationPage(){
    const classes = useStyle();
    
    return(
        <>
            <Container >
                <Box className = {classes.root}>
                    <Formik
                        initialValues={{
                            name: "",
                            degree: "",
                            University: "", 
                            year: "",
                            DegStatus: "" ,
                            position: "" ,
                            company: "",
                            duration: "",
                            tp: "" ,
                            email: ""
                          }}
                    >
                        {({values, handleChange, handleSubmit}) => {
                            return (
                            <div >
                                <Typography variant="h4" className={classes.login}>Enter Details for Your CV</Typography>
                            
                                <FormControl  >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.name}
                                        onChange={handleChange}
                                        name="Full Name"
                                        label="Full Name"
                                        placeholder="Full Name"
                                        
                                    />
                                </FormControl>
                                
                                <Typography variant="h6">Education Details </Typography>
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.degree}
                                        onChange={handleChange}
                                        name="degree"
                                        label="Degree"
                                        placeholder="degree"
                                        
                                    />
                                </FormControl>
                                <Typography></Typography>
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.University}
                                        onChange={handleChange}
                                        name="University"
                                        label="University"
                                        placeholder="University"
                                        
                                    />
                                </FormControl>
                               
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.year}
                                        onChange={handleChange}
                                        name="year"
                                        label="year"
                                        placeholder="Graduation Year"
                                        
                                    />
                                </FormControl>
                                
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.DegStatus}
                                        onChange={handleChange}
                                        name="DegStatus"
                                        label="Degree Status"
                                        placeholder="UnderGraduate / Post Graduate"
                                        
                                    />
                                </FormControl>

                                <Typography variant="h6">Working Expierence (if your still fresh job seeker please enter No Experence)</Typography>

                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.position}
                                        onChange={handleChange}
                                        name="position"
                                        label="position"
                                        placeholder="position"
                                        
                                    />
                                </FormControl>
                            
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.company}
                                        onChange={handleChange}
                                        name="company"
                                        label="company"
                                        placeholder="company"
                                        
                                    />
                                </FormControl>
                                <br />
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.duration}
                                        onChange={handleChange}
                                        name="duration"
                                        label="duration"
                                        placeholder="duration"
                                        
                                    />
                                </FormControl>
                                <Typography variant="h6"> Skills</Typography>
                                <Typography variant="h6">Contact Details</Typography>
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.tp}
                                        onChange={handleChange}
                                        name="Telephone Number"
                                        label="Telephone Number"
                                        placeholder="Telephone Number"
                                        
                                    />
                                </FormControl>
                                <br />
                                <FormControl className={classes.formCtrl} >
                                    <TextField
                                        sx={{width: '400px'}}
                                        value={values.email}
                                        onChange={handleChange}
                                        name="Email"
                                        label="Email"
                                        placeholder="Email"
                                        
                                    />
                                </FormControl>
                                <br/>
                                <Button
                                onClick={() => handleSubmit()}
                                type="submit"
                                variant="contained"
                                style={{marginTop: '20px' , marginLeft:'10px' , marginRight: '10px'}}
                                >
                                Submit
                                </Button>
                            </div>
                            );
                        }}  
                    </Formik>
                </Box>
                <CV_data />        
            </Container>

            
        </>
    );
}
//new changfes