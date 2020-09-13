import React, { Component } from 'react'
//import Axios from 'axios'

export class ShowData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rollno: "",
            
            Name   : "",
                Roll_No: "",
                Branch : "",
                Email:"",
                text: ""
        }
        this.SubmitData=this.SubmitData.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e){
        this.setState({[e.target.id]: e.target.value})
    }

    SubmitData(e) {
        e.preventDefault()
        console.log("roll no ="+this.state.rollno);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:4500/showdata');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener('load', () => {
            // console.log(xhr.responseText);
            // fetchData(){
            //     Axios.get(xhr.responseText).then(res =>{
            //         console.log(res.data);
            //     })
            // } 
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
            "Roll_No":this.state.rollno
        });
        console.log("data = ", data);
        xhr.send(data)
        console.log("data send");
        console.log("handle submit has been called" + this.state.Email);
    }
    

    render() {
        return (
            <div>
                <h4>Showdata</h4>
                <h3>input the roll no.</h3>
                <form onSubmit={this.SubmitData}   >
                    select:<input type="text" id="rollno" onChange={this.onChangeHandler} ></input>
                    <input type="submit" id="submit1"></input>
                </form>
                <h5>
                    <table border="1" cellPadding="20px" className="table1"  >
                        <tr>
                            <td>
                                <h3>Name</h3>
                            </td>
                            <td>
                                <h3>Branch</h3>
                            </td>
                            <td>
                                <h3>Roll No    </h3>
                            </td>
                            <td>
                                <h3> Email</h3>
                            </td>
                            <td>
                                <h3>text</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>{this.state.Name}</td>
                            <td>{this.state.Branch}</td>
                            <td>{this.state.Roll_No}</td>
                            <td>{this.state.Email}</td>
                            <td>{this.state.text}</td>
                        </tr>
                    </table>
                </h5>
            </div>
        )
    }
}

export default ShowData;
