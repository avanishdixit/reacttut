import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const heading={
  color:'red',
  textTransfer:"capitalize",
  textAlign:"center",
  margin:"70px 0",
  textShadow:"0px 2px 4px #ffe9c5"
} ;

ReactDOM.render(
  <>
  <h1 style={heading}>My name is khan</h1>
  </>,
  document.getElementById("root")

);
 