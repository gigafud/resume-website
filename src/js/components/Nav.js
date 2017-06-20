import React from "react";
import { Link } from "react-router-dom";
import { spring, Motion } from 'react-motion';
import GSAP from 'react-gsap-enhancer';
import {TweenMax} from "gsap";

function createAnim({target, options}) {
    console.log(this, options);

    return TweenMax.to(options.from, options.duration, options.to);
}

@GSAP() class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        };
    }

    componentDidMount() {
        this.addAnimation(createAnim, {
            from: this.state,
            duration: 1,
            to: {
                opacity: 1
            }
        });
    }

    render() {
        return (
            <div class='nav' style={{opacity: this.state.opacity}}>
                 <Link to="/">About</Link>
                 <Link to="/skills">Skills</Link>
                 <Link to="/experience">Experience</Link>
                 <Link to="/education">Education</Link>
                 <Link to="/contact">Contact</Link>
            </div>
        );
    }
}

export default Nav;
