export const Add_Employee = (empDetail) => {
    return {
        type:"AddEmployee",
        payload:empDetail
    }
}
export const Delete_Employee = (empId) => {
    return {
        type:"DelEmp",
        payload:empId
    }
}

export const Update_Employee = (empId, empName) => {
    return {
        type:"UptEmp",
        payload :{
            empName:empName,
            empId:empId
        }
    }

}