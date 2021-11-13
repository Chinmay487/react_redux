import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement} from './store/actions/upDown'

const App = () => {

    const dispatch = useDispatch()
    const myState = useSelector((state)=>{
        return state.changeTheNumber
    })

    return (
        <>
            <h1>Hello There</h1>
            <button onClick={()=>{dispatch(decrement())}} >decrement</button>
            <input type="text" value={myState}/>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
        </>
    )
}

export default App;