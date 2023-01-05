import React from 'react'

function Alert(props) {
  return (
<div style={{height:'70px'}}>
   { props.alert &&  <div className={`alert  alert-${props.alert.ty}`} role="alert">
<strong>{props.alert.ty} : {props.alert.msg}</strong>
</div>}
</div>
    
  )
}

export default Alert
