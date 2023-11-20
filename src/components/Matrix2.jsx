import React, {useEffect, useState} from 'react';
import axios from "axios";
import List from "./List";
import Button from "./Button";


function MatrixTest({ size, appState, currentItem, setCurrentItem }) {
    // const [appState, setAppState] = useState([])
    // useEffect(() => {
    //     const apiUrl = "http://localhost:8080/search/all";
    //     axios.get(apiUrl).then((resp) => {
    //         const allPersons = resp.data;
    //         setAppState(allPersons);
    //     });
    // }, []);
    let matrix = [];
    // const [currentItem, setCurrentItem] = useState([])
    for (let i = 0; i < size; i++) {
        matrix.push([]);
        for (let j = 0; j < size; j++) {
            matrix[i].push(1);
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix[i][j] = [[{id:0, prison_id: i * size + j + 1, animal_id: 0, name:''}, {id:1, prison_id: i * size + j + 1, animal_id: 0, name:''}]]
        }
    }
    let [flag, setFlag] = useState(false)
    for(let k = 0; k < appState.length; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const res1 = [];
                 let tmp = [[{id:0, prison_id: 0, animal_id: 0, name:''}, {id:1, prison_id: 0, animal_id: 0, name:''}]]
                if (appState.length > 0 && j === (appState[k].phoneNumber - 1) % size && i === Math.floor((appState[k].phoneNumber - 1) / size)) {
                     let index = matrix[i][j].map(x => x.map(y => {if(y.name === '') {
                         return y.id
                     }}))
                    if(index[0][0] === 0) {
                        tmp = [[{id:0, prison_id: appState[k].phoneNumber, animal_id: appState[k].id, name: appState[k].name}, {id:1, prison_id: matrix[i][j][0][1].prison_id,  animal_id: matrix[i][j][0][1].id ,name: matrix[i][j][0][1].name}]]

                    }
                    else if(index[0][1] === 1) {
                        tmp = [[{id:0, prison_id: matrix[i][j][0][0].prison_id , animal_id: matrix[i][j][0][0].animal_id , name: matrix[i][j][0][0].name}, {id:1, prison_id: appState[k].phoneNumber,  animal_id: appState[k].id, name: appState[k].name}]]
                    }
                    matrix[i][j] = tmp
                }
            }
        }
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragLeaveHandler(e) {

    }

    function dragStartHandler(e, itemr) {
        // console.log(board) //двумерный массив массив, с животными с которого взяли
        // console.log(itemr) //массив с данными животного, которого взяли
        setCurrentItem(itemr);
    }

    function dragEndHandler(e) {

    }

    function dropHandler(e, itemr) {
        e.preventDefault()
        // console.log(board) //двумерный массив , с животными куда положили
        // console.log(itemr) //массив с данными животного, в которого положили
        // console.log(currentBoard) //двумерный массив, с животными с которого взяли
        // console.log(currentItem) //массив с данными животного, которого взяли
        let k1 = -1 //c кем обмениваемся
        let k2 = -1;// кого обмениваем
        if(itemr === currentItem) {
            return
        }
        for(let i = 0; i < appState.length; i++) {
            if(appState[i].id === itemr.animal_id) {
                k1 = i;
                break;
            }
        }
        for(let i = 0; i < appState.length; i++) {
            if(appState[i].id === currentItem.animal_id) {
                k2 = i;
                break;
            }
        }
        if(k1 !== -1) {
            let tmp = appState[k1].phoneNumber;
            appState[k1].phoneNumber = appState[k2].phoneNumber
            appState[k2].phoneNumber = tmp
            // setCurrentBoard(board)
        }
        else { //itemr is empty['', 'prison_id', '']
            appState[k2].phoneNumber = itemr.prison_id
            console.log(itemr.prison_id)

        }
        // console.log('app:',appState)
        setCurrentItem(itemr);
        // setCurrentBoard(board)
    }
    return (
        <table className="item">
            {matrix.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <td className="k" key={`cell-${colIndex}`}>
                            {matrix[rowIndex][colIndex].map(x =>
                                x.map(r => {
                                    if (r.name !== '') {
                                        return <div
                                            draggable={true}
                                            onDragOver={(e) => dragOverHandler(e, r)}
                                            onDragLeave={(e) => dragLeaveHandler(e)}
                                            onDragStart={(e) => dragStartHandler(e, r)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDrop={(e) => dropHandler(e, r)}
                                            className={"items"}>{r.name} {x.id}</div>;
                                    } else {
                                        return <div className={"empty"} onDrop={(e) => dropHandler(e, r)}
                                                    onDragOver={(e) => dragOverHandler(e)}
                                        >{r.name}</div>
                                    }
                                })
                            )}
                        </td>
                    ))}
                </tr>
            ))}
            <Button></Button>
        </table>

    );
}

export default MatrixTest;
