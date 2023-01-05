import { Component } from 'react';
// import PropTypes from 'prop-types';
// document.addEventListener('clicl', (event) => {})
// let count = 0;


//Cоздаётся класс Counter, который наследуется от класса Component
export class Counter extends Component {
    state = {
        amount: 0,
    };
    // constructor() {
    //     this.state = {
    //         amount: 0,
    //     };
    //     this._handleClickMinus = this.handleClickMinus.bind(this);
    // }
    handleClickMinus = () => {
        // count -= 1;
        // console.log('count');
        this.setState(prevState => {
            return { amount: prevState.amount - 1 };
        });
    };
    handleClickPlus = () => {
        // count += 1;
        // console.log('count');
        this.setState(prevState => {
            return { amount: prevState.amount +1 };
        }); 
}
  
    render() {
        const { amount } = this.state;
        return (
            <div className="mb-5 p-5 text-white bg-dark rounded-3">
                <h2 className="text-center">Counter</h2>
            
                <p className="text-center my-5" style={{ fontSize: 80 }}>
                   {amount}
                </p>
            
                <div className="d-flex align-items-center justify-content-center w-100">
            
<button onClick={this.handleClickPlus.bind(this)} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
    Plus
</button>


<button onClick={this.handleClickMinus.bind(this)} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
    Minus
</button>


                </div>
            
            </div>
        );
    }
  }
