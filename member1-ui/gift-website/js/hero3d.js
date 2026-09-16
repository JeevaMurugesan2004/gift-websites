/**
 * GIFTLY - THREE.JS 3D GIFT BOX HERO SCENE
 * js/hero3d.js
 *
 * Fully procedural Three.js scene (NO external model/texture files)
 * Runs cleanly on file:// protocol without any CORS restrictions.
 * Includes idle floating, mouse parallax, hover lid lift, and click confetti burst!
 */

(function initHero3D() {
  const canvas = document.getElementById('hero-canvas');
  const fallbackBox = document.querySelector('.css-gift-fallback');

  if (!canvas) return;

  // 1. PERFORMANCE / ACCESSIBILITY FALLBACK CHECK
  function checkWebGLSupport() {
    try {
      const testCanvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  const hasWebGL = checkWebGLSupport();

  if (isMobile || prefersReducedMotion || !hasWebGL || typeof THREE === 'undefined') {
    // Graceful fallback to CSS 3D Box
    if (canvas) canvas.style.display = 'none';
    if (fallbackBox) fallbackBox.style.display = 'block';
    return;
  }

  // 2. SCENE, CAMERA & RENDERER SETUP
  const scene = new THREE.Scene();
  const parent = canvas.parentElement;
  let width = parent.clientWidth || 500;
  let height = parent.clientHeight || 500;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 1.2, 7.2);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // 3. LIGHTING
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.75);
  scene.add(ambientLight);

  // Key warm light
  const dirLight1 = new THREE.DirectionalLight(0xFFF5EB, 1.1);
  dirLight1.position.set(5, 8, 6);
  dirLight1.castShadow = true;
  scene.add(dirLight1);

  // Fill soft rose/cool light
  const dirLight2 = new THREE.DirectionalLight(0xFCE4EC, 0.6);
  dirLight2.position.set(-5, 4, -4);
  scene.add(dirLight2);

  // Top highlight point light (golden accent)
  const pointLight = new THREE.PointLight(0xFFD43B, 0.9, 12);
  pointLight.position.set(0, 3.5, 2);
  scene.add(pointLight);

  // 4. SOFT PROCEDURAL SHADOW PLANE (Canvas Texture -> No CORS!)
  function createShadowTexture() {
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');

    const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
    gradient.addColorStop(0, 'rgba(30, 10, 20, 0.45)');
    gradient.addColorStop(0.5, 'rgba(30, 10, 20, 0.18)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(shadowCanvas);
    return texture;
  }

  const shadowGeo = new THREE.PlaneGeometry(5.2, 5.2);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: createShadowTexture(),
    transparent: true,
    opacity: 0.85,
    depthWrite: false
  });
  const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -1.45;
  scene.add(shadowPlane);

  // 5. PROCEDURAL 3D GIFT BOX CREATION
  const giftBoxMaster = new THREE.Group();
  scene.add(giftBoxMaster);

  // Materials
  const boxMaterial = new THREE.MeshStandardMaterial({
    color: 0xD6336C,      // Rose
    roughness: 0.28,
    metalness: 0.22,
    emissive: 0x000000
  });

  const lidMaterial = new THREE.MeshStandardMaterial({
    color: 0xE64980,      // Slightly brighter rose for lid
    roughness: 0.28,
    metalness: 0.22,
    emissive: 0x000000
  });

  const ribbonMaterial = new THREE.MeshStandardMaterial({
    color: 0xF0B429,      // Vibrant Gold
    roughness: 0.2,
    metalness: 0.72,
    emissive: 0x000000
  });

  // A. Box Body
  const bodyGeo = new THREE.BoxGeometry(2.1, 1.8, 2.1);
  const boxBody = new THREE.Mesh(bodyGeo, boxMaterial);
  boxBody.position.y = 0;
  giftBoxMaster.add(boxBody);

  // Body Ribbons (crossed)
  const ribbonGeo1 = new THREE.BoxGeometry(0.36, 1.82, 2.12);
  const bodyRibbon1 = new THREE.Mesh(ribbonGeo1, ribbonMaterial);
  boxBody.add(bodyRibbon1);

  const ribbonGeo2 = new THREE.BoxGeometry(2.12, 1.82, 0.36);
  const bodyRibbon2 = new THREE.Mesh(ribbonGeo2, ribbonMaterial);
  boxBody.add(bodyRibbon2);

  // B. Lid & Bow Group (Independent for lift/pop animations)
  const lidGroup = new THREE.Group();
  lidGroup.position.set(0, 0.95, 0); // Positioned right above the body
  giftBoxMaster.add(lidGroup);

  const lidGeo = new THREE.BoxGeometry(2.24, 0.34, 2.24);
  const lidMesh = new THREE.Mesh(lidGeo, lidMaterial);
  lidMesh.position.y = 0.17;
  lidGroup.add(lidMesh);

  // Lid Ribbons
  const lidRibbonGeo1 = new THREE.BoxGeometry(0.38, 0.36, 2.26);
  const lidRibbon1 = new THREE.Mesh(lidRibbonGeo1, ribbonMaterial);
  lidMesh.add(lidRibbon1);

  const lidRibbonGeo2 = new THREE.BoxGeometry(2.26, 0.36, 0.38);
  const lidRibbon2 = new THREE.Mesh(lidRibbonGeo2, ribbonMaterial);
  lidMesh.add(lidRibbon2);

  // Bow loops (Torus geometries)
  const bowGroup = new THREE.Group();
  bowGroup.position.set(0, 0.36, 0);
  lidGroup.add(bowGroup);

  const bowLoopGeo = new THREE.TorusGeometry(0.38, 0.09, 16, 32);

  // Loop 1
  const bow1 = new THREE.Mesh(bowLoopGeo, ribbonMaterial);
  bow1.rotation.set(Math.PI / 4, Math.PI / 4, 0);
  bow1.position.set(-0.2, 0.22, -0.2);
  bowGroup.add(bow1);

  // Loop 2
  const bow2 = new THREE.Mesh(bowLoopGeo, ribbonMaterial);
  bow2.rotation.set(Math.PI / 4, -Math.PI / 4, 0);
  bow2.position.set(0.2, 0.22, 0.2);
  bowGroup.add(bow2);

  // Loop 3
  const bow3 = new THREE.Mesh(bowLoopGeo, ribbonMaterial);
  bow3.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
  bow3.position.set(0.2, 0.22, -0.2);
  bowGroup.add(bow3);

  // Loop 4
  const bow4 = new THREE.Mesh(bowLoopGeo, ribbonMaterial);
  bow4.rotation.set(-Math.PI / 4, -Math.PI / 4, 0);
  bow4.position.set(-0.2, 0.22, 0.2);
  bowGroup.add(bow4);

  // Center knot sphere
  const knotGeo = new THREE.SphereGeometry(0.2, 16, 16);
  const knot = new THREE.Mesh(knotGeo, ribbonMaterial);
  knot.position.set(0, 0.18, 0);
  bowGroup.add(knot);

  // 6. BACKGROUND SPARKLE PARTICLES
  const sparklesCount = 220;
  const sparklesGeo = new THREE.BufferGeometry();
  const sparklesPos = new Float32Array(sparklesCount * 3);
  const sparklesVelocity = [];

  for (let i = 0; i < sparklesCount; i++) {
    sparklesPos[i * 3 + 0] = (Math.random() - 0.5) * 14;
    sparklesPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
    sparklesPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

    sparklesVelocity.push({
      y: 0.004 + Math.random() * 0.008,
      x: (Math.random() - 0.5) * 0.004
    });
  }

  sparklesGeo.setAttribute('position', new THREE.BufferAttribute(sparklesPos, 3));

  const sparklesMat = new THREE.PointsMaterial({
    color: 0xF0B429,
    size: 0.07,
    transparent: true,
    opacity: 0.65
  });

  const sparklesPoints = new THREE.Points(sparklesGeo, sparklesMat);
  scene.add(sparklesPoints);

  // 7. CONFETTI BURST SYSTEM (Triggered on Click)
  const confettiCount = 65;
  const confettiGroup = new THREE.Group();
  scene.add(confettiGroup);

  const confettiColors = [0xD6336C, 0xF0B429, 0x7950F2, 0x20C997, 0xFF8787, 0xFFD43B, 0xFFFFFF];
  const confettiList = [];

  const confettiBoxGeo = new THREE.BoxGeometry(0.09, 0.09, 0.02);

  for (let i = 0; i < confettiCount; i++) {
    const cColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const cMat = new THREE.MeshStandardMaterial({
      color: cColor,
      roughness: 0.3,
      metalness: 0.4
    });
    const cMesh = new THREE.Mesh(confettiBoxGeo, cMat);
    cMesh.visible = false;
    confettiGroup.add(cMesh);

    confettiList.push({
      mesh: cMesh,
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      rot: new THREE.Vector3(),
      active: false
    });
  }

  // 8. INTERACTION STATES & LISTENERS
  let mouseX = 0;
  let mouseY = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let isHovered = false;
  let isExploding = false;
  let explosionStartTime = 0;

  // Default Lid resting position
  const lidRestingY = 0.95;
  let lidTargetY = lidRestingY;
  let lidTargetRotX = 0;
  let lidTargetRotZ = 0;

  // Mouse Move Parallax
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    } else {
      // Soft falloff when cursor is outside canvas
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    targetTiltY = mouseX * 0.45;
    targetTiltX = -mouseY * 0.3;
  });

  // Hover Lid Lift & Glow
  canvas.addEventListener('mouseenter', () => {
    if (!isExploding) {
      isHovered = true;
      lidTargetY = lidRestingY + 0.28;
      boxMaterial.emissive.setHex(0x280512);
      ribbonMaterial.emissive.setHex(0x382800);
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (!isExploding) {
      isHovered = false;
      lidTargetY = lidRestingY;
      boxMaterial.emissive.setHex(0x000000);
      ribbonMaterial.emissive.setHex(0x000000);
    }
  });

  // Click Confetti Burst & Lid Pop Animation
  canvas.addEventListener('click', triggerExplosion);

  function triggerExplosion() {
    if (isExploding) return;
    isExploding = true;
    explosionStartTime = performance.now();

    // Lid pops up and tilts back
    lidTargetY = lidRestingY + 1.85;
    lidTargetRotX = -0.7;
    lidTargetRotZ = 0.35;

    // Trigger confetti
    confettiList.forEach((c) => {
      c.active = true;
      c.mesh.visible = true;
      c.pos.set(
        (Math.random() - 0.5) * 0.8,
        lidRestingY + 0.2,
        (Math.random() - 0.5) * 0.8
      );
      c.mesh.position.copy(c.pos);

      // Random explosion velocity vector
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 4.5;
      c.vel.set(
        Math.cos(angle) * speed,
        4.0 + Math.random() * 5.5,
        Math.sin(angle) * speed
      );

      c.rot.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    });

    // Auto reset after 3 seconds
    setTimeout(() => {
      lidTargetY = isHovered ? lidRestingY + 0.28 : lidRestingY;
      lidTargetRotX = 0;
      lidTargetRotZ = 0;

      // Fade out and reset confetti
      confettiList.forEach((c) => {
        c.active = false;
        c.mesh.visible = false;
      });

      isExploding = false;
    }, 3000);
  }

  // 9. ANIMATION LOOP & TAB VISIBILITY HANDLING
  const clock = new THREE.Clock();
  let animationFrameId;
  let isTabActive = true;

  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) {
      clock.start();
      animate();
    } else {
      cancelAnimationFrame(animationFrameId);
    }
  });

  function animate() {
    if (!isTabActive) return;
    animationFrameId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Idle gentle floating and rotation
    const floatOffset = Math.sin(elapsedTime * 1.8) * 0.12;
    giftBoxMaster.position.y = floatOffset;
    shadowPlane.scale.setScalar(1 - floatOffset * 0.3);

    // Continuous slow idle spin + mouse parallax lerp
    giftBoxMaster.rotation.y += 0.007;
    giftBoxMaster.rotation.y += (targetTiltY - (giftBoxMaster.rotation.y % (Math.PI * 2))) * 0.05;
    giftBoxMaster.rotation.x += (targetTiltX - giftBoxMaster.rotation.x) * 0.08;

    // Smooth Lid Lerping
    lidGroup.position.y += (lidTargetY - lidGroup.position.y) * 0.12;
    lidGroup.rotation.x += (lidTargetRotX - lidGroup.rotation.x) * 0.12;
    lidGroup.rotation.z += (lidTargetRotZ - lidGroup.rotation.z) * 0.12;

    // Update Sparkle particles drift
    const positions = sparklesGeo.attributes.position.array;
    for (let i = 0; i < sparklesCount; i++) {
      positions[i * 3 + 1] += sparklesVelocity[i].y;
      positions[i * 3 + 0] += sparklesVelocity[i].x;

      // Wrap around top
      if (positions[i * 3 + 1] > 5) {
        positions[i * 3 + 1] = -5;
      }
    }
    sparklesGeo.attributes.position.needsUpdate = true;

    // Update Confetti physics if active
    if (isExploding) {
      const gravity = -9.8;
      confettiList.forEach((c) => {
        if (!c.active) return;
        c.vel.y += gravity * delta;
        c.pos.x += c.vel.x * delta;
        c.pos.y += c.vel.y * delta;
        c.pos.z += c.vel.z * delta;

        c.mesh.position.copy(c.pos);
        c.mesh.rotation.x += c.rot.x * delta;
        c.mesh.rotation.y += c.rot.y * delta;
        c.mesh.rotation.z += c.rot.z * delta;

        // Ground bounce/dampen
        if (c.pos.y < -1.45) {
          c.pos.y = -1.45;
          c.vel.y = -c.vel.y * 0.3;
          c.vel.x *= 0.7;
          c.vel.z *= 0.7;
        }
      });
    }

    renderer.render(scene, camera);
  }

  // Window Resize Listener
  function onWindowResize() {
    if (window.innerWidth < 768) {
      canvas.style.display = 'none';
      if (fallbackBox) fallbackBox.style.display = 'block';
      cancelAnimationFrame(animationFrameId);
      return;
    } else {
      canvas.style.display = 'block';
      if (fallbackBox) fallbackBox.style.display = 'none';
    }

    width = parent.clientWidth || 500;
    height = parent.clientHeight || 500;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  window.addEventListener('resize', onWindowResize);

  // Start animation loop
  animate();
})();
