import { CV_data } from "../component/CV";
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField } from '@mui/material';
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
      marginTop: '7%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '5%',
      paddingBottom: '5%',
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop:'2%',
      // paddingBottom: '0%', 
      // borderColor: 'black',
      // background: "white",
      borderRadius: '6px',
      borderBlockWidth :'thick',
      // border: 'solid',
      // borderTopColor: '#824AAF',
      // borderRightColor: '#824AAF',
      // borderLeftColor: '#824AAF',
      // borderBottomColor: '#824AAF',
  
      [theme.breakpoints.up('900')]: {
        width: '30%',
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
      padding: '3%'  
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
            <div>
                <Box>
                    <Formik
                        initialValues={{
                            fullName: "",
                            education: "",
                          }}
                    >
                        {({values, handleChange, handleSubmit}) => {
                            return (
                            <>
                                <Typography variant="h3" className={classes.login}>LOGIN</Typography>
                            
                                <FormControl className={classes.formCtrl} style={{marginTop: '20px' , marginLeft:'10px' , marginRight: '10px'}}>
                                    <TextField
                                        value={values.fullName}
                                        onChange={handleChange}
                                        name="Full Name"
                                        label="Full Name"
                                        placeholder="Full Name"
                                        
                                    />
                                </FormControl>
                                
                                <FormControl className={classes.formCtrl} style={{marginTop: '20px', marginLeft:'10px' , marginRight: '10px'}}>
                                    <TextField
                                        value={values.education}
                                        onChange={handleChange}
                                        name="education"
                                        label="education"
                                        placeholder="education"
                                    />
                                </FormControl>

                                <Button
                                onClick={() => handleSubmit()}
                                type="submit"
                                variant="contained"
                                style={{marginTop: '20px' , marginLeft:'10px' , marginRight: '10px'}}
                                >
                                Submit
                                </Button>
                            </>
                            );
                        }}  
                    </Formik>
                </Box>

            </div>

            <CV_data />
        </>
    );
}