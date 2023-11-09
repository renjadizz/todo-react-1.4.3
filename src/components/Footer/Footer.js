import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'

const Footer = ({onFilterChange, filter}) => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter filter={filter} onFilterChange={onFilterChange}/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;