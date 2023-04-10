import { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import { Typography, makeStyles } from "@material-ui/core";
import { Box, Button, FormControl, FormHelperText, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

const useStyle = makeStyles((theme)=>({
  root:{
    [theme.breakpoints.up('900')]: {
      width: '40%',
    },
    [theme.breakpoints.down('900')]: {
      width: '60%',
    },
    [theme.breakpoints.down('600')]: {
      width: '95%',
    },
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    display: 'flex',
    flexDirection: 'column',
    // height: 48,
    padding: '0 30px',
  }

}))


// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

export function LoginPage(){
    const classes = useStyle();
    

    return (
        <Box className={classes.root}>
            <Formik
              initialValues={{
                email:"",
                password:"",
              }}

              validationSchema={Yup.object().shape({
                email: Yup.string().email('Provide a valid email').required(),
                password: Yup.string().required()
              })}
            >
              {({values, handleChange, handleSubmit , errors})=> {

                return(<>
                  <Typography variant='h3'>Login Student</Typography>
                  <FormControl>
                    <TextField 
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      label = "email"
                      placeholder='email'
                      error={errors.email && errors.email?.length ? true : false}
                    />
                  </FormControl>
                  <FormHelperText style={{ color: 'red' }}>
                  {errors.email}
                </FormHelperText>
                  <FormControl>
                    <TextField 
                      value = {values.password}
                      onChange={handleChange}
                      name='password'
                      type='password'
                      label='password'
                      placeholder='password'
                    />
                  </FormControl>
                  <Button
                    onClick={()=> handleSubmit()}
                    type='submit'
                    variant="contained"
                  >
                    SUBMIT
                  </Button>
                
                
                </>);
              }}

            </Formik>
        </Box>
    );
  }
  