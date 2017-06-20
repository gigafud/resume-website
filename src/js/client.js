import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router, Route, IndexRoute } from "react-router";

import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
, app);
