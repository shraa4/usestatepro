import { useState } from "react";

export default function App() {

  const [showpassword,setShowpassword]=useState(false);
  const [darkmode,setDarkMode]=useState(false);

  return (

    <>

      <div style={
        {
          backgroundColor: darkmode ? "black" : "white",
          color: darkmode ? "white" : "black",
          height: "100vh",
          padding: "30px"

        }

      }

      >
        <h2>Login Here!!</h2>

        <input type="text" placeholder="Enter UserName" /><br /><br />

        <input type={showpassword ? "text" : "password"} placeholder="Enter Password" />

        <button onClick={() => setShowpassword(!showpassword)}>

          {showpassword ? "👁️" : "🙈"}

        </button>

        <br /><br />

        <button>Login</button>

        <br /><br />

        <button onClick={() => setDarkMode(!darkmode)}>

          {darkmode ? "🌞" : "🌙"}

        </button>


      </div>

    </>
  );
}
