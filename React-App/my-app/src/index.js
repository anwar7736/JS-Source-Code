import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import Text from './Components/Text';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'; 

const myStyle = {
	textDecoration : 'none'
}
{/*const myRouter = (
	<Router>
		<div>
			<ul className="bg-dark text-center p-3">
			<Link className="text-dark p-3 bg-light " to="/" style={myStyle}>Home</Link>
			<Link className="text-info p-3 bg-light " to="/about" style={myStyle}>About</Link>
			<Link className="text-danger p-3 bg-light " to="/contact" style={myStyle}>Contact</Link>
			<Link className="text-success p-3 bg-light" to="/services" style={myStyle}>Services</Link>
			</ul>
			<Route exact path="/" component={Form} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Text} />
			<Route path="/services" component={Services} />
		</div>
	</Router>
	)
	ReactDOM.render(myRouter, document.getElementById('root'));
*/}	
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
