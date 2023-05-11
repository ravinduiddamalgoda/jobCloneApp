import { Box, makeStyles } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import { JobCard } from "../component/JobCard";
import { UserCard } from "../component/UserCard";



const useStyles = makeStyles((theme) => ({


    boxStyle:{
        border: '1px solid',
        [theme.breakpoints.up('900')]: {
            width: '600px',
        },
        [theme.breakpoints.down('900')]: {
            width: '600px',
        },
        [theme.breakpoints.down('600')]: {
            width: '300px',
            
            
        }, 
        // background: '#4EB5FF',
        marginLeft: '15%',
        marginRight: '15%',
        borderRadius: '0px',
        marginTop:'3%',
    },
}));

export function MainPageUser(){
    const className = useStyles();



    var skills = ["js" , "node" ," MERN Stack"];
    var des = "This is greate job position who looking for a Intern in web developer title.";
    return(<>

        <Container sx={{ display: 'flex' , flexDirection:'row' }}>
            <UserCard />
                 
            <Container sx={{ }} >
                <JobCard jobTitle="Intern for Software Engineering" company="Axoten Innovation" jobStatus = "6 months" jobType = "Tempory" feild = "Software Engineering" position = "Intern" skill = {skills} description = {des}/>
                <JobCard jobTitle="Intern for Software Engineering" company="Axoten Innovation" jobStatus = "6 months" jobType = "Tempory" feild = "Software Engineering" position = "Intern" skill = {skills} description = {des}/>
            </Container>
             

            
        </Container>
       
       
    </>);

}


// function JobCard(props){
//     const className = useStyles();
//     return(<>
//         <Box className={className.boxStyle}>
//             <Container sx={{ display: 'flex'}}>
//                 <Typography variant="h5" display="inline" className={className.title1}>{props.jobTitle}</Typography>
//                 <Typography variant="h5" display="inline" className={className.title2}>{props.company}</Typography>
//             </Container>
            
            
//         </Box>
//     </>);

// }