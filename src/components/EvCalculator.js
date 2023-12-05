import React, { useState } from "react";

function calc(mpmInput, mpgInput, costPerLitreInput, calcName) {

  // Shared variables
  let mpm = mpmInput
  let mpy = mpm * 12
  let pounds = Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
  });

  // ICE variables
  let mpg = mpgInput
  let mpl = mpg * .22
  let costPerLitre = costPerLitreInput
  let costPerIceMile = costPerLitre / mpl
  let costPerIceMonth = costPerIceMile * mpm
  let costPerIceYear = costPerIceMile * mpy

  // EV variables
  let mpkwh = 3
  let costPerKwh  = .075
  let costPerEvMile = costPerKwh / mpkwh
  let costPerEvMonth = costPerEvMile * mpm
  let costPerEvYear = costPerEvMile * mpy


  // Difference variables
  let diffForMile = costPerIceMile - costPerEvMile
  let diffForMonth = costPerIceMonth - costPerEvMonth
  let diffForYear = costPerIceYear - costPerEvYear


  switch(calcName) {
      case "costPerIceMile": return pounds.format(costPerIceMile)
      case "costPerIceMonth": return pounds.format(costPerIceMonth)
      case "costPerIceYear": return pounds.format(costPerIceYear)
      case "costPerEvMile": return pounds.format(costPerEvMile)
      case "costPerEvMonth": return pounds.format(costPerEvMonth)
      case "costPerEvYear": return pounds.format(costPerEvYear)
      case "diffForMile": return pounds.format(diffForMile)
      case "diffForMonth": return pounds.format(diffForMonth)
      case "diffForYear": return pounds.format(diffForYear)
      default: return "error"
  }
  
}

function EvCalculator() {
    
  // Declare state variables for the inputs and the result
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [costPerIceMileResult, setCostPerIceMileResult] = useState("");
  const [costPerIceMonthResult, setCostPerIceMonthResult] = useState("");
  const [costPerIceYearResult, setCostPerIceYearResult] = useState("");
  const [costPerEvMileResult, setCostPerEvMileResult] = useState("");
  const [costPerEvMonthResult, setCostPerEvMonthResult] = useState("");
  const [costPerEvYearResult, setCostPerEvYearResult] = useState("");
  const [diffForMileResult, setDiffForMileResult] = useState("");
  const [diffForMonthResult, setDiffForMonthResult] = useState("");
  const [diffForYearResult, setDiffForYearResult] = useState("");

  // Handle the change of the inputs
  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleChange3 = (e) => {
    setInput3(e.target.value);
  };

  // Handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Multiply the inputs and set the result
    setCostPerIceMileResult(calc(input1, input2, input3, "costPerIceMile"));
    setCostPerIceMonthResult(calc(input1, input2, input3, "costPerIceMonth"));
    setCostPerIceYearResult(calc(input1, input2, input3, "costPerIceYear"));
    setCostPerEvMileResult(calc(input1, input2, input3, "costPerEvMile"));
    setCostPerEvMonthResult(calc(input1, input2, input3, "costPerEvMonth"));
    setCostPerEvYearResult(calc(input1, input2, input3, "costPerEvYear"));
    setDiffForMileResult(calc(input1, input2, input3, "diffForMile"));
    setDiffForMonthResult(calc(input1, input2, input3, "diffForMonth"));
    setDiffForYearResult(calc(input1, input2, input3, "diffForYear"));
  };

  return (
    <div className="App">
      <h1>Multiply Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Miles per month:</label>
        <input
          type="number"
          id="input1"
          name="input1"
          value={input1}
          onChange={handleChange1}
        />
        <label htmlFor="input2">Miles per gallon</label>
        <input
          type="number"
          id="input2"
          name="input2"
          value={input2}
          onChange={handleChange2}
        />
        <label htmlFor="input3">Cost per Litre:</label>
        <input
          type="number"
          id="input3"
          name="input3"
          value={input3}
          onChange={handleChange3}
        />
        <button type="submit">Work it out</button>
      </form>
      <p>The Cost per Ice Mile is: {costPerIceMileResult}</p>
      <p>The Cost per Ice Month is: {costPerIceMonthResult}</p>
      <p>The Cost per Ice Year is: {costPerIceYearResult}</p>
      <p>The Cost per EV Mile is: {costPerEvMileResult}</p>
      <p>The Cost per EV Month is: {costPerEvMonthResult}</p>
      <p>The Cost per EV Year is: {costPerEvYearResult}</p>
      <p>The Difference per Mile is: {diffForMileResult}</p>
      <p>The Difference per Month is: {diffForMonthResult}</p>
      <p>The Difference per Year is: {diffForYearResult}</p>
    </div>
  );
}

export default EvCalculator;
