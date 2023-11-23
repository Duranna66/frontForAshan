import React, {useState} from 'react';

function InputPrison({size}) {
    const [prison, setPrison] = useState(0)
    const increment = () =>
        setPrison(prison + 1)
    return (
        <div>
        <form>
        <label>кол-во вальеров {prison}</label>
        <input className={"myinput"}
               onChange={(e) => setPrison(e.target.value)}
        ></input>
            <button onClick={increment}>submit</button>
        </form>
        </div>
    );
}

export default InputPrison;