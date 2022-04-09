import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class rButton extends React.Component {
    click() {
        
    }

    render() {
        return (
            <Button variant={variant} onClick={this.click()}>
                Click me
            </Button>
        )
    }
}