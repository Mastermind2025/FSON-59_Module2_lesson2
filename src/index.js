import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './stl.module.css';
import { App } from './App'; 

import { Product } from './components/Product/Product';


import './index.css';
// здесь массив url картинок
import images from './assets/images.json';

//Это компонент
//Создаём картинку тип img 
//Если не пришло значение в alt, то дефолтное значение будет "test"
const Img = (props, alt) => {
  console.log(props);//здесь объект
  return (
    <div>
      <img width="250px" src={props.src} alt={alt} />
    </div>
  );
};
// здесь заголовок
const Title = ({ text }) => {
  return (
    <div>
      <h1 className={css.title}>{text}</h1>
    </div>
  );
	};
//Создаём корневой элемент React тег с айдишником 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
//из массива выбираем второй элемент коллекции
root.render(
  <React.StrictMode>

    <Img src={images[1]} alt="hello"/>
    <Title text="24text_many_text" />
    <Product />
    <App/>
    
  </React.StrictMode>
);




