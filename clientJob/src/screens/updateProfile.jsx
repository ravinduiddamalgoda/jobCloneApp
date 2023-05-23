import { Box, makeStyles } from "@material-ui/core";
import {
  Button,
  FormHelperText,
  TextField,
  Card,
  FormControl,
  CardActions,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Link,useNavigate  } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
import axios from "axios";

import { Grid } from "@material-ui/core";
import { Formik, Form, Field, FieldArray } from "formik";
import { useSnackbar } from "notistack";
import HeaderMain from "./NewHeader";
import { array } from "yup";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    [theme.breakpoints.up("sm")]: {
      width: 800,
      marginTop: "4rem",
    },
    border: "1px solid #ddd",
    borderRadius: 0,
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    height: 700,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: "#333",
    padding: "15px",
   
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#333",
    padding: "15px",
   
    textAlign: "center",
  },
  subtitle1: {
    fontSize: 12,
    color: "#666",
    padding:"15px",
    marginBottom: theme.spacing(2),
    textAlign: "left",
  },
  content: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  button: {
    textTransform: "none",
  },
}));

export function UpdateProfile() {
  const classes = useStyles();
  const navigate = useNavigate();

  
  const dataPass = async(formData) => {
    
    var formData1=formData
    formData1.skills=formData.skills.join(", ")
    console.log(formData1);
    formData.skills=""
}
    
    
  
  return (
    <Box className={classes.root}>
      <Formik
        initialValues={{
            fname: "",
            lname: "",
            email: "",
            major: "",
            skills:"",
            level:"",
            qualification:"",
         
        }}

        onSubmit = {dataPass}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <div>
              <Typography
                className={classes.title}
                component="h2"
                sx={{ color: "#28a745", fontSize: 22 }}
              >
                UPDATE PROFILE
              </Typography>

              <Typography
                className={classes.title}
                component="h2"
                sx={{ color: "#28a745", fontSize: 22 }}
              >
               {/* <Avatar  alt="Remy Sharp" style={{margin:"0 auto"}}  sx={{ width: 100, height: 100}}/> */}
              </Typography>


              {/* <input
          
          type="file"
          accept="image/*"
          name="img"
          value={values.img}
          hidden
          onChange={handleChange}
        
        />


<TextField
        type="file"
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      /> */}



             

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formCtrl} fullWidth>
                    <TextField
                      sx={{ width: "100%" }}
                      value={values.fname}
                      onChange={handleChange}
                      name="fname"
                      label="First Name"
                      placeholder="First Name"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formCtrl} fullWidth>
                    <TextField
                      sx={{ width: "100%" }}
                      value={values.lname}
                      onChange={handleChange}
                      name="lname"
                      label="Last Name"
                      placeholder="Last Name"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formCtrl} fullWidth>
                    <TextField
                      sx={{ width: "100%" }}
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      label="Email"
                      placeholder="Email"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* <Typography variant="h6"  className={classes.subtitle}>Specialized Major</Typography> */}
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "15px" }}
                spacing={2}
              >
                <FormControl className={classes.formCtrl} fullWidth>
                  <TextField
                    value={values.major}
                    onChange={handleChange}
                    name="major"
                    label="Your Specialised Major"
                    placeholder="Ex: Software Engineer"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </Grid>
              <Grid container style={{ marginTop: "15px" }} spacing={2}>
                <Grid item xs={12} sm={6}>

                  <InputLabel id="demo-simple-select-label">Specialized Level</InputLabel>
                  <Select
                    sx={{ minWidth: 250 }}
                    value={values.level}
                    onChange={handleChange}
                    name="level"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                   
                    <MenuItem value="Executive management">Executive management</MenuItem>
                    <MenuItem value="Middle management ">Middle management </MenuItem>
                    <MenuItem value="First level management">First level management</MenuItem>
                    <MenuItem value="Intermediate levelt">Intermediate level</MenuItem>
                    <MenuItem value="Entry level">Entry level</MenuItem>
                  </Select>

                </Grid>
                <Grid item xs={12} sm={6}>

                <Typography variant="h6"> Skills</Typography>
                <FieldArray
                    name="skills"
                    render={(arrayHelpers) => (
                      <div>
                        {values.skills && values.skills.length > 0 ? (
                          values.skills.map((skills, index) => (
                            <div key={index}>
                              <Field
                                name={`skills.${index}`}
                                className={classes.formCtrl2}
                              />

                              <Button
                                className={classes.btnAddSkill}
                                type="button"
                                onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
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
                          <Button
                            type="button"
                            onClick={() => arrayHelpers.push("")}
                            className={classes.btnAddSkill}
                          >
                            {/* show this when user has removed all friends from the list */}
                            Add Your Skills
                          </Button>
                        )}
                      </div>
                    )}
                  />
                 </Grid>
              </Grid>

              <Grid item xs={12} sm={6} style={{marginTop:"15px"}}>
                  <FormControl className={classes.formCtrl} fullWidth>
                    <TextField
                      sx={{ width: "100%" }}
                      value={values.qualification}
                      onChange={handleChange}
                      name="qualification"
                      label="Qualification"
                      placeholder="Qualification"
                    />
                  </FormControl>
                </Grid>
                
              <Grid item xs={12} sm={2}>
                  <Button
                    onClick={() => handleSubmit()}
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      backgroundColor: "#017143",
                      width: "100%",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
             
              <Grid container spacing={2}>
              
                
              </Grid>

              
            </div>
          );
        }}
      </Formik>
    </Box>
  );
}
