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
						// console.log(_containerLink);

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
				});
