Template.formulario.events({
	"click #btn_enviar": function(){
		//e.preventDefault();
		var dato = $('#txt_nombre').val();
		console.log(dato);
	}
})