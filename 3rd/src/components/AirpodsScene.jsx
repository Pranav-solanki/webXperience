import { Canvas, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setModelOpacity(scene, value) {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = value;
    }
  });
}

function ModelOne({ groupRef }) {
  const { scene } = useGLTF("/models/airpods.glb");

  useEffect(() => {
    setModelOpacity(scene, 1);
  }, [scene]);

  return <primitive ref={groupRef} object={scene} scale={0.1} />;
}

function ModelTwo({ groupRef }) {
  const { scene } = useGLTF("/models/airpods2.glb");

  useEffect(() => {
    setModelOpacity(scene, 0);
  }, [scene]);

  return <primitive ref={groupRef} object={scene} scale={0.1} />;
}

function SceneContent() {
  const modelOneRef = useRef();
  const modelTwoRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (!modelOneRef.current || !modelTwoRef.current) return;

    const modelOne = modelOneRef.current;
    const modelTwo = modelTwoRef.current;

    camera.position.set(0, 0.5, 8);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // 🔥 Stage 1 — Model 1 rotation + zoom
    tl.to(modelOne.rotation, {
      y: Math.PI * 2,
      ease: "none",
    }, 0);

    tl.to(camera.position, {
      z: 5,
      ease: "none",
      onUpdate: () => camera.lookAt(0, 0, 0),
    }, 0);

    // 🔥 Stage 2 — Fade transition
    tl.to({}, {
      duration: 1,
      onUpdate: () => {
        const progress = tl.progress();

        if (progress > 0.4) {
          const fadeProgress = (progress - 0.4) / 0.2;

          setModelOpacity(modelOne, 1 - fadeProgress);
          setModelOpacity(modelTwo, fadeProgress);
        }
      },
    }, 0);

    // 🔥 Stage 3 — Model 2 rotation
    tl.to(modelTwo.rotation, {
      y: Math.PI * 2,
      ease: "none",
    }, 0.6);

  }, [camera]);

  return (
    <>
      <ModelOne groupRef={modelOneRef} />
      <ModelTwo groupRef={modelTwoRef} />
    </>
  );
}

export default function AirpodsScene() {
  return (
    <div className="scroll-section h-[300vh] bg-black">
      <div className="sticky top-0 h-screen">
        <Canvas camera={{ position: [0, 0.5, 8], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <SceneContent />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}
