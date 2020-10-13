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
	//alert("uName = " + uName + "\n" + "Actor = " + Actor + "\n" + "r = " + r + "\n" + "da_p = " + da_p_1 + " " + da_p_2 + " " + da_p_3 + "\n" + "da_i = " + da_i_1 + " " + da_i_2 + " " + da_i_3 + "\n" + "pc = " + pc + "\n" + "gm = " + gm + "\n" + "gs = " + gs + "\n");
	}
}
createUC.onclick = saveData;