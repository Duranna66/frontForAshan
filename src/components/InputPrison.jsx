import React, { useState } from 'react';

function InputPrison({ setSize }) {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        const inputValueAsNumber = parseInt(inputValue, 10);
        if (!isNaN(inputValueAsNumber)) {
            fetch('http://localhost:8080/search/sizeUpdate', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValueAsNumber)
            })
                .then(response => response.json())
                .then(data => {
                    setSize(data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log('Введено не число');
        }
    };

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <form>
                <label>кол-во вальеров</label>
                <input
                    className={"myinput"}
                    value={inputValue}
                    onChange={inputChangeHandler}
                ></input>
                <button onClick={handleClick}>submit</button>
            </form>
        </div>
    );
}

export default InputPrison;
