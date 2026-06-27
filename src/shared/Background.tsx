import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ShaderMaterial } from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  vec3 colorFondo = vec3(0.98, 0.93, 0.90); 
  vec3 colorOlaPrincipal = vec3(0.55, 0.75, 0.88); 
  vec3 colorEspuma = vec3(0.85, 0.92, 0.95); 
  vec3 colorProfundo = vec3(0.40, 0.60, 0.75); 

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;

    // Matemáticas de ola de mar
    float ola1 = sin(uv.x * 1.8 + uTime * 0.8) * cos(uv.y * 1.5 + uTime * 0.6);
    float ola2 = sin(uv.y * 3.5 - uTime * 1.2) * sin(uv.x * 2.5 + uTime * 0.9);
    float distorsion = sin(uv.x * 3.0 + uTime * 0.5) * 0.2;
    float ola3 = cos((uv.y + distorsion) * 4.0 + uTime * 0.7);

    float fuerzaMar = (ola1 * 0.5) + (ola2 * 0.3) + (ola3 * 0.2);
    fuerzaMar = fuerzaMar * 0.5 + 0.5;

    vec3 colorActual = mix(colorFondo, colorOlaPrincipal, fuerzaMar);
    float crestaEspuma = smoothstep(0.65, 0.85, fuerzaMar);
    colorActual = mix(colorActual, colorEspuma, crestaEspuma * 0.6);
    float valleProfundo = smoothstep(0.35, 0.10, fuerzaMar);
    colorActual = mix(colorActual, colorProfundo, valleProfundo * 0.4);

    gl_FragColor = vec4(colorActual, 1.0);
  }
`;

function GradientMesh() {
  const materialRef = useRef<ShaderMaterial>(null);

  // SOLUCIÓN AL CONGELAMIENTO:
  // Definimos la estructura exacta que pide Three.js de forma directa.
  // Evitamos useMemo por si el componente padre está provocando re-renders que limpian la memoria.
  const customUniforms = useRef({
    uTime: { value: 0.0 }
  });

  useFrame((state) => {
    if (materialRef.current) {
      // 1. Actualizamos el valor numérico en la referencia nativa
      customUniforms.current.uTime.value = state.clock.getElapsedTime();
      // 2. Forzamos la actualización directa en el material de la GPU
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={customUniforms.current} // Pasamos la referencia mutable directa
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function GradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      <Canvas
        orthographic
        camera={{ left: -1, right: 1, top: 1, bottom: -1, near: 0, far: 2, position: [0, 0, 1] }}
        gl={{ 
          antialias: true, 
          powerPreference: "high-performance",
          // forceSetSize: true // Obliga a Three.js a escuchar los cambios del ciclo de reloj
        }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <GradientMesh />
      </Canvas>
    </div>
  );
}
