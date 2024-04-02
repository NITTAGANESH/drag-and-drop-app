import React from 'react';

const NavBar = ({ changeTheme, deleteAllTasks }) => {
    return (
        <nav>
            <div className="navbar-content">
                <h1>Todo App</h1>
                <div className="buttons">
                    <button onClick={changeTheme}>Change Theme</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;