import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(6000 * 3)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingGeometry({ position, color, shape = 'octahedron', scale = 1 }) {
  const ref = useRef()
  const speed = useRef(Math.random() * 0.5 + 0.3)
  const offset = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed.current + offset.current
      ref.current.rotation.x = t * 0.4
      ref.current.rotation.y = t * 0.6
      ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.3
    }
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torus': return <torusGeometry args={[0.4, 0.15, 16, 32]} />
      case 'ico': return <icosahedronGeometry args={[0.4, 1]} />
      default: return <octahedronGeometry args={[0.35, 0]} />
    }
  }, [shape])

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export default function Scene3D() {
  const isMobile = window.innerWidth < 768

  if (isMobile) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#a78bfa" />
        <pointLight position={[-10, -5, -10]} intensity={0.3} color="#22d3ee" />

        <StarField />

        <FloatingGeometry position={[-4, 2, -3]} color="#a78bfa" shape="ico" scale={1.2} />
        <FloatingGeometry position={[4.5, -1, -2]} color="#22d3ee" shape="torus" scale={1.0} />
        <FloatingGeometry position={[-3.5, -3, -4]} color="#f472b6" shape="octahedron" scale={0.8} />
        <FloatingGeometry position={[3, 3, -3]} color="#a78bfa" shape="octahedron" scale={0.6} />
        <FloatingGeometry position={[0, -3, -3]} color="#22d3ee" shape="ico" scale={0.7} />
      </Canvas>
    </div>
  )
}
