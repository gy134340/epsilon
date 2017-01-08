/**
	 * canavs and img 
	 * @author  gy
	 */
	var ANIMATION;
	var image,canvas,ctx,imgData;
	var canvasWidth,canvasHeight;

	var winWidth, windHeight;
	var content = document.querySelectorAll('.content')[0];
	
	function init(){
		image = document.getElementById("canvas_img");

		canvas = document.getElementById("canvas");
		ctx = canvas.getContext('2d');
		ctx.drawImage(image,0,0);
		canvasWidth = canvas.width;
		canvasHeight = canvas.height;

		winWidth = window.innerWidth;
		windHeight = window.innerHeight;
	}

	function draw(){

		var atomWidth = canvasWidth / 150 ;
		var atomHeight = canvasHeight / 99;

		for(var i = 0; i < canvasWidth; i+=atomWidth){
			for(var j = 0; j < canvasHeight; j+= atomHeight){

				var atom = document.createElement('canvas');
				atom.className = 'atom';
				atom.width = atomWidth ;
				atom.height = atomHeight;

				atom.style.left = 0 + 'px';
				atom.style.top = 0 + 'px';
				atom.setAttribute('data-left',i);
				atom.setAttribute('data-top',j);

				var atomCtx = atom.getContext('2d');
				var subImageData = ctx.getImageData(i,j,atomWidth,atomHeight);

				// 注意最后两个参数是整张canvas的比例大小,不能写atom的
				atomCtx.putImageData(subImageData,0,0,0,0,canvasWidth,canvasHeight);
				content.append(atom);
				
			}		
		}
	}

	function blend(){
		init();
		imgData = ctx.getImageData(0,0,canvasWidth,canvasHeight);			// total img data
		draw();
	}

	blend();			// 初始canvas分割成小块
	
	

	function animate(time){
		
		requestAnimationFrame( animate );
		TWEEN.update( time );
	}

	

	// 移动图片小块
	function tweenAtomsPosition(){

		var atoms = document.querySelectorAll('.atom');
		var len = atoms.length;
		for( var i = 0;i<len;i++ ){
			var atom = atoms[i];
			var xpoi = atom.getAttribute('data-left');
			var ypoi = atom.getAttribute('data-top');
			// console.log(xpoi,ypoi);

			var updateCallback = function() {
				this.domElement.style.left = this.x + 'px';
				// this.domElement.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px);';
			};
			var coords = { left:0,top:0,domElement:atom};	

			var tween = new TWEEN.Tween(coords)
				.to({
					left: xpoi,
					top: ypoi
				},1000)
				.onUpdate(updateCallback)
				.easing( TWEEN.Easing.Exponential.InOut );
				
			tween.start();
		}

		
	}

	// dom加载完开始
	window.addEventListener('load', function() {
		tweenAtomsPosition();
		animate();
	});