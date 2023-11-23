import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Matrix from "./components/Matrix";
import Matrix2 from "./components/Matrix2";
import MatrixTest from "./components/Matrix2";
import SaveButton from "./components/SaveButton";

function App() {
    const [appState, setAppState] = useState([])
    return (
        <div className="App">
            <MatrixTest size={3} appState={appState} setAppState={setAppState}></MatrixTest>
        </div>

    );
}

export default App;