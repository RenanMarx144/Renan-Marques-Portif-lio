function Sprit (x,y,largura,altura){
	this.x =x;
	this.y =y;
	this.largura = largura;
	this.altura = altura;
	
	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function Sprit1 (x,y,largura,altura){
	this.x =x;
	this.y =y;
	this.largura = largura;
	this.altura = altura;
	
	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img1, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
function Sprit2 (x,y,largura,altura){
	this.x =x;
	this.y =y;
	this.largura = largura;
	this.altura = altura;
	
	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img2, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
var bg = new Sprit(0, 0, 600,600),
spboneco = new Sprit1(0, 0, 57,57),
spchao = new Sprit2(0, 0, 600,50);