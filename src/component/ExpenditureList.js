import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExp } from '../redux/expSlice'

function ExpenditureList() {
    const dispatch = useDispatch()
    //useSelector((state) => state.reducerName.expSliceName)
    const expenditureData = useSelector((state) => state.myExpenditure.expenditure)

    console.log("expenditureData", expenditureData)

    const deleteExpenditure = (id) => {
        dispatch(deleteExp(id))
    }
    return (
        <div>ExpenditureList
            {expenditureData.map((item) => (
                <li key={item.id}>{item.category}
                    <button onClick={() => deleteExpenditure(item.id)}>Delete</button>
                </li>
            ))}
        </div>
    )
}

export default ExpenditureList