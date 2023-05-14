import { CV_data } from "../component/CV";
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField , Container } from '@mui/material';
import { Formik } from 'formik';
import { Grid } from "@material-ui/core";
import * as Yup from 'yup';
import { AuthContext } from '../component/AuthProvider';
// import { useSnackbar } from 'notistack';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const useStyle = makeStyles((theme) => ({
    root: {
      backgroundColor: "#FFFFFF",
      marginTop: "2%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "5%",
      paddingBottom: "5%",
      display: "flex",
      flexDirection: "column",
      paddingTop: "2%",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      padding: "20px",
      width: "80%", 

      [theme.breakpoints.down("sm")]: {
        width: "100%", 
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "auto",
      marginRight: "auto",
      },

      [theme.breakpoints.up('450')]: {
        width: "100%", 
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "auto",
        marginRight: "auto",
    }

    },
    formCtrl: {
      marginTop: "2rem !important",
      padding: "20px",
      backgroundColor: "#F4F4F4",
      borderRadius: "5px",
      marginBottom: "2rem",
      marginEnd:"2rem!important"
    },
    login: {
      fontFamily: "'Segoe UI', sans-serif",
      flex: "1",
      textAlign: "center",
      color: "#333333",
      marginTop: "2rem !important",
      marginBottom: "2rem !important",
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));
  
  export function CvGenerationPage() {
    const classes = useStyle();
  
    return (
      <>
        <Container>
          <Box className={classes.root}>
            <Formik
              initialValues={{
                name: "",
                degree: "",
                University: "",
                year: "",
                DegStatus: "",
                position: "",
                company: "",
                duration: "",
                tp: "",
                email: "",
              }}
            >
              {({ values, handleChange, handleSubmit }) => {
                return (
                  <div>
                    <Typography variant="h4" className={classes.login}>
                      Enter Details for Your CV
                    </Typography>
                    <Typography variant="h6">Education Details </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                    value={values.name}
                                    onChange={handleChange}
                                    name="name"
                                    label="Full Name"
                                    placeholder="Full Name"
                                    sx={{ width:"100%"}}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                    sx={{ width:"100%"}}
                                    value={values.position}
                                    onChange={handleChange}
                                    name="position"
                                    label="Position"
                                    placeholder="Position"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                    sx={{ width:"100%"}}
                                    value={values.company}
                                    onChange={handleChange}
                                    name="company"
                                    label="Company"
                                    placeholder="Company"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.duration}
                                    onChange={handleChange}
                                    name="duration"
                                    label="Duration"
                                    placeholder="Duration"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                   sx={{ width:"100%"}}
                                    value={values.tp}
                                    onChange={handleChange}
                                    name="tp"
                                    label="Telephone Number"
                                    placeholder="Telephone Number"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Typography variant="h6">Working Expierence (if your still fresh job seeker please enter No Experence)</Typography>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.position}
                                    onChange={handleChange}
                                    name="position"
                                    label="position"
                                    placeholder="position" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.company}
                                    onChange={handleChange}
                                    name="company"
                                    label="company"
                                    placeholder="company"/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.duration}
                                    onChange={handleChange}
                                    name="duration"
                                    label="duration"
                                    placeholder="duration" />
                            </FormControl>     
                        </Grid>
                    </Grid>
                    <Typography variant="h6"> Skills</Typography>
                    <Typography variant="h6">Contact Details</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth >
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.tp}
                                    onChange={handleChange}
                                    name="Telephone Number"
                                    label="Telephone Number"
                                    placeholder="Telephone Number"/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formCtrl} fullWidth>
                                <TextField
                                     sx={{ width:"100%"}}
                                    value={values.email}
                                    onChange={handleChange}
                                    name="Email"
                                    label="Email"
                                    placeholder="Email" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                onClick={() => handleSubmit()}
                           
                                type="submit"
                                variant="contained"
                                sx={{marginTop: '20px' , backgroundColor:"#017143" , width:"100%"}}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    
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