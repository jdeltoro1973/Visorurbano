function setLoading(){$("#overlayLoading").remove();var a=$("<div/>",{id:"overlayLoading"}).appendTo($("body"));$("<div/>",{id:"overlayLoadingContent",class:"mui--z2"}).appendTo(a);$("body").css("overflow","hidden"),$("#overlayLoading").attr("style","position:fixed;")}function unsetLoading(){$("#overlayLoading").remove(),$("body").css("overflow-y","auto")}function errorLicenciaGiro(a,e){$("#overlayError").remove(),$("li.current").addClass("error");var n=$("<div/>",{id:"overlayError"}).appendTo($("body")),r=$("<div/>",{id:"overlayErrorContent",class:"mui--z2"}).appendTo(n);r.append('<h3><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> El trámite no puede continuar por las siguientes razones:</h3>'),r.append("<ul></ul>"),r.append('<div class="footer"><a href="javascript:removeErrorLicenciaGiro('+a+')" class="mui-btn">Entiendo</a></div>'),$("body").css("overflow","hidden"),$.each(e,function(a,e){$("#overlayErrorContent ul").append("<li>"+e+"</li>")})}function removeErrorLicenciaGiro(a){switch($("#overlayError").remove(),$("body").css("overflow-y","auto"),a){case 1:$("input:radio[name=st1_anuencia]").prop("checked",!1)}}function setWarning(a){$("#overlayError").remove();var e=$("<div/>",{id:"overlayError"}).appendTo($("body")),n=$("<div/>",{id:"overlayWarningContent",class:"mui--z2"}).appendTo(e);n.append('<h3><i class="fa fa-info-circle" aria-hidden="true"></i> Importante:</h3>'),n.append("<span>Se encontrarón las siguientes diferencias entre los datos proporcionados del propietario y la base de datos de Guadalajara: </span>"),n.append("<ul></ul>"),n.append('<div class="footer"><a href="javascript:removeWarning()" class="mui-btn">Entiendo</a></div>'),$("body").css("overflow","hidden"),$.each(a,function(a,e){$("#overlayWarningContent ul").append("<li>"+e+"</li>")})}function continuarVentanilla(){$("#overlayError").remove();var a=$("<div/>",{id:"overlayError"}).appendTo($("body")),e=$("<div/>",{id:"overlayWarningContent",class:"mui--z2"}).appendTo(a);e.append('<h3><i class="fa fa-info-circle" aria-hidden="true"></i> Continuar el trámite de manera presencial en ventanilla.</h3>'),e.append('<br><span style="margin-bottom: 40px;">Si no cuentas con tu firma electrónica y deseas finalizar tu trámite, acude a las ventanillas de la Dirección de padrón y Licencias de Guadalajara para continuar con el proceso.<br><br><i class="fa fa-map-marker" aria-hidden="true"></i> Av 5 de Febrero 249, Las Conchas, 44460 Guadalajara, Jal.</span><br>'),e.append('<div class="footer"><button type="button" class="mui-btn" id="btnVentanilla">Aceptar</button><a href="javascript:removeWarning()" class="mui-btn mui-btn--danger">Cancelar</a></div>'),$("body").css("overflow","hidden"),$("#btnVentanilla").on("click",function(a){a.preventDefault();updateForma(new Array({name:"status",value:"V"}),0,$("#tramite").val()).done(function(a){window.location.href=baseURL+"admin"})})}function removeWarning(){$("#overlayError").remove(),$("body").css("overflow-y","auto")}