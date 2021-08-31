import React from 'react'

export default function Card(props) {
    return (
        <div className='border border-black'>
            {props.children ? props.children : '卡片'}
        </div>
    )
}
