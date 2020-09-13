import React, {Component} from 'react';

export default class form extends Component{

    constructor(props)
    {
        super(props);

    this.state = {

        Name:"",
        Roll_No:"",
        Branch:"",
        Email:"",
        text:"",
        editRoll_No:""
    }

    this.handleChanger= this.handleChanger.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
    this.fetchStudentData=this.fetchStudentData.bind(this)
}
handleChanger(e)
{
    this.setState({[e.target.id]: e.target.value })
}

fetchStudentData(e){
    e.preventDefault()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4500/showdata');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);
        console.log("result = "+xhr.responseText);
       var result = JSON.parse(xhr.responseText);
        console.log("this the result = "+ result.Name)
        console.log("this the result = "+ result.Roll_No)
        
        this.setState({
            Name   : result.Name,
            Roll_No: result.Roll_No,
            Branch : result.Branch,
            Email: result.Email,
            text: result.text,
            
            
        })
        //console.log(xhr.responseText.Name.value);
    })

    
    var data = JSON.stringify({
        "Roll_No":this.state.editRoll_No
    });
    console.log("data = ", data);
    xhr.send(data)
    console.log("data send");
    console.log("handle submit has been called" + this.state.Email);
}
submitHandle(e)
    {
        e.preventDefault();
        alert("Your Data is Edited successfully")
       
        console.log("form submitted")
        console.log("email = ", this.state.Email, "/n Name=", this.state.Name, 
        "\n Branch = ", this.state.Branch, "/n text=", this.state.text,
        "/n Roll_No=", this.state.Roll_No,"/n editroll no=",this.state.editRoll_No); 
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',() => 
        {
            console.log(xhr.responseText);
        });
        xhr.open('POST','http://localhost:4500/editdata');
        xhr.setRequestHeader("Content-Type", "application/json")
        var data = JSON.stringify({"Email": this.state.Email,
        "Branch": this.state.Branch,
        "Name": this.state.Name,
        "Roll_No": this.state.Roll_No,
        "text": this.state.text,
        "editRoll_No": this.state.editRoll_No
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
            <h4 >Enter the roll no. of data to be Edited</h4>
            <form onSubmit={this.fetchStudentData}  >
            edit roll no<input type="text" id="editRoll_No" onChange= {this.handleChanger}/>
            <input type="submit"  />
            </form>
           



                <form onSubmit ={this.submitHandle}>
                
               <hr />
                Name:<input type="text" value={this.state.Name} id="Name" onChange= {this.handleChanger}/><br /><br/>
                Roll_No:<input type="text" id="Roll_No" value={this.state.Roll_No} onChange= {this.handleChanger}/><br /><br/>
                Branch:<input type="text" id="Branch" value={this.state.Branch} onChange= {this.handleChanger}/><br /><br/>
                Email:<input type="text" id="Email" value={this.state.Email} onChange= {this.handleChanger}/><br /><br/>
                text:<input type="text" id="text" value={this.state.text} onChange= {this.handleChanger}/><br /><br/>
                submit:<input type="submit" id="submit" />
                </form>
            </div>
        )
    }
    }