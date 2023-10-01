import _ from 'lodash'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { get, post } from '../../utils/request'
import { department, level } from '../../constants/options'

import {
    GET_EMPLOYEE_URL,
    CREATE_EMPLOYEE_URL,
    DELETE_EMPLOYEE_URL,
    UPDATE_EMPLOYEE_URL
} from '../../constants/urls'

import {
    GET_EMPLOYEE,
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from '../../constants/actions'

import {
    EmployeeInfo,
    EmployeeRequest,
    CreateRequest,
    DeleteRequest,
    UpdateRequest
} from '../../interface/employee'

export interface EmployeeState {
    employeeList: EmployeeInfo[]
}

const initialState: EmployeeState = {
    employeeList: []
}

export const getEmployeeAsync = createAsyncThunk(
    GET_EMPLOYEE,
    async (param: EmployeeRequest) => {
        const res = await get(GET_EMPLOYEE_URL, param)
        return res.data
    }
)

export const createEmployeeAsync = createAsyncThunk(
    CREATE_EMPLOYEE,
    async (param: CreateRequest) => {
        const res = await post(CREATE_EMPLOYEE_URL, param)
        return {
            name: param.name,
            department: department[param.departmentId],
            departmentId: param.departmentId,
            hiredate: param.hiredate,
            level: level[param.levelId],
            levelId: param.levelId,
            ...res.data
        }
    }
)

export const deleteEmployeeAsync = createAsyncThunk(
    DELETE_EMPLOYEE,
    async (param: DeleteRequest) => {
        await post(DELETE_EMPLOYEE_URL, param)
        return param.id
    }
)

export const updateEmployeeAsync = createAsyncThunk(
    UPDATE_EMPLOYEE,
    async (param: UpdateRequest) => {
        await post(UPDATE_EMPLOYEE_URL, param)
        return param
    }
)

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getEmployeeAsync.fulfilled, (state, action) => {
                state.employeeList = action.payload
            })
            .addCase(createEmployeeAsync.fulfilled, (state, action) => {
                state.employeeList = [action.payload, ...state.employeeList]
            })
            .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
                let reducedList = [...state.employeeList]
                _.remove(reducedList, (item) => item.id === action.payload)
                state.employeeList = reducedList
            })
            .addCase(updateEmployeeAsync.fulfilled, (state, action) => {
                let updatedList = [...state.employeeList]
                const item = action.payload
                const index = _.findIndex(updatedList, { id: item.id })
                updatedList[index] = {
                    id: item.id,
                    key: item.id,
                    name: item.name,
                    department: department[item.departmentId],
                    departmentId: item.departmentId,
                    hiredate: item.hiredate,
                    level: level[item.levelId],
                    levelId: item.levelId
                }
                state.employeeList = updatedList
            })
    }
})

export const selectEmployeeList = (state: RootState) => state.employee.employeeList

export default employeeSlice.reducer
