import React, { Component } from 'react'
export default class EditEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
            newEmployee:"",
            isVisible : false,
            Emp_Id:null
        }
    }

    editClick(){
        this.setState({isVisible:true})
    }

    handleUpdate(event){
      console.log("object");
      this.setState({newEmployee:event.target.value})
    }

    componentDidMount(){
      this.setState({Emp_Id:this.props.data.empId})
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //   // Rendering the component only if 
    //   // passed props value is changed
    //   console.log(6666, nextProps, nextState)
    //   if (nextProps.empId == this.props.empId) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    componentDidUpdate(pP,pS){
      if (pS.isVisible == false && this.state.newEmployee == ""){
        this.setState({newEmployee:this.props.data.empName})
      }

      if (pS.isVisible == true && this.state.newEmployee == pS.newEmployee){
        this.setState({isVisible:false})
      }
    }

  render() {
    console.log(5656,"render");
    return (
            <div>
              {this.state.isVisible?
              <div><br /><br />
                <input type="text" value={this.state.newEmployee} onChange={this.handleUpdate.bind(this)}/>  
                <button className='btn btn-primary' onClick={this.props.Update_Employee.bind(this,this.state.Emp_Id,this.state.newEmployee)}>Update</button>
                </div>
               :
               <div>
                    <p>{this.props.data.empId}</p>
                    <p>{this.props.data.empName}</p>
                    <div>
                    <button onClick={this.props.Delete_Employee.bind(this,this.props.data.empId)}>Delete</button>
                    <button onClick={this.editClick.bind(this)}> Edit</button>
                    </div>
                    </div>
  }
      </div>
    )
  }
}
