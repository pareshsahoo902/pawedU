import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from '../../config/api'
import "../../components/register/Register.css";
import fbHelper from '../../config/FBHelper'
import Dogavtar from "../../assets/dog_avtar.png";
import dogimage from "../../assets/dogdate.png";
import AppLogo from "../../assets/app_logo.png";
import UsernameIcon from "@material-ui/icons/Pets";
import NameIcon from "@material-ui/icons/AccountCircle";
import PasswordIcon from "@material-ui/icons/Security";
import BreedIcon from "@material-ui/icons/ContactSupport";
import AddImage from "@material-ui/icons/AddAPhoto";

function Register() {
  const [name, setName] = useState();
  const [username, setuserName] = useState();
  const [password, setPassword] = useState();
  const [breed, setBreed] = useState();
  const [file, setImage] = useState();
  const [redirect, setRedirect] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === undefined || username === ""){

      alert("Enter Username!")
      return
    }else if(name === "" || name === undefined){

      alert("Enter Name!")
      return
    }
    else if(password === "" || password === undefined || password.length<6){

      alert("Enter Password!\nLength: 6+")
      return
    }
    else if(breed === ""|| breed === undefined){

      alert("Enter your Breed!")
      return
    }else{
      if(file=== undefined){
        alert('Please enter a display Pic')
        return
      }else{
        uploadPhotoToDatabase()
      }
    }
  
  };


   const uploadPhotoToDatabase = () => {
    let bucketName = "DisplayImage";
    let Picfile = file[0];
    let storageRef = fbHelper.storage().ref(`PawedU/${bucketName}/${Picfile.name}`);
    let uploadTask = storageRef.put(Picfile);
    uploadTask
      .then((snap) => {
        return snap.ref.getDownloadURL();
      })
      .then((url) => {
        registerUser(url);
      });
  };


  const registerUser =(url)=>{


  api.post('/api/register',{
    username:username,
    name:name,
    password:password,
    imageUrl:url,
    breed:breed,
  }).then(response => {
    if(response.data.status){
      setRedirect(<Redirect to='/'/>)
    }
  })
    .catch(err => alert(err))
    
  }


  return (
    <div className="container">
      <div class="dogimg">
        <img src={AppLogo} />
        <img src={dogimage} />
      </div>

      <div className="login">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <img src={file?URL.createObjectURL(file[0]): Dogavtar} className="avtar" />

          <label for="fileInput">
            <AddImage className="addImage" />
          </label>
          <input
            type="file"
            id="fileInput"
            className="file_input"
            onChange={(e) => setImage(e.target.files)}
          />

          <p class="p">Add Display Image </p>
          <br />
          <br />
          <br />
          <div className="input-div one ">
            <div className="i">
              <UsernameIcon />
            </div>
            <div>
              <h5>Username</h5>
              <input
                class="input"
                type="text"
                placeholder="Enter a Username"
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-div two ">
            <div className="i">
              <NameIcon />
            </div>
            <div>
              <h5>Name</h5>
              <input
                class="input"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="input-div two ">
            <div className="i">
              <PasswordIcon />
            </div>
            <div>
              <h5>Password</h5>
              <input
                class="input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>
          </div>

          <div className="input-div three ">
            <div className="i">
              <BreedIcon />
            </div>
            <div>
              <h5>Breed</h5>
              <input
                class="input"
                type="text"
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Enter your Breed"
              />
            </div>
          </div>

          <br />
          <Link to={"/"}>
            <a href="#">Existing User? Login</a>
          </Link>
          <input type="submit" class="btn" value="Register" />
        </form>
      </div>

      {redirect}
    </div>
  );
}

export default Register;
