var items = document.getElementsByName('items');
var uName = "";
var Actor = "";
var r = "";
var da_p_1 = "";
var da_i_1 = "";
var da_p_2 = "";
var da_i_2 = "";
var da_p_3 = "";
var da_i_3 = "";
var pc = "";
var gm = "";
var gs = "";
var item_counter = 0;
var uc_counter = 0;
var item_text = "";

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
	uName = document.getElementById('uName').value;
	Actor = document.getElementById('Actor').value;
	r = document.getElementById('r').value;
	da_p_1 = document.getElementById('da_p_1').value;
	da_i_1 = document.getElementById('da_i_1').value;
	da_p_2 = document.getElementById('da_p_2').value;
	da_i_2 = document.getElementById('da_i_2').value;
	da_p_3 = document.getElementById('da_p_3').value;
	da_i_3 = document.getElementById('da_i_3').value;
	pc = document.getElementById('pc').value;
	gm = document.getElementById('gm').value;
	gs = document.getElementById('gs').value;
	document.getElementById('usecase_page').hidden=true;
	document.getElementById('items_page').hidden=false;
	document.getElementById('ucHeader').hidden=false;
	document.getElementById('ucHeaderText').innerText+= " " + uName;
	uc_counter = uc_counter + 1;
	switch (uc_counter) {
		case 1: 
			document.getElementById('uc_1').innerText = uName;
			break;
		case 2: 
			document.getElementById('uc_2').innerText = uName;
			break;
		case 3: 
			document.getElementById('uc_3').innerText = uName;
			break;
		case 4: 
			document.getElementById('uc_4').innerText = uName;
			break;
		case 5: 
			document.getElementById('uc_5').innerText = uName;
			break;
		case 6: 
			document.getElementById('uc_6').innerText = uName;
			break;
		case 7: 
			document.getElementById('uc_7').innerText = uName;
			break;
		case 8: 
			document.getElementById('uc_8').innerText = uName;
			break;
		case 9: 
			document.getElementById('uc_9').innerText = uName;
			break;
		case 10: 
			document.getElementById('uc_10').innerText = uName;
			break;
	}
	//alert("uName = " + uName + "\n" + "Actor = " + Actor + "\n" + "r = " + r + "\n" + "da_p = " + da_p_1 + " " + da_p_2 + " " + da_p_3 + "\n" + "da_i = " + da_i_1 + " " + da_i_2 + " " + da_i_3 + "\n" + "pc = " + pc + "\n" + "gm = " + gm + "\n" + "gs = " + gs + "\n");
	}
}
document.getElementById('createUC').onclick = saveData;

function itemChoice(){
	if(items[0].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('create_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemCreate').innerText = item_counter;
		document.getElementById('actorCreate').innerText = Actor;
	}
	if(items[1].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemInput').innerText = item_counter;
		document.getElementById('actorInput').innerText = Actor;
	}
	if(items[2].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_output_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemInputOutput').innerText = item_counter;
		document.getElementById('actorInputOutput').innerText = Actor;
	}
	if(items[3].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemRequest').innerText = item_counter;
		document.getElementById('actorRequest').innerText = Actor;
	}
	if(items[4].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_list_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemList').innerText = item_counter;
		document.getElementById('actorList').innerText = Actor;
	}
	if(items[5].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('select_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemSelect').innerText = item_counter;
		document.getElementById('actorSelect').innerText = Actor;
	}
	if(items[6].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_service_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemService').innerText = item_counter;
		document.getElementById('actorService').innerText = Actor;
	}
	if(items[7].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('repeat_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemRepeat').innerText = item_counter;
		document.getElementById('actorRepeat').innerText = Actor;
	}
	if(items[8].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('free_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemFree').innerText = item_counter;
		document.getElementById('actorFree').innerText = Actor;
	}
	if(items[9].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('finish_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemFinish').innerText = item_counter;
		document.getElementById('actorFinish').innerText = Actor;
	}
	if(items[10].checked){
		document.getElementById('items_page').hidden=true;
		document.getElementById('call_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemCall').innerText = item_counter;
		document.getElementById('actorCall').innerText = Actor;
	}
	//alert(item_counter);
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
	document.getElementById('p_item').innerText = item_text;
	document.getElementById('ccHeader').innerText += item_counter;
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
document.getElementById('items_call').onclick = openItems;
document.getElementById('items_create').onclick = openItems;
document.getElementById('items_finish').onclick = openItems;
document.getElementById('items_free').onclick = openItems;
document.getElementById('items_input_output').onclick = openItems;
document.getElementById('items_input').onclick = openItems;
document.getElementById('items_repeat').onclick = openItems;
document.getElementById('items_list').onclick = openItems;
document.getElementById('items_service').onclick = openItems;
document.getElementById('items_request').onclick = openItems;
document.getElementById('items_selection').onclick = openItems;
document.getElementById('items_cc').onclick = openItems;

function openUC() {
	document.getElementById('ucHeader').hidden=true;
	document.getElementById('items_page').hidden=true;
	document.getElementById('usecase_page').hidden=false;
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
document.getElementById('finish').onclick = openUC;

function createText() {
	item_text = document.getElementById('numItemCreate').value + ". ";

	if (document.getElementById('clientCreate').value != "") 
		item_text += document.getElementById('clientCreate').value 
					+ " обращается к " 
					+ document.getElementById('actorCreate').value
					+ " по поводу "
					+ document.getElementById('reasonCreate').value
					+ ". ";
	
	item_text += document.getElementById('actorCreate').value
				+ " создает в системе "
				+ document.getElementById('objectCreate').value;

	if (document.getElementById('attrCreate').value != "")
		item_text += " с данными "
					+ document.getElementById('attrCreate').value
					+ ". ";
	else
		item_text += ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_create').onclick = createText;

function inputText() {
	item_text = document.getElementById('numItemInput').value + ". ";

	if (document.getElementById('clientInput').value != "") 
	item_text += document.getElementById('clientInput').value 
				+ " сообщает " 
				+ document.getElementById('clientDataInput').value
				+ ". ";

	item_text += document.getElementById('actorInput').value
				+ " вводит в систему "
				+ document.getElementById('actorDataInput').value
				+ ". ";

	item_text += "Система подтверждает корректность данных. \n";

	item_text += document.getElementById('numItemInput').value + ".a "
				+ "Значение данного "
				+ document.getElementById('actorDataInput').value
				+ " недопустимо. \n"

	item_text += document.getElementById('numItemInput').value + ".a.1 "
				+ "Введите новое значение "
				+ document.getElementById('clientDataInput').value
				+ ". "
				+ "Переход к пункту "
				+ document.getElementById('numItemInput').value
				+ ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_input').onclick = inputText;

function inputOutputText() {
	item_text = document.getElementById('numItemInputOutput').value + ". ";

	if (document.getElementById('clientInputOutput').value != "") 
	item_text += document.getElementById('clientInputOutput').value 
				+ " предоставляет " 
				+ document.getElementById('clientDataInputOutput').value
				+ ". ";

	if (document.getElementById('actorDataInputOutput') != "")
		item_text += document.getElementById('actorInputOutput').value
					+ " вводит в систему "
					+ document.getElementById('actorDataInputOutput').value
					+ ". ";
	else
		item_text += document.getElementById('actorInputOutput').value
					+ " вводит в систему "
					+ document.getElementById('clientDataInputOutput').value
					+ ". ";

	item_text += "Система подтверждает корректность данных. ";

	item_text += "Система возвращает "
				+ document.getElementById('returnInputOutput').value
				+ ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_input_output').onclick = inputOutputText;

function requestText() {
	item_text = document.getElementById('numItemRequest').value + ". ";

	if (document.getElementById('clientRequest').value != "") 
	item_text += document.getElementById('clientRequest').value 
				+ " желает получить " 
				+ document.getElementById('clientDataRequest').value
				+ ". ";

	item_text += document.getElementById('actorRequest').value
				+ " запрашивает у системы "
				+ document.getElementById('actorDataRequest').value;
	
	if (document.getElementById('reasonRequest').value != "")			
		item_text += " на основании "
					+ document.getElementById('reasonRequest').value;

	if (document.getElementById('conditionRequest').value != "")			
		item_text += " при условии "
					+ document.getElementById('conditionRequest').value;

	item_text += ". ";

	item_text += "Система подтверждает корректность данных. ";

	item_text += "Система выводит "
				+ document.getElementById('actorDataRequest').value
				+ ". ";

	if (document.getElementById('clientRequest').value != "") 
		item_text += document.getElementById('clientRequest').value
					+ " / "
					+ document.getElementById('actorRequest').value
					+ " согласен"
					+ ". \n";

	if (document.getElementById('clientRequest').value != "") {
		var alter = true;
		item_text += document.getElementById('numItemRequest').value + ".a "
				+ "Клиент не согласен"
				+ ". \n"
				
	item_text += document.getElementById('numItemRequest').value + ".a.1 "
				+ "Завершение варианта использования"
				+ ". ";
	}

	if (document.getElementById('conditionRequest').value != ""){
		item_text += "\n";

		if (alter)
			item_text += document.getElementById('numItemRequest').value + ".b ";
		else
			item_text += document.getElementById('numItemRequest').value + ".a "

		item_text += "Условие " 
					+ document.getElementById('conditionRequest').value
					+ " для получения данного "
					+ document.getElementById('actorDataRequest').value
					+ " недопустимо"
					+ ". \n";
				
	item_text += document.getElementById('numItemRequest').value + ".b.1 "
				+ "Введите новое условие. Переход к пункту "
				+ document.getElementById('numItemRequest').value
				+ ". ";
	}

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_request').onclick = requestText;

function listText() {
	item_text = document.getElementById('numItemList').value + ". ";

	if (document.getElementById('clientList').value != "") 
	item_text += document.getElementById('clientList').value 
				+ " желает получить список " 
				+ document.getElementById('clientDataList').value
				+ ". ";

	item_text += document.getElementById('actorList').value
				+ " вводит в систему запрос на получение "
				+ document.getElementById('actorDataList').value;

	if (document.getElementById('conditionList').value != "")	{	
		item_text += " при условии "
					+ document.getElementById('conditionList').value
					+ ". "
					+ "Система подтверждает выполнение условия. ";
	}
	else
		item_text += ". ";


	item_text += "Система выводит "
				+ document.getElementById('actorDataList').value
				+ ". ";

	if (document.getElementById('conditionList').value != ""){
		item_text += "\n";

		item_text += document.getElementById('numItemList').value + ".a "
					+ "Условие " 
					+ document.getElementById('conditionList').value
					+ " для получения списка недопустимо"
					+ ". \n";
				
		item_text += document.getElementById('numItemList').value + ".a.1 "
				+ "Введите новое условие. Переход к пункту "
				+ document.getElementById('numItemList').value
				+ ". ";
	}

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_list').onclick = listText;

function selectText() {
	item_text = document.getElementById('numItemSelect').value + ". ";

	if (document.getElementById('clientSelect').value != "") 
	item_text += document.getElementById('clientSelect').value 
				+ " указывает на нужный элемент из списка " 
				+ ". ";

	item_text += document.getElementById('actorSelect').value
				+ " выбирает элемент списка "
				+ "и вводит его в систему"
				+ ". \n";

	if (document.getElementById('clientSelect').value != "") {
		item_text += document.getElementById('numItemSelect').value + ".a "
					+ "Клиент не согласен"
					+ ". \n"
						
		item_text += document.getElementById('numItemSelect').value + ".a.1 "
					+ "Завершение варианта использования"
					+ ". ";
	}

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_select').onclick = selectText;

function serviceText() {
	item_text = document.getElementById('numItemService').value + ". ";

	if (document.getElementById('clientService').value != "") 
		item_text += document.getElementById('clientService').value 
					+ " желает работать с документом / желает получить " 
					+ document.getElementById('clientRequestService').value
					+ ". ";

	item_text += document.getElementById('actorService').value 
				+ " вводит в систему " 
				+ document.getElementById('actorRequestService').value
				+ ". ";

	item_text += "Система подтверждает возможность выполнения услуги (документа). ";

	item_text += "Передача управления на  пункт сценария "
				+ document.getElementById('numService').value
				+ ". \n";

	item_text += document.getElementById('numItemService').value + ".a "
				+ "Указанная услуга (документ) не может быть предоставлена"
				+ ". \n"
								
	item_text += document.getElementById('numItemService').value + ".a.1 "
				+ "Завершение варианта использования"
				+ ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_service').onclick = serviceText;

function repeatText() {
	item_text = document.getElementById('numItemRepeat').value + ". ";

	if (document.getElementById('clientRepeat').value != "") 
		item_text += document.getElementById('clientRepeat').value
					+ " / ";
					
	item_text += document.getElementById('actorRepeat').value
				+ " желает повторить действия начиная с пункта "
				+ document.getElementById('startRepeat').value
				+ ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_repeat').onclick = repeatText;

function callText() {
	item_text = document.getElementById('numItemCall').value 
				+ ". "
				+ document.getElementById('actorCall').value
				+ " вызывает вариант использования "
				+ document.getElementById('uNameCall').value
				+ ". ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);
}
document.getElementById('save_call').onclick = callText;

function freeText() {
	item_text = document.getElementById('numItemFree').value + ". ";	

	if (document.getElementById('clientFree').value != "")
		item_text += document.getElementById('clientFree').value
					+ " "
					+ document.getElementById('clientActivityFree').value
					+ ". ";
	
	item_text += document.getElementById('actorFree').value
				+ " "
				+ document.getElementById('actorActivityFree').value
				+ ". ";

	item_text += document.getElementById('actionsFree').value
				+ ". ";

	item_text += document.getElementById('selectvalueFree').value;

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);		
}
document.getElementById('save_free').onclick = freeText;

function finishText() {
	item_text = document.getElementById('numItemFinish').value + ". ";

	if (document.getElementById('cb_1').checked) {
		if (document.getElementById('clientFinish').value != "")
			item_text += document.getElementById('clientFinish').value
						+ " сообщает "
						+ document.getElementById('clientDataFinish').value
						+ ". ";

		item_text += document.getElementById('actorFinish').value
					+ " вводит "
					+ document.getElementById('actorDataFinish').value
					+ ". ";

		item_text += "Система сохраняет данное в "
					+ document.getElementById('objectSaveFinish').value
					+ ". ";
	}	

	if (document.getElementById('cb_2').checked) {
		item_text += "Система регистрирует "
					+ document.getElementById('regDataFinish').value
					+ " в "
					+ document.getElementById('regSaveFinish').value
					+ ". ";
	}	

	if (document.getElementById('cb_3').checked) {
		item_text += "Система выдает "
					+ document.getElementById('docFinish').value
					+ " где содержится "
					+ document.getElementById('dataDocFinish').value
					+ ". ";
	}

	item_text += "Завершение работы прецедента. ";

	switch (item_counter) {
		case 1: 
			document.getElementById('p1_items').innerText = item_text;
			document.getElementById('p1_call').innerText = item_text;
			document.getElementById('p1_create').innerText = item_text;
			document.getElementById('p1_finish').innerText = item_text;
			document.getElementById('p1_free').innerText = item_text;
			document.getElementById('p1_input_output').innerText = item_text;
			document.getElementById('p1_input').innerText = item_text;
			document.getElementById('p1_repeat').innerText = item_text;
			document.getElementById('p1_list').innerText = item_text;
			document.getElementById('p1_service').innerText = item_text;
			document.getElementById('p1_request').innerText = item_text;
			document.getElementById('p1_select').innerText = item_text;
			break;
		case 2: 
			document.getElementById('p2_items').innerText = item_text;
			document.getElementById('p2_call').innerText = item_text;
			document.getElementById('p2_create').innerText = item_text;
			document.getElementById('p2_finish').innerText = item_text;
			document.getElementById('p2_free').innerText = item_text;
			document.getElementById('p2_input_output').innerText = item_text;
			document.getElementById('p2_input').innerText = item_text;
			document.getElementById('p2_repeat').innerText = item_text;
			document.getElementById('p2_list').innerText = item_text;
			document.getElementById('p2_service').innerText = item_text;
			document.getElementById('p2_request').innerText = item_text;
			document.getElementById('p2_select').innerText = item_text;
			break;
		case 3: 
			document.getElementById('p3_items').innerText = item_text;
			document.getElementById('p3_call').innerText = item_text;
			document.getElementById('p3_create').innerText = item_text;
			document.getElementById('p3_finish').innerText = item_text;
			document.getElementById('p3_free').innerText = item_text;
			document.getElementById('p3_input_output').innerText = item_text;
			document.getElementById('p3_input').innerText = item_text;
			document.getElementById('p3_repeat').innerText = item_text;
			document.getElementById('p3_list').innerText = item_text;
			document.getElementById('p3_service').innerText = item_text;
			document.getElementById('p3_request').innerText = item_text;
			document.getElementById('p3_select').innerText = item_text;
			break;
		case 4: 
			document.getElementById('p4_items').innerText = item_text;
			document.getElementById('p4_call').innerText = item_text;
			document.getElementById('p4_create').innerText = item_text;
			document.getElementById('p4_finish').innerText = item_text;
			document.getElementById('p4_free').innerText = item_text;
			document.getElementById('p4_input_output').innerText = item_text;
			document.getElementById('p4_input').innerText = item_text;
			document.getElementById('p4_repeat').innerText = item_text;
			document.getElementById('p4_list').innerText = item_text;
			document.getElementById('p4_service').innerText = item_text;
			document.getElementById('p4_request').innerText = item_text;
			document.getElementById('p4_select').innerText = item_text;
			break;
		case 5: 
			document.getElementById('p5_items').innerText = item_text;
			document.getElementById('p5_call').innerText = item_text;
			document.getElementById('p5_create').innerText = item_text;
			document.getElementById('p5_finish').innerText = item_text;
			document.getElementById('p5_free').innerText = item_text;
			document.getElementById('p5_input_output').innerText = item_text;
			document.getElementById('p5_input').innerText = item_text;
			document.getElementById('p5_repeat').innerText = item_text;
			document.getElementById('p5_list').innerText = item_text;
			document.getElementById('p5_service').innerText = item_text;
			document.getElementById('p5_request').innerText = item_text;
			document.getElementById('p5_select').innerText = item_text;
			break;
	}
	//alert(item_text);	
}
document.getElementById('save_finish').onclick = finishText;

function ccText() {
	item_text = "";
	
	document.getElementById('p_cc').innerText = item_text;
}
document.getElementById('save_cc').onclick = ccText;