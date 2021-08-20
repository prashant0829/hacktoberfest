import React from "react";
import "./App.css";
import MyAccordian from "./MyAccordian";

function App() {

  var sumC1 = 0;
  var sumC2 = 0;

  // main tables
  const C1 = { A: "a", F: "f", C: "c" };
  const C2 = { D: "d", E: "e", B: "b" };

  // original data
  const beforeC1 = [
    ["D", "d", 300],
    ["A", "d", 800],
    ["A", "a", 1000],
    ["C", "c", 500],
  ];

  const beforeC2 = [
    ["E", "e", 200],
    ["B", "b", 700],
    ["B", "a", 700],
    ["F", "f", 500],
  ];

  // copy arrays
  let tempC1 = beforeC1.slice();
  let tempC2 = beforeC2.slice();
  let unwanted = [];
  const setData = () => {
    for (let i = 0; i < tempC1.length; i++) {
      let k = tempC1[i][0];
      if (tempC1[i][0] in C1 && tempC1[i][1] === C1[`${k}`]) {
        continue;
      } else {
        let a = tempC1[i];
        let ke = a[0];
        tempC1[i] = null;

        if (a[0] in C2 && a[1] === C2[`${ke}`]) {
          tempC2.push(a);
        } else {
          unwanted.push(a);
        }
      }
    }

    for (let i = 0; i < tempC2.length; i++) {
      let k = tempC2[i][0];
      if (tempC2[i][0] in C2 && tempC2[i][1] === C2[`${k}`]) {
        console.log("true",tempC2[i])
        continue;
      }
      else {
        let a = tempC2[i];
        let ke = a[0];

        tempC2[i] = null;
        if (a[0] in C1 && a[1] === C1[`${ke}`]) {
          tempC1.push(a);
        } else {
          unwanted.push(a);
        }
      }
    }
    tempC1 = tempC1.filter(e => e!=null)
    tempC2 = tempC2.filter(e => e!=null)

    // find sum
    for (let i = 0; i < tempC1.length; i++) {
      sumC1 += tempC1[i][2];
    }
    for (let i = 0; i < tempC2.length; i++) {
      sumC2 += tempC2[i][2];
    }
   
  };
  setData();
  console.log(unwanted);
  return (
    <div className="App">
      <div>
        <h1>Original Table</h1>
        <div className="main_table">
          <table className="before_C1">
            <MyAccordian data={beforeC1} />
          </table>
          <table className="before_C2">
            <MyAccordian data={beforeC2} />
          </table>
        </div>
      </div>

      <hr />
      <div>
        <h1>After Changing Table</h1>
        <div className="main_table">
          <table className="after_C1">
            <MyAccordian data={tempC1} sum={sumC1} />
          </table>
          <table className="after_C2">
            <MyAccordian data={tempC2} sum={sumC2} />
          </table>
        </div>
      </div>
      <div>
        <h1>UnMatched Table</h1>
        <div className="main_table">
          <table className="unMatched_C1">
            <MyAccordian data={unwanted} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
