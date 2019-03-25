import * as THREE from "three";
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

export function Thing2() {
  // {
  //   vertices, color;
  // }
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
        position={new THREE.Vector3(1, 2, 3)}
        // rotation={new THREE.Euler(0, 0, 0)}
        geometry={new THREE.BoxGeometry(1, 1, 1)}
        material={
          new THREE.MeshBasicMaterial({
            color: new THREE.Color("indianred")
          })
        }
        onClick={e => console.log("click")}
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
