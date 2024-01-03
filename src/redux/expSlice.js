import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenditure: []
}

const expSlice = createSlice({
    name: "expenditure",
    initialState,
    reducers: {
        //actions
        addExp: (state, action) => {
            console.log("state", state.expenditure, "action", action.payload)
            let newData = state.expenditure.push({ id: Date.now(), category: action.payload })
            console.log("newData", newData)
            console.log("state", state, "action", action)

        },
        deleteExp: (state, action) => {
            state.expenditure = state.expenditure.filter((expend) => {
                console.log(expend.id)
                return expend.id !== action.payload
            }
            )
            console.log("payload id", action.payload)

        }
    }
})

export const { addExp, deleteExp } = expSlice.actions

export default expSlice.reducer