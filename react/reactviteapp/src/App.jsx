import React, { useState } from 'react'

import Login from './Login';
import Registration from './Registration'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Mainlayout from './Mainlayout';

function App() {
const[rdata,setrdata]=useState();
const[loginData,setlogindata]=useState();
 

  // let a=12;
  // const mystyle ={
  //   backgroundColor:"red",
  //   color:"cyan"
  // }
  // const studentdata=[{
  //   college:"ABES Engineering College",
  //   pic:<img src={logo} height={100} width={100}/>,name:"Vaibhav", roll:"2200320100189", branch:"CSE"
  // },
  // {
  //   college:"ABES Engineering College",
  //   pic:<img src={logo} height={100} width={100}/>,name:"raju", roll:"2200320100189", branch:"CSE"
  // },
  // {
  //   college:"ABES Engineering College",
  //   pic:<img src={logo} height={100} width={100}/>,name:"saurabh", roll:"2200320100189", branch:"CSE"
  // }]
  // return (
    // <div style={{color:"brown"}}>Abes Engineering College
    //     <div style={mystyle}>{a}</div>
    //     <div style={{color:'orange',backgroundColor:'orange',display:'flex',justifyContent:'space-around',height:'70vh',alignItems:'center'}}>
    //       <Student data={studentdata[1]}/>
        {/* <div>
          <Student  pic={<img src={logo} height={100} width={100}/>} name="Vaibhav" roll="2200320100189" branch="CSE" />
        </div>
        <div>
          <Student college="ABES engineering college" pic={<img src={logo} height={100} width={100}/>} name="Vaibhav" roll="2200320100189" branch="CSE" />
        </div>
        <div>
          <Student college="ABES engineering college" pic={<img src={logo} height={100} width={100}/>} name="Vaibhav" roll="2200320100189" branch="CSE" />
        </div> */}
    //     </div>
    // </div>


    // )
    return(
      <div>
        {/* <div>{JSON.stringify(rdata)}</div>
        {/* <Imagemanipulation /> */}
        {/* <h2>Login form</h2>
        <Login loginData={rdata}/> <br /><br />
        <h2>Registration Form</h2>
        <Registration regdata={setrdata}/>  */}

          <BrowserRouter>
            <Routes>
            <Route path='/' element={<Mainlayout />}>
              <Route path='/login' element={<Login />}/>
              <Route path='/registration' element={<Registration />}/>
              </Route>
            </Routes>
          </BrowserRouter>

        </div>
    )
}

export default App