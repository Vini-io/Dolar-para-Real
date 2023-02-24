import { useState } from "react";
import "./style.css"
import Result from "./result/script"
import Inputs from "./inputs/script"

const Container = function () {

    const [dolar, setDolar] = useState('');

    function sendConverte(valor) {
        let convert = Number(valor).toFixed(2)
        setDolar(convert)
    }

    return (
        <div className="container">
            <Result res={dolar}></Result>
            <Inputs sendConverte={sendConverte}></Inputs>

        </div>
    )
}

export default Container;
