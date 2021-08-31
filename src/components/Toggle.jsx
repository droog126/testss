import React,{useState,useEffect,useRef, Fragment} from 'react'

export default function Toggle(props) {
    const [value, setValue] = useState(false);
    const handleClick = () => {
        props.getValue && props.getValue(!value);
        setValue(!value);
    }
    return (
        <Fragment>
            <div className={`rounded-full cursor-pointer select-none w-10 transition-all transform-gpu duration-300 
                ${value ? "bg-green-500 " : "bg-gray-500"}
            `}
            onClick={handleClick}
            >
                <div className={` rounded-full w-4 h-4 transition-all duration-300 transform-gpu ${value ? "bg-blue-500 translate-x-6 " : "bg-red-500   "}`}>

                </div>
            </div>
        </Fragment>
        
    )
}
