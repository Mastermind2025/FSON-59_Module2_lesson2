import { Component } from 'react';
import usersJson from '../../assets/users.json';
// import { NewUserForm } from './components/NewUserForm/NewUserForm';
import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';

import { Modal } from '../Modal/Modal';

// Класс компонента. Обязательно должен быть метод render
export class Users extends Component {

    state = {
// Не можем записывать данные в файл json. Для этого
// Здесь массив с данными из файла json. 
        users: usersJson,
        isModalOpen: false,
    };

// Метод удаляет одного usera
    handleDelete = id => {
        this.setState(prevState => {
// id=1 [1,2,3,4] -> filter [2,3,4]
        const newUsersList = prevState.users.filter(user => user.id !== id);         

        return { users: newUsersList };
    })
       
    };
//Берём поле isModalOpen из state и перезаписываем значение на противоположное
    handleToggle = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    };
    render() {
    
    const { users, isModalOpen } = this.state   
        return (
            <>
                {isModalOpen && (
                    <Modal>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.

                    </Modal>
                )}

                <button
                    className="btn btn-primary mb-4"
                    type="button"
                    onClick = {this.handleToggle}
                >
            Create new user
                </button>

                <UsersSearch />
                <UsersStats users={users} />
                <UsersList users={users} onDelete={ this.handleDelete } />
                        
            </>

        );
    }
};