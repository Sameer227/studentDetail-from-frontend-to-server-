import React, {Component} from 'react';

export default class form extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
          
           email:"",
           subject:"",
            text:"",
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
        console.log("email = ", this.state.email, "/n subject=", this.state.subject, "\n message = ", this.state.message); 
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',() => 
        {
            console.log(xhr.responseText);
        });
        xhr.open('POST','http://localhost:9000/mywebsite');
        xhr.setRequestHeader("Content-Type", "application/json")
        var data = JSON.stringify({"email": this.state.email,
        "subject": this.state.subject,
        "message": this.state.text
        });
        

        console.log("this is data",typeof data);
            xhr.send(data)
            console.log("handle submit has been called"+ this.state.email);
       
      
       
           let reg =  /^([a-zA-Z0-9]+)@([a-z\.-]+)com$/;
           if(reg.test(this.state.email))   
           {console.log("email verified")
           alert("form submitted");}
           else{
               alert("please enter valid email address")
           }
      
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandle} >
                    Email:<input type="text" id="email" onChange= {this.handleChanger}/><br /><br/>
                    subject:<input type="text" id="subject" onChange= {this.handleChanger}/><br /><br/>
                    text:<input type="text" id="text" onChange= {this.handleChanger}/><br /><br/>
                    submit:<input type="submit" id="submit" />

                </form>
            </div>

        ) 
    }
    
}