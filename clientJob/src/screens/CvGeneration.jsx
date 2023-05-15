import { CV_data } from "../component/CV";
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField , Container } from '@mui/material';
import { Formik, Form, Field, FieldArray  } from 'formik';
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
    btnAddSkill:{
        background:'black'
    },
  }));
  
//   export const dataCVAdd = {}; 
  export function CvGenerationPage() {
    const classes = useStyle();
    const [dataObj , setDataObj] = useState({});
    const [linkBtn , setLinkBtn] = useState(true);
    console.log(linkBtn);
    // const history = useHistory();
    // dataCVAdd = dataObj;
    const dataPass = async(formData) => {

        // console.log(formData);

        setDataObj(formData);
        
        console.log(dataObj);
        // console.log(linkBtn);
        // setLinkBtn(false);
        // console.log(linkBtn);
    }


    if(linkBtn == true){
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
                      telephone: "",
                      skills: [],
                      Email: ""
                      // email: "",
                    }}
      
                    onSubmit = {dataPass}
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
                                      {/* <TextField
                                          sx={{ width:"100%"}}
                                          value={values.degree}
                                          onChange={handleChange}
                                          name="Degree"
                                          label="Degree"
                                          placeholder="Degree"
                                      /> */}
                                      <TextField
                                          sx={{ width:"100%"}}
                                          value={values.degree}
                                          onChange={handleChange}
                                          name="degree"
                                          label="Degree"
                                          placeholder="degree"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                          sx={{ width:"100%"}}
                                          value={values.year}
                                          onChange={handleChange}
                                          name="year"
                                          label="year"
                                          placeholder="year"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                           sx={{ width:"100%"}}
                                          value={values.University}
                                          onChange={handleChange}
                                          name="University"
                                          label="University"
                                          placeholder="University"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                         sx={{ width:"100%"}}
                                          value={values.DegStatus}
                                          onChange={handleChange}
                                          name="DegStatus"
                                          label="Degree Status"
                                          placeholder="Undergraduate / Postgraduate"
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
                          <Grid item xs={12} sm={6}>
                          <FieldArray
                              name="skills"
                              render={arrayHelpers => (
                              <div>
                                  {values.skills && values.skills.length > 0 ? (
                                  values.skills.map((skill, index) => (
                                      <div key={index}>
                                      <Field name={`skill.${index}`} />
                                      <Button
                                          className={classes.btnAddSkill}
                                          type="button"
                                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                      >
                                          Add
                                      </Button>
                                      <Button
                                          className={classes.btnAddSkill}
                                          type="button"
                                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                      >
                                          Remove
                                      </Button>
                                     
                                      </div>
                                  ))
                                  ) : (
                                  <Button type="button" onClick={() => arrayHelpers.push('')} className={classes.btnAddSkill}>
                                      {/* show this when user has removed all friends from the list */}
                                      Add Your Skill
                                  </Button>
                                  )}
                                  {/* <div>
                                      <button type="submit">Submit</button>
                                  </div> */}
                              </div>
                              )}
                          />
                          </Grid>
                          <Typography variant="h6">Contact Details</Typography>
      
                          <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth >
                                      <TextField
                                           sx={{ width:"100%"}}
                                          value={values.telephone}
                                          onChange={handleChange}
                                          name="telephone"
                                          label="Telephone Number"
                                          placeholder="Telephone Number"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                  <TextField
                                           sx={{ width:"100%"}}
                                          value={values.Email}
                                          onChange={handleChange}
                                          name="Email"
                                          label="Email"
                                          placeholder="Email"
                                      />
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
                      {/* <CV_data />         */}
                      
                  </Container>
                     
                      
                  
                  
                
             
      
                  
              </>
          );
    }
    else{
        return(
            <Container>
                <CV_data />  
                <Button onClick={setLinkBtn(false)}>
                    Generate Another
                </Button>
             </Container>
    );
    }
    
    
}