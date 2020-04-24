import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Order from './Order'
import Form from './Form'

////////// NEW DEPENDENCIES FOR TODAY //////////
import * as yup from 'yup'
const initialOrders=[
    {
        id: uuid(),
        name: 'Michael',
        instructions: '',
        pizzaSize: 'large',
        toppings: [
            'pepperoni',
            'sausage'
        ]
    },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instructions: '',
  ///// DROPDOWN /////
  pizzaSize: '',
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    pineapple: false
  },
}

// 👉 the shape of the validation errors object
const initialFormErrors = {
  name: '',
  pizzaSize: '',
}

// 🔥 STEP 7 - WE NEED TO BUILD A SCHEMA FOR VALIDATION
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required!')
    .min(2, 'Your name must have at least 2 characters!'),
  pizzaSize: yup
    .string()
    .required('Size is Required')
    .matches(/(small|medium|large)/, 'Please choose a Size for your Pizza!'),
  instructions: yup
    .string()
})

export default function PizzaForm() {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  // 🔥 STEP 1 - WE NEED STATE TO KEEP TRACK OF WHETHER SUBMIT BUTTON IS DISABLED!
  const [formDisabled, setFormDisabled] = useState(true)

  // 🔥 STEP 2 - WE NEED STATE TO KEEP TRACK OF THE VALIDATION ERRORS!
  const [formErrors, setFormErrors] = useState(initialFormErrors)



  useEffect(() => {
    // 🔥 STEP 8 - IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
    // and use them to enable/disable the submit button
    formSchema.isValid(formValues)
      .then(valid => { // either true or false
        setFormDisabled(!valid)
      })
  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault()
    const newOrder = {
      id: uuid(),
      name: formValues.name,
      instructions: formValues.instructions,
      pizzaSize: formValues.pizzaSize,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }

    // 🔥 STEP 6 - WE NEED TO POST OUR NEW FRIEND TO THE API!
    setOrders([...orders, newOrder])
    setFormValues(initialFormValues)
  }

  const onInputChange = evt => {
    // PULL THESE OUT AHEAD OF TIME
    const name = evt.target.name
    const value = evt.target.value

    // 🔥 STEP 9 - IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
    // and update the form errors slice of state (so the form can display errors)
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        // yoohoo, validates :)
        // CLEAR ERROR
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        // dangit, does not validate :(
        // SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  return (
    <div className='container' style={{width: '100%'}}>
      <header><h1>MAKE YOUR OWN PIZZA >:)</h1></header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        ////////// NEW PROPS FOR TODAY //////////
        disabled={formDisabled}
        errors={formErrors}
      />
        
      {
        orders.map(function(order){
            return (
                <Order key={order.id} details={order} />
            )
        })
      }
    </div>
  )
}
