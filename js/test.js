var container,stats;	
var canavs;
var camera,scene,renderer,controls;
var raycaster;			// 点击发出的一条射线
var mouse;	

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var INTERSECTED = [];	// 鼠标点击的第一个点,以防快速点击，所以用数组保存
var PI2 = Math.PI * 2;


// 初始化
function init(){

	container = document.querySelectorAll('.container')[0];
	scene =  new Three.scene();

	camera = new Three.PerspectiveCamera(75, winWidth / winHeight, 1, 10000);
	camera.position.set(0, 0, 500);
	camera.lookAt(scene.position);

	var light = new THREE.AmbientLight(0x404040); 
	scene.add(light);	

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor(0xf0f0f0);
	renderer.setSize(winWidth, winHeight);
	container.append(renderer.domElement);
}


// 渲染
function render(){

}


function animate(){
	requestAnimationFrame( animate );
	render();
	stats.update();				// fps
	controls.update();			// control position
}


// 画一个网格
function drawLine(){

}

init();
animate();
