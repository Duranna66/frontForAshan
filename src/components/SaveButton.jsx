import React, { useState } from 'react';

function SaveButton({appState}) {
    const [data, setData] = useState(null);

    const handleClick = () => {
        fetch('http://localhost:8080/search/update', {
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
        window.location.reload(false);
    };

    return (
        <div className={"bott"}>
            <button className={"addButton"} onClick={handleClick}>сохранить</button>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
}

export default SaveButton;