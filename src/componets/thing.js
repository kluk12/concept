import * as THREE from "three";
import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
// import { Canvas } from "react-three-fiber";
import { Canvas, useRender, useThree } from "react-three-fiber";

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
        position={new THREE.Vector3(1, 1, 2)}
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
        {console.log("cxzczc")}
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

export function Main() {
  function Content({ camera }) {
    const scene = useRef();
    useRender(
      ({ gl }) =>
        void ((gl.autoClear = true), gl.render(scene.current, camera)),
      true
    );
    return <scene ref={scene}>{/* ... */}</scene>;
  }

  function HeadsUpDisplay({ camera }) {
    const scene = useRef();
    useRender(
      ({ gl }) =>
        void ((gl.autoClear = false),
        gl.clearDepth(),
        gl.render(scene.current, camera))
    );
    return <scene ref={scene}>{/* ... */}</scene>;
  }
  const camera = useRef();
  const { width, height } = useThree().size;
  return (
    <>
      <perspectiveCamera
        ref={camera}
        aspect={width / height}
        radius={(width + height) / 4}
        onUpdate={self => self.updateProjectionMatrix()}
      />
      {camera.current && (
        <group>
          <Content camera={camera.current} />
          <HeadsUpDisplay camera={camera.current} />
          {Thing2()}
        </group>
      )}
    </>
  );
}
export function Appa() {
  // let a = useContext(this);
  // console.log(useThree());
  // gl is the webgl-renderer
  // canvas the dom element that was created
  // size the bounds of the view (which stretches 100% and auto-adjusts)
  // viewport is the calculated screen-size, it's a function
  const { gl, canvas, scene, camera, size } = useThree();
  // Subscribes to the render-loop, gets cleaned up automatically when the component unmounts
  // Add a "true" as the 2nd argument and you take over the render-loop
  useRender(({ gl, canvas, scene, camera }) => {
    // return (
    //   <Canvas>
    //     <Thing2 />
    //   </Canvas>
    // );
  }, true);
  return <group />;
}
