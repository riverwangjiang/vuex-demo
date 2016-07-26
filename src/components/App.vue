<template>
	<div>
		<display></display>
		<increment></increment>
	</div>
</template>
<script>
	import Display from './Display.vue'
	import Increment from './Increment.vue'
	import store from '../../store.js'
	export default{
		el:'#app',
		components:{
			display:Display,
			increment:Increment
		},
		store: store
	}
</script>