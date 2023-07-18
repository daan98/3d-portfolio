import {useEffect, useState, Suspense, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

import CanvasLoader from "../Loader";
import { ComputersInterface } from "../../Interfaces";

const Computers = (props : ComputersInterface) => {
  const { isMobile, isGalaxyFold } = props;
  
  const computer = useGLTF("../../desktop_pc/scene.gltf");
  const meshRef = useRef<Mesh>(null!);
  
  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isGalaxyFold ? 0.55 : isMobile ? 0.7 : 0.75}
        position={isGalaxyFold ? [0, -3.25, -1.7] : isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile]         = useState<boolean>(false);
  const [isGalaxyFold, setIsGalaxyFold] = useState<boolean>(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 750px)');
    const mediaFoldQuery = window.matchMedia('(max-width: 280px)');

    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    setIsGalaxyFold(mediaFoldQuery.matches);

    // Define a clalback function to handle changes to the media query
    const handleMediaQueryChanges = (e : any) => {
      setIsMobile(e.matches);
    };

    const handleMediaFoldQueryChanges = (e : any) => {
      setIsGalaxyFold(e.matches);
    };

    // Add a a callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChanges);
    mediaFoldQuery.addEventListener('changes', handleMediaFoldQueryChanges);

    //Remove the listener when the component is unmonted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChanges);
      mediaFoldQuery.removeEventListener('changes', handleMediaFoldQueryChanges);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isGalaxyFold={isGalaxyFold} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;