import React from "react";
const UserInput = (props) => {
  const listObj = {
    item: "",
    amount: 0,
    date: 0,
    catagory: "",
  };
  const SubmitButton = () => {
    return <button onClick={() => props.addData(listObj)}>SUBMIT</button>;
  };
  return (
    <div>
      <div className="userInputContainer">
        <div className="userInputDIV">
          <input
            type="text"
            placeholder="Product name"
            onChange={(event) => (listObj.item = event.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Product amount"
            onChange={(event) => (listObj.amount = event.target.value)}
          ></input>
          <input
            type="date"
            onChange={(event) => (listObj.date = event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Product catagory"
            onChange={(event) => (listObj.catagory = event.target.value)}
          ></input>
          {SubmitButton()}
        </div>
      </div>
    </div>
  );
};

export default UserInput;
