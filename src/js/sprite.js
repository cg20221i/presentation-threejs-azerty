const map = new THREE.TextureLoader().load( 'textures/sprite.png' );
const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

const sprite = new THREE.Sprite( material );
sprite.scale.set(200, 200, 1)
scene.add( sprite );