import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef } from "react"

// GLSL shader code
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float iTime;
  uniform vec3 iResolution;
  varying vec2 vUv;

// https://iquilezles.org/articles/warp
/*float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float a = textureLod(iChannel0,(p+vec2(0.5,0.5))/256.0,0.0).x;
	float b = textureLod(iChannel0,(p+vec2(1.5,0.5))/256.0,0.0).x;
	float c = textureLod(iChannel0,(p+vec2(0.5,1.5))/256.0,0.0).x;
	float d = textureLod(iChannel0,(p+vec2(1.5,1.5))/256.0,0.0).x;
    return mix(mix( a, b,f.x), mix( c, d,f.x),f.y);
}*/


float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p )
{
    float f = 0.0;

    f += 0.500000*noise( p + iTime  ); p = mtx*p*2.02;
    f += 0.031250*noise( p-iTime ); p = mtx*p*2.01;
    f += 0.250000*noise( p  ); p = mtx*p*2.03;
    f += 0.125000*noise( p ); p = mtx*p*2.01;
    f += 0.062500*noise( p ); p = mtx*p*2.04;
    f += 0.015625*noise( p + sin(iTime) );

    return f/0.96875;
}

float pattern( in vec2 p )
{
	return fbm( p + fbm( p + fbm( p ) ) );
}

void main()
{
    float tileCount = 50.;
    vec2 uv = vUv*iResolution.xy/500.;
    vec2 mosaic = floor(uv*tileCount)/tileCount;
    float size = min(max(smoothstep(.45,.55,pattern(mosaic)),0.),1.)/4.;
	float alpha = 1.-smoothstep(size-.01,size,distance(uv,mosaic+.5/tileCount)*tileCount);
    float shade = 1.-step(size,distance(uv,mosaic+.5/tileCount)*tileCount);
    gl_FragColor = vec4(shade*.258823529412*alpha,shade*.788235294118*alpha,shade*.725490196078*alpha, alpha);
}
`

const ShaderBackground = () => {
	const shaderMaterial = useRef<THREE.ShaderMaterial>(null)

	useFrame(({ clock, size }) => {
		if (shaderMaterial.current) {
			shaderMaterial.current.uniforms.iTime.value = clock.getElapsedTime()
			shaderMaterial.current.uniforms.iResolution.value = new THREE.Vector3(size.width, size.height, 1)
		}
	})

	return (
		<mesh>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				ref={shaderMaterial}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={{
					iTime: { value: 0 },
					iResolution: { value: new THREE.Vector3() },
				}}
			/>
		</mesh>
	)
}

const Background = () => (
	<Canvas
		orthographic
		camera={{ zoom: 1, position: [0, 0, 1], left: -1, right: 1, top: 1, bottom: -1, near: 0, far: 1 }}
		style={{
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			zIndex: -11,
		}}
	>
		<ShaderBackground />
	</Canvas>
)

export default Background
