import React, { Component } from 'react';
import './head.css';
class Head extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            txt:''
        }
    }
    componentDidMount() {

    }
    history() { }
    render() {
        return (
            <div className="head">
                <div className="container">
                    {/* onClick={this.history.bind(this)} */}
                    <i className="retreat"  > </i>
                </div>
            </div>
        );
    }
}

export default Head;
