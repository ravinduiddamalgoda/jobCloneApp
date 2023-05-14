import { Box, makeStyles } from "@material-ui/core";
import { Button, Card, CardActions, CardContent, Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";


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

    title1: {
        flexDirection: 'colomn', 
        flex: '1',
    }, 
    cardStyle:{
        paddingTop: '2px', 
        height: '300px' ,
        width: '200px' , 
        marginTop:'3%',
    }

}));



export function UserCard(props){
    const className = useStyles();
    return(<>
    
    <Card className={className.cardStyle}>
        <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
            </Typography>
            <Typography variant="h5" component="div">
                Welcome {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Find a great job for you
            </Typography>
            <Typography variant="body2">
                
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link to="/app/cv">
                  <Typography sx ={{ textDecoration: 'none'}}>Generate CV</Typography>
                </Link>
            </Button>
        </CardActions>

    </Card>
    
    
    </>);
}