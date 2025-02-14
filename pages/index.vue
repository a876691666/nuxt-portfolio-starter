<template>
	<div style="width: 100%; height: 100%; overflow: auto;" class="main" ref="mainRef">
		<section style="font-size: 120px;">
			<div class="page1">Lorem ipsum dolor sit
				amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
				erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
				sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
			<div class="page2">Lorem ipsum dolor
				sit
				amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
				erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
				sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

		</section>
	</div>
	<TresCanvas v-bind="gl" window-size style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;">
		<TresPerspectiveCamera :position="[0, 1.7, 7]" :look-at="[0, 0, 0]" />

		<RotateCube />

		<Suspense>
			<StatsGl />
		</Suspense>
	</TresCanvas>
</template>

<script setup>
import { RotateCube } from '#components';
import { OrbitControls, StatsGl } from '@tresjs/cientos';

import { reactive, onMounted, nextTick } from 'vue';

const mainRef = ref();

const config = reactive({
	orbitControlsEnabled: true,
})

const { $Observer, $gsap } = useNuxtApp()


const gl = reactive({
	clearColor: '#1C1C1C',
	powerPreference: 'high-performance',
})

//
// Lifecycle
//
onMounted(async () => {
	await nextTick()
})
</script>
<style>
html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
</style>