import React from 'react'
import User from './User'
import UserClass from './UserClass'


class Aboutus extends React.Component{
  constructor(props){
    super(props)
    console.log("hii");
  }
  render(){
    return (
      <>
       <h1>About</h1>
       <h3>this is about react web series</h3>
       <User name={"Sourabh"}/>
       <UserClass name={"Sourabh prajapati"}/>
  
       </> 
    )
  }
}


export default Aboutus