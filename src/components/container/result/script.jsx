import "./style.css"

const Result = function({res}){
    return(
        <div className="result">
            R$: <span className="value">{res}</span>
        </div>
    )
}

export default Result;