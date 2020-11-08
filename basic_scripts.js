var createUC = document.getElementById('createUC');
var ucItems = document.getElementById('ucItems');
var ucScenario = document.getElementById('ucScenario');
var items = document.getElementsByName('items');
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

function openItems() {
	document.getElementById('ucHeader').hidden=false;
	document.getElementById('items_page').hidden=false;
	document.getElementById('usecase_page').hidden=true;
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
}
ucItems.onclick = openItems;

function itemChoice(){
	if(items[0].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('create_page').hidden=false;
	}
	if(items[1].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_page').hidden=false;
	}
	if(items[2].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_output_page').hidden=false;
	}
	if(items[3].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_page').hidden=false;
	}
	if(items[4].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_list_page').hidden=false;
	}
	if(items[5].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('select_page').hidden=false;
	}
	if(items[6].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_service_page').hidden=false;
	}
	if(items[7].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('repeat_page').hidden=false;
	}
	if(items[8].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('free_page').hidden=false;
	}
	if(items[9].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('finish_page').hidden=false;
	}
	if(items[10].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('call_page').hidden=false;
	}
}
ucScenario.onclick = itemChoice;

function openCC() {
	document.getElementById('cc_page').hidden=false;
	document.getElementById('ucHeader').hidden=true;
	document.getElementById('items_page').hidden=true;
	document.getElementById('usecase_page').hidden=true;
	document.getElementById('call_page').hidden=true;
	document.getElementById('create_page').hidden=true;
	document.getElementById('finish_page').hidden=true;
	document.getElementById('free_page').hidden=true;
	document.getElementById('input_output_page').hidden=true;
	document.getElementById('input_page').hidden=true;
	document.getElementById('repeat_page').hidden=true;
	document.getElementById('request_page').hidden=true;
	document.getElementById('select_page').hidden=true;
	document.getElementById('request_list_page').hidden=true;
	document.getElementById('request_service_page').hidden=true;
}
document.getElementById('ccCreate_call').onclick = openCC;
document.getElementById('ccCreate_create').onclick = openCC;
document.getElementById('ccCreate_finish').onclick = openCC;
document.getElementById('ccCreate_free').onclick = openCC;
document.getElementById('ccCreate_input_output').onclick = openCC;
document.getElementById('ccCreate_input').onclick = openCC;
document.getElementById('ccCreate_repeat').onclick = openCC;
document.getElementById('ccCreate_list').onclick = openCC;
document.getElementById('ccCreate_service').onclick = openCC;
document.getElementById('ccCreate_request').onclick = openCC;
document.getElementById('ccCreate_selection').onclick = openCC;