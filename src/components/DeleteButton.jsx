import React, {useState} from 'react';

function DeleteButton({appState}) {
    const [data, setData] = useState(null);
    const handleClick = () => {
        const animal = {id: appState.id, name: appState.name, isPredator:appState.isPredator, phoneNumber: appState.phoneNumber, isDeleted: 'q'}
        fetch('http://localhost:8080/search/deleteFromList', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animal)
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log(error)
            });

        window.location.reload(false);

    };
    return (
        <button className={"button"} onClick={handleClick}>
            X
        </button>
    );
}

export default DeleteButton;