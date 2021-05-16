import React , {useState, useEffect} from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/Profile/ProfilePage";
import ChatPage from "./components/ChatPage/ChatPage";

function App() {

  const [redirect, setRedirect] = useState();
  

  useEffect(()=>{

    if(localStorage.getItem('myAuth')!=null){
      setRedirect(<Redirect to='/homepage'/>)
    }else{
      setRedirect(<Redirect to='/'/>)

    }

  },[])

  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/chat" component={ChatPage} />

      {redirect}
    </BrowserRouter>


  );
}

export default App;
