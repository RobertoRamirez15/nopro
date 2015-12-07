// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btntodo').on('tap',function(){
		
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.178/icascatalogo/buscartodos.php",
		  data: "",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_calzado').empty();
			$(':mobile-pagecontainer').pagecontainer('change', '#todo',{
				transition: 'pop'
			});
			for(var $x = 0; $x < datosCalzado.tenis.length; $x++)
			
			{
				
			$('#contenido_calzado').append('<div><div width="318" height="189"><img src="http://192.168.1.178/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[$x].modelo +'.jpg" width="291" height="260" align="left"/> <div align="right">modelo: '+ datosCalzado.tenis[$x].modelo +' </div><div align="center"> <p> '+ datosCalzado.tenis[$x].nombre_tenis +' </p> <p> '+ datosCalzado.tenis[$x].tipo +' </p> <p>talla(s) disponibles: '+ datosCalzado.tenis[$x].longitud_disponible +' </p> <p>color(s) disponibles: '+ datosCalzado.tenis[$x].color_disponible +' </p><p> '+ datosCalzado.tenis[$x].marca +' </p><div align="right"> <p> $ '+ datosCalzado.tenis[$x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});



	$('#btnnike').on('tap',function(){
		
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.178/icascatalogo/buscarmarca.php",
		  data: "modelo=nike",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_nike').empty();
			$(':mobile-pagecontainer').pagecontainer('change', '#nike',{
				transition: 'pop'
			});
			for(var $x = 0; $x < datosCalzado.tenis.length; $x++)
			
			{
				
			$('#contenido_nike').append('<div><div width="318" height="189"><img src="http://192.168.1.178/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[$x].modelo +'.jpg" width="291" height="260" align="left"/> <div align="right">modelo: '+ datosCalzado.tenis[$x].modelo +' </div><div align="center"> <p> '+ datosCalzado.tenis[$x].nombre_tenis +' </p> <p> '+ datosCalzado.tenis[$x].tipo +' </p> <p>talla(s) disponibles: '+ datosCalzado.tenis[$x].longitud_disponible +' </p> <p>color(s) disponibles: '+ datosCalzado.tenis[$x].color_disponible +' </p><p> '+ datosCalzado.tenis[$x].marca +' </p><div align="right"> <p> $ '+ datosCalzado.tenis[$x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});
	
	
	
	$('#btnadidas').on('tap',function(){
		
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.178/icascatalogo/buscarmarca.php",
		  data: "modelo=adidas",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_adidas').empty();
			$(':mobile-pagecontainer').pagecontainer('change', '#adidas',{
				transition: 'pop'
			});
			for(var $x = 0; $x < datosCalzado.tenis.length; $x++)
			
			{
				
			$('#contenido_adidas').append('<div><div width="318" height="189"><img src="http://192.168.1.178/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[$x].modelo +'.jpg" width="291" height="260" align="left"/> <div align="right">modelo: '+ datosCalzado.tenis[$x].modelo +' </div><div align="center"> <p> '+ datosCalzado.tenis[$x].nombre_tenis +' </p> <p> '+ datosCalzado.tenis[$x].tipo +' </p> <p>talla(s) disponibles: '+ datosCalzado.tenis[$x].longitud_disponible +' </p> <p>color(s) disponibles: '+ datosCalzado.tenis[$x].color_disponible +' </p><p> '+ datosCalzado.tenis[$x].marca +' </p><div align="right"> <p> $ '+ datosCalzado.tenis[$x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});
	
	
		
	$('#btnpuma').on('tap',function(){
		
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.178/icascatalogo/buscarmarca.php",
		  data: "modelo=puma",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_puma').empty();
			$(':mobile-pagecontainer').pagecontainer('change', '#puma',{
				transition: 'pop'
			});
			for(var $x = 0; $x < datosCalzado.tenis.length; $x++)
			
			{
				
			$('#contenido_puma').append('<div><div width="318" height="189"><img src="http://192.168.1.178/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[$x].modelo +'.jpg" width="291" height="260" align="left"/> <div align="right">modelo: '+ datosCalzado.tenis[$x].modelo +' </div><div align="center"> <p> '+ datosCalzado.tenis[$x].nombre_tenis +' </p> <p> '+ datosCalzado.tenis[$x].tipo +' </p> <p>talla(s) disponibles: '+ datosCalzado.tenis[$x].longitud_disponible +' </p> <p>color(s) disponibles: '+ datosCalzado.tenis[$x].color_disponible +' </p><p> '+ datosCalzado.tenis[$x].marca +' </p><div align="right"> <p> $ '+ datosCalzado.tenis[$x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});
	
	
		
	$('#btnvans').on('tap',function(){
		
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.178/icascatalogo/buscarmarca.php",
		  data: "modelo=vans",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_vans').empty();
			$(':mobile-pagecontainer').pagecontainer('change', '#vans',{
				transition: 'pop'
			});
			for(var $x = 0; $x < datosCalzado.tenis.length; $x++)
			
			{
				
			$('#contenido_vans').append('<div><div width="318" height="189"><img src="http://192.168.1.178/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[$x].modelo +'.jpg" width="291" height="260" align="left"/> <div align="right">modelo: '+ datosCalzado.tenis[$x].modelo +' </div><div align="center"> <p> '+ datosCalzado.tenis[$x].nombre_tenis +' </p> <p> '+ datosCalzado.tenis[$x].tipo +' </p> <p>talla(s) disponibles: '+ datosCalzado.tenis[$x].longitud_disponible +' </p> <p>color(s) disponibles: '+ datosCalzado.tenis[$x].color_disponible +' </p><p> '+ datosCalzado.tenis[$x].marca +' </p><div align="right"> <p> $ '+ datosCalzado.tenis[$x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});
	
	
	
	}); 
});