import React from 'react'
import Menu from './Menu'
export default function ProjectPage(props) {
    console.log(props)
    return (
        <>
            <Menu/>
            <h2 className="title">{props.location.projectProps.name}</h2>
            <p>{props.location.projectProps.text}</p>
        </>
    )
}
