import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Appa } from "./componets/thing";
// import Thing from "./componets/thing";

ReactDOM.render(<Appa />, document.getElementById("root"));
// ReactDOM.render(
//   <Canvas>
//     <Thing
//       vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]}
//     />
//   </Canvas>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
