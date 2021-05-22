import {Link}  from 'react-router-dom'
import React,{useState} from "react";
import "./ProfilePage.css";
import Dogavtar from "../../assets/dog_avtar.png";
import Header from "../../components/HomePage/Header";
import UsernameIcon from "@material-ui/icons/WcOutlined";
import NameIcon from "@material-ui/icons/AccountCircle";
import PasswordIcon from "@material-ui/icons/Cake";
import BreedIcon from "@material-ui/icons/ContactSupport";
import AddImage from "@material-ui/icons/AddAPhoto";

function ProfilePage() {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword] = useState();
  const [breed, setBreed] = useState();
  const [file, setImage] = useState();
  const [redirect, setRedirect] = useState();

  return (
    <div>
      <Header />
      <div className="profile">
        <div className="profile__showcase">
          <div className="profile_header">
            <div className="detailed">
              <img src={Dogavtar} className="dp__avatar" />
              <div className="details__dog">
                <em className="usernameText">username</em>
                <h3 className="dog__Name">Bruno</h3>
                <h5 className="breed__name">Pomerian,23</h5>
              </div>
            </div>
            <p className="bio"></p>
            <button class="add_button">Add Image</button>
          </div>
          <div className="photo__grids"></div>
        </div>
        <div className="form__Profile">
          <form>
            <img
              src={file ? URL.createObjectURL(file[0]) : Dogavtar}
              className="avtar"
            />

            <label for="fileInput">
              <AddImage className="addImage" />
            </label>
            <input
              type="file"
              id="fileInput"
              className="file_input"
              onChange={(e) => setImage(e.target.files)}
            />

            <p class="p">Edit Display Image </p>
            <br />
            <br />
            <br />
            <div className="input-div one ">
              <div className="i">
                <UsernameIcon />
              </div>
              <div>
                <h5>Gender</h5>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Gender"
                  onChange={(e) => setGender(e.target.value)}
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
                <h5>Age</h5>
                <input
                  class="input"
                  type="number"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Age"
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
            
            <input type="submit" class="btn" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
