import React, { Component } from 'react';
import './alert.css';
import $ from 'jquery';

class Alert extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            
        }
    }
    componentDidMount() {
        $(".know").on("click", function () {
            $(".alert").css("display", "none");
        })
    }
    render() {
        const {name} = this.props;
    
        
        return (
            <div className="alert">
                <div className="modal">
                    <p className="text">{name}</p>
                    <p className="know">我知道了</p>
                </div>
            </div>
        );
    }
}
export default Alert;