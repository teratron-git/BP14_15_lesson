var list = document.getElementById("list");
var item = list.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
var container = document.getElementsByClassName("container")[0];
var main = document.getElementsByClassName("main")[0];

function addTask() {
	var newItem = document.createElement("li");
	newItem.innerHTML = "Новая задача!";
	newItem.className = "item";
	list.appendChild(newItem);
	popup.style.display = "none";
}

function delTask() {
	list.removeChild(item[0]);

	if (item.length == 0) {
		popup.style.display = "block";
	}
}

function closePopup () {
	popup.style.display = "none";
}

btn1.addEventListener("click", addTask);
btn2.addEventListener("click", delTask);
close.addEventListener("click", closePopup);

function authOk() {
	//alert (name + "!\nВы допущены к просмотру сайта!\nПриятного просмотра!");
	console.log (name + " допущен к просмотру сайта!");
}
var name = '';
var reason;

while (name === '') {
	name = prompt("Как Вас зовут?", '')
}

if (name == "null") {
	name = "Посетитель";
}


var is18 = confirm("Вам есть 18 лет?");
if (is18) {
	var isSubscribed = confirm("Вы подписаны на рассылку?");
	if (isSubscribed) {
		authOk();
	} else {
	//alert (name + "!\nДоступ для неподписавшихся на рассылку запрещен!");
	reason = "<br>Вы не подписанны на рассылку!";
	console.log ("Пользователю \"" + name + "\" доступ к сайту запрещен! Причина: [не подписан на рассылку]");
no();
	}
} else
{
	//alert (name + "!\nДоступ для людей младше 18 лет запрещен!");
		reason = "<br>Вам нет 18 лет!";
	console.log ("Пользователю \"" + name + "\" доступ к сайту запрещен! Причина: [нет 18 лет]");


no();
}

function no() {
	container.style.display = "none";


	var all = document.createElement("div");
	all.innerHTML = "<span class=\"bold\">" + name + "!</span><span class=\"text\">Для Вас доступ запрещен!</span><span class=\"reason\">Причина:" + reason + "</span><span class=\"small\">*Для ещё одной попытки обновите страницу!</span>";
	all.className = "all";
	main.appendChild(all);
}
