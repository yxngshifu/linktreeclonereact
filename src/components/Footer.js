import React from 'react'

const Footer= props =>{
    const {
        text,

    }=props 

  

    const myStyles =({
        Footer:{
            fontfamily:'monaco',
            fontsize:'12px',
            color:'black',
            margin:'15px 15px 0px 15px'
        }
    })

return( 
     <img style={{'maxHeight':'275px','borderRadius':'200px','margin':'45px'}
}src={'./components/vector.png'} alt='profile pic'/>,
    <div>
      <p style={myStyles.Footer}>{text}</p>
    </div>
)
}
export default Footer