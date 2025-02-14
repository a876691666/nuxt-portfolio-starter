<template>
	<TresMesh ref="meshRef">
		<TresBoxGeometry />
		<TresMeshBasicMaterial color="#FF0000" />
	</TresMesh>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

const { $gsap: gsap } = useNuxtApp();

const meshRef = ref<THREE.Mesh>();

onMounted(() => {
	if (!meshRef.value) return;
	const tl = gsap.timeline();

	tl.to(meshRef.value.rotation, {
		duration: 1, y: Math.PI * 2, ease: 'none',
		scrollTrigger: { scroller: ".main", trigger: '.main section', start: 'top top', end: 'bottom bottom', scrub: 1 }
	});
});
</script>