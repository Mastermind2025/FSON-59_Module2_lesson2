// React Модуль 2. Заняття 1(20.12.22)
//импорт иконок два способа
import styled from 'styled-components';
import mySvgIcon from './icon.svg';
//импорт иконок
import { ReactComponent as MyIcon } from './icon.svg';

const Wrapper = styled.div`
    max-width: 300px;
    min-height: 100px;
    border-radius: 10px;
    box-shadow: 0 0 0 10px #000;
    background-color: gray;
    margin: 15px;
    padding: 15px;
`;
const Title = styled.h2`
    font-size: 25px;
    font-weight: 600;
    // primary если true, то blue иначе red
    color: ${props =>(props.primary?'blue':'red')};
`

export const Product = () => {
    return (
        <Wrapper>
    <Title>Title this, title</Title>
    {/* primary здесь это true */}
            <Title primary>Title this, title</Title>
    {/* подключение иконки первый способ */}
             <img src={mySvgIcon} alt=""/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nam ante felis, aliquet vitae iaculis vel, dapibus eget mi.
Pellentesque elit tortor, feugiat quis pulvinar vulputate,
malesuada nec augue. Aenean mollis tincidunt urna in
elementum. Fusce cursus et quam quis convallis. Maecenas scelerisque arcu faucibus aliquam tempus.
   {/* Подключение иконки второй способ */}
     <MyIcon/>       
    </Wrapper>
    );

};