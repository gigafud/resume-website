import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import { wrapSwitch } from 'rrc'
import { Switch, Route } from 'react-router-dom';

const CSSTransitionSwitch = wrapSwitch(CSSTransitionGroup);

import Nav from '../components/Nav';
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                opacity: 1
            })
        }, 2000)
    }

    render() {

        return (
            <div class='home'>
                <h1>Home</h1>
                <CSSTransitionSwitch
                  component="div"
                  className="transition-group"
                  transitionName="page"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={500}
                  routes={[
                      { path: '/', exact: true, component: About },
                      { path: '/about', component: About },
                      { path: '/contact', component: Contact },
                      { path: '/education', component: Education },
                      { path: '/experience', component: Experience },
                      { path: '/skills', exact: true, component: Skills },
                  ]}
                >
                </CSSTransitionSwitch>
                <Nav opacity={this.state.opacity}></Nav>
            </div>
        );
    }
}
