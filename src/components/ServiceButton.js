import React from 'react'

function ServiceButton(props) {
    return (
        <div className="button service-button">
            <img className="logo" src={props.image}/>
            <a href={props.linkUrl}>{props.label}</a>
        </div>
    )
  }
  
export default ServiceButton;