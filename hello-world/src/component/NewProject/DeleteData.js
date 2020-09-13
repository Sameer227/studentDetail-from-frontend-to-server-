
import React, {Component} from 'react';

export default class form extends Component{

    constructor(props)
    {
        super(props);

    this.status = {

        Name:"",
        Roll_No:"",
        Branch:"",
        Email:"",
        text:"",
        editRoll_No:""
    }

    this.handleChanger= this.handleChanger.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
}
handleChanger(e)
{
    this.setState({[e.target.id]: e.target.value })
}
submitHandle(e)
    {
        e.preventDefault();
        alert("Data is Deleted successfully")
       
        console.log("form submitted")
        console.log( "/n Roll_No=", this.state.Roll_No); 
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',() => 
        {
            console.log(xhr.responseText);
        });
        xhr.open('POST','http://localhost:4500/deletedata');
        xhr.setRequestHeader("Content-Type", "application/json")
        var data = JSON.stringify({
        "Roll_No": this.state.Roll_No
        
        });
        

        console.log("this is data",typeof data);
            xhr.send(data)
            console.log("handle submit has been called"+ this.state.Email);
  
    }
    
    render(){
        return(
            <div>
            <h2>DeleteData</h2>
            <h4>enter the Roll_No whichyou want to be deleted.</h4>
            
                <form onSubmit ={this.submitHandle}>
               
                Roll_No:<input type="text" id="Roll_No" onChange= {this.handleChanger}/><br /><br/>
               
                submit:<input type="submit" id="submit" />
                </form>
            </div>
        )
    }
    }