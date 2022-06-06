const EmpData ={
  Employee_detail : []
}

const EmpReducer = (state=EmpData,action)=>{
  console.log("actio",action.payload);

switch (action.type) 
{
  case "AddEmployee":
    return {
      ...state,
      Employee_detail:state.Employee_detail.concat(action.payload)
    }
    case "DelEmp":
      const emp_Id = state.Employee_detail.filter((a) =>{
        if (a.empId != action.payload){
          return a
        }
      })
      return {
        ...state,
        Employee_detail:emp_Id

      }

      case "UptEmp":
        console.log("clicked case uptemp");
        const empDetail = state.Employee_detail.find((empData)=> empData.empId == action.payload.empId)
        console.log("object",empDetail);
        empDetail.empName = action.payload.empName
        console.log("fddd");
        const newEmployee = state.Employee_detail.map((detail) => {
          if (detail.empId == action.payload.empId){
            return empDetail
          } 
          else{
            return detail

          }
        })
        return {
          ...state,
          Employee_detail:newEmployee
        }

  
    default :
    return state

}
}
export default EmpReducer;
