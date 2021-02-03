import React from 'react'
import discover from '../src/images/discover-02.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import twitter from '../src/images/twitter.png';
import group from '../src/images/Group 40.png';
import logo_subtext from '../src/images/logo_subtext.png';
import { render } from '@testing-library/react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCXEiszXdQb9EqEb1kYmRsCJo9TPfYujc4",
  authDomain: "test-form-eb682.firebaseapp.com",
  projectId: "test-form-eb682",
  storageBucket: "test-form-eb682.appspot.com",
  messagingSenderId: "25020950362",
  appId: "1:25020950362:web:383e4622d0e8826d40f563"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference emailInfo collections
let emailInfo=firebase.database().ref("infos")
var countDownDate = new Date("Feb 27, 2021 15:37:25").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days;
    document.getElementById("demo2").innerHTML =  hours;
   

    document.getElementById("demo3").innerHTML = minutes;
      

    document.getElementById("demo4").innerHTML =  seconds;
  
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "EXPIRED";
      document.getElementById("demo2").innerHTML = "EXPIRED";
      document.getElementById("demo3").innerHTML = "EXPIRED";
      document.getElementById("demo4").innerHTML = "EXPIRED";
    }
  }, 1000);




  class Launch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.saveEmailInfo = this.saveEmailInfo.bind(this);
    }
    handleChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
        const email=this.state.email;
      alert('A name was submitted: ' + this.state.email);

      event.preventDefault();

this.saveEmailInfo(email);

      alert("hhhhhhhhh"+email)
    }

    //save info to Firebase
saveEmailInfo(email){
let newContactInfo=emailInfo.push();
newContactInfo.set({
  email:email
})
}
    render(){
    return (
      <div class="container">
      <div className="row">
  
      <div className="col-lg-6" style={{backgroundColor:"#cce6ff"}}>
      <div className="row">
       <img src={group}  id="optionalstuff" alt="home img" style={{width:'30%',height:'30%'}}/>  
      </div>
      <div class="row hometitle1 ml-2 justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}} id="headingdiv">
      Free Digital platform 
      </div>
      
      <div class ="row justify-content-center text-center" style={{fontFamily:"Comfortaa",fontWeight:"bold"}}  id="smallhead1">
        <p style={{fontWeight:"bold"}}>for sellers to promote,manage & sell their goods and services.</p>
      </div>
     
      <div class="row justify-content-center text-center" id="mainimg">
         <img src={discover} class="freedigitalman" alt="home img"/>  
      </div>
  
      <div class="row justify-content-center"  style={{color:"#2c3d63",fontWeight:"bold",fontFamily:"Comfortaa"}} id="timerdiv">
       <p id="demo"></p>
      <div class="col-2" style={{flexDirection:"row"}}>
      <div class="launchnum">
             <p id="demo1"></p>
      </div>
        Days
      </div>
            
      <div class="col-2" style={{flexDirection:"row"}}>
      <div class="launchnum">
        <p id="demo2"></p>
      </div>
        Hours
      </div>
            
      <div class="col-2"style={{flexDirection:"row"}}>
      <div class="launchnum">
        <p id="demo3"></p>
      </div>
        Minutes
      </div>
             
      <div class="col-2" style={{flexDirection:"row"}}>
      <div class="launchnum">
        <p id="demo4"></p>
      </div>
      <div class="secondLaunch">
      Second
      </div>
        
      </div>
             
      </div>
         
      </div>
       
     <div className="col-lg-6 ml-2 mt-5"> 
     <button id="btnhide" type="button" class="btn-lg btnstay"><p class="parastay">STAY TUNED</p></button>
     <div class="row mt-5 justify-content-center text-center ">
         <img src={logo_subtext} id="optionalstuf" alt="home img" style={{width:'150px',height:'100px'}}/>  
      </div>
      <div class="row hidden-md" style={{fontSize:"20px"}}>
          <p id="parastay" style={{letterSpacing:"10px"}}>STAY TUNED</p>
      </div>
      <div class="row justify-content-center text-center">
          <h3 style={{fontFamily:"Comfortaa",fontWeight:"bold",color:"#2c3d63",fontSize:"40px"}}>We Will Launch Soon</h3>
      </div>
      <div class="row">
          <p style={{fontFamily:"Comfortaa", fontWeight:"bold"}}>Subscribe to get notification as soon as we launch!</p>
      </div>

      <form class="emailstorecontainer" onSubmit={this.handleSubmit}>
      <div class="row justify-content-center text-center" style={{flexDirection:"row"}}>
          <div className="col-7">
          <input type="email" value={this.state.email} onChange={this.handleChange} class="form-control email" placeholder="Enter your email" />
          </div>
    
          <div className="col-5">
          <button style={{fontFamily:"Comfortaa",fontWeight:"bold",backgroundColor:"#e6f2ff"}} type="submit" value="Submit" class="btn btn-info homebuttontest">NOTIFY ME</button>
          </div>
      </div>
      </form>

      {/* <form class="emailstorecontainer" onSubmit={this.handleSubmit}>
      <div class="row justify-content-center text-center launchbuttoncontainer" style={{flexDirection:"row"}}>
      <div className="col-7 offset-1">
      <input type="text" value={this.state.email} onChange={this.handleChange} class="form-control email" placeholder="Enter your email" /> */}

       {/* <input type="text" class="form-control" placeholder="Enter your email" /> */}
      {/* </div>
  
      <div className="col-3">
      <button style={{fontFamily:"Comfortaa",fontWeight:"bold",backgroundColor:"#e6f2ff",borderRadius:10}} type="button" class="btn btn-info homebuttontest">NOTIFY ME</button>
      </div>
      
      </div>
  </form> */}
       <div class="row justify-content-center text-center hometitle ml-2 m-5">
        <div class="col-1">
        <img src={twitter}  alt="home img" style={{width:'20px',height:'20px'}}/>  
   
        </div>
        <div class="col-1">
        <img src={facebook}  alt="home img" style={{width:'20px',height:'20px'}}/>  
   
        </div>
        <div class="col-1">
        <img src={instagram}  alt="home img" style={{width:'20px',height:'20px'}}/>  
   
        </div>
        </div>
  
        <div class="row"  style={{color:"white",backgroundColor:"#2c3d63",fontFamily:"Comfortaa",fontSize:"16px",marginTop:"160px"}}>
        <div class="col-sm-6">
        Add:B/22 103 Ketki Sector 1 Shanti Nagar Opp Shanti Shopping Center, Mira Road, Thane, Maharashtra 401107
        </div>
        <div class="col-sm-6">
         <p class="paraemail">Email:rockpolt@gmail.com</p>
        </div>
        </div>
  
      
        </div>
  
        </div>
        </div>
      )
  }
   
}

export default Launch;
