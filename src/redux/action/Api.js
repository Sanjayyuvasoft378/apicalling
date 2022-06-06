import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      newName:"",
      isVisible:false
    };
    this.Add_Data = this.Add_data.bind(this)
    this.UPT_Data = this.UPT_Data.bind(this)
  }
  componentDidMount() {
    axios
      .get("https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api")
      .then((result) => this.setState({ data: result.data }));
  };
 

delete_data(id){
  axios.delete(`https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api/${id}`)
  console.log("object",id);
  const ids = this.state.data.filter((post) => {
    if  (post.id != id){
      return post
    }
  })
  this.setState({data:ids})

}



ChangeInput(event){
  console.log("clicked setstate");
  this.setState({newName:event.target.value})
}
Add_data(){
    const name = this.state.newName
    console.log("999",name)
    axios.post('https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api',{name})
        .then(response => {
          console.log(response.data);
        });
        let a = {name:name}
        console.log("911",a)
   let b = this.state.data.concat(a);
   this.setState({data:b});
  }

  Editclick(){
    this.setState({isVisible:true})
  }
UPT_Data(id,name){
  console.log("clicked");
  axios.put(`https://629d9b8fc6ef9335c0a0e2d5.mockapi.io/fake_api/`,{name}).then((result) => {
    console.log("object",result);
    const empDetail = this.state.data.find((empData)=> empData.id == id)
        empDetail.name = this.state.newName
        const newEmployee = this.state.data.map((detail) => {
          if (detail.id == id){
            return empDetail
          } 
          else{
            return detail

          }
        })
        this.setState({data:newEmployee})
  })}

    
        
  render() {
    return (
      <>
        <h2>Basic Table</h2>
        <p>Show All Data:</p> 
        <br />

        <input type="text" onChange={this.ChangeInput.bind(this)}/>
        <button onClick={this.Add_Data}>Add Data</button><br /><br />
        {/* <tr><th>Id</th></tr>
        <tr><td>Name</td></tr> */}
        {this.state.data.map((item,index) => {
           
            return (

      //  <th>name</th>
          <div key={index}>
              <div class="container">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}  
         
                     <img src={item.avatar} width="150px" height="150px"/>
                    </td> <td><br /> <button onClick={this.delete_data.bind(this,item.id)}>Delete</button></td>
                   
<td><button onClick={this.UPT_Data.bind(this,item.id,item.newName)}>Edit</button></td>
                  
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
