import { useEffect, useRef } from 'react';

function HeroThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) {
      return undefined;
    }

    let frameId = 0;
    let resizeObserver;
    let renderer;
    let cleanupScene = () => {};
    let isMounted = true;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    import('three').then((THREE) => {
      if (!isMounted) {
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 8);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
        preserveDrawingBuffer: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearColor(0x000000, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      const keyLight = new THREE.DirectionalLight(0x8be3ff, 2.2);
      keyLight.position.set(4, 5, 7);
      const accentLight = new THREE.PointLight(0x2dd4bf, 6, 12);
      accentLight.position.set(-3, -2, 4);
      scene.add(ambientLight, keyLight, accentLight);

      const group = new THREE.Group();
      scene.add(group);

      const materials = [
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0b4f68,
          emissiveIntensity: 0.45,
          metalness: 0.2,
          opacity: 0.38,
          roughness: 0.42,
          transparent: true,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x2dd4bf,
          emissive: 0x064e47,
          emissiveIntensity: 0.35,
          metalness: 0.16,
          opacity: 0.32,
          roughness: 0.5,
          transparent: true,
        }),
        new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          emissive: 0x6b3a00,
          emissiveIntensity: 0.28,
          metalness: 0.1,
          opacity: 0.28,
          roughness: 0.55,
          transparent: true,
        }),
      ];

      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0xf5f1e8,
        opacity: 0.24,
        transparent: true,
      });

      const shapeSpecs = [
        {
          geometry: new THREE.IcosahedronGeometry(0.9, 0),
          material: materials[0],
          position: [3.3, 1.15, -0.2],
          rotation: [0.3, 0.6, 0.15],
          speed: 0.32,
        },
        {
          geometry: new THREE.TorusGeometry(0.62, 0.16, 18, 56),
          material: materials[1],
          position: [4.4, -1.65, 0.25],
          rotation: [0.8, 0.2, 0.45],
          speed: -0.42,
        },
        {
          geometry: new THREE.BoxGeometry(1.18, 1.18, 1.18),
          material: materials[2],
          position: [1.9, -2.05, -0.6],
          rotation: [0.5, 0.8, 0.1],
          speed: 0.26,
        },
        {
          geometry: new THREE.OctahedronGeometry(0.58, 0),
          material: materials[1],
          position: [-4.6, 1.6, -1.2],
          rotation: [0.2, 0.4, 0.7],
          speed: 0.2,
        },
      ];

      const meshes = shapeSpecs.map((spec) => {
        const mesh = new THREE.Mesh(spec.geometry, spec.material);
        mesh.position.set(...spec.position);
        mesh.rotation.set(...spec.rotation);
        mesh.userData.speed = spec.speed;
        group.add(mesh);

        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(spec.geometry), edgeMaterial);
        edges.position.copy(mesh.position);
        edges.rotation.copy(mesh.rotation);
        edges.scale.setScalar(1.012);
        group.add(edges);

        return { edges, mesh };
      });

      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array([
        -4.8, -1.1, -1.6,
        -3.2, 0.5, -1.1,
        -1.6, -2.2, -1.4,
        0.4, 1.9, -1.7,
        2.6, -0.2, -1.3,
        4.8, 1.3, -1.8,
      ]);
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0xf5f1e8,
        opacity: 0.35,
        size: 0.06,
        transparent: true,
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      group.add(particles);

      let width = 0;
      let height = 0;

      const resize = () => {
        const nextWidth = parent.clientWidth;
        const nextHeight = parent.clientHeight;

        if (nextWidth === width && nextHeight === height) {
          return;
        }

        width = nextWidth;
        height = nextHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.fov = width < 700 ? 92 : 38;
        group.scale.setScalar(width < 700 ? 0.42 : 1);
        group.position.set(width < 700 ? 0 : 0, width < 700 ? 2.7 : 0, 0);
        camera.updateProjectionMatrix();
      };

      const render = (time = 0) => {
        resize();
        const elapsed = time * 0.001;

        group.rotation.y = Math.sin(elapsed * 0.25) * 0.08;
        group.rotation.x = Math.cos(elapsed * 0.18) * 0.035;

        meshes.forEach(({ edges, mesh }, index) => {
          const speed = mesh.userData.speed;
          mesh.rotation.x += 0.004 * speed;
          mesh.rotation.y += 0.008 * speed;
          mesh.position.y += Math.sin(elapsed + index) * 0.0009;
          edges.rotation.copy(mesh.rotation);
          edges.position.copy(mesh.position);
        });

        renderer.render(scene, camera);

        if (!reduceMotion) {
          frameId = window.requestAnimationFrame(render);
        }
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(parent);
      render();

      cleanupScene = () => {
        shapeSpecs.forEach((spec) => spec.geometry.dispose());
        particleGeometry.dispose();
        particleMaterial.dispose();
        materials.forEach((material) => material.dispose());
        edgeMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      isMounted = false;
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      cleanupScene();
    };
  }, []);

  return <canvas className="hero-three" ref={canvasRef} aria-hidden="true" />;
}

export default HeroThreeScene;
