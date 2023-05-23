import UserService from "../service/user.service.js";
import Rating from "../models/rating.js";
import User from "../models/user.js";
// import nodemailer 
import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yapasanu19@gmail.com',
    pass: 'sanu04yapa#'
  }
});


export const CurrentUser = async (req ,res) => {
    const curntUser  = req.user;
    //console.log(currntUser);

    try{
        
        if(!curntUser){
            return res.status(400).send({ err: 'User Not Logged In'});
        }

        const userDoc = await UserService.findUserByEmail(curntUser.email);
        const user = userDoc?.toJSON();
    
        delete user?.password; //detele user paaword befor e send it to the frontend
        res.status(200).json(user);

    }catch(err){
        res.status(400).send({ err: err });

    }

}


export const UpdateUser = async( req , res) => {
  const id = req.params['userID'];

  try {
    const {fname, lname, major , skills , level , qualification} = req.body;
    const updatedData = await User.findByIdAndUpdate( id , {fname, lname, major , skills , level , qualification});
    res.json(updatedData);

  }catch(err){

    res.status(400).send({ err: err.message });
  }

}

export const RegisterUser = async (req, res) => {
  try {
    const { fname, lname, email, password , major , skills , level , qualification } = req.body;

    var mailOptions = {
      from: 'yapasanu19@gmail.com',
      to: 'ravinduiddamalgoda55@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    const existingUser = await UserService.findUserByEmail(email);
    const existingRating = await Rating.findOne({email});

    if(existingRating){
        return res.status(400).send({err: "user already rated"});
    }
    if (existingUser) {
      return res.status(400).send({
        err: "User already Exits",
      });
    }

    const user = await UserService.register(fname, lname, email, password , major , skills , level , qualification );
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const LoggedUser =  await UserService.login(email , password);

    res.status(200).send(LoggedUser);

  } catch (err) {
        res.status(400).send({ err: err.message})

  }
};


export const getAllUsers = async (req , res) => {

    try{
       const data = await UserService.getUsers(); 
       res.status(200).send(data);
    }catch(err){
      res.status(400).send({ err: err.message});
    }

}



export const getUserByEmail = async (req , res) =>{
  const email = req.params['email'];
  try{
    const data =  await UserService.findUserByEmail(email);
    const userCpy =  JSON.parse(JSON.stringify(data));
    delete userCpy?.password
    res.status(200).send(userCpy);
  }catch (err){
    res.status(400),send({err: err.message});
  }
 



}