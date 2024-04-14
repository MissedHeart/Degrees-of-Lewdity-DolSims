function clearModSimsFunc() {
	SugarCube.Engine.play("City Library Delete Mod 2");
	C.npc.Seath.init = 0;
	V.NPCName.deleteWith(function (val) {return val.description === "Seath";});
	V.NPCNameList.delete("Seath");
}window.clearModSimsFunc = clearModSimsFunc;

function shutDownFunc() {
	SugarCube.Engine.play("Bedroom");
}window.shutDownFunc = shutDownFunc;

function shutDownFuncBailey() {
	SugarCube.Engine.play("Bedroom Bailey");
}window.shutDownFuncBailey = shutDownFuncBailey;

function compuNoLink() {
	if(V.passage === "Computer Init Sims" || V.passage === "Computer Game Sims")
		return false;
	else
		return true;
}window.compuNoLink = compuNoLink;

function passTimePCSim(time) {
	passTime(time);
	document.getElementById("taskbar_day_ampm").textContent = ampmSims();
	document.getElementById("origin_day_ampm").textContent = ampm();
	document.getElementById("stat_time_Sims").textContent = ampm();
}window.passTimePCSim = passTimePCSim;

function createFunWindow() {
	passTimePCSim(10);
	//document.getElementById("sentence_1_0").style.display = "none";
	//document.getElementById("sentence_2_0").style.display = "none";
	//document.getElementById("sentence_3_0").style.display = "contents";
	//document.getElementById("sentence_4_0").style.display = "contents";
	document.getElementById("sentence_1_0").textContent = "你打开了娱乐界面，你可以在这里玩电子游戏，看视频，或是听音乐。一切都由你来选择。";
	document.getElementById("sentence_2_0").textContent = Time.hour + ":" + Time.minute;
	if(document.getElementById("windowbarSims_fun").style.display == "inline-block")
	{
		if(document.getElementById("windowSims_fun").style.display == "none")
		{
			document.getElementById("windowSims_fun").style.display = "block";
		}
		else
		{
			document.getElementById("windowSims_fun").style.display = "none";
			document.getElementById("windowbarSims_fun").style.display = "none";
			document.getElementById("sentence_1_0").textContent = "你回到了桌面上，思考着接下来要做的事情。";
			//document.getElementById("sentence_2").textContent = "";
		}
	}
	else
	{
		document.getElementById("windowSims_fun").style.display = "block";
		document.getElementById("windowbarSims_fun").style.display = "inline-block";
	}

	//document.getElementById("icon_window_min").style.display = "inline-block";
	//document.getElementById("icon_window_ex").style.display = "inline-block";
	//document.getElementById("icon_window_esc").style.display = "inline-block";
	//document.getElementById("").style.display = "inline-block";
	//document.getElementsByClassName("windowiconSims").style.display = "inline-block";
}window.createFunWindow = createFunWindow;

function shutDownFunWindow() {
	document.getElementById("windowSims_fun").style.display = "none";
	document.getElementById("windowbarSims_fun").style.display = "none";
	document.getElementById("sentence_1_0").textContent = "你关闭了娱乐窗口，现在不是做这些的时候。";
	document.getElementById("sentence_2_0").textContent = "";
}window.shutDownFunWindow = shutDownFunWindow;

function changeFunWindow() {
	if(document.getElementById("windowSims_fun").style.display == "block")
	{
		document.getElementById("windowSims_fun").style.display = "none";
		document.getElementById("sentence_1_0").textContent = "你回到了桌面上，思考着接下来要做的事情。";
		document.getElementById("sentence_2_0").textContent = "";
	}
	else
	{
		document.getElementById("windowSims_fun").style.display = "block";
		document.getElementById("sentence_1_0").textContent = "你打开了娱乐界面，你可以在这里玩电子游戏，看视频，或是听音乐。一切都由你来选择。";
		document.getElementById("sentence_2_0").textContent = "";
	}
}window.changeFunWindow = changeFunWindow;

function createGameWindow() {
	document.getElementById("screen").style.display = "none";
	document.getElementById("game_window").style.display = "block";
	document.getElementById("sentence_1_0").textContent = "你跟游戏界面里孤零零的几个图标面面相觑，它们仿佛在无辜地看着你。或许你可以在网上购买一些新的游戏？";
	document.getElementById("sentence_2_0").textContent = "";
}window.createGameWindow = createGameWindow;

function createLiveWindow() {
	document.getElementById("screen").style.display = "none";
	document.getElementById("live_window").style.display = "block";
	document.getElementById("sentence_1_0").textContent = "你的观众们看上去";
	document.getElementById("sentence_1_1").textContent = "饶有兴趣";
	document.getElementById("sentence_1_1").style.color = "var(--green)";
	document.getElementById("sentence_1_2").textContent = "且";
	document.getElementById("sentence_1_3").textContent = "兴奋不已";
	document.getElementById("sentence_1_3").style.color = "var(--green)";
	document.getElementById("sentence_1_4").textContent = "。";
	document.getElementById("sentence_2_0").textContent = "目前的观众占比是：狂热粉";
	document.getElementById("sentence_2_1").textContent = "10.59%↑";
	document.getElementById("sentence_2_1").className = "sentence green";
	document.getElementById("sentence_2_2").textContent = "，";
	document.getElementById("sentence_2_3").textContent = "抽象粉";
	document.getElementById("sentence_2_4").textContent = "50.15%-";
	document.getElementById("sentence_2_4").style.color = "var(--black)";
	document.getElementById("sentence_2_5").textContent = "，";
	document.getElementById("sentence_2_6").textContent = "路人粉";
	document.getElementById("sentence_2_7").textContent = "20.20%↓";
	document.getElementById("sentence_2_7").style.color = "var(--red)";
	document.getElementById("sentence_2_8").textContent = "。";
}window.createLiveWindow = createLiveWindow;

function ampmSims(hour, minute) {
	let ampm;
	if (hour !== undefined) {
		minute = minute !== undefined ? minute : "00";
	} else {
		hour = Time.hour;
		minute = Time.minute;
	}
	if (V.options.timestyle === "ampm") {
		ampm = hour >= 12 ? "下午" : "上午";
		hour = ((hour + 11) % 12) + 1;
	}
	//document.getElementById("taskbar_weather").style.left = "24px";
	if (!ampm){
		return ("0" + getTimeString(hour, minute)).slice(-5);
	}
	else if (hour >= 10){
		return (getTimeString(hour, minute));
	}
	else {
		return ("0" + getTimeString(hour, minute));
	}
	//return !ampm ? ("0" + getTimeString(hour, minute)).slice(-5) : ("0" + getTimeString(hour, minute));
}
DefineMacroS("ampmSims", ampmSims);