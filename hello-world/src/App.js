  import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';



// import About from "./About";
// import Contact from "./Contact";
// import Stylesheet from "./Stylesheet";
// import Navbar from './Navbar';
// import Sendemail from './Sendemail';
// import AdvancedForm from "./AdvancedForm";
import DeleteData from "./component/NewProject/DeleteData";
import EditData from "./component/NewProject/EditData";
import AddData from "./component/NewProject/AddData";
import HomePage from "./component/NewProject/HomePage";
import ShowData from "./component/NewProject/ShowData";
import Nav from "./component/NewProject/Nav";
//import Getcode from "./component/NewProject/getcode"
   import './App.css';





function App() {


  return (
    <Router  >
    <div className="App" >
      <Nav></Nav>
      <Switch  >
            <Route exact path="/" exact component={HomePage}/>
            <Route exact path="/Showdata" exact component={ShowData}/>
            <Route exact path="/deletedata" exact component={DeleteData}/>
            <Route exact path="/editdata" exact component={EditData}/>
            <Route exact path="/adddata" exact component={AddData}/>
      </Switch>
      
      
    </div>
    </Router>
    
    

  )
}

export default App;

