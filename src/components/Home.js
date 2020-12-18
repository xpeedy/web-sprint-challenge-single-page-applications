import React from "react";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";



export default function Home(){
    const history = useHistory();
    const routeToBuild = () => {
        console.log(history, "HISTORY");
        history.push("/PizzaForm")
    }

    return(
        <MainDiv className="home-wrapper">
            <div>
           
            <button onClick={routeToBuild} className="buil-pizza-btn">
                Build your pizza!
            </button>
            </div>
        </MainDiv>
    )
}


const MainDiv = Styled.div`
    background : url("https://assets.bonappetit.com/photos/5f9c346d93f8075300cb785b/8:5/w_4048,h_2530,c_limit/Basically-Pizza.jpg");
    padding : 15%;
    display : flex;
    justify-content : center;

    button {
        padding : 10%;
        width : 200%;
        cursor: pointer;
    }
`