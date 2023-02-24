import React, { useEffect, useState } from "react";
import "./style.css"

const Inputs = function ({ sendConverte }) {

    const [valor, setValor] = useState(1)
    const [dolar, setDolar] = useState('')

    useEffect(() => {
        sendConverte(valor * dolar)
    })

    useEffect(() => {
        datafetch()
        async function datafetch() {
            let oneDolar = await fetch("https://economia.awesomeapi.com.br/json/USD-BRL").then(res => { return res.json() }).then(json => { return json[0].ask * valor })
            setDolar(oneDolar)
            sendConverte(dolar)
        }
    }, [])

    return (
        <div className="inputs">
            <input type="number" onChange={converter} value={valor} placeholder="$ 0.00"></input>
        </div>
    )

    async function converter(e) {
        setValor(e.target.value)
        let dolarF = await fetch("https://economia.awesomeapi.com.br/json/USD-BRL").then(res => { return res.json() }).then(json => {
            return json[0].ask
        })
        setDolar(dolarF)
    }
}

export default Inputs;
