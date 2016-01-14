/**
 * Created by admin on 26.03.2015.
 */

// -- главный слайдер
$('#carousel-example-generic-main').carousel({
    interval: 20000
});
// -- главный слайдер



// -- слайдер с отзывами клиентов
$('#carousel-example-generic').carousel({
    interval: 10000
});
// -- слайдер с отзывами клиентов
/**
 * Created by admin on 12.03.2015.
 */

(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();

        },
         // -- инициализация при загрузке js

        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- слайдер к блоку с контактами
            $('.scroll-services__link').on('click', app.scrollToServices);
            // -- слайдер к блоку с контактами

            // -- слайдер к блоку с контактами
            $('.scroll-cooperartion__link').on('click', app.scrollToCooperation);
            // -- слайдер к блоку с контактами

            // -- слайдер к блоку с инфой о компании
            $('.scroll-about_company__link').on('click', app.scrollToSlider);
            // -- слайдер к блоку с инфой о компании

            // -- открыть модалку с контактами
            $('.scroll-contacts__link').on('click', app.showContactsModal);
            // -- открыть модалку с контактами

            // -- открыть модалку с заказом обратного звонка
            $('.call-back-order').on('click', app.showCallBackModal);
            // -- открыть модалку с заказом обратного звонка
            //


        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============

        // -- открыть модалку с заказом обратного звонка
        showCallBackModal: function (e) {
            e.preventDefault();

            $('#modalCallBack').modal(
                'show'
            )
        },
        // -- открыть модалку с заказом обратного звонка

        // -- открыть модалку с контактами
        showContactsModal: function (e) {
            e.preventDefault();

            $('#modalContacts').modal(
                'show'
            )
        },
        // -- открыть модалку с контактами


        // -- функция скролла к слайдеру о компании
        scrollToSlider: function (e) {
            e.preventDefault();

            var offset = $('.slider-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к слайдеру о компании

        // -- функция скролла к сотрудничеству
        scrollToCooperation: function (e) {
            e.preventDefault();

            var offset = $('.cooperation-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к сотрудничеству

        // -- функция скролла к услугам
        scrollToServices: function (e) {
            e.preventDefault();

            var offset = $('.service-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к услугам

        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров
        someFunction: function () {}
        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров

        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());































$(function() {
	$(".banner__item").addClass("banner__item_loaded");

	// Fancybox (popups)
	if (typeof $.fn.fancybox !== "undefined") {

		$(".popup-link").click(function() {
			var $t = $(this),
				href = $t.attr("data-href"),
				effectIn = "fadeInDown";

			$.fancybox({
				autoWidth: true,
				autoHeight: true,
				fitToView: true,
				autoSize: true,
				closeClick: false,
				openEffect: 'none',
				closeEffect: 'none',
				closeBtn: false,
				wrapCSS: 'form',
				padding: 0,
				openSpeed: 0,
				closeSpeed: 0,
				href: href
			});

			$w = $(".fancybox-wrap");

			$w.addClass("animated " + effectIn);
			$w.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				$w.removeClass("animated " + effectIn);
			});
		});

		$(".popup-close").click(function() {
			$.fancybox.close();
		});

        // форма отправки заявки на странице дилера
		$("#request-form").submit(function() {
			var $name = $("#nameSorder"),
				$email = $("#emailSorder"),
				countryCode = $("#countryСodeSorder"),
				phone = $("#phoneSorder"),
				$errorDesc = $(".error-desc");

			$errorDesc.remove();

			if (
				$name.val() == "" || $email.val() == ""
				||
				countryCode.val() == "" || phone.val() == ""
			) {
				if ($name.val() == "") {
					$name.parent().append($("<span class='error-desc'>Поле обязательно для заполнения</span>"));
				}
				if ($email.val() == "") {
					$email.parent().append($("<span class='error-desc'>Поле обязательно для заполнения</span>"));
				}
				if (countryCode.val() == "" ||  phone.val() == "") {
					countryCode.parent().append($("<span class='error-desc'>Поля код страны и номер телефона обязательны для заполнения</span>"));
				}

				return false;
			}

			$.ajax({
				type: "POST",
				url: "/sorder/",
				data: $(this).serializeArray(),
				success: function(){
					var $t = $(this),
						href = $t.attr("data-href"),
						effectIn = "fadeInDown";

					$.fancybox.close();

					$.fancybox({
						autoWidth: true,
						autoHeight: true,
						fitToView: true,
						autoSize: true,
						closeClick: false,
						openEffect: 'none',
						closeEffect: 'none',
						closeBtn: false,
						wrapCSS: 'form',
						padding: 0,
						openSpeed: 0,
						closeSpeed: 0,
						href: "#success-popup"
					});

					$w = $(".fancybox-wrap");

					$w.addClass("animated " + effectIn);
					$w.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$w.removeClass("animated " + effectIn);
					});
				}
			});
			return false;
		});

		        // форма отправки заявки на странице дилера
		$("#preOrderForm").submit(function() {
			var $name = $("#nameSPreOrder"),
				$email = $("#emailSPreOrder"),
				countryCode = $("#countryСodeSPreOrder"),
				phone = $("#phoneSPreOrder"),
				$errorDesc = $(".error-desc");

			$errorDesc.remove();

			if (
				$name.val() == "" || $email.val() == ""
				||
				countryCode.val() == "" || phone.val() == ""
			) {
				if ($name.val() == "") {
					$name.parent().append($("<span class='error-desc'>Поле обязательно для заполнения</span>"));
				}
				if ($email.val() == "") {
					$email.parent().append($("<span class='error-desc'>Поле обязательно для заполнения</span>"));
				}
				if (countryCode.val() == "" ||  phone.val() == "") {
					countryCode.parent().append($("<span class='error-desc'>Поля код страны и номер телефона обязательны для заполнения</span>"));
				}

				return false;
			}

			$.ajax({
				type: "POST",
				url: "/sorder/",
				data: $(this).serializeArray(),
				success: function(){
					var $t = $(this),
						href = $t.attr("data-href"),
						effectIn = "fadeInDown";

					$.fancybox.close();

					$.fancybox({
						autoWidth: true,
						autoHeight: true,
						fitToView: true,
						autoSize: true,
						closeClick: false,
						openEffect: 'none',
						closeEffect: 'none',
						closeBtn: false,
						wrapCSS: 'form',
						padding: 0,
						openSpeed: 0,
						closeSpeed: 0,
						href: "#success-popup"
					});

					$w = $(".fancybox-wrap");

					$w.addClass("animated " + effectIn);
					$w.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$w.removeClass("animated " + effectIn);
					});
				}
			});
			return false;
		});



	}
});