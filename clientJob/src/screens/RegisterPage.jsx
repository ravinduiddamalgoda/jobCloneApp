import { Box } from "@mui/material";
import { Formik } from "formik";


// const useStyle =  makeS


export function RegisterUser(){

  
  return(
    <>
      <Box>
          <Formik
            initialValues={{
              fname: "" ,
              lname: "" ,
              email: "" ,
              password : "" ,
              major: "",
              specialization: "" ,
              

            }}
          >



          </Formik>
      </Box>
    
    </>
  );

  }
  