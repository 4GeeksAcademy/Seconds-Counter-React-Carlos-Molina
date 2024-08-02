import React from "react";
import ReactDOM from "react-dom/client";

let counter = 0;
let containerApp = ReactDOM.createRoot(document.getElementById('app'))
setInterval (() => {
    counter++,
    containerApp.render(<Home/>);
}, 1000);

function Contador (props) {
    return (<div className="contadorCompleto text-white">
        <div className="iconoReloj"> ⏱️ </div>
        <div className="centenasMillar"> {Math.floor((counter/100000)%10)} </div>
        <div className="decenasMillar"> {Math.floor((counter/10000)%10)} </div>
        <div className="unidadesMillar"> {Math.floor((counter/1000)%10)} </div>
        <div className="centenas"> {Math.floor((counter/100)%10)} </div>
        <div className="decenas"> {Math.floor((counter/10)%10)} </div>
        <div className="unidades"> {Math.floor(counter%10)} </div>
    </div>)
}

export default Contador;
