import React from "react";
import {useHistory} from "react-router-dom";
// import PizzaForm from "./PizzaForm"



export default function Home(){
    const history = useHistory();
    const routeToBuild = () => {
        console.log(history, "HISTORY");
        history.push("/Build-pizza")
    }

    return(
        <div className="home-wrapper">
            
            <button onClick={routeToBuild} className="buil-pizza-btn">
                Build your pizza!
            </button>
            
        </div>
    )
}