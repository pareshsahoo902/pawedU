import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
