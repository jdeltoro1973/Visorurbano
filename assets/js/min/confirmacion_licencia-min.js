var baseURL="http://visorurbano.guadalajara.gob.mx/",getUrl=window.location,params1=getUrl.pathname.split("/")[4],params2=getUrl.pathname.split("/")[5];params1?$.ajax({url:baseURL+"Confirmacion_licencia/confirmacion_lic",type:"GET",dataType:"json",data:{id_s:params2,id_l:params1},success:function(a){a.status?$("#mensaje").append('<section><div class="row"><div class="col-md-12"><h3>Imprimir licencia:</h3><a href="'+baseURL+"formatos/licencia_pdf?lic="+params1+"&usu="+params2+'" target="_blank" class="mui-btn mui-btn--primary"><i class="fa fa-print" aria-hidden="true"></i> Imprimir Licencia</a></div></div></section>'):$("#mensaje").append("<center><h3>La licencia no puede ser impresa</h3></center>")}}):$("#mensaje").append("<center><h3>La licencia no puede ser impresa</h3></center>");