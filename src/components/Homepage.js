import React from "react"
import { findByLabelText } from "@testing-library/react"
import {NavLink} from 'react-router-dom'

function Homepage(){
    return(
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{width: '100%'}}>
                <img style={{width: '40%'}} src="https://target.scene7.com/is/image/Target/GUEST_fb4a0030-ccb8-442d-8dc6-41dd7e93d089?wid=1698&hei=1698&fmt=webp" />
            </div>
            <NavLink to={`orderpizza`}><button style={{width: '100%'}}>Order NOW</button></NavLink>
        </div>
    )
}

export default Homepage