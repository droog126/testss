import React,{memo} from 'react'

export default memo((props) => {
    console.log("Button", props);

    return (
        <>
            <button className='
            rounded-md border-2 border-blue-500 p-1
            bg-blue-500 text-white
            hover:ring-1
        '
                onClick={props.onClick}
            >
                {!props.hasOwnProperty('children') ? Math.random() : props.children}
            </button>
        </>
    )
}
)

   
