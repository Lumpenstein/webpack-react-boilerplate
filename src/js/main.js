import React, { Component } from "react";
import ReactDOM from "react-dom";

import Root from './Root';

const wrapper = document.getElementById("lumpi-app");
wrapper ? ReactDOM.render(<Root />, wrapper) : false;
