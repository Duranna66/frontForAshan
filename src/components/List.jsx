import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FixedSizeList} from "react-window";

function List(props) {
    const [appState, setAppState] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:8080/search/all";
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, []);
    const [currentAnimal, setCurrentAnimal] = useState(null);


    function dragOverHandler(e) {
        e.preventDefault();
    }
    function dragStartHandler(e, index) {
        setCurrentAnimal({ id: appState[index].id, index });
        // e.dataTransfer.setData('animalId', appState[index].id);
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none';
    }
    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none';
        setCurrentAnimal(null);
    }
    function dropHandler(e, appState, index) {
        e.preventDefault()

    }

    function dragEnterHandler(e) {
        e.target.style.boxShadow = '0 2px 3px gray';
    }

    const renderRow = ({index, style }) => (
        <div
            // id={`animal-${appState[index].id}`}
            // onDragStart={(e) => dragStartHandler(e, index)}
            // onDragOver={dragOverHandler}
            // onDragLeave={dragLeaveHandler}
            // onDragEnter={dragEnterHandler}
            // onDragEnd={dragEndHandler}
            // onDrop={(e) => dropHandler(e, index)}
            // style={style}
            draggable={'true'}
            className="items"
        >
            {appState[index].name}
        </div>
    );

    return (
        <div className="App">
            <div className="item">
                <FixedSizeList
                    height={400}
                    width={300}
                    itemCount={appState.length}
                    itemSize={50}
                >
                    {renderRow}
                </FixedSizeList>
            </div>
        </div>
    );
}

export default List;