import './Task.css';

const Task = ({itemText}) => {
    return (
        <>
            <span className="description">{itemText.description}</span>
            <span className="created">{itemText.created}</span>
        </>
    );
}


export default Task;