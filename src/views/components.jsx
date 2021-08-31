import React,{useState,Suspense,useCallback,useMemo, createElement, Fragment, useEffect} from 'react'
import MInput from 'components/Input'
import ErrorBoundary from '../components/ErrorBoundary'
import { JsonTable } from 'react-json-to-html';
import { Route, Switch, NavLink, Link, useRouteMatch } from 'react-router-dom'
import MButtonGroup from 'components/ButtonGroup'

export default function View({}) {

    let { path, url } = useRouteMatch();

    const [componentName, setComponentName] = useState("Button");


    const [state, setState] = useState(1)
    const [componentProps, setComponentProps] = useState("{}")
   

    const correctComponentProps = useMemo(() => {
        try {
            return JSON.parse(componentProps);
        } catch (error) {
            return {}
        }

    }, [state]);


    const DynamicComponent = useMemo(() => React.lazy(() => import(`../components/${componentName}.jsx`)), [state])
    const handleChangeComponentProps = useCallback((e) => { setComponentProps(e.target.value) }, []);
    const handleChangeComponentName = useCallback((e) => {  setComponentName(e.target.value) }, []);
    const handleComponentChange = useCallback(() => { setState(-state) }, [state])

    

    const selectGroup = ['组件名修改', '组件属性修改'];
    const [select, setSelect] = useState(0);
    const GetSelect = useCallback((select) => { setSelect(select) }, [])



    const SelectView = useCallback((props) => {
        console.log(props);
        const { componentName, componentProps ,handleComponentChange} = props.updateDep;
        switch (select) {
            case 0:
                return <MInput value={componentName} onChange={handleChangeComponentName} enter={handleComponentChange} full></MInput>
                break;
            case 1:
                return <MInput value={componentProps} onChange={handleChangeComponentProps} enter={handleComponentChange} full></MInput>
                break;
            default:
                return <div>你没有写选择后的结果</div>
                break;
        }
    }, [select]);
   

    return (
        <Fragment>
            {
            /* <div className='flex justify-around'>
                <div>
                    {componentName}
                </div>
                <div>
                    {state}
                </div>
                <div>
                    {componentProps}
                </div>
                <input type="text" value={correctComponentProps } readOnly />
            </div>
             */
            }

            <div className='flex h-80 justify-start border-2 border-black w-screen'>
                <div className='w-2/3 flex justify-center items-center h-80 flex-shrink-0'>
                    <ErrorBoundary>
                        <Suspense fallback={<div>loding...</div>}>
                            {createElement(DynamicComponent,correctComponentProps)}
                        </Suspense>
                    </ErrorBoundary>
                </div>
                <div className='flex-grow-1 flex-shrink-0 border-l-2 border-black'>
                    <JsonTable json={correctComponentProps}></JsonTable>
                </div>
            </div>

          
           

            
         
            
            <MButtonGroup getSelect={GetSelect} selectGroup={selectGroup} select={select}></MButtonGroup>
            <SelectView updateDep={ {componentName, componentProps,handleComponentChange} }/>
         
        </Fragment>
       
    )
}
