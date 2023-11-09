import React from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import './App.css';

export default class App extends React.Component {
    state = {
        taskItems: [
            {id: 1, state: 'completed', description: 'Completed task', created: 'created 17 seconds ago'},
            {id: 2, state: 'editing', description: 'Editing task', created: 'created 5 minutes ago'},
            {id: 3, state: 'active', description: 'Active task', created: 'created 5 minutes ago'}
        ],
        filter: 'active'
    }
    onCreateTask = (taskValue) => {
        const id = this.state.taskItems.length + 1;
        const state = '';
        const description = taskValue;
        const created = 'now';
        this.setState(({taskItems}) => ({
            taskItems: [...taskItems, {id, state, description, created}]
        }));
    }
    onChangeTaskState = (id) => {
        this.setState(({taskItems}) => {
            const taskItemsLeft = taskItems.map((item) => {
                    if (item.id === id) {
                        const itemState = item.state === 'completed' ? item.state = '' : item.state = 'completed';
                        return {...item, state: itemState};
                    }
                    return item;
                }
            )
            return {taskItems: taskItemsLeft};
        })
    }
    onDeleteTaskItem = (id) => {
        this.setState(({taskItems}) => {
            const taskItemsLeft = taskItems.filter((item) => item.id !== id);
            return {taskItems: taskItemsLeft};
        })
    }
    filterTasks = (taskItems, filter) => {
        if (filter !== 'all') {
            return taskItems.filter((el) => el.state === filter)
        }
        return taskItems;
    }

    render() {
        const taskItems = this.filterTasks(this.state.taskItems, this.state.filter);
        return (
            <section className="todoapp">
                <Header onCreateTask={this.onCreateTask}/>
                <section className="main">
                    <TaskList taskItems={taskItems} onChangeTaskState={this.onChangeTaskState}
                              onDeleteTaskItem={this.onDeleteTaskItem}/>
                    <Footer/>
                </section>
            </section>
        );
    }
}