import React, { Component } from 'react';

export default class InputText extends Component {
    render() {
        return(
            <div>
                <input type="text" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} />
                <span class="hidden">{this.props.errorMessage}</span>
            </div>
        );
    }
}