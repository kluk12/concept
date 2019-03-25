import React, { Component, useMemo, Fragment, useContext } from "react";
import * as THREE from "three";
import { Canvas, useRender, useThree } from "react-three-fiber";
import "./App.css";
import { BoxGeometry, Scene, PerspectiveCamera } from "three";
import { Thing2, Main } from "./componets/thing";
class App extends Component {
  render() {
    function Thing(a) {
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
            position={new THREE.Vector3(-1, -1, -2)}
            rotation={new THREE.Euler(1, 1, 1)}
            geometry={new THREE.BoxGeometry(1, 2, 3)}
            material={
              new THREE.MeshBasicMaterial({
                color: new THREE.Color("indianred")
              })
            }
            onClick={e => {
              console.log("cli");
              // return <Thing2 />;
            }}
            onHover={e => {
              console.log("onHover");
            }}
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

    return (
      <Canvas>
        {/* <Fragment> */}
        <App />
        {/* <Main /> 
           {/* <Thing2 /> 
           <Thing
            onClick={() => {
              return useRender(<Thing />);
            }}
          />
        </Fragment>*/}
      </Canvas>
    );
  }
}

export default App;
