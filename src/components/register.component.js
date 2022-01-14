import { Component } from "react";
import axios from 'axios';

export default class Register extends Component{



        handleSubmit= e =>{
            e.preventDefault();
            const data ={
                email: this.email,
                password:this.password,
                name:this.name,
                mobile:this.mobile
            }
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',data).then(
                res=>{
                    console.log(res)
                }
            ).catch(
                err=>{
                    console.log(err)
                }
            )
        }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

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

                <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"
                onChange={e=> this.name = e.target.value}/>
                </div>

                <div className="form-group">
                <label>Mobile No</label>
                <input type="text" className="form-control" placeholder="Name"
                onChange={e=> this.mobile = e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>

            </form>
        )
    }
}