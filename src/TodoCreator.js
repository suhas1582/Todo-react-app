import React, { Component } from "react";

export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemText: ""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({
            newItemText: event.target.value,
        })
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""});
    }

    render() {
        return (
            <div className="my-1">
                <input type="text" className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue} placeholder="Enter a Todo :)"/>
                <button className="btn btn-primary mt-1 btn-block" onClick={this.createNewTodo}>Add</button>
            </div>
        )
    }
}