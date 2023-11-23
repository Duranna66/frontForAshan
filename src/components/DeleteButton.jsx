import React, {useState} from 'react';

function DeleteButton({appState}) {
    const [data, setData] = useState(null);
    const handleClick = () => {
        console.log("app",appState)
        const animal = {id: appState.id, name: appState.name, phoneNumber: appState.phoneNumber, isDeleted: 'q'}
        console.log(animal)
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