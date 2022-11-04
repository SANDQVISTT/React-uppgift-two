import React, { useState } from "react";
import UserInput from "./components/userInput/userInput";
import Display from "./components/rendera/rendera";
import Showcatagory from "./components/rendera/Showcatagory";

const App = () => {
  const [data, setData] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [list, setList] = useState([]);

  const addData = (dataobjekt) => {
    if (!catagory.includes(dataobjekt.catagory)) {
      setCatagory([...catagory, dataobjekt.catagory]);
    }
    setData([...data, dataobjekt]);
    setList([...list, dataobjekt]);
  };

  const filtreraMydata = (catagory) => {
    let filterCatagory = data;
    filterCatagory = filterCatagory.filter(
      (product) => product.catagory === catagory
    );
    setList([...filterCatagory]);
  };

  const showAll = () => {
    setList([...data]);
  };
  const click = () => {
    return <button onClick={() => showAll()}>Show All</button>;
  };

  return (
    <div>
      <UserInput addData={addData} />
      <div className="displayInfoContainer">
        <div className="ItemCard">
          <Display list={list} />
          {click()}
        </div>
        <div className="CategoryDiv">
          {catagory.map((value, index) => {
            return (
              <Showcatagory
                key={index}
                value={value}
                filter={filtreraMydata}
              ></Showcatagory>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
