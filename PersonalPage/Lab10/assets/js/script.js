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
function mascara(o,f){
	v_obj=o
	v_fun=f

	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
	v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}

function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}

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