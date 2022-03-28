import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";

export function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Technologies/>
        </div>
    );
}



