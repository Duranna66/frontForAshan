import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Matrix({ mass }) {
    const [appState, setAppState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/search/all';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            if (allPersons && allPersons.length > 0 && allPersons[0].name) {
                setAppState(allPersons);
                setLoading(false);
            }
        });
    }, []);

    const matrixSize = 5;

    const matrix = [];
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [currentBoard, setCurrentBoard] = useState(null);

    for (let i = 0; i < matrixSize; i++) { //сюда будут приходить все животные
        const row = [];
        for (let j = 0; j < matrixSize; j++) {
            row.push(null)
        }
        matrix.push(row);
    }

    function dragStartHandler(e, animal, board) {
        setCurrentAnimal(animal)
        setCurrentBoard(board)
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    for(let k = 0; k < appState.length; k++) {
        for (let i = 0; i < matrixSize; i++) {
            for (let j = 0; j < matrixSize; j++) {
                if (appState.length > 0) {
                    if (j === (appState[k].id - 1) % matrixSize && i === Math.floor((appState[k].id - 1) / matrixSize)) {
                        console.log( Math.floor(appState[k].id / matrixSize),(appState[k].id) / matrixSize, appState[k].name)
                        matrix[i][j] = <div draggable={"true"}
                                            className={"items"}>{appState[k].name}</div>;
                    }
                }
            }
        }
    }

    function dropHandler(e, board, animal) {
        e.preventDefault();
        console.log(board)
        const currentIndex = currentBoard.indexOf(currentAnimal)
        currentBoard.splice(currentIndex, 1)
        const dropIndex = board.indexOf(animal)
        board.splice(dropIndex + 1, 0, currentAnimal)
        setAppState(appState.map(b => {
            // if(b.id === appState)
            // if(b.id === currentBoard.id) {
            //     return currentBoard;
            // }
            return b;
        }))


    }

    function dragEndHandler(e) {

    }

    function dragLeaveHandler(e) {

    }

    return (
        <table className="table">
            {matrix.map((row, rowIndex) => (
                <tr
                    key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <td
                            onDragStart={(e) => dragStartHandler(e, appState[rowIndex * matrixSize + colIndex], matrix[rowIndex][colIndex])}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, matrix[rowIndex][colIndex], appState[rowIndex * matrixSize + colIndex])}//у аппстейта нужно обратно конвертировать из двух точек в одну
                            key={`col-${colIndex}`}
                            className="k"
                            onDragEnd={(e) => dragEndHandler(e)}
                        >
                            {matrix[rowIndex][colIndex]}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
}

export default Matrix;