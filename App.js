// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./Routes/login";

// class App extends React.Component {
//     constructor() {
//       super();
//     }
//     render() {
//       return (
//         <Router>
//           <div>
//           <Route path="/login" component={Login} />
//           </div>
//       </Router>
//     );
//   }
// }حياتي لمن يكمل كليلي ع تلي

// ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
import "./assets/fonts.css";


// let Logo = styled.div`
//   margin-left: 5%;
//   margin-top: 0.75%;
// `;



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  Username(username) {
    this.setState({
      username: username.target.value
    });
  }
  Pass(pass) {
    this.setState({
      password: pass.target.value
    });
  }
  render() {
    return (
      
      <div id="main">
        <div className="header">
        <img width="150px" src={require("./assets/instagram1.png")} alt="the logo" />
        </div>
<form id="from">

        {/* Instagram Username */}
   <input id="Input1" name='username' placeholder="Username" onChange={event => { this.Username(event); }} type="text" value={this.state.username} />


        {/* Instagram Password */}
    <input id="Input2" name='password' type="password" placeholder="Password" onChange={event => { this.Pass(event); }} value={this.state.password} />



        <button className="button"> LOG IN </button>
</form>
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
