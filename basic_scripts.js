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
var cc_counter = 0;
var uc_counter = 0;
var item_num = 0;
var item_text = "";
var uc_item1 = "";
var uc_item2 = "";
var uc_item3 = "";
var uc_item4 = "";
var uc_item5 = "";
var cc_item1 = "";
var cc_item2 = "";
var cc_item3 = "";
var cc_item4 = "";
var cc_item5 = "";
var cc_counter = 0;

window.onload = function() {
	item_counter = 0;
	cc_counter = 0;
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
		item_num = 0;
		document.getElementById('items_page').hidden=true;
		document.getElementById('create_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemCreate').innerText = item_counter;
		document.getElementById('actorCreate').innerText = Actor;
	}
	if(items[1].checked){
		item_num = 1;
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemInput').innerText = item_counter;
		document.getElementById('actorInput').innerText = Actor;
	}
	if(items[2].checked){
		item_num = 2;
		document.getElementById('items_page').hidden=true;
		document.getElementById('input_output_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemInputOutput').innerText = item_counter;
		document.getElementById('actorInputOutput').innerText = Actor;
	}
	if(items[3].checked){
		item_num = 3;
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemRequest').innerText = item_counter;
		document.getElementById('actorRequest').innerText = Actor;
	}
	if(items[4].checked){
		item_num = 4;
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_list_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemList').innerText = item_counter;
		document.getElementById('actorList').innerText = Actor;
	}
	if(items[5].checked){
		item_num = 5;
		document.getElementById('items_page').hidden=true;
		document.getElementById('select_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemSelect').innerText = item_counter;
		document.getElementById('actorSelect').innerText = Actor;
	}
	if(items[6].checked){
		item_num = 6;
		document.getElementById('items_page').hidden=true;
		document.getElementById('request_service_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemService').innerText = item_counter;
		document.getElementById('actorService').innerText = Actor;
	}
	if(items[7].checked){
		item_num = 7;
		document.getElementById('items_page').hidden=true;
		document.getElementById('repeat_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemRepeat').innerText = item_counter;
		document.getElementById('actorRepeat').innerText = Actor;
	}
	if(items[8].checked){
		item_num = 8;
		document.getElementById('items_page').hidden=true;
		document.getElementById('free_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemFree').innerText = item_counter;
		document.getElementById('actorFree').innerText = Actor;
	}
	if(items[9].checked){
		item_num = 9;
		document.getElementById('items_page').hidden=true;
		document.getElementById('finish_page').hidden=false;
		item_counter = item_counter + 1;
		document.getElementById('numItemFinish').innerText = item_counter;
		document.getElementById('actorFinish').innerText = Actor;
	}
	if(items[10].checked){
		item_num = 10;
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
	ccClear();
	switch (item_counter) {
		case 1:
			document.getElementById('p_cc1').hidden = false;
			document.getElementById('p_cc2').hidden = true;
			document.getElementById('p_cc3').hidden = true;
			document.getElementById('p_cc4').hidden = true;
			document.getElementById('p_cc5').hidden = true;
			break;
		case 2:
			document.getElementById('p_cc1').hidden = true;
			document.getElementById('p_cc2').hidden = false;
			document.getElementById('p_cc3').hidden = true;
			document.getElementById('p_cc4').hidden = true;
			document.getElementById('p_cc5').hidden = true;
			break;
		case 3:
			document.getElementById('p_cc1').hidden = true;
			document.getElementById('p_cc2').hidden = true;
			document.getElementById('p_cc3').hidden = false;
			document.getElementById('p_cc4').hidden = true;
			document.getElementById('p_cc5').hidden = true;
			break;
		case 4:
			document.getElementById('p_cc1').hidden = true;
			document.getElementById('p_cc2').hidden = true;
			document.getElementById('p_cc3').hidden = true;
			document.getElementById('p_cc4').hidden = false;
			document.getElementById('p_cc5').hidden = true;
			break;
		case 5:
			document.getElementById('p_cc1').hidden = true;
			document.getElementById('p_cc2').hidden = true;
			document.getElementById('p_cc3').hidden = true;
			document.getElementById('p_cc4').hidden = true;
			document.getElementById('p_cc5').hidden = false;
			break;
	}
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
	item_counter = 0;
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
	Clear();
	Report();
}
document.getElementById('finish').onclick = openUC;

function Report() {
	cc_counter = cc_counter + 1;
	var opened = window.open(""); 
	opened.document.write("<html>"); 
	opened.document.write("<head>")
	opened.document.write("<title>", "uc_", cc_counter,  "</title>"); 
	opened.document.write('<link rel="stylesheet" type="text/css" href="simple.css">')
	opened.document.write("</head>");
	opened.document.write("<body>"); 
	opened.document.write("<style>");
	opened.document.write("p{font-family: Arial, Helvetica, sans-serif;font-style: normal;font-size: 20px;margin: 10px;}");
	opened.document.write("</style>");
	opened.document.write("<p><b>Преамбула</b></p>");
	opened.document.write("<p>Название: ", uName, "</p>");
	opened.document.write("<p>Основное действующее лицо: ", Actor, "</p>");
	opened.document.write("<p>Область действия: ", r, "</p>");
	opened.document.write("<p>Интересы участников", "</p>");
	opened.document.write("<p>Участники: ", da_p_1, " ", da_p_2, " ", da_p_3, "</p>");
	opened.document.write("<p>Интересы: ",da_i_1, " ", da_i_2, " ", da_i_3,  "</p>");
	opened.document.write("<p>Предусловия: ", pc, "</p>");
	opened.document.write("<p>Минимальные гарантии: ", gm, "</p>");
	opened.document.write("<p>Гарантии успеха: ", gs, "</p>");
	opened.document.write("<p>~</p>");
	opened.document.write("<p><b>Описание варианта использования</b></p>");
	opened.document.write("<p>", uc_item1, "</p>");
	opened.document.write("<p>", uc_item2, "</p>");
	opened.document.write("<p>", uc_item3, "</p>");
	opened.document.write("<p>", uc_item4, "</p>");
	opened.document.write("<p>", uc_item5, "</p>");
	opened.document.write("<p>~</p>");
	opened.document.write("<p><b>Концептуальные классы</b></p>");
	opened.document.write("<p>", cc_item1, "</p>");
	opened.document.write("<p>", cc_item2, "</p>");
	opened.document.write("<p>", cc_item3, "</p>");
	opened.document.write("<p>", cc_item4, "</p>");
	opened.document.write("<p>", cc_item5, "</p>");
	opened.document.write("</body>"); 
	opened.document.write("</html>"); 
}

function ccClear() {
	var cc = document.getElementsByName("cc");
	for (var i = 0; i < cc.length; i++) 
		cc[i].value = "";
}

function Clear() {
	var ta = document.getElementsByTagName("textarea");
	for (var i = 0; i < ta.length; i++) 
		ta[i].value = "";
	var p = document.getElementsByName("p_it");
	for (var i = 0; i < p.length; i++) 
		p[i].innerText = "";
}

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
	deliveryItemUC();
	//alert(item_text);
}
document.getElementById('save_create').onclick = createText;

function deliveryItemUC() {
	switch (item_counter) {
		case 1: 
			uc_item1 = item_text;
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
			uc_item2 = item_text;
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
			uc_item3 = item_text;
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
			uc_item4 = item_text;
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
			uc_item5 = item_text;
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
}

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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
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
	deliveryItemUC();
	//alert(item_text);	
}
document.getElementById('save_finish').onclick = finishText;

function ccText() {
	item_text = "Тип пункта: ";
	if(item_num === 0) 
		item_text += "Создать";
	if(item_num === 1) 
		item_text += "Ввести данные";
	if(item_num === 2) 
		item_text += "Ввести и получить данные";
	if(item_num === 3) 
		item_text += "Запросить значение";
	if(item_num === 4) 
		item_text += "Запросить список";
	if(item_num === 5) 
		item_text += "Выбрать из списка";
	if(item_num === 6) 
		item_text += "Запросить услугу (документ)";
	if(item_num === 7) 
		item_text += "Повторение действий";
	if(item_num === 8) 
		item_text += "Свободно конструируемый пункт";
	if(item_num === 9) 
		item_text += "Завершить ВИ";
	if(item_num === 10) 
		item_text += "Вызов другого прецедента";
	item_text += "\n";
	item_text += "Название класса: "
				+ document.getElementById('cName').value
				+"\n";
	item_text += "Вид класса: "
				+ document.getElementById('selectvalueClass').value
				+"\n";
	item_text += "Время жизни объектов: "
				+ document.getElementById('selectvalueTime').value
				+"\n";
	item_text += "\n"
				+ "Цель использования класса:"
				+ "\n"
				+ "{"
				+ "\n" 
				+ "| "
				+ document.getElementById('cPurp').value 
				+ "\n}\n";
	item_text += "\n"
				+ "Создание функции: "
				+ document.getElementById('fName').value
				+ "\n{\n";
	item_text += "| Цель использования функции"
				+ "\n"
				+ "| {"
				+ "\n"
				+ "|| "
				+ document.getElementById('fGoal').value
				+ "\n"
				+ "| }"
				+ "\n|\n";
	item_text += "| Аргументы функции"
				+ "\n"
				+ "| {"
				+ "\n";
	if (document.getElementById('idAr_1').value == ""
		&& document.getElementById('idAr_2').value == ""
		&& document.getElementById('idAr_3').value == "")
		item_text += "|| нет \n";
	if (document.getElementById('idAr_1').value != "")
		item_text += "|| Id: "
					+ document.getElementById('idAr_1').value
					+ "\n"
					+ "|| Тип: "
					+ document.getElementById('selectvalueAr_1').value
					+ "\n"
					+ "|| Цель: "
					+ document.getElementById('goalAr_1').value
					+ "\n";
	if (document.getElementById('idAr_2').value != "") 
		item_text += "||\n"
					+ "|| Id: "
					+ document.getElementById('idAr_2').value
					+ "\n"
					+ "|| Тип: "
					+ document.getElementById('selectvalueAr_2').value
					+ "\n"
					+ "|| Цель: "
					+ document.getElementById('goalAr_2').value
					+ "\n";
	if (document.getElementById('idAr_3').value != "") 
		item_text += "||\n"
					+ "|| Id: "
					+ document.getElementById('idAr_3').value
					+ "\n"
					+ "|| Тип: "
					+ document.getElementById('selectvalueAr_3').value
					+ "\n"
					+ "|| Цель: "
					+ document.getElementById('goalAr_3').value
					+ "\n";
	item_text += "| }"
				+ "\n|\n";
	item_text += "| Возвращаемое значение"
				+ "\n"
				+ "| {"
				+ "\n"
				+ "|| Тип: "
				+ document.getElementById('selectvalueRet').value
				+ "\n"
				+ "|| Цель: "
				+ document.getElementById('goalRet').value
				+ "\n"
				+ "| }"
				+ "\n|\n";
	item_text += "| Аргументы, результат вычисления"
				+ "\n"
				+ "| {"
				+ "\n"
				+ "|| "
				+ document.getElementById('ResCalc').value
				+ "\n"
				+ "| }"
				+ "\n|\n";
	item_text += "| Атрибуты, новые значения"
				+ "\n"
				+ "| {"
				+ "\n"
				+ "|| "
				+ document.getElementById('New').value
				+ "\n"
				+ "| }"
				+ "\n|\n";
	item_text += "| Атрибуты, вычисления"
				+ "\n"
				+ "| {"
				+ "\n"
				+ "|| "
				+ document.getElementById('Calc').value
				+ "\n"
				+ "| }"
				+ "\n|\n";
	item_text += "| Ссылки на внешние функции"
				+ "\n"
				+ "| {"
				+ "\n";
	if (document.getElementById('extClass_1').value == ""
		&& document.getElementById('extClass_2').value == ""
		&& document.getElementById('extClass_3').value == "")
		item_text += "|| нет \n";
	if (document.getElementById('extClass_1').value != "")
		item_text += "|| Класс: "
					+ document.getElementById('extClass_1').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extFunc_1').value
					+ "\n";
	if (document.getElementById('extClass_2').value != "") 
		item_text += "||\n"
					+ "|| Класс: "
					+ document.getElementById('extClass_2').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extFunc_2').value
					+ "\n";
	if (document.getElementById('extClass_3').value != "") 
		item_text += "||\n"
					+ "|| Класс: "
					+ document.getElementById('extClass_3').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extFunc_3').value
					+ "\n";
	item_text += "| }"
				+ "\n}\n";
	item_text += "\n"
				+ "Атрибуты: "
				+ "\n{\n";
	if (document.getElementById('nameAttr_1').value == ""
		&& document.getElementById('nameAttr_2').value == ""
		&& document.getElementById('nameAttr_3').value == "")
		item_text += "| нет \n";
	if (document.getElementById('nameAttr_1').value != "")
		item_text += "| Название: "
					+ document.getElementById('nameAttr_1').value
					+ "\n"
					+ "| Тип: "
					+ document.getElementById('selectvalueAttr_1').value
					+ "\n"
					+ "| Цель: "
					+ document.getElementById('goalAttr_1').value
					+ "\n";
	if (document.getElementById('nameAttr_2').value != "") 
		item_text += "|\n"
					+ "| Название: "
					+ document.getElementById('nameAttr_2').value
					+ "\n"
					+ "| Тип: "
					+ document.getElementById('selectvalueAttr_2').value
					+ "\n"
					+ "| Цель: "
					+ document.getElementById('goalAttr_2').value
					+ "\n";
	if (document.getElementById('nameAttr_3').value != "") 
		item_text += "|\n"
					+ "| Название: "
					+ document.getElementById('nameAttr_3').value
					+ "\n"
					+ "| Тип: "
					+ document.getElementById('selectvalueAttr_3').value
					+ "\n"
					+ "| Цель: "
					+ document.getElementById('goalAttr_3').value
					+ "\n";
	item_text += "| Ссылки на внешние функции"
				+ "\n"
				+ "| {"
				+ "\n";
	if (document.getElementById('extAttrClass_1').value == ""
		&& document.getElementById('extAttrClass_2').value == ""
		&& document.getElementById('extAttrClass_3').value == "")
		item_text += "|| нет \n";
	if (document.getElementById('extAttrClass_1').value != "")
		item_text += "|| Класс: "
					+ document.getElementById('extAttrClass_1').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extAttrFunc_1').value
					+ "\n";
	if (document.getElementById('extAttrClass_2').value != "") 
		item_text += "||\n"
					+ "|| Класс: "
					+ document.getElementById('extAttrClass_2').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extAttrFunc_2').value
					+ "\n";
	if (document.getElementById('extAttrClass_3').value != "") 
		item_text += "||\n"
					+ "|| Класс: "
					+ document.getElementById('extAttrClass_3').value
					+ "\n"
					+ "|| Функция: "
					+ document.getElementById('extAttrFunc_3').value
					+ "\n";
	item_text += "| }"
	item_text += "\n}\n\n";
	switch (item_counter) {
		case 1:
			cc_item1 = item_text;
			document.getElementById('p_cc1').innerText = item_text;
			break;
		case 2:
			cc_item2 = item_text;
			document.getElementById('p_cc2').innerText = item_text;
			break;
		case 3:
			cc_item3 = item_text;
			document.getElementById('p_cc3').innerText = item_text;
			break;
		case 4:
			cc_item4 = item_text;
			document.getElementById('p_cc4').innerText = item_text;
			break;
		case 5:
			cc_item5 = item_text;
			document.getElementById('p_cc5').innerText = item_text;
			break;
	}
}
document.getElementById('save_cc').onclick = ccText;

function openReport1() {
	window.location.href = "reports/uc_1.html";
}
document.getElementById('uc_1').onclick = openReport1;
function openReport2() {
	window.location.href = "reports/uc_2.html";
}
document.getElementById('uc_2').onclick = openReport2;
function openReport3() {
	window.location.href = "reports/uc_3.html";
}
document.getElementById('uc_3').onclick = openReport3;
function openReport4() {
	window.location.href = "reports/uc_4.html";
}
document.getElementById('uc_4').onclick = openReport4;
function openReport5() {
	window.location.href = "reports/uc_5";
}
document.getElementById('uc_5').onclick = openReport5;
function openReport6() {
	window.location.href = "reports/uc_6.html";
}
document.getElementById('uc_6').onclick = openReport6;
function openReport7() {
	window.location.href = "reports/uc_7.html";
}
document.getElementById('uc_7').onclick = openReport7;
function openReport8() {
	window.location.href = "reports/uc_8.html";
}
document.getElementById('uc_8').onclick = openReport8;
function openReport9() {
	window.location.href = "reports/uc_9.html";
}
document.getElementById('uc_9').onclick = openReport9;
function openReport10() {
	window.location.href = "reports/uc_10.html";
}
document.getElementById('uc_10').onclick = openReport10;