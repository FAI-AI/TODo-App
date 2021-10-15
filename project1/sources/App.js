import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./sources/Header.js";
import { Button} from "react-bootstrap"
import { BrowserRouter} from 'react-router-dom'

function App(){
return(
<div >
    <BrowserRouter>
    <Header />
        <h1>To-Do Example</h1>
        </BrowserRouter>
</div>

);

}
