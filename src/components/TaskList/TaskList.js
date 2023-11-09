import Task from "../Task/Task";
import './TaskList.css';


const TaskList = ({taskItems, onChangeTaskState, onDeleteTaskItem}) => {
    const taskItem = taskItems.map((item) => {
        const {id, state, ...itemText} = item;
        return (
            <li key={id} className={state}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                           checked={state === 'completed' ? true : false}
                           onChange={() => onChangeTaskState(id)}/>
                    <label><Task itemText={itemText}/></label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={() => onDeleteTaskItem(id)}></button>
                </div>
                {state === 'editing' ? <input type="text" className="edit" defaultValue="Editing task"/> : null}
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {taskItem}
        </ul>
    );
}


export default TaskList;