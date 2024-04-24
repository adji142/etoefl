<template>
    <div class="wrapper" v-bind:style="{ 'background-image': 'url(\'/new/assets/img/hero-bg.jpg\')' }" :style="{ 'background-size': 'cover'}">
		<slot/>
	</div>
</template>

<script>
    export default {
        // Default AppName
        data() {
            return { appName : "e-TOEFL" }
        }
    }
</script>