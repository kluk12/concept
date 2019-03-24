import React, { Component, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useRender, useThree } from "react-three-fiber";
import "./App.css";
import Stl from "./../node_modules/three/examples/js/loaders/STLLoader";
class App extends Component {
  render() {
    function Image({ url }) {
      var loader = new THREE.STLLoader();
      loader.load("./models/stl/ascii/slotted_disk.stl", function(geometry) {
        var material = new THREE.MeshPhongMaterial({
          color: 0xff5533,
          specular: 0x111111,
          shininess: 200
        });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, -0.25, 0.6);
        mesh.rotation.set(0, -Math.PI / 2, 0);
        mesh.scale.set(0.5, 0.5, 0.5);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        // scene.add( mesh );
      });
      // const texture = useMemo(() => new Stl.STLLoader().load(url), [url]);
      // return (
      //   <mesh>
      //     <planeBufferGeometry name="geometry" args={[1, 1]} />
      //     <meshLambertMaterial name="material" transparent>
      //       <primitive name="map" object={texture} />
      //     </meshLambertMaterial>
      //   </mesh>
      // );
    }
    return <div className="App">{Image("./componets/stl/box.stl")}</div>;
  }
}

export default App;
