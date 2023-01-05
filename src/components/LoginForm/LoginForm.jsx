// FSON#59 React Модуль 2 Заняття 2
import { Component } from 'react';

export class LoginForm extends Component{
    state = {
// поля email и pass
        email: '',
        password: '',
    };
// здесь в поле email записываем ввод пользователя
// handleChangeEmail = (event) => {
// this.setState({email: event.target.value})
//     }
// //здесь пароль
// handleChangePassword = (event) => {
// this.setState({password: event.target.value})
//     }

//метод заменяет два метода выше, если в inputах задан атрибут name
handleChange = event => {
// console.log(event.target.name);
    const { name, value } = event.target;
    this.setState({ [name]: value });
};

 //метод preventDefault() предотвращает поведение формы по дефолту   
handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
//здесь перезаписываем ввод пользователя на пустую строку
    this.setState({ email: '', password: ''});
    }; 

render() {
    // деструктуризируем объект state
    const { email, password } = this.state;
    return (

<form className="w-25" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    
<label
className="form-label"
htmlFor="email"
>
                        <p>Email address</p>
{/*В input Передаём функцию, которая будет вызываться,
когда пользователь делает ввод onChange={console.log} */}
<input
    id="email"                        
    type="text"
    className="form-control"
    value={email}
    onChange={this.handleChange}
    //задаём атрибут email
    name="email"
/>
        </label>
    </div>

    <div className="mb-3">
        <label className="form-label">
                        <p>Password</p>
                        
<input
    type="text"
    className="form-control"
    value={password}
    onChange={this.handleChange}
    //задаём атрибут password                        
    name="password"                       
/>
                        
        </label>
    </div>

    <button className="btn btn-primary" type="submit">
        Submit
    </button>

</form>

        );
    }
}

