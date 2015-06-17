/* ENVIA MENSAGEM VIA ALERT */
function enviaMsg(msg){
	alert(msg);
}

/* VALIDAÇÃO DE E-MAIL */
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

/* VALIDAÇÃO DE TELEFONE */


$(document).ready(function(){
	$('input, textarea').placeholder();

	$('#telefone').focusout(function(){
		var phone, element;
		element = $(this);
		element.unmask();
		phone = element.val().replace(/\D/g, '');

	 	if(phone.length > 10) {
	 		element.mask("(99) 99999-999?9");
		} else {
			element.mask("(99) 9999-9999?9");
		}
	}).trigger('focusout'); 
	
	$('#mensagem').simplyCountable({
		strictMax: true
	});
});

/* VALIDAÇÃO DO FORMULÁRIO */
function valida(){
	var msg_form = '';
	var erro = '';
	var div_msg_form = $('#msg_form');
	var nome = $('#nome');
	var email = $('#email');
	var msg = $('#mensagem');

	if(nome.val().length < 1){
		msg_form += 'Por favor, preencha o campo Nome<br/>';
		erro = '1';
	}
	if(email.val().length < 1){
		msg_form += 'Por favor, preencha o campo Email<br/>';
		erro = '1';
	}
	else if(!validateEmail(email.val())){
		msg_form += 'Formato de e-mail incorreto<br/>';
		erro = '1';
	}
	if(msg.val().length < 1){
		msg_form += 'Por favor, preencha o campo Mensagem<br/>';
		erro = '1';
	}

	if(erro == '1'){
		div_msg_form.attr('class', 'erro'); 

		div_msg_form.html(msg_form);
		return false;
	}
	else{
		div_msg_form.attr('class', 'sucesso');

		msg_form += 'Formulário Enviado!';
		div_msg_form.html(msg_form);
		return false;
	}
}