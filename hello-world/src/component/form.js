import React, {Component} from 'react';

export default class form extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            first_Name: "" ,
            last_Name: "",
            mobile_NO :"",
            email:"",
            branch:"",
            dept:"",
        }
        this.handleChanger= this.handleChanger.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    
    }
    handleChanger(e)

    {
        //console.log(this.state.mobile_NO);
        
        
        this.setState({[e.target.id]: e.target.value })
    }
    submitHandle(e)
    {
        e.preventDefault();
       
        console.log("form submitted")
       
      
       if (this.state.mobile_NO.length ==10){
           console.log("number verified");
           let reg =  /^([a-zA-Z0-9]+)@([a-z\.-]+)com$/;
           if(reg.test(this.state.email))   
           {console.log("email verified")
           alert("form submitted");}
           else{
               alert("please enter valid email address")
           }
           
       }else{
           if(this.state.mobile_NO.length ==" "){ 
               console.log("please enter valid mobile no.")
               alert("please enter valid mobile no.")
            }
               else{
            alert("please enter valid mobile no.")}}
           
           
        
      
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandle} >
                    First Name:<input type="text" id="first_Name" onChange= {this.handleChanger} /> <br /><br/>
                    Last Name: <input type="text" id="last_Name" onChange= {this.handleChanger}/><br /><br/>
                    Mobile No.:<input type="number" id="mobile_NO" onChange= {this.handleChanger}  /><br /><br/>
                    Email:<input type="text" id="email" onChange= {this.handleChanger}/><br /><br/>
                    Branch:<input type="text" id="branch" onChange= {this.handleChanger}/><br /><br/>
                    Department:<input type="text" id="dept" onChange= {this.handleChanger}/><br /><br/>
                    submit:<input type="submit" id="submit" />

                </form>
            </div>

        ) 
    }
    
}