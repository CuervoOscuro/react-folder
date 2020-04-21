import React from "react";
const df = require("./showDiff.js");
var imgOne = document.getElementById("imageOne");
var imgTwo = document.getElementById("imageTwo");
//var outImage = document.getElementById("imageResult");


function App() {
  return (
    <div>
      <button type="submit" id="comparar" onClick={getDiff}>Comparar</button>
    </div>
  );
}
export default App;

function getDiff() {
  df.diffImages(imgOne,imgTwo);
}
