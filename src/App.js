import './App.css';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('')
  let [lastname, setLastName] = useState('')
  let [address, setAddress] = useState('')
  let [mobile, setMobile] = useState('')
  // let name = "xyzadfd"
  function myInput(event) {
    console.log(event.target.value)
    console.log(event.target.name);
    if (event.target.name === "firstname")
      setName(event.target.value);
    if (event.target.name === "lastname")
      setLastName(event.target.value);
    if (event.target.name === "address")
      setAddress(event.target.value);
    if(event.target.name === "mobile")
      setMobile(event.target.value);
  }
  function onClick(){
  setName('');
  setLastName('');
  setAddress('');
  setMobile('');
  }
  // function shanu(event){
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registration</h1>
        <label>Name</label>
        <input type="text"
          name='firstname'
          placeholder='eg. your name'
          value={name}
          onChange={myInput} /><br/>
        <label>Surname</label>
        <input type="text"
          name='lastname'
          placeholder="eg. last name"
          value={lastname}
          onChange={myInput} /><br/>
        <lavel>Address</lavel>
        <textarea
          name="address"
          type="text"
          placeholder="eg. address"
          value={address}
          onChange={myInput}
        /><br/>
        <label>mobile number</label>
         <input type="text"
          name='mobile'
          placeholder="input number"
          value={mobile}
          onChange={myInput}
        /><br/>
     <button onClick={onClick}>Submit</button><br/>
     <button onMouseEnter={onClick}>Cancel</button>
        {/* <p>{name}</p> */}
        {/* <p>{lastname}</p> */}
      </header>
    </div>
  );
}

export default App;
