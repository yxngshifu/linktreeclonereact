import react from 'react'

const Footer= props =>{
    const {
        text,
        Footerpic
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
}src={Footerpic}/>,
    <div>
      <p style={myStyles.Footer}>{text}</p>
    </div>
)
}
export default Footer