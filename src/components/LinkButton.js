import React from "react"
import { Button } from "reactstrap"

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
    }
   
    
})
 return(
     <div style={myStyles.myMargin}>
        <h3 style={myStyles.btnText}>{title}</h3>
        <Button style={myStyles.btnText}color="primary" class='btn btn-primary btn-lg'
        href={link}target='blank'>
            {name}</Button>
     </div>
 )

}
export default LinkButton