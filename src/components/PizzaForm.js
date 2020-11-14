import React from "react";
// import {useRouteMatch} from "react-router-dom"




export default function PizzaForm(props){
    const { values, error, submit, change } = props;
     
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
      };

    return(
        <form className="form-container" onSubmit={onSubmit}>
            <h3>Name</h3>
            <label>
                <input type="text" name="name" value={values.name} onChange={onChange}
                ></input>
            {/* ////////// DROPDOWN ////////// */}
            </label>
            <h3>Pizza Size</h3>
            <label>
              <select name="size" value={values.size} onChange={onChange}>
              <option value="">--select---</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              </select>
            {/* ////////// RADIO BUTTONS ////////// */}
            </label>
            <h3>Choice of Sauce</h3>
            <label htmlFor="bbqSauce">BBQ Sauce</label>
                <input type="radio" name="sauce" value="bbqSauce" checked={values.sauce === "bbqSauce"} onChange={onChange}></input>
                <br/>
            <label htmlFor="garlicRanch">Garlic Ranch</label>
                <input type="radio" name="sauce" value="garlicRanch" checked={values.sauce === "garlicRanch"} onChange={onChange}></input>
                <br/>
            <label htmlFor="spinachAlfredo">Spinach Alfredo</label>
                <input type="radio" name="sauce" value="spinachAlfredo" checked={values.sauce === "spinachAlfredo"} onChange={onChange}></input>
                <br/>
            <label htmlFor="buffalo">Buffalo</label>
                <input type="radio" name="sauce" value="buffalo" checked={values.sauce === "buffalo"} onChange={onChange}></input>
             {/* ////////// CHECKBOXES ////////// */}   
            <h3>Add Toppings</h3>
            <label htmlFor="pepperoni">Pepperoni</label>
                <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange}></input>
                <br/>
            <label htmlFor="italianSauge">Italian Sauge</label>
                <input type="checkbox" name="italianSauge" checked={values.italiaSauge} onChange={onChange}></input>
                <br/>
            <label htmlFor="Onions">Onions</label>
                <input type="checkbox" name="onions" checked={values.onions} onChange={onChange}></input>
                <br/>
            <label htmlFor="extraCheese">Extra cheese</label>
                <input type="checkbox" name="extraCheese" checked={values.extraCheese} onChange={onChange}></input>
            
            <h3>Choice OF Substitute</h3>
            <label>Gluten Free Crost
                <input type="checkbox" name="substitute" value={values.substitute} 
                ></input>
            </label>
            <h3>Special Instruction</h3>
            <label>
                <input type="text" name="specialIns" value={values.specialIns} onChange={onChange}></input>
            </label>
            <br/>
            <button className="addOrderBtn">Add to Order</button>
        </form>
    )
};