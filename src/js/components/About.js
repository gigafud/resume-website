import React from "react";

export default class About extends React.Component {
    shouldComponentUpdate() {
        console.log('about should component update');
        return false;
    }

    render() {
        return (
            <div class='page'>
                <h1>ABOUT</h1>
            </div>
        );
    }
}
