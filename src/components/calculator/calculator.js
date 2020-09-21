import React, { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

function Calculater(props) {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState()

  const calculateTotal = (operation) => {
    switch (operation) {
      case "add":
        setResult(number1 + number2)
        break
      case "subtract":
        setResult(number1 - number2)
        break
      case "multiply":
        setResult(number1 * number2)
        break
      case "divide":
        setResult(number1 / number2)
        break
      default:
        setResult()
    }
  }

  return (
    <Form className="container col-md-6 card calculate-form">
      <h1>Calculator</h1>
      <FormGroup>
        <Input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder=""
          id="number1"
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder=""
          id="number2"
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary" onClick={() => calculateTotal("add")}>
          Add
        </Button>
        <Button color="secondary" onClick={() => calculateTotal("subtract")}>
          Subraction
        </Button>
        <Button color="success" onClick={() => calculateTotal("multiply")}>
          Multiplication
        </Button>
        <Button color="info" onClick={() => calculateTotal("divide")}>
          Divide
        </Button>
      </FormGroup>
      <h2>{result && "Result: " + result}</h2>
    </Form>
  )
}

export default Calculater
