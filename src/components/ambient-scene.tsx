"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function OrbitalMesh() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (!mesh.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    mesh.current.rotation.x += delta * 0.035
    mesh.current.rotation.y += delta * 0.06
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.12
  })
  return <mesh ref={mesh} rotation={[0.35, 0.4, 0]}><icosahedronGeometry args={[2.6, 2]} /><meshBasicMaterial color="#43b7d5" wireframe transparent opacity={0.12} /></mesh>
}

export function AmbientScene() {
  return <div aria-hidden="true" className="ambient-scene"><Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]}><OrbitalMesh /></Canvas></div>
}

export default AmbientScene
