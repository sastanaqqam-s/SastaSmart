import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight } from 'three';

function HomeImage3D() {
  const [model, setModel] = useState(null);
  const [rotation, setRotation] = useState({ x: 0.2, y: -90 });
  const [interactionStart, setInteractionStart] = useState(false);
  const [prevTouch, setPrevTouch] = useState({ x: null, y: null });
  const [scaleFactor, setScaleFactor] = useState(50.0);
  const gltfPath = 'w.glb'; 
  const canvasRef = useRef();

  const handleInteractionStart = useCallback((event) => {
    event.preventDefault();
    
    setInteractionStart(true);
    if (event.touches) {
      const touch = event.touches[0];
      setPrevTouch({ x: touch.clientX, y: touch.clientY });
    }
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setInteractionStart(false);
  }, []);

  const handleInteractionMove = useCallback((event) => {
    event.preventDefault();
    if (interactionStart) {
      let movementX, movementY;
      if (event.touches) {
        const touch = event.touches[0];
        movementX = touch.clientX - prevTouch.x;
        movementY = touch.clientY - prevTouch.y;
        setPrevTouch({ x: touch.clientX, y: touch.clientY });
      } else {
        movementX = event.movementX;
        movementY = event.movementY;
      }
      setRotation((prevRotation) => ({
        x: prevRotation.x,
        y: prevRotation.y + movementX * 0.01,
      }));
    }
  }, [interactionStart, prevTouch]);

  useEffect(() => {
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      gltfPath,
      (gltf) => {
        const width = window.innerWidth;
        const newScaleFactor = width < 768 ? 40.0 : 52.0;
        setScaleFactor(newScaleFactor);

        gltf.scene.scale.set(newScaleFactor, newScaleFactor, newScaleFactor);
        gltf.scene.position.set(0, -2, 0);
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );
  }, [gltfPath]);

  return (
    <Canvas
      ref={canvasRef}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchMove={handleInteractionMove}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseMove={handleInteractionMove}
    >
      <directionalLight intensity={1} position={[0, 5, 5]} />
      <ambientLight intensity={0.6} />
      <Suspense fallback={null}>
        {model && (
          <primitive object={model} rotation={[rotation.x, rotation.y, 0]} />
        )}
      </Suspense>
    </Canvas>
  );
}

export default HomeImage3D;
