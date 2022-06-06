import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Add_Employee, Delete_Employee ,Update_Employee} from '../redux/action/empAction';
import EditEmployee from './EditEmployee';
import { Link } from 'react-router-dom';


class Employee extends Component {
  constructor(props){
    super(props);
    this.state = {
      empDetail:[],
      empName:"",
      isvisble:false
    }
    this.Delete_Employee = this.Delete_Employee.bind(this)
    this.Update_Employee = this.Update_Employee.bind(this)

  }

EditClick(){
  this.setState({isvisble:true})
}

handleChange(event){
    console.log("clicked");
  this.setState({empName:event.target.value})
}

addEmployee(){
  const empInfo = {}
  const count = this.props.empDetail.length
  console.log("aaaa",this.props.empDetail.length);

  empInfo.empId = count+1
  empInfo.empName = this.state.empName
    this.props.Add_Employee(empInfo)

}
Delete_Employee(empId){
  console.log("object");
  this.props.Delete_Employee(empId)
}
Update_Employee(empId,empName){
  console.log("cccccc".empId,empName);
  this.props.Update_Employee(empId,empName)
}

  render() {
    return (
      
        <>
        <div>
            {/* <input type="text" onChange={this.handleChange.bind(this)}/>
            <button onClick={this.addEmployee.bind(this)}>AddEmployee</button> */}
            
            
            </div>
            <Link to="/api" >API Data</Link>

            {this.props.empDetail.map((item,index) => {
                return (
                  
                    <div key = {index}>
                      
                    
                      
                       
                        <EditEmployee data={item} Update_Employee={this.Update_Employee} Delete_Employee={this.Delete_Employee} />
                    </div>
                )
            })}
        </>
    )
  }
     
}

const mapStateToProps = (state) =>{
    return {
    empDetail:state.EmpReducer.Employee_detail
    }

}

const mapDispatchToProps = {
    Add_Employee,
    Delete_Employee,
    Update_Employee
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);