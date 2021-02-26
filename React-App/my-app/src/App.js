import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import LoginFrom from './Components/Form';
import Arrow from './Components/Arrow';
import State from './Components/State';
import SetState from './Components/setState';
import Con1 from './Components/Condition1';
import Con2 from './Components/Condition2';
import Anwar from './Components/Anwar';
import Text from './Components/Text';
import Render from './Components/Render';
import Hydrate from './Components/Hydrate';
import DOMNode from './Components/findDOMNode';
import Select from './Components/Select';
import List from './Components/List';
import JSON from './Components/JsonArray';
import Country from './Components/CountryList';
import Post from './Components/Post';
import Table from './Components/Table';
import Navigation from './Components/Navigation';
import MyNav from './Components/mynav';
import MyRouter from './Components/myrouter';
import {BrowserRouter} from 'react-router-dom';
import Hello from './exercise/Hello';
import Welcome from './exercise/Welcome';


function App() {
  return (
    <div className="App">
       {/*<Login name="Sign In" type="button" title="Login Form"/>
              <Register name="Register" type="button"/>
              <Register name="Logout"  type="submit"/>
      
      <Arrow/>
    
    <State/>
      
      <SetState/>
    
    <Con2/>
    <Con1/>
    <Anwar name="Anwar" age="25" gender="Male"/>
    <LoginFrom/>
        <Text/>
        <Render/>
        <Hydrate/>
        <DOMNode/>
        <Select/>
        <List/>
        <JSON/>
        <Country/>
        <Post/>
        <Table/>
        <Navigation/>
        <BrowserRouter>
          <MyNav/>
          <MyRouter/>
        </BrowserRouter>
         
        <Hello name="Hossain"/>
        <Hello name="Sujon"/>
        <Hello name="Anwar"/>*/}
        <Welcome name="Anwar"/> 
        

    </div>
  );
}

export default App;
