const material = new THREE.RawShaderMaterial( {

	uniforms: {
		time: { value: 1.0 }
	},
	vertexShader: document.getElementById( 'vertexShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentShader' ).textContent,

} );