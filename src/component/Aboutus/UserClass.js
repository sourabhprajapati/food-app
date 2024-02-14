import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"sourabh",
                location:"default"
            }
        }
    }
   async componentDidMount(){
        //API Call here
        const data=await fetch("https://api.github.com/users/USERNAME");
        const json= await data.json();
        this.state({
            userInfo:json
        })
   }
   componentDidUpdate(){

   }
   componentWillUnmount(){
    
   }
    render(){
        const {name,location}=this.state.userInfo
        return(
            <div className="user-card">
                 
                 <h2>Name:{name}</h2>
                 <h3>Location:{location}</h3>
                 <h4>Contact:7073345242</h4>
            </div>
        )
    }
}
export default UserClass;