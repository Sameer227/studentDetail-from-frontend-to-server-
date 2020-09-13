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
        text:""
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
       
        console.log("form submitted")
        console.log("email = ", this.state.Email, "/n Name=", this.state.Name, "\n Branch = ", this.state.Branch, "/n text=", this.state.text,"/n Roll_No=", this.state.Roll_No); 
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',() => 
        {
            console.log(xhr.responseText);
        });
        xhr.open('POST','http://localhost:9000/mywebsite');
        xhr.setRequestHeader("Content-Type", "application/json")
        var data = JSON.stringify({"Email": this.state.Email,
        "Branch": this.state.Branch,
        "Name": this.state.Name,
        "Roll_No": this.state.Roll_No,
        "text": this.state.text
        });
        

        console.log("this is data",typeof data);
            xhr.send(data)
            console.log("handle submit has been called"+ this.state.Email);
       
      
       
           let reg =  /^([a-zA-Z0-9]+)@([a-z\.-]+)com$/;
           if(reg.test(this.state.Email))   
           {console.log("email verified")
           alert("form submitted");}
           else{
               alert("please enter valid email address")
           }
      
    }
    




    render(){
        return(
            <div>
                <form onSubmit ={this.submitHandle}>
                Name:<input type="text" id="Name" onChange= {this.handleChanger}/><br /><br/>
                Roll_No:<input type="text" id="Roll_No" onChange= {this.handleChanger}/><br /><br/>
                Branch:<input type="text" id="Branch" onChange= {this.handleChanger}/><br /><br/>
                Email:<input type="text" id="Email" onChange= {this.handleChanger}/><br /><br/>
                text:<input type="text" id="text" onChange= {this.handleChanger}/><br /><br/>
                submit:<input type="submit" id="submit" />
                </form>
            </div>
        )
    }
    }