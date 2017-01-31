// Code from @
$(function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight , 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  //Space background is a large sphere
  //var spacetex = THREE.ImageUtils.loadTexture("img/3d-background/space-05.jpg");
  var spacetex = new THREE.TextureLoader().load( "img/3d-background/space-05.jpg");
  var spacesphereGeo = new THREE.SphereGeometry(20,20,20);
  var spacesphereMat = new THREE.MeshPhongMaterial();
  spacesphereMat.map = spacetex;

  var spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);

  //spacesphere needs to be double sided as the camera is within the spacesphere
  spacesphere.material.side = THREE.DoubleSide;

  spacesphere.material.map.wrapS = THREE.RepeatWrapping;
  spacesphere.material.map.wrapT = THREE.RepeatWrapping;
  spacesphere.material.map.repeat.set( 5, 3);

  scene.add(spacesphere);

  //position camera
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = -15;
  camera.lookAt(scene.position);

  //create two spotlights to illuminate the scene
  var spotLight = new THREE.SpotLight(  0x50517d );
  spotLight.position.set( -40, 60, -10 );
  spotLight.intensity = 2;
  scene.add( spotLight );

  var spotLight2 = new THREE.SpotLight( 0x6e4c7f );
  spotLight2.position.set( 40, -60, 30 );
  spotLight2.intensity = 1.5;
  scene.add( spotLight2 );

  $("#WebGL-output"). append(renderer.domElement);

  //call render loop once
  render();

  //render loop
  function render() {
    requestAnimationFrame(render);
    //rotate spacesphere
    spacesphere.rotation.y += 0.001;
    renderer.render(scene, camera);
  };

});
