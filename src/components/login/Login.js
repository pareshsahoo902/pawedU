import React from "react";
import '../../components/login/Login.css'
import {Link} from 'react-router-dom';
import Dogavtar from "../../assets/dog_avtar.png";
import dogimage from "../../assets/newdog.svg";
import AppLogo from "../../assets/app_logo.png";
import UserIcon from "@material-ui/icons/AccountCircleRounded";
import PasswordIcon from "@material-ui/icons/Security";

function Login() {


  return (
    <div className="container">
        <div class="dogimg">
          <img src={AppLogo} />
          <img src={dogimage} />
        </div>

        <div className="login">
          <form>
              <img src={Dogavtar} className="avtar" />
            <h2>You Dog!</h2>
            <br/>
            <div className="input-div one ">
              <div className="i">
                <UserIcon />
              </div>
              <div>
                  <h5>Username</h5>
                  <input class="input" type="text" />
              </div>
            </div>

            <div className="input-div two ">
              <div className="i">
                <PasswordIcon />
              </div>
              <div>
                  <h5>Password</h5>
                  <input class="input" type="password" />
              </div>
            </div>

            <br/>
            <Link to={'/register'}><a href="#">Create an Account?</a></Link>
            <input type="submit" class= "btn" value="Login"/>

          </form>
        </div>
      </div>
  );
}

export default Login;
