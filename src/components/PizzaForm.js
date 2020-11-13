import React from "react";
import {useRouteMatch} from "react-router-dom"


export default function PizzaForm(){

    function onsubmit(){
        submit();

    }

    return(
        <form className="form-container" onSubmit={onsubmit}>
            <h3>Name</h3>
            <label>
                <input type="text" name="name" value="" 
                ></input>
            </label>
            <h3>Pizza Size</h3>
            <label>
              <select name="size" value="" >
              <option value="">--select---</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              </select>
            </label>
            <h3>Choice of Sauce</h3>
            <label for="bbq-Sauce">BBQ Sauce</label>
                <input type="radio" name="BBq-Sauce" value="" ></input>
                <br/>
            <label for="garlic-ranch">Garlic Ranch</label>
                <input type="radio" name="garlic-ranch" value="" ></input>
                <br/>
            <label for="spinach-alfredo">Spinach Alfredo</label>
                <input type="radio" name="spinach-alfredo" value="" ></input>
                <br/>
            <label for="buffalo">Buffalo</label>
                <input type="radio" name="buffalo" value="" ></input>
                
            <h3>Add Toppings</h3>
            <label for="peperoni">Pepperoni</label>
                <input type="checkbox" name="peperoni" value="" ></input>
                <br/>
            <label for="italian-sauge">Italian Sauge</label>
                <input type="checkbox" name="italian-sauge" value="" ></input>
                <br/>
            <label for="Onions">Onions</label>
                <input type="checkbox" name="Onions" value="" ></input>
                <br/>
            <label for="Extra cheese">Extra cheese</label>
                <input type="checkbox" name="Extra cheese" value="" ></input>
            
            <h3>Choice OF Substitute</h3>
            <label>
                <input type="checkbox" name="" value="" 
                ></input>
            </label>
            <h3>Special Instruction</h3>
            <label>
                <input type="text" name="name" value="" 
                ></input>
            </label>
            <br/>
            <button className="addOrderBtn">Add to Order</button>
        </form>
    )
}