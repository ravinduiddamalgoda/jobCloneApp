import { CV_data } from "../component/CV";
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField , Container } from '@mui/material';
import { Formik, Form, Field, FieldArray  } from 'formik';
import { Grid } from "@material-ui/core";
import * as Yup from 'yup';
import { useSnackbar } from "notistack";
import { AuthContext } from '../component/AuthProvider';
// import { useSnackbar } from 'notistack';
// import { useSnackbar } from 'notistack';
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
  export function AddJob() {
    const classes = useStyle();
    const [dataObj , setDataObj] = useState({});
    const [linkBtn , setLinkBtn] = useState(true);
    const [userName, setUserName] = useState("");
    const token = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    // console.log(linkBtn);
    // const history = useHistory();
    // dataCVAdd = dataObj;
    const dataPass = async(formData) => {

        // console.log(formData);
        formData.recruiterEmail = userName;
        setDataObj(formData);

        console.log(dataObj);
        // console.log(linkBtn);
        // setLinkBtn(false);
        // console.log(linkBtn);
    }


    useEffect(() => {
        try {
          const currentUser = async () => {
            const res = await axios
              .get("http://localhost:3000/current-recruiter", {
                headers: {
                  Authorization: "Bearer " + token.token,
                },
              })
              .then((res) => {
              
                setUserName(res.data.email);
                console.log(res.data.email);
              });
          };
    
          if (token) {
            resData = currentUser();
          }
        } catch (err) {
          enqueueSnackbar(err, { variant: "error" });
        }
      }, [token]);

   
  
        return (
            <>


            <Container>
                <Box className={classes.root}>
                  <Formik
                    initialValues={{

                         
                        jobTitle:"" ,
                        jobStatus : "" , 
                        jobType : "" ,   
                        feild : "" ,  
                        position : "" , 
                        skill : [],
                        description:""
                      // email: "",
                    }}

                    onSubmit = {dataPass}
                  >
                    {({ values, handleChange, handleSubmit }) => {
                      return (
                        <div>
                          <Typography variant="h4" className={classes.login}>
                            Post Job
                          </Typography>
                          

                          <Grid container spacing={2}>
                              {/* <Grid item xs={12} sm={12}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                          value={values.recuiterEmail}
                                          onChange={handleChange}
                                          name="recuiterEmail"
                                          label="Email"
                                        //   disabled
                                          placeholder="Full Name"
                                          sx={{ width:"100%"}}
                                      />
                                  </FormControl>
                              </Grid> */}
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
                                          value={values.jobTitle}
                                          onChange={handleChange}
                                          name="jobTitle"
                                          label="Job Name"
                                          placeholder="degree"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                          sx={{ width:"100%"}}
                                          value={values.jobStatus}
                                          onChange={handleChange}
                                          name="jobStatus"
                                          label="Job Status"
                                          placeholder="year"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                           sx={{ width:"100%"}}
                                          value={values.jobType}
                                          onChange={handleChange}
                                          name="jobType"
                                          label="Job Type"
                                          placeholder="University"
                                      />
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                         sx={{ width:"100%"}}
                                          value={values.feild}
                                          onChange={handleChange}
                                          name="feild"
                                          label="Job Feild"
                                          placeholder="Undergraduate / Postgraduate"
                                      />
                                  </FormControl>
                              </Grid>
                          </Grid>

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
                              
                          </Grid>
                          <Typography variant="h6"> Skills</Typography>
                          <Grid item xs={12} sm={6}>
                          <FieldArray
                              name="skills"
                              render={arrayHelpers => (
                              <div>
                                  {values.skill && values.skill.length > 0 ? (
                                  values.skill.map((skills, index) => (
                                      <div key={index}>
                                      <Field name={`skills.${index}`} />
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
                         

                          <Grid container spacing={2}>
                          <Grid item xs={12} sm={12}>
                                  <FormControl className={classes.formCtrl} fullWidth>
                                      <TextField
                                          value={values.description}
                                          onChange={handleChange}
                                          name="description"
                                          label="description"
                                          multiline
                                          rows={4}

                                          placeholder="Full Name"
                                          sx={{ width:"100%"}}
                                      />
                                  </FormControl>
                              </Grid>
                              
                             
                          </Grid>
                          <Grid item xs={12} sm={2}>
                                  <Button
                                      onClick={() => handleSubmit()}

                                      type="submit"
                                      variant="contained"
                                      sx={{marginTop: '20px' , backgroundColor:"#017143" , width:"100%"}}>
                                      Post Job
                                  </Button>
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
  


