import React, { useState } from 'react';

function Button({appState}) {
    const [data, setData] = useState(null);

    const handleClick = () => {
        fetch('http://localhost:8080/search/test', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appState)
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
            });
    };

    return (
        <div className={"bott"}>
            <button className={"button"} onClick={handleClick}>сохранить</button>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
}

export default Button;
