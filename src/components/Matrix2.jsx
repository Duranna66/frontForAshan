import React from 'react';

function Matrix({ size }) {
    const matrix = [];

    // Создаем матрицу
    for (let i = 0; i < size; i++) {
        const row = [];
        const data = [{id:1, item:[{id:1, text:'qwe'}]},
            {id:2,item:[{id:1, text:'qwe1'}]},
            {id:3, item:[{id:1, text:'qwe2'}]},
            {id:4, item:[{id:1, text:'qwe3'}]},
            {id:3, item:[{id:1, text:'qwe5'}]}]
        for (let j = 0; j < size; j++) {
            if(i === 0 && j === 1) {
                row.push(<div className="items">{data.id}</div>);
            }
            else {
                row.push(null);
            }
        }
        matrix.push(row);
    }

    // Отрисовываем матрицу
    return (
        <table className="table">
            {matrix.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                        <td key={`col-${colIndex}`} className="k">
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
}

export default Matrix;