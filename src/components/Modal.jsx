import React, {  Fragment, useEffect } from 'react'
import MButton from 'components/Button'
import { render } from 'react-dom'
export default function Modal() {
    const handleClick = (e) => {
        var dom = document.getElementById('modal');
        dom.classList.remove('invisible');
    }
    const view = (
        <Fragment>
            <div className='h-screen w-screen fixed inset-0 bg-black opacity-20'>

            </div>
            <div className='z-10 text-red-500 fixed inset-0 m-auto inline-block'>
                fuck
            </div>
        </Fragment>
        
    )
    useEffect(() => {
        var dom = document.createElement('div');
        dom.classList.add('invisible');
        dom.id = 'modal';
        document.body.appendChild(dom);
        render(view,dom)
        return ()=>{document.body.removeChild(dom)}
    }, [])
    return (
        <MButton onClick={handleClick}>
            打开模态
        </MButton>
    )
}
