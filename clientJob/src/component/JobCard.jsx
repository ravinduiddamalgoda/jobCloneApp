import { Box, makeStyles } from "@material-ui/core";
import { Button, Card, Container, List, ListItem, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '16px',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
    },
    marginTop:"4rem"
  },
  titleContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  company: {
    color: "#017143",
    fontWeight: '600',
    marginRight: '8px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  jobTitle: {
    fontWeight: '600',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    marginBottom: '16px',
  },
  skills: {
    marginBottom: '8px',
    fontStyle: 'italic',
  },
  skill: {
    color: "#28a745",
    fontWeight: '600',
    marginRight: '8px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  detail: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
  },
  bullet: {
    display: 'inline-block',
    marginRight: '8px',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: "#017143",
    },
  },
}));

export function JobCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <Container className={classes.titleContainer}>
        <a href={props.companyUrl} className={classes.company}>{props.company}</a>
        <Typography variant="body2" className={classes.jobTitle}>{props.jobTitle}</Typography>
      </Container>
      <Typography variant="body1" className={classes.description}>{props.description}</Typography>
      <Container className={classes.skills}>
        <Typography variant="body2" >Skills :</Typography>
        <List dense>
          {props.skill.map(item =>(
            <ListItem key={item} className={classes.detail}>
              <span className={classes.bullet}></span>
              {item}
            </ListItem>
          ))}
        </List>
      </Container>
      <Typography variant="body2" className={classes.detail}>Job Time: {props.jobStatus}</Typography>
      <Typography variant="body2" className={classes.detail}>Job Type: {props.jobType}</Typography>
      <Typography variant="body2" className={classes.detail}>Job Field: {props.feild}</Typography>
      <Typography variant="body2" className={classes.detail}>Position: {props.position}</Typography>
      {
        props.typeStat === true ? (<Button>
        Apply To Job
        </Button>):(<Button>
        
        Delete Job
        </Button>)
      }
    </Card>
  );
}
