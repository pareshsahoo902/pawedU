import React from 'react'
import { Link } from "react-router-dom";
import '../../components/register/Register.css'
import Dogavtar from "../../assets/dog_avtar.png";
import dogimage from "../../assets/dogdate.png";
import UsernameIcon from '@material-ui/icons/Pets';
import NameIcon from '@material-ui/icons/AccountCircle';
import PasswordIcon from "@material-ui/icons/Security";
import BreedIcon from '@material-ui/icons/ContactSupport';
import AddImage from '@material-ui/icons/AddAPhoto';

function Register() {
    return (
        <div className="container">
            <div class="dogimg">
          <img src={dogimage} />
        </div>

        <div className="login">
          <form>
              <img src={Dogavtar} className="avtar" />
              <AddImage  className='addImage'/>
            <br/>
            <br/>
            <br/>
            <div className="input-div one ">
              <div className="i">
                <UsernameIcon />
              </div>
              <div>
                  <h5>Username</h5>
                  <input class="input" type="text" />
              </div>
            </div>

            <div className="input-div two ">
              <div className="i">
                <NameIcon />
              </div>
              <div>
                  <h5>Name</h5>
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

            

            <div className="input-div three ">
              <div className="i">
                <BreedIcon />
              </div>
              <div>
                  <h5>Breed</h5>
                  <input class="input" type="text" />
              </div>
            </div>


            <br/>
            <Link to={"/"} ><a href="#">Existing User? Login</a></Link>
            <input type="submit" class= "btn" value="Register"/>

          </form>
        </div>
            
        </div>
    )
}

export default Register
