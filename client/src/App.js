
import { useEffect } from 'react';
import './App.css';
const backend1 = "http://localhost:5000"
const backend = "https://cookiee.onrender.com"

function App() {


  async function calltoback() {

    const res = await fetch(backend, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await res.json();
    console.log(data);

  }



  return (
    <div className="App text-center text-danger">
      <h1>Hello</h1>
      <div className="btn btn-success" onClick={calltoback}>Click mann</div>
    </div>
  );
}

export default App;
