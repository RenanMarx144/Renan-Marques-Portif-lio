function mouseIn(img) {
	var test = img;
	if(test == "img"){
		document.getElementById('img').src = "img/linkedin2.png";
	}else if (test == 2){
		document.getElementById('img2').src = "img/git2.png";
	}else if(test == 3){
		document.getElementById('img3').src = "img/hack2.png";
	}
}

function mouseOut(img){
	var test = img;
	if (test == "img") {
		document.getElementById('img').src = "img/linkedin.png";
	}else if(test == 2){
		document.getElementById('img2').src = "img/git1.png";
	}else if(test == 3){
		document.getElementById('img3').src = "img/hack1.png";
	}	
}
$(document)
		.ready(
				function() {
					// vaiaveis locais
					var _containerBtn = $(".jbtn-back"), _containerInit = $(".inicio"), anime3d = $(".anime");
					var _containerMenu = $('[data-container="jMenu"]'), _containerLink = $('[data-container="link"]');
					
					$('#bt_menu').click(function() {
						$(".menu2").show(400);
						$(".menu2").toggle(this.checked);
					});

					function infoInit() {
						var cont = 6;
						for (var i = 0; i < cont; i++) {
							var temp = i + i;
							$(".an" + i).addClass("anime-start");
							if (temp <= 9) {
								$(".an" + i).css("transition-delay",
										"0." + temp + "s");
							} else {
								$(".an" + i).css("transition-delay",
										"1." + temp + "s");
							}

						}

					}
					infoInit();

					// efeitos de navegações
					_containerLink.click(function() {
						var _sessao = $(this).data('link');
						 //console.log(_containerLink);

						function posicao(seletor) {
							var _alturaMenu = parseInt(_containerMenu
									.outerHeight());
							var _posicao = parseInt(($(
									'[data-container="' + seletor + '"]')
									.position().top)
									- _alturaMenu);
							console.log(_posicao);
							return _posicao;

						}

						$('html,body').animate({
							scrollTop : posicao(_sessao)
						}, 1300);
						return false;
					});

					// console.log(_containerMenu);

					// mostrar o botao
					$(window).scroll(function() {
						if ($(this).scrollTop() > 80) {
							_containerBtn.fadeIn(300);
							_containerMenu.addClass("interface2");
							anime3d.removeClass("anime-start");

						} else {
							_containerBtn.fadeOut(300);
							_containerMenu.removeClass("interface2");
							infoInit();

						}
					});

					// click voltar ao inicio
					_containerInit.click(function() {
						$("html, body").animate({
							scrollTop : 0
						}, 400);

						return false;
					});
					_containerBtn.click(function() {

						$("html, body").animate({
							scrollTop : 0
						}, 400);

						return false;
					});

					// efeito de trasparecia com mouser
					_containerBtn.hover(function() {
						_containerBtn.css("text-decoration", "none");
						_containerBtn.css("transition-duration", "0.2s");
						_containerBtn.css("opacity", "1");				
					});
					_containerBtn.mouseleave(function() {
						_containerBtn.css("transition-duration", "0.2s");
						_containerBtn.css("opacity", "0.3");
					});

					$(".java1").click(function () { 
						$('.infoJava').slideDown();
						$('.css1').css("top","60%");						 					
					});
					$(".java1").mouseout(function () { 
						$('.infoJava').slideUp();
						$('.css1').css("top","40%");						 					
					});


					$('.css1').click(function(){
						$('.infoCss').slideDown();
					});
					$('.css1').mouseout(function () { 
						$('.infoCss').slideUp();
					});

					function habilidades(){
						$('.java1').addClass('anime-start1');
						$('.css1').addClass('anime-start1');
					}
						
					$(window).scroll(function() {
						var scTop = $(this).scrollTop();
						if (scTop > 1780) {
							habilidades();						

						} else {							
							$('.css1').removeClass("anime-start1");
							$('.java1').removeClass("anime-start1");

						}
									
					});	
					$(".show").click(function () {						 						
						$(".skillLeft").animate({height: '80%'}, 1500);					
						$(".skillLeft").css("opacity", "1");
						$(".skillLeft").animate({left: '69%'});	
																	
					});		
					$(".delet").click(function () { 
						$(".skillLeft").animate({opacity: '0'},800);
						$(".skillLeft").animate({height: '8%'});
						$(".skillLeft").animate({left: '81%'});
					});	

					$(".tap1").click(function(){
						$(".tap1").animate({left: '50%'}, 800);
						$(".tap2").animate({left: '6%', top: '40%'}, 800);
						$(".tap3").animate({left: '6%', top: '62%'}, 800);
						$(".opcaoEs").css("opacity","0");
						$(".etg").animate({opacity: '1'}, 800);
						$(".formacao").animate({opacity: '0'}, 400);
						$(".pjVida").animate({opacity: '0'}, 400);
					});
					$(".tap2").click(function(){
						$(".tap1").animate({left: '6%'}, 800);
						$(".tap2").animate({left: '50%', top: '18%'}, 800);
						$(".tap3").animate({left: '6%', top: '62%'}, 800);
						$(".opcaoEs").css("opacity","0");
						$(".etg").animate({opacity: '0'}, 400);
						$(".formacao").animate({opacity: '1'}, 800);
						$(".pjVida").animate({opacity: '0'}, 400);
					});
					$(".tap3").click(function(){
						$(".tap1").animate({left: '6%'}, 800);
						$(".tap2").animate({left: '6%' , top: '40%'}, 800);
						$(".tap3").animate({left: '50%', top: '18%'}, 800);
						$(".opcaoEs").css("opacity","0");
						$(".etg").animate({opacity: '0'}, 400);
						$(".formacao").animate({opacity: '0'}, 400);
						$(".pjVida").animate({opacity: '1'}, 800);
					});



				
				});
