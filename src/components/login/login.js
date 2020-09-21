import React, { useEffect, useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from "../dashboard"


function Login(props) {
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    fetch("api/mock.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((e) => {
        setError("fetch failed")
      })
  }, [])

  // login submit
  const handleSubmit = (event) => {
    props.logginStatus(false)
    for (var index in users) {
      var user = users[index]
      if (username === user.username && password === user.password) {
        props.logginStatus(true)
        return (
          <Router>
            <Route path="/dashboard" component={Dashboard} />
          </Router>
        )
      }
    }
    event.preventDefault()
  }

  return (
    <>
      <Form className="col-md-4 container card login-form" onSubmit={handleSubmit}>
        <h3 className="card-title text-center">Login</h3>
        <FormGroup>
          <Label for="username">UserName</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder=""
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button className="btn btn-lg btn-primary btn-block" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
          <p>{error}</p>
      <p className="login-details">username: admin</p>
      <p className="login-details"> password: admin</p>
    </>
  )
}

export default Login
