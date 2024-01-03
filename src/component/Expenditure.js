import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addExp } from '../redux/expSlice'

function Expenditure() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()



    const addNewExp = () => {
        console.log(inputRef.current.value)
        let newExp = inputRef.current.value
        console.log(newExp)
        dispatch(addExp(newExp))
    }
    return (
        <div>
            <h1>Expenditure</h1>
            <input type="text" ref={inputRef} />
            <button onClick={addNewExp}>Add Expenditure</button>
        </div>
    )
}

export default Expenditure