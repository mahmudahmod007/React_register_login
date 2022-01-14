import { Component } from "react";
import axios from 'axios'


export default class Login extends Component{



    handleSubmit=e=>{
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }
        

        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',data)
        .then(res=>{
            localStorage.setItem('token', res.data.token);
        })
        .catch(err=>{
            //console.log(err)
            var er = err
            document.getElementById("error").innerHTML=er
            throw(er)
        })
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Log In</h3>

                <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email"
                onChange={e=> this.email = e.target.value}/>
                </div>

                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                onChange={e=> this.password = e.target.value}/>
                
                </div>


                <button className="btn btn-primary btn-block" >Login</button>

                <p className="important" id="error"></p>
            </form>
        )
    }
}