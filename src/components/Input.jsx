import React,{createElement, useState} from 'react'

export default function Input(props) {
    console.log("Ipnut", props)

    const handleKeyEnter = (e) => {
        if (e.keyCode == 13) {
            props.enter(e);
        }
    }

    return (
        <input type="text"
            className={`
            border-2 rounded-md border-gray-400
            focus:outline-none focus:ring-1 focus:ring-black focus:border-black
            ${props.full ? 'w-full' : ''}
            ${props.className || ''}
            `}   
            value={props.value}
            onChange={props.onChange}
            onKeyUp={handleKeyEnter}
            placeholder={props.placeholder}
        />
    )
}
