import React from 'react'

function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    ////////// NEW PROPS FOR TODAY //////////
    disabled,
    errors,
  } = props

  return (
    <form>
      <h2>Pizza Form</h2>
      {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
      <div className='errors'>
        <p style={{color: 'red'}}>{errors.name}</p>
        <p style={{color: 'red'}}>{errors.pizzaSize}</p>
      </div>
      {/* ////////// TEXT INPUTS ////////// */}
      <label style={{display: 'block'}}>Your Name:&nbsp;
      <input
          value={values.name}
          onChange={onInputChange}
          name='name'
          type='text'
        /></label>

      {/* ////////// DROPDOWN ////////// */}
      <label style={{display: 'block'}}>Pizza Size:&nbsp;
        <select 
          value={values.pizzaSize}
          onChange={onInputChange}
          name='pizzaSize'
        >
          <option defaultValue=''>Please choose</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select></label>

      {/* ////////// CHECKBOXES ////////// */}
      <p style={{display: 'inline'}}>Toppings: </p>
      <label><input
        checked={values.toppings.pepperoni}
        onChange={onCheckboxChange}
        name='pepperoni'
        type="checkbox" /> Pepperoni</label>
      <label ><input
        checked={values.toppings.sausage}
        onChange={onCheckboxChange}
        name='sausage'
        type="checkbox" /> Sausage</label>
      <label ><input
        checked={values.toppings.bacon}
        onChange={onCheckboxChange}
        name='bacon'
        type="checkbox" /> Bacon</label>
      <label><input
        checked={values.toppings.pineapple}
        onChange={onCheckboxChange}
        name='pineapple'
        type="checkbox" /> Pineapple</label>

        <label style={{display: 'block'}}>Special Instructions (Optional):&nbsp;
      <input
          value={values.instructions}
          onChange={onInputChange}
          name='instructions'
          type='text'
        /></label>

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
    </form>
  )
}

export default Form
