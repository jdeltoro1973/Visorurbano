!function($){"use strict";$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top-48},1e3,"easeInOutExpo"),!1}}),$(".js-scroll-trigger").click(function(){$(".navbar-collapse").collapse("hide")}),$("body").scrollspy({target:"#mainNav",offset:54});var a=function(){$("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")};a(),$(window).scroll(a),$("#btnBuscar").on("click",function(){""!=$("#txtCritero").val()&&window.location.replace("http://visorurbano.guadalajara.gob.mx/mapa/?criterio="+$("#txtCritero").val())}),$("#btnfBuscar").on("click",function(){""!=$("#txtfCritero").val()&&window.location.replace("http://visorurbano.guadalajara.gob.mx/mapa/?criterio="+$("#txtfCritero").val())})}(jQuery);