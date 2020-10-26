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