import React, { useState } from "react"
import Login from "./components/login/login"
import "./App.css"
import Dashboard from "./components/dashboard"

function App() {
  const [logginStatus, setLogginStatus] = useState(false)

  const handleLogin = (login) => {
    setLogginStatus(login)
  }

  return (
    <div className="App">
      {!logginStatus && <Login logginStatus={handleLogin} />}
      {logginStatus && <Dashboard login={logginStatus} logginStatus={handleLogin}/>}
    </div>
  )
}

export default App
