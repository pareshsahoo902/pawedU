import React,{useState} from "react";
import '../../components/login/Login.css'
import {Link, Redirect} from 'react-router-dom';
import api from  '../../config/api'
import Dogavtar from "../../assets/dog_avtar.png";
import dogimage from "../../assets/newdog.svg";
import AppLogo from "../../assets/app_logo.png";
import UserIcon from "@material-ui/icons/AccountCircleRounded";
import PasswordIcon from "@material-ui/icons/Security";

function Login() {

  const [username , setUsername] = useState();
  const [password , setPassword] = useState();
  const [redirect, setRedirect] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === undefined || username === ""){

      alert("Enter Username!")
      return
    }else if(password === "" || password === undefined || password<6){

      alert("Enter a Password!\nLength: 6+")
      return
    }else{
      doLogin();
    }


  }


  const doLogin =()=>{
    api.post('/api/login',{
      username:username,
      password:password,
     
    }).then(response => {
      if(response.data.status){
        localStorage.setItem('myAuth',JSON.stringify(response.data))
        setRedirect(<Redirect to='/homepage'/>)
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
              <img src={Dogavtar} className="avtar" />
            <h2>You Dawg!</h2>
            <br/>
            <div className="input-div one ">
              <div className="i">
                <UserIcon />
              </div>
              <div>
                  <h5>Username</h5>
                  <input class="input" placeholder="Enter a Username"
                  onChange={(e) => setUsername(e.target.value)} type="text"  />
              </div>
            </div>

            <div className="input-div two ">
              <div className="i">
                <PasswordIcon />
              </div>
              <div>
                  <h5>Password</h5>
                  <input class="input" type="password"
                  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
              </div>
            </div>

            <br/>
            <Link to={'/register'}><a href="#">Create an Account?</a></Link>
            <input type="submit" class= "btn" value="Login"/>

          </form>
        </div>
        {redirect}
      </div>
  );
}

export default Login;
