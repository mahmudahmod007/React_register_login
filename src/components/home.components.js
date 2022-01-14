import { Component } from "react";
import axios from 'axios'

export default class Home extends Component{


        state = {}
        componentDidMount(){    
            axios.get('user').then(
                res=>{
                    this.setState({
                        user:res.data
                    })
                },
                err=>{
                    console.log(err)
                }
            )
        }
    render(){
        if(this.state.user){
            return(
                <h2>Hi {this.state.user.name} You are logged In</h2>
            )
        }
        return(
            <h2>You are not logged in</h2>
        )
    }
}