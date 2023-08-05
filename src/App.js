import React from "react"
import './index.css';

function App(){
    const [count, setCount] = React.useState(0); // let count = 0;
    //выступает в роли переменной
    const onClickPlus = ()  => {
        setCount(count + 1); // count++;
    }
    const onClickMinus = () => { //создаём функцию 
        setCount(count - 1);//в которой меняем значение нашей переменной
    }


    return (
        <div className="App">
            <div>
                <h2>Счётчик:</h2>
                <h1>{count}</h1>
                <button onClick={onClickMinus} className="minus">- Минус</button>
                <button onClick={onClickPlus} className="plus">Плюс +</button>
            </div>
        </div>
    )
}

export default App