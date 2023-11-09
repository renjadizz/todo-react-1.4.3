import React from "react";
import './NewTaskForm.css';


export default class NewTaskForm extends React.Component {
    state = {
        value: ''
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onCreateTask(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}><input className="new-todo" value={this.state.value}
                                                  placeholder="What needs to be done?" autoFocus
                                                  onChange={this.onChange}/>
            </form>);
    }
};
