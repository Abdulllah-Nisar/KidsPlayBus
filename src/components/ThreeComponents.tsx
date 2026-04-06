import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export function BusModel() {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (group.current) {
      // Mouse parallax
      const targetRotationX = (state.mouse.y * 0.2);
      const targetRotationY = (state.mouse.x * 0.3);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.1);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.1);
      
      // Gentle floating
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={group} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {/* Main Body - Double Decker */}
      <RoundedBox args={[4, 2.5, 2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#facc15" />
      </RoundedBox>
      
      {/* Upper Deck */}
      <RoundedBox position={[0, 1.25, 0]} args={[4, 1.5, 2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#facc15" />
      </RoundedBox>

      {/* Windows */}
      <group position={[0, 0.5, 1.01]}>
        {[...Array(4)].map((_, i) => (
          <mesh key={i} position={[-1.5 + i * 1, 0, 0]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshStandardMaterial color="#334155" transparent opacity={0.8} />
          </mesh>
        ))}
      </group>
      
      <group position={[0, 1.5, 1.01]}>
        {[...Array(4)].map((_, i) => (
          <mesh key={i} position={[-1.5 + i * 1, 0, 0]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshStandardMaterial color="#334155" transparent opacity={0.8} />
          </mesh>
        ))}
      </group>

      {/* Wheels */}
      <group position={[0, -1.25, 0]}>
        <mesh position={[-1.5, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[1.5, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[-1.5, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[1.5, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </group>

      {/* Logo/Text on side */}
      <Text
        position={[0, 0.5, 1.02]}
        fontSize={0.4}
        color="#4a1d96"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/outfit/v11/Q_3_u5AwV_2uK_m9Xw.woff"
      >
        KIDS PLAY BUS
      </Text>
    </group>
  );
}

export function FloatingCube({ title, color, position, onClick }: { title: string, color: string, position: [number, number, number], onClick?: () => void }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
      if (hovered) {
        mesh.current.rotation.y += 0.05;
        mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, 1.2, 0.1));
      } else {
        mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, 1, 0.1));
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </mesh>
    </Float>
  );
}
