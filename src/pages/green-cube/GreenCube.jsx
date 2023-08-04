import React from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

class GreenCube extends React.Component{

  constructor(props) {
    super();
  }

  componentWillUnmount() {
    document.body.removeChild;
  }

  componentDidMount() {
    //criar a cena, câmera e rendrer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    //limpa execuções anteriores
    document.body.removeChild;

    document.body.appendChild( renderer.domElement );

    //criar o objeto
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff43 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //posicionar a câmera
    camera.position.z = 5;
    // camera.position.y = -2;
    // camera.position.x = -1;

    //criar o loop da animação
    function animate()
    {
      requestAnimationFrame( animate );

      //adicionar rotação ao cubo
      cube.rotation.x += 0.01; cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    //checa se o browser suporta WebGL
    if ( WebGL.isWebGLAvailable() ) {

      // inicia a animação; pode haver outras configurações aqui
      animate();

    } else {

      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById( 'container' ).appendChild( warning );

    }
  }
  render()
  {
    return(
      <>
      <h1>Green Routing Cube</h1>
      <div id="cube"></div>
      <div id="container"></div>
      </>
    )
  }
}

export default GreenCube;
