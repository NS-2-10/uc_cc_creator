var createUC = document.getElementById('createUC');
var uName = [];
var Actor = [];
var r = [];
var da_p_1 = [];
var da_i_1 = [];
var da_p_2 = [];
var da_i_2 = [];
var da_p_3 = [];
var da_i_3 = [];
var pc = [];
var gm = [];
var gs = [];

window.onload = function() {
	document.getElementById('ucHeader').hidden=true;
	document.getElementById('items_page').hidden=true;
	document.getElementById('call_page').hidden=true;
	document.getElementById('create_page').hidden=true;
	document.getElementById('finish_page').hidden=true;
	document.getElementById('free_page').hidden=true;
	document.getElementById('input_output_page').hidden=true;
	document.getElementById('input_page').hidden=true;
	document.getElementById('repeat_page').hidden=true;
	document.getElementById('request_page').hidden=true;
	document.getElementById('select_page').hidden=true;
	document.getElementById('cc_page').hidden=true;
	document.getElementById('request_list_page').hidden=true;
	document.getElementById('request_service_page').hidden=true;
 };

function saveData(){
	if (document.getElementById('uName').value == "" ||
		document.getElementById('Actor').value == "" ||
		document.getElementById('r').value == "" ||
		document.getElementById('da_p_1').value == "" ||
		document.getElementById('da_i_1').value == "" ||
		document.getElementById('pc').value == "" ||
		document.getElementById('gm').value == "" ||
		document.getElementById('gs').value == ""
		){
		alert("Пожалуйста, заполните все поля");
	} 
	else {
	uName.push(document.getElementById('uName').value);
	Actor.push(document.getElementById('Actor').value);
	r.push(document.getElementById('r').value);
	da_p_1.push(document.getElementById('da_p_1').value);
	da_i_1.push(document.getElementById('da_i_1').value);
	da_p_2.push(document.getElementById('da_p_2').value);
	da_i_2.push(document.getElementById('da_i_2').value);
	da_p_3.push(document.getElementById('da_p_3').value);
	da_i_3.push(document.getElementById('da_i_3').value);
	pc.push(document.getElementById('pc').value);
	gm.push(document.getElementById('gm').value);
	gs.push(document.getElementById('gs').value);
	alert('Прецедент создан!')
	document.getElementById('usecase_page').hidden=true;
	document.getElementById('items_page').hidden=false;
	//alert("uName = " + uName + "\n" + "Actor = " + Actor + "\n" + "r = " + r + "\n" + "da_p = " + da_p_1 + " " + da_p_2 + " " + da_p_3 + "\n" + "da_i = " + da_i_1 + " " + da_i_2 + " " + da_i_3 + "\n" + "pc = " + pc + "\n" + "gm = " + gm + "\n" + "gs = " + gs + "\n");
	}
}
createUC.onclick = saveData;

var ucScenario = document.getElementById('ucScenario');
var items = document.getElementsByName('items');
function itemChoice(){
	if(items[0].checked){
		window.location = "types/create.html";
	}
	if(items[1].checked){
		window.location = "types/input.html";
	}
	if(items[2].checked){
		window.location = "types/input_output.html";
	}
	if(items[3].checked){
		window.location = "types/request.html";
	}
	if(items[4].checked){
		window.location = "types/request_list.html";
	}
	if(items[5].checked){
		window.location = "types/select.html";
	}
	if(items[6].checked){
		window.location = "types/request_service.html";
	}
	if(items[7].checked){
		window.location = "types/repeat.html";
	}
	if(items[8].checked){
		window.location = "types/free.html";
	}
	if(items[9].checked){
		window.location = "types/finish.html";
	}
	if(items[10].checked){
			window.location = "types/call.html";
	}
}
ucScenario.onclick = itemChoice;