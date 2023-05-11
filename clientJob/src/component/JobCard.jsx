import { Box, makeStyles } from "@material-ui/core";
import { Card, Container, List, ListItem, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({


    boxStyle:{
        border: '1px solid',
        [theme.breakpoints.up('900')]: {
            width: '600px',
        },
        [theme.breakpoints.down('900')]: {
            width: '300px',
        },
        [theme.breakpoints.down('600')]: {
            width: '300px',
        }, 
        // background: '#4EB5FF',
        // marginLeft: '15%',
        // marginRight: '15%',
        borderRadius: '0px',
        marginTop:'3%',
    },

    title1: {
        flexDirection: 'colomn', 
        flex: '1',
        [theme.breakpoints.up('900')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('900')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('600')]: {
            flexDirection: 'row',
        }, 

    }, 
    title2:{
        paddingTop: '2px', 
    } ,

    liStyleSkill:{
        paddingLeft: '2px',
        listStyle: 'square',
        paddingTop:'2px',  
    }

}));

export function JobCard(props){
    const className = useStyles();
    return(<>
        <Card className={className.boxStyle}>
            <Container sx={{ display: 'flex'}}>
            <Typography variant="h5" className={className.title1}>{props.company}</Typography>
                <Typography variant="h5" className={className.title2}>{props.jobTitle}</Typography>
               
            </Container>
            <br />
            
            <Container>
                
                <Typography>{props.description}</Typography>
                <Typography>Skills that You must have </Typography>
               
                <List dense={true}>
                    {props.skill.map(item =>(
                        <ListItem key = {item} className={className.liStyleSkill}>{item}</ListItem>
                    ))}
                </List>
                <Typography>Job Time : {props.jobStatus}</Typography>
               <Typography>Job Type : {props.jobType}</Typography>
               <Typography>Job Field : {props.feild}</Typography>
               <Typography>Job Field : {props.position}</Typography>
               <br />
            </Container>

            
        </Card>
    </>);

}