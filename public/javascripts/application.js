// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function learning_click(){
	window.open(this.id);
}

function learning_hover() {
	this.style.cursor='pointer';
	this.style.backgroundColor = '#ffffff';
}

function learning_unhover() {
	this.style.backgroundColor = 'inherit';
}

function setup_table(id) {
	var rows = document.getElementById(id).getElementsByTagName("tr");
	for (var t=0, currRow; currRow=rows[t]; t++) {
		currRow.onclick = learning_click;
		currRow.onmouseover = learning_hover;
		currRow.onmouseout = learning_unhover;
	}
}

function setup() {
	setup_table("uniTable");
	setup_table("aggTable");
	setup_table("resTable");
	setup_table("oriTable");
	setup_table("peerTable");
}

window.onload = setup;