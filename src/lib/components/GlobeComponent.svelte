<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMount } from 'svelte';

    let canvas;

    onMount(() => {

        // Configuration de la scène
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Ajouter une lumière
        const light = new THREE.AmbientLight(0x404040); // Lumière ambiante
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0).normalize();
        scene.add(directionalLight);

        // Charger le modèle 3D
        const loader = new GLTFLoader();
        loader.load('static/models', (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
        });

        // Positionner la caméra
        camera.position.z = 5;

        // Fonction d'animation
        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Redimensionner le renderer lorsque la fenêtre change de taille
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    });
</script>

<style>
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>

<canvas bind:this={canvas}></canvas>
