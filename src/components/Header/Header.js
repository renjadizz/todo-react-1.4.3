import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm/>
        </header>
    );
}


export default Header;