import { Canvas, useThree } from "@react-three/fiber";
import { Environment, useGLTF, Center } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AirpodsModel() {
  const group = useRef();
  const { scene } = useGLTF("/models/airpods.glb");
  const { camera } = useThree();

  useEffect(() => {
    const lid = scene.getObjectByName("AirPods_verh");
    if (!lid || !group.current) return;

    // 🔥 HARD RESET INITIAL STATE
    gsap.set(lid.rotation, { x: 0 });
    gsap.set(group.current.rotation, { y: 0 });
    gsap.set(camera.position, { x: 0, y: 0.5, z: 8 });
    camera.lookAt(0, 0, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // 360 rotation
    tl.to(
      group.current.rotation,
      {
        y: Math.PI * 2,
        ease: "none",
      },
      0,
    );

    // Camera zoom + arc
    tl.to(
      camera.position,
      {
        z: 4,
        y: 1.5,
        ease: "none",
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        },
      },
      0,
    );

    // Lid opening
    tl.to(
      lid.rotation,
      {
        x: -Math.PI / 1.8,
        ease: "none",
      },
      0,
    );
  }, [scene, camera]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.1} />
    </group>
  );    
}

export default function AirpodsScene() {
  return (
    <div className="scroll-section h-[250vh] bg-black">
      <div className="sticky top-0 h-screen">
        <Canvas camera={{ position: [0, 0.5, 8], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <AirpodsModel />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}
