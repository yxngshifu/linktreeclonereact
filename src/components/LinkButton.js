import React from "react"
import { Button } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css'

const LinkButton =props=>{

const {
    name,
    title,
    link
} = props

const myStyles=({
    myMargin:{
        margin:'20px'
    },
    btnText:{
        fontFamily: 'arial',
        margin:'10px',
        fontSize:'15px',
        color:'black'
    },
      btn: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)",
            fontFamily: "Monaco",
            width: "1152px",
            
      }
   
    
})
 return(
     <div style={myStyles.myMargin}>
        <h3 style={myStyles.btnText}>{title}</h3>
        <Button style={myStyles.btnText} color="primary" class='btn btn-primary btn-lg'
        href={link}target='blank'>
            {name}</Button>
     </div>
 )

}
export default LinkButton