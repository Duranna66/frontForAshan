import React, {useEffect, useState} from 'react';
import axios from "axios";

function MatrixTest({ size }) {
    const [appState, setAppState] = useState([])
    useEffect(() => {
        const apiUrl = "http://localhost:8080/search/all";
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, []);
    let matrix = [];
    const [currentBoard, setCurrentBoard] = useState([])
    const [currentItem, setCurrentItem] = useState([])
    for (let i = 0; i < size; i++) {
        matrix.push([]);
        for (let j = 0; j < size; j++) {
            matrix[i].push(1);
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix[i][j] = [{id:2, item: [{id: 1, name:''}]}];
        }
    }

    for(let k = 0; k < appState.length; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const res1 = [];
                let tmp = [{
                    id: "",
                    item: [{id: "", name: ""}, ] //let tmp = [[{id:1, name:''}, {id:1, name:''}]]
                }]
                // if (appState.length > 0 && j === (appState[k].phoneNumber - 1) % 3 && i === Math.floor((appState[k].phoneNumber - 1) / 3)) {
                //      tmp = [{
                //         id: appState[k].phoneNumber,
                //         item: [{id: appState[k].id, name: appState[k].name}]
                //     }]
                if (appState.length > 0 && j === (appState[k].phoneNumber - 1) % 3 && i === Math.floor((appState[k].phoneNumber - 1) / 3)) {
                    matrix[i][j] = [{id: appState[k].phoneNumber, item: [{id: appState[k].id, name: appState[k].name}]}];

                } else {
                    if(matrix[i][j] == null) {
                        matrix[i][j] = [{id: '', item: [{id: '', name: ''}]}];
                    }
                }
            }
        }
    }

    function dragOverHandler(e, board, item) {
        e.preventDefault()
    }

    function dragLeaveHandler(e) {

    }

    function dragStartHandler(e, board, item) {
        setCurrentItem(item);
        setCurrentBoard(board)
    }

    function dragEndHandler(e) {

    }

    function dropHandler(e, board, itemr) {
        e.preventDefault()


    }

    return (
        <table className="item">
            {matrix.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <td className="k" key={`cell-${colIndex}`}>
                            {matrix[rowIndex][colIndex].map(x =>
                                x.item.map(r => {
                                    if (r.name !== '') {
                                        return <div
                                            draggable={true}
                                            onDragOver={(e) => dragOverHandler(e, matrix[rowIndex][colIndex], r)}
                                            onDragLeave={(e) => dragLeaveHandler(e)}
                                            onDragStart={(e) => dragStartHandler(e, matrix[rowIndex][colIndex], r)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDrop={(e) => dropHandler(e, matrix[rowIndex][colIndex], r)}
                                            className={"items"}>{r.name} {x.id}</div>;
                                    } else {
                                        return <div className={"empty"} onDrop={(e) => dropHandler(e, matrix[rowIndex][colIndex], r)}
                                                    onDragOver={(e) => dragOverHandler(e, matrix[rowIndex][colIndex], r)}
                                        >{r.name}</div>
                                    }
                                })
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
}

export default MatrixTest;
