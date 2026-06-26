import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ShaderMaterial } from "three";

// Código GLSL interno para el procesamiento rápido en tarjeta gráfica
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

  // Paleta de colores pastel basada en tu imagen original
  vec3 colorA = vec3(0.98, 0.93, 0.90); // Fondo crema pálido
  vec3 colorB = vec3(0.68, 0.78, 0.90); // Azul suave tipo aurora
  vec3 colorC = vec3(0.90, 0.75, 0.80); // Rosa sutil de transición

  void main() {
    vec2 uv = vUv;

    // Ondas matemáticas para generar el movimiento fluido
    float wave1 = sin(uv.x * 2.0 + uTime * 0.4) * 0.5 + 0.5;
    float wave2 = cos(uv.y * 3.0 - uTime * 0.3) * 0.5 + 0.5;
    float wave3 = sin((uv.x + uv.y) * 1.5 + uTime * 0.2) * 0.5 + 0.5;

    vec3 finalColor = mix(colorA, colorB, wave1 * wave2);
    finalColor = mix(finalColor, colorC, wave3 * 0.4);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Subcomponente interno que maneja el ciclo de renderizado de Three.js
function GradientMesh() {
  const materialRef = useRef<ShaderMaterial>(null);

  // Inicializamos los valores uniformes en memoria de forma limpia
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  // useFrame corre nativamente en cada actualización de pantalla de la GPU
  useFrame((state) => {
    if (materialRef.current) {
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
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

// Componente principal exportable
export default function GradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Mantiene el canvas por detrás de tu interfaz UI de React
        pointerEvents: "none", // Evita que interfiera con los clics de tus botones
      }}
    >
      <Canvas
        orthographic
        camera={{ left: -1, right: 1, top: 1, bottom: -1, near: 0, far: 1 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <GradientMesh />
      </Canvas>
    </div>
  );
}
