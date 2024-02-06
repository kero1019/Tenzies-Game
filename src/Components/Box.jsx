import React from 'react'
export default function Box(props){
    const style={
        backgroundColor: props.check ? "#59E391" :"#FFFFFF"
    }
    return(
        <h2  style={style}onClick={props.toggle}>{props.value}</h2>
    )
}