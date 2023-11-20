import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FixedSizeList} from "react-window";
import MatrixTest from "./Matrix2";

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
        setCurrentAnimal([{ id: 0, prison_id: appState[index].phoneNumber, animal_id: appState[index].id, name:appState[index].name }]);
        console.log(currentAnimal)
    }

    const renderRow = ({index, style }) => (
        <div
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, index)}
            onDragOver={(e) => dragOverHandler(e)}
            className="items"
        >
            {appState[index].name}
        </div>
    );

    return (
        <div className="App">
            <MatrixTest size={4} appState={appState} currentItem={currentAnimal} setCurrentItem={setCurrentAnimal}></MatrixTest>
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