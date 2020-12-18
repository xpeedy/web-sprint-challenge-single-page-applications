import React from "react";
import { useHistory } from "react-router-dom"
import Styled from "styled-components";




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
    
    const history = useHistory();
      const routeToOrderDetails = () => {
        history.push("/OrderDetails")
    }
    

    return(
        <FormContainer>
        <form className="form-container" onSubmit={onSubmit}>
            <h3>Name</h3>
            <label>
                <input type="text" name="name" value={values.name} onChange={onChange}
            ></input>
            {error.name ? <div>{error.name}</div> : ""}
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
              {error.size ? <div>{error.size}</div> : ""}

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
            {error.sauce ? <div>{error.sauce}</div> : ""}

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
            <label>
                <p>Qty</p>
                <select name="Qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            <button onClick={routeToOrderDetails} className="addOrderBtn">Add to Order</button>
        </form>
        </FormContainer>
    )
};

const FormContainer = Styled.div`
/* border: solid black; */
padding: 4%;
display: flex;
justify-content: center;


.addOrderBtn {
    width: 70%;
}

`