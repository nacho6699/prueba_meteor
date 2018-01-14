/*Template.categoria.variable = function(){
   return "hola jajajjaja";
};
*/

Template.categoria.favoritos = function() {
   return favoritos.find({}, {sort: {category:1}});
}


// mostrando los mensajes
Template.chat.mensajes = function(){

	//return mensajes.find();
	 //var nom = mensajes.find({}, {nombre:1});
	return mensajes.find({}, {limit:30, sort: {date:-1}}).fetch().reverse();

}
//para la hora del los mensajes y bajar el scroll
Template.chat.helpers({
	'date': function(){
		$('.panel-body').animate({scrollTop:$('.panel-body')[0].scrollHeight}, 1000 );
		return moment(this.date).from(Date.now());
	}
})

Template.chat.events({

	'click #btn_enviar': function(){
		//event.preventDefault();
		var usuariologeado=Meteor.user().username;
		var mensaje=txt_mensaje.value;
		//var nombre=$('#nick').val();
		var id=Meteor.user()._id;

		mensajes.insert({
			nombre:usuariologeado,
			mensaje:mensaje,
			date:new Date(),
			miID:id
		});
		//console.log(nombre+': '+mensaje+u);
		//$('.panel-body').animate({scrollTop:$('.panel-body')[0].scrollHeight}, 1000 );
		txt_mensaje.value='';
	},
});
//
