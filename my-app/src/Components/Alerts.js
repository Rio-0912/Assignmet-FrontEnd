import React from 'react'

const Alerts = (props) => {
  return (
    <div>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong> {props.alert.type}</strong>{props.alert.msg}
                    
            </div>}
    </div>
  )
}

export default Alerts