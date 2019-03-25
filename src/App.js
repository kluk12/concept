import React, { Component, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useRender, useThree } from "react-three-fiber";
import "./App.css";
import { BoxGeometry } from "three";
import { Thing2 } from "./componets/thing";

class App extends Component {
  render() {
    function Thing({ vertices, color }) {
      return (
        <group>
          {/* <BoxGeometry>
            <geometry
              name="geometry"
              vertices={new THREE.BoxGeometry(1, 1, 1)}
              onUpdate={self => (self.verticesNeedUpdate = true)}
            />
            <lineBasicMaterial name="material" color="black" />
          </BoxGeometry> */}
          <mesh
            // visible
            // userData={{ test: "hello" }}
            // position={new THREE.Vector3(1, 2, 3)}
            // rotation={new THREE.Euler(0, 0, 0)}
            geometry={new THREE.BoxGeometry(1, 1, 1)}
            material={
              new THREE.MeshBasicMaterial({
                color: new THREE.Color("indianred")
              })
            }
            onClick={e => {
              console.log("cl");
              return Thing2();
            }}
            onHover={e => console.log("hover")}
            onUnhover={e => console.log("unhover")}
          >
            {/* <octahedronGeometry name="geometry" /> */}
            {/* <meshBasicMaterial
              name="material"
              color="0x00ff00"
              // opacity={0.5}
              transparent
            /> */}
          </mesh>
        </group>
      );
    }
    // function App() {
    //   // gl is the webgl-renderer
    //   // canvas the dom element that was created
    //   // size the bounds of the view (which stretches 100% and auto-adjusts)
    //   // viewport is the calculated screen-size, it's a function
    //   const { gl, canvas, scene, camera, size, viewport } = useThree();
    //   // Subscribes to the render-loop, gets cleaned up automatically when the component unmounts
    //   // Add a "true" as the 2nd argument and you take over the render-loop
    //   useRender(({ gl, canvas, scene, camera }) =>
    //     console.log("i'm in the render-loop")
    //   );
    //   return <group />;
    // }

    return (
      // <App />
      <Canvas>
        <Thing
        // vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]}
        />
      </Canvas>
    );
  }
}

export default App;
