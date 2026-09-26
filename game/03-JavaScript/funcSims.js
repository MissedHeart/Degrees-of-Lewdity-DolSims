function creatureVaginaSimsRefresh(i) {
	V.creatureVaginaSims[0] = clone(T.container.creatures[i]);
	delete T.container.creatures[i];
	T.container.count -= 1;
	SugarCube.Engine.play(V.passage);
} window.creatureVaginaSimsRefresh = creatureVaginaSimsRefresh;

//function creatureVaginaSimsRefresh0() {
//	V.creatureVaginaSims[0] = clone(T.container.creatures[0]);
//	delete T.container.creatures[0];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureVaginaSimsRefresh0 = creatureVaginaSimsRefresh0;
//function creatureVaginaSimsRefresh1() {
//	V.creatureVaginaSims[0] = clone(T.container.creatures[1]);
//	delete T.container.creatures[1];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureVaginaSimsRefresh1 = creatureVaginaSimsRefresh1;
//function creatureVaginaSimsRefresh2() {
//	V.creatureVaginaSims[0] = clone(T.container.creatures[2]);
//	delete T.container.creatures[2];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureVaginaSimsRefresh2 = creatureVaginaSimsRefresh2;
//function creatureVaginaSimsRefresh3() {
//	V.creatureVaginaSims[0] = clone(T.container.creatures[3]);
//	delete T.container.creatures[3];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureVaginaSimsRefresh3 = creatureVaginaSimsRefresh3;
//function creatureVaginaSimsRefresh4() {
//	V.creatureVaginaSims[0] = clone(T.container.creatures[4]);
//	delete T.container.creatures[4];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureVaginaSimsRefresh4 = creatureVaginaSimsRefresh4;
//要不代码不开源算了，这种代码流传出去真的不会被笑话吗
//感觉自己除了人品领先一点以外，其他相比于Yandev没有优势……哭泣
//但是话又说回来了，这代码又不是不能用
//精简掉了，好耶
//现在让我们把视角转到Yandev队

function creatureAnusSimsRefresh(i) {
	V.creatureAnusSims[0] = clone(T.container.creatures[i]);
	delete T.container.creatures[i];
	T.container.count -= 1;
	SugarCube.Engine.play(V.passage);
} window.creatureAnusSimsRefresh = creatureAnusSimsRefresh;

//function creatureAnusSimsRefresh0() {
//	V.creatureAnusSims[0] = clone(T.container.creatures[0]);
//	delete T.container.creatures[0];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureAnusSimsRefresh0 = creatureAnusSimsRefresh0;
//function creatureAnusSimsRefresh1() {
//	V.creatureAnusSims[0] = clone(T.container.creatures[1]);
//	delete T.container.creatures[1];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureAnusSimsRefresh1 = creatureAnusSimsRefresh1;
//function creatureAnusSimsRefresh2() {
//	V.creatureAnusSims[0] = clone(T.container.creatures[2]);
//	delete T.container.creatures[2];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureAnusSimsRefresh2 = creatureAnusSimsRefresh2;
//function creatureAnusSimsRefresh3() {
//	V.creatureAnusSims[0] = clone(T.container.creatures[3]);
//	delete T.container.creatures[3];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureAnusSimsRefresh3 = creatureAnusSimsRefresh3;
//function creatureAnusSimsRefresh4() {
//	V.creatureAnusSims[0] = clone(T.container.creatures[4]);
//	delete T.container.creatures[4];
//	T.container.count -= 1;
//	SugarCube.Engine.play(V.passage);
//} window.creatureAnusSimsRefresh4 = creatureAnusSimsRefresh4;

function creatureVaginaSimsRefresh_0() {
	let i;
	for (i = 0; i < T.container.maxCount; i++)
	{
		if (T.container.creatures[i] == undefined || T.container.creatures[i] == null)
		{
			T.container.creatures[i] = clone(V.creatureVaginaSims[0]);
			delete V.creatureVaginaSims[0];
			T.container.count += 1;
			i += T.container.maxCount;
		}
	}
	SugarCube.Engine.play(V.passage);
} window.creatureVaginaSimsRefresh_0 = creatureVaginaSimsRefresh_0;

function creatureAnusSimsRefresh_0() {
	let i;
	for (i = 0; i < T.container.maxCount; i++)
	{
		if (T.container.creatures[i] == undefined || T.container.creatures[i] == null)
		{
			T.container.creatures[i] = clone(V.creatureAnusSims[0]);
			delete V.creatureAnusSims[0];
			T.container.count += 1;
			i += T.container.maxCount;
		}
	}
	SugarCube.Engine.play(V.passage);
} window.creatureAnusSimsRefresh_0 = creatureAnusSimsRefresh_0;

function MirrorHypnoVariableRefresh() {
	if (document.getElementById('MirrorHypnoSims_0')!= null && document.getElementById('MirrorHypnoSims_0').checked == false)
	{
		V.MirrorHypnoSims_0 = false;
	}
	else
	{
		V.MirrorHypnoSims_0 = true;
	}
	if (document.getElementById('MirrorHypnoSims_1')!= null && document.getElementById('MirrorHypnoSims_1').checked == false)
	{
		V.MirrorHypnoSims_1 = false;
		switch (V.bodysize)
		{
			case 0:
				V.physiquesize = 6000;
				if (V.physique >= V.physiquesize) { V.physique = 6000; }
				break;
			case 1:
				V.physiquesize = 10000;
				if (V.physique >= V.physiquesize) { V.physique = 10000; }
				break;
			case 2:
				V.physiquesize = 12000;
				if (V.physique >= V.physiquesize) { V.physique = 12000; }
				break;
			case 3:
				V.physiquesize = 16000;
				if (V.physique >= V.physiquesize) { V.physique = 16000; }
				break;
		}
	}
	else
	{
		V.MirrorHypnoSims_1 = true;
		V.physiquesize = 16000;
	}
	if (document.getElementById('MirrorHypnoSims_2')!= null && document.getElementById('MirrorHypnoSims_2').checked == false)
	{
		V.MirrorHypnoSims_2 = false;
	}
	else
	{
		V.MirrorHypnoSims_2 = true;
	}
	if (document.getElementById('MirrorHypnoSims_3')!= null && document.getElementById('MirrorHypnoSims_3').checked == false)
	{
		V.MirrorHypnoSims_3 = false;
	}
	else
	{
		V.MirrorHypnoSims_3 = true;
	}
	if (document.getElementById('MirrorHypnoSims_4')!= null && document.getElementById('MirrorHypnoSims_4').checked == true)
	{
		V.MirrorHypnoSims_4 = true;
	}
	else
	{
		V.MirrorHypnoSims_4 = false;
	}
	if (document.getElementById('MirrorHypnoSims_5')!= null && document.getElementById('MirrorHypnoSims_5').checked == true)
	{
		V.MirrorHypnoSims_5 = true;
	}
	else if (V.MirrorHypnoSims_5 != undefined)
	{
		V.MirrorHypnoSims_5 = false;
	}
	SugarCube.Engine.play(V.passage);
} window.MirrorHypnoVariableRefresh = MirrorHypnoVariableRefresh;

function SchoolOrderVariableRefresh() {
	if (document.getElementById('SchoolOrder_examine_0')!= null && document.getElementById('SchoolOrder_examine_0').checked == false)
	{
		V.SchoolOrder_examine_0 = false;
	}
	else
	{
		V.SchoolOrder_examine_0 = true;
	}
	if (document.getElementById('SchoolOrder_examine_1')!= null && document.getElementById('SchoolOrder_examine_1').checked == false)
	{
		V.SchoolOrder_examine_1 = false;
	}
	else
	{
		V.SchoolOrder_examine_1 = true;
	}
	if (document.getElementById('SchoolOrder_examine_2')!= null && document.getElementById('SchoolOrder_examine_2').checked == false)
	{
		V.SchoolOrder_examine_2 = false;
	}
	else
	{
		V.SchoolOrder_examine_2 = true;
	}
	if (document.getElementById('SchoolOrder_HorninessHandle_0')!= null && document.getElementById('SchoolOrder_HorninessHandle_0').checked == false)
	{
		V.SchoolOrder_HorninessHandle_0 = false;
	}
	else
	{
		V.SchoolOrder_HorninessHandle_0 = true;
	}
	if (document.getElementById('SchoolOrder_award_0')!= null && document.getElementById('SchoolOrder_award_0').checked == false)
	{
		V.SchoolOrder_award_0 = false;
	}
	else
	{
		V.SchoolOrder_award_0 = true;
	}
	if (document.getElementById('SchoolOrder_award_1')!= null && document.getElementById('SchoolOrder_award_1').checked == false)
	{
		V.SchoolOrder_award_1 = false;
	}
	else
	{
		V.SchoolOrder_award_1 = true;
	}
	if (document.getElementById('SchoolOrder_jobs_cook')!= null && document.getElementById('SchoolOrder_jobs_cook').checked == false)
	{
		V.SchoolOrder_jobs_cook = false;
	}
	else
	{
		V.SchoolOrder_jobs_cook = true;
	}
	if (document.getElementById('SchoolOrder_jobs_food')!= null && document.getElementById('SchoolOrder_jobs_food').checked == false)
	{
		V.SchoolOrder_jobs_food = false;
	}
	else
	{
		V.SchoolOrder_jobs_food = true;
	}
	if (document.getElementById('SchoolOrder_jobs_tool')!= null && document.getElementById('SchoolOrder_jobs_tool').checked == false)
	{
		V.SchoolOrder_jobs_tool = false;
	}
	else
	{
		V.SchoolOrder_jobs_tool = true;
	}
	if (document.getElementById('SchoolOrder_toys_0')!= null && document.getElementById('SchoolOrder_toys_0').checked == false)
	{
		V.SchoolOrder_toys_0 = false;
	}
	else
	{
		V.SchoolOrder_toys_0 = true;
	}
	if (document.getElementById('SchoolOrder_toys_1')!= null && document.getElementById('SchoolOrder_toys_1').checked == false)
	{
		V.SchoolOrder_toys_1 = false;
	}
	else
	{
		V.SchoolOrder_toys_1 = true;
	}
	if (document.getElementById('SchoolOrder_club_art')!= null && document.getElementById('SchoolOrder_club_art').checked == false)
	{
		V.SchoolOrder_club_art = false;
	}
	else
	{
		V.SchoolOrder_club_art = true;
	}
	if (document.getElementById('SchoolOrder_club_sex')!= null && document.getElementById('SchoolOrder_club_sex').checked == false)
	{
		V.SchoolOrder_club_sex = false;
	}
	else
	{
		V.SchoolOrder_club_sex = true;
	}
} window.SchoolOrderVariableRefresh = SchoolOrderVariableRefresh;

function SchoolOrderJobsShow() {
	if (document.getElementById('SchoolOrder_jobs_true')!= null) {
		document.getElementById("SchoolOrder_jobs_true").classList.remove("noclickSims");
	}
} window.SchoolOrderJobsShow = SchoolOrderJobsShow;

function SchoolOrderJobsHide() {
	if (document.getElementById('SchoolOrder_jobs_cook')!= null && document.getElementById('SchoolOrder_jobs_cook').checked == true) {
		document.getElementById('SchoolOrder_jobs_cook').checked = false;
		V.SchoolOrder_jobs_cook = false;
	}
	if (document.getElementById('SchoolOrder_jobs_food')!= null && document.getElementById('SchoolOrder_jobs_food').checked == true) {
		document.getElementById('SchoolOrder_jobs_food').checked = false;
		V.SchoolOrder_jobs_food = false;
	}
	if (document.getElementById('SchoolOrder_jobs_tool')!= null && document.getElementById('SchoolOrder_jobs_tool').checked == true) {
		document.getElementById('SchoolOrder_jobs_tool').checked = false;
		V.SchoolOrder_jobs_tool = false;
	}
	if (document.getElementById('SchoolOrder_jobs_true') != null) {
		document.getElementById("SchoolOrder_jobs_true").classList.add("noclickSims");
	}
} window.SchoolOrderJobsHide = SchoolOrderJobsHide;

function SchoolOrderToysShow() {
	if (document.getElementById('SchoolOrder_toys_sexual3') != null) {
		document.getElementById("SchoolOrder_toys_sexual3").classList.remove("noclickSims");
	}
} window.SchoolOrderToysShow = SchoolOrderToysShow;

function SchoolOrderToysHide() {
	if (document.getElementById('SchoolOrder_toys_0')!= null && document.getElementById('SchoolOrder_toys_0').checked == true) {
		document.getElementById('SchoolOrder_toys_0').checked = false;
		V.SchoolOrder_toys_0 = false;
	}
	if (document.getElementById('SchoolOrder_toys_1')!= null && document.getElementById('SchoolOrder_toys_1').checked == true) {
		document.getElementById('SchoolOrder_toys_1').checked = false;
		V.SchoolOrder_toys_1 = false;
	}
	if (document.getElementById('SchoolOrder_toys_sexual3') != null) {
		document.getElementById("SchoolOrder_toys_sexual3").classList.add("noclickSims");
	}
} window.SchoolOrderToysHide = SchoolOrderToysHide;

function SchoolOrderClubShow() {
	if (document.getElementById('SchoolOrder_club_true') != null) {
		document.getElementById("SchoolOrder_club_true").classList.remove("noclickSims");
	}
} window.SchoolOrderClubShow = SchoolOrderClubShow;

function SchoolOrderClubHide() {
	if (document.getElementById('SchoolOrder_club_art')!= null && document.getElementById('SchoolOrder_club_art').checked == true) {
		document.getElementById('SchoolOrder_club_art').checked = false;
		V.SchoolOrder_club_art = false;
	}
	if (document.getElementById('SchoolOrder_club_sex')!= null && document.getElementById('SchoolOrder_club_sex').checked == true) {
		document.getElementById('SchoolOrder_club_sex').checked = false;
		V.SchoolOrder_club_sex = false;
	}
	if (document.getElementById('SchoolOrder_club_true') != null) {
		document.getElementById("SchoolOrder_club_true").classList.add("noclickSims");
	}
} window.SchoolOrderClubHide = SchoolOrderClubHide;

function robinRefuseTextFunc() {
	if(V.robin_refuse_text === true)
	{
		V.robin_refuse_text = false;
		document.getElementById("RobinRefuseText_Css").textContent = "学罗宾那样在门上贴纸条";
		document.getElementById("robin_refuse_text_span").innerText = "";
		document.getElementById("robin_refuse_text_span").style.display = "none";
	}
	else
	{
		C.npc.Robin.lovewake = 0;
		V.robin_refuse_text = true;
		document.getElementById("RobinRefuseText_Css").textContent = "把纸条撕下来";
		document.getElementById("robin_refuse_text_span").innerText = "\n一张纸条贴在你的门上：“在休息！”你明白，这种东西无法挡住贝利。";
		document.getElementById("robin_refuse_text_span").style.display = "inline";
	}
	SugarCube.Engine.play("Bedroom");
} window.robinRefuseTextFunc = robinRefuseTextFunc;

function robinRefuseTextFunc2() {
	if(V.robin_refuse_text === true)
	{
		robin_refuse_text_span.style.display = "inline";
	}
	else
	{
		robin_refuse_text_span.style.display = "none";
	}
	return;
}
window.robinRefuseTextFunc2 = robinRefuseTextFunc2;
DefineMacroS("robinRefuseTextFunc2", robinRefuseTextFunc2);

function clearModSimsFuncDec() {
	const bool = Object.getOwnPropertyNames(C.npc).isEqual(V.NPCNameList);
	if(!bool)
	{
		//const result = V.NPCNameList.filter(name => !Object.getOwnPropertyNames(C.npc).includes(name));
		return V.NPCNameList.filter(name => !Object.getOwnPropertyNames(C.npc).includes(name));
	}
	else
	{
		V.clearModSimsFuncDec_phase = 1;
		return "";
	}
} window.clearModSimsFuncDec = clearModSimsFuncDec;

Macro.add("clearModSimsFuncDec", {
	handler() {
		const fragment = clearModSimsFuncDec();
		this.output.append(fragment);
	}
});

function clearOtherModSimsFunc() {
	let i = 1;
	const j = V.NPCNameList.filter(name => !Object.getOwnPropertyNames(C.npc).includes(name)).length;
	const redundantNPCs = V.NPCNameList.filter(name => !Object.getOwnPropertyNames(C.npc).includes(name));
	const originalCount = redundantNPCs.length;
	redundantNPCs.forEach(name => {
        if (V.NPCName && V.NPCName.deleteWith) {
            V.NPCName.deleteWith(function (val) { 
                return val.description === name; 
            });
        }
        if (V.NPCNameList && V.NPCNameList.delete) {
            V.NPCNameList.delete(name);
        }
    });
	const remainingNPCs = V.NPCNameList.filter(name => !Object.getOwnPropertyNames(C.npc).includes(name));
    const resultSpan = document.getElementById("clearModSimsFunc_text_span");
    if (resultSpan) {
        if (remainingNPCs.length === 0) {
            resultSpan.textContent = `清理成功。已删除${originalCount}个冗余NPC。`;
            resultSpan.style.display = "inline";
        } 
		else {
			//真的能用上这里的代码吗
            resultSpan.textContent = `部分清理完成。删除了${originalCount - remainingNPCs.length}/${originalCount}个冗余NPC，剩余${remainingNPCs.length}个。`;
            resultSpan.style.display = "inline";
        }
    }
    return remainingNPCs;
} window.clearOtherModSimsFunc = clearOtherModSimsFunc;

// 修复旧存档中缺失的 DoLSims NPC 数据
function repairMissingModSimsNPC() {
	if (!V.NPCName || !setup.NPCNameList) return;

	const names = ["Seath", "Alice", "Liddell"];
	const repaired = [];

	names.forEach(name => {
		if (!setup.NPCNameList.includes(name)) return;
		if (V.NPCName.some(n => n && (n.nam === name || n.description === name))) return;

		const npc = clone(setup.baseNNPC);
		npc.nam = name;
		npc.description = name;

		if (name === "Seath") {
			Object.assign(npc, {
				title: "misanthropist", insecurity: "looks", teen: 1, adult: 0, type: "human",
				eyeColour: "black", hairColour: "black", atfield: 100, love: 0, lust: 100, trauma: 30
			});
		} else {
			Object.assign(npc, {
				title: "sacrificed piece", insecurity: "looks", teen: 1, adult: 0, type: "human",
				eyeColour: "purple", hairColour: "blond"
			});
		}

		if (!npc.pregnancy) npc.pregnancy = {};
		V.NPCName.push(npc);
		repaired.push(name);
	});

	if (repaired.length) {
		V.NPCNameList = clone(setup.NPCNameList);
		initCNPC();
	}

	const resultSpan = document.getElementById("repairMissingModSimsNPC_text_span");
	if (resultSpan) {
		resultSpan.textContent = repaired.length
			? `修复成功。已补充${repaired.length}个缺失NPC：${repaired.join("、")}。`
			: "未检测到缺失NPC，目前一切正常。";
		resultSpan.className = "green";
		resultSpan.style.display = "inline";
	}

	return repaired;
} window.repairMissingModSimsNPC = repairMissingModSimsNPC;

function clearModSimsFunc() {
	SugarCube.Engine.play("City Library Delete Mod 2");

	C.npc.Seath.init = 0;
	C.npc.Alice.init = 0;
	C.npc.Liddell.init = 0;

	V.NPCName.deleteWith(function (val) {return val.description === "Seath";});
	V.NPCNameList.delete("Seath");

	V.NPCName.deleteWith(function (val) {return val.description === "Alice";});
	V.NPCNameList.delete("Alice");

	V.NPCName.deleteWith(function (val) {return val.description === "Liddell";});
	V.NPCNameList.delete("Liddell");

} window.clearModSimsFunc = clearModSimsFunc;

function shutDownFunc() {
	SugarCube.Engine.play("City Library -1");
} window.shutDownFunc = shutDownFunc;

//function shutDownFuncBailey() {
//	SugarCube.Engine.play("Bedroom Bailey");
//} window.shutDownFuncBailey = shutDownFuncBailey;

// 所以为什么要写在这里呢
function simsModHintClick() {
    $.wiki("<<overlayReplace \"simsModHint\">>");
}
window.simsModHintClick = simsModHintClick;

function compuNoLink() {
	if(V.passage === "Computer Init Sims" || V.passage === "Computer Game Sims")
		return false;
	else
		return true;
} window.compuNoLink = compuNoLink;

function passTimePCSim(time) {
	passTime(time);
	if (document.getElementById('taskbar_day_ampm') != null)
	{
		document.getElementById("taskbar_day_ampm").textContent = ampmSims();
	}
	if (document.getElementById('origin_day_ampm') != null)
	{
		document.getElementById("origin_day_ampm").textContent = ampm();
	}
	if (document.getElementById('stat_time_Sims') != null)
	{
		document.getElementById("stat_time_Sims").textContent = ampm();
	}
} window.passTimePCSim = passTimePCSim;

function createFunWindow() {
	passTimePCSim(1);
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
} window.createFunWindow = createFunWindow;

function shutDownFunWindow() {
	document.getElementById("windowSims_fun").style.display = "none";
	document.getElementById("windowbarSims_fun").style.display = "none";
	document.getElementById("sentence_1_0").textContent = "你关闭了娱乐窗口，现在不是做这些的时候。";
} window.shutDownFunWindow = shutDownFunWindow;

function changeFunWindow() {
	if(document.getElementById("windowSims_fun").style.display == "block")
	{
		document.getElementById("windowSims_fun").style.display = "none";
		document.getElementById("sentence_1_0").textContent = "你回到了桌面上，思考着接下来要做的事情。";
	}
	else
	{
		document.getElementById("windowSims_fun").style.display = "block";
		document.getElementById("sentence_1_0").textContent = "你打开了娱乐界面，你可以在这里玩电子游戏，看视频，或是听音乐。一切都由你来选择。";
	}
} window.changeFunWindow = changeFunWindow;

function createGameWindow() {
	document.getElementById("screen").style.display = "none";
	document.getElementById("game_window").style.display = "block";
	document.getElementById("sentence_1_0").textContent = "你跟游戏界面里孤零零的几个图标面面相觑，它们仿佛在无辜地看着你。或许你可以在网上购买一些新的游戏？";
} window.createGameWindow = createGameWindow;

function createLiveWindow() {
	//passTimePCSim(1);//这行代码是用来测试时间流逝效果的，现在已经不需要了
	document.getElementById("sentence_1_0").textContent = "你打开了直播界面，许多知名主播都曾看过这个界面，就像你现在一样。";
	if(document.getElementById("windowbarSims_live").style.display == "inline-block")
	{
		if(document.getElementById("windowSims_live").style.display == "none")
		{
			document.getElementById("windowSims_live").style.display = "block";
		}
		else
		{
			document.getElementById("windowSims_live").style.display = "none";
			document.getElementById("windowbarSims_live").style.display = "none";
			document.getElementById("sentence_1_0").textContent = "你回到了桌面上，思考着接下来要做的事情。";
		}
	}
	else
	{
		document.getElementById("windowSims_live").style.display = "block";
		document.getElementById("windowbarSims_live").style.display = "inline-block";
	}
} window.createLiveWindow = createLiveWindow;

function shutDownLiveWindow() {
	document.getElementById("windowSims_live").style.display = "none";
	document.getElementById("windowbarSims_live").style.display = "none";
	document.getElementById("sentence_1_0").textContent = "你关闭了直播窗口，现在不是做这些的时候。";
} window.shutDownLiveWindow = shutDownLiveWindow;

function changeLiveWindow() {
	if(document.getElementById("windowSims_live").style.display == "block")
	{
		document.getElementById("windowSims_live").style.display = "none";
		document.getElementById("sentence_1_0").textContent = "你回到了桌面上，思考着接下来要做的事情。";
	}
	else
	{
		document.getElementById("windowSims_live").style.display = "block";
		document.getElementById("sentence_1_0").textContent = "你打开了直播界面，许多知名主播都曾看过这个界面，就像你现在一样。";
	}
} window.changeLiveWindow = changeLiveWindow;

function createLiveWindow0() {
	document.getElementById("windowbarSims_live").classList.add("noclickSims_White");
	document.getElementById("shutDownKey").classList.add("noclickSims_White");

	document.getElementById("screenSims").style.display = "none";
	document.getElementById("live_window").style.display = "block";
	document.getElementById("sentence_1_0").textContent = "你的观众们看上去";
	V.sentence_1_1 = "饶有兴趣";
	document.getElementById("sentence_1_0").textContent = "你的观众们看上去" + V.sentence_1_1;
} window.createLiveWindow0 = createLiveWindow0;

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

function refreshSettingsFSims() {
	T.npcId = V.NPCNameList.indexOf("Alice");
	V.NPCName[T.npcId].gender = C.npc.Liddell.gender;
	V.NPCName[T.npcId].penissize = C.npc.Liddell.penissize;
	//V.NPCName[T.npcId].breastdesc = C.npc.Liddell.breastdesc;因为这个不会实时更新，所以当成feature处理了，不是bug
	V.NPCName[T.npcId].skincolour = C.npc.Liddell.skincolour;
	T.npcList["爱丽丝"] = T.npcId;

	T.npcList = {};
	T.sortedNPCList = clone(V.NPCNameList).sort();

	//$.wiki("<<set _sortedNPCList.push('Alice')>>");
	$.wiki("<<run delete _npcList['利德尔']>>");
	T.sortedNPCList.delete('Liddell');
	T.sortedNPCList.pushUnique('Alice');
	T.sortedNPCList.sort();
	//$.wiki("<<run _sortedNPCList.delete('Liddell')>>");
	//$.wiki("<<run _sortedNPCList.sort()>>");

	T.sortedId = T.sortedNPCList.indexOf(V.NPCNameList[T.npcId]);

	T.npcId = T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[T.sortedId])];

	for (let $_i = 0; $_i < T.sortedNPCList.length; $_i++) {
		T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[$_i])] = V.NPCNameList.indexOf(T.sortedNPCList[$_i]);
	}

	if(C.npc.Liddell.init == 1 || C.npc.Alice.init == 1)
	{
		C.npc.Liddell.init = 0;
		C.npc.Alice.init = 1;
	}
	
	V.aliceLiddellAlreadySims = 2;

	T.npcId = T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[T.sortedId])];

	setTimeout(function() {
        refreshSettingsSims();
    }, 50);
} window.refreshSettingsFSims = refreshSettingsFSims;

function refreshSettingsMSims() {
	T.npcId = V.NPCNameList.indexOf("Liddell");
	V.NPCName[T.npcId].gender = C.npc.Alice.gender;
	V.NPCName[T.npcId].penissize = C.npc.Alice.penissize;
	//V.NPCName[T.npcId].breastdesc = C.npc.Alice.breastdesc;
	V.NPCName[T.npcId].skincolour = C.npc.Alice.skincolour;
	T.npcList["利德尔"] = T.npcId;

	T.npcList = {};
	T.sortedNPCList = clone(V.NPCNameList).sort();

	//$.wiki("<<set _sortedNPCList.push('Liddell')>>");
	$.wiki("<<run delete _npcList['爱丽丝']>>");
	T.sortedNPCList.delete('Alice');
	T.sortedNPCList.pushUnique('Liddell');
	T.sortedNPCList.sort();
	//$.wiki("<<run _sortedNPCList.delete('Alice')>>");
	//$.wiki("<<run _sortedNPCList.sort()>>");

	T.sortedId = T.sortedNPCList.indexOf(V.NPCNameList[T.npcId]);

	T.npcId = T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[T.sortedId])];

	for (let $_i = 0; $_i < T.sortedNPCList.length; $_i++) {
		T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[$_i])] = V.NPCNameList.indexOf(T.sortedNPCList[$_i]);
	}

	if(C.npc.Liddell.init == 1 || C.npc.Alice.init == 1)
	{
		C.npc.Alice.init = 0;
		C.npc.Liddell.init = 1;
	}

	V.aliceLiddellAlreadySims = 1;

	T.npcId = T.npcList[setup.NPC_CN_NAME(T.sortedNPCList[T.sortedId])];

	setTimeout(function() {
        refreshSettingsSims();
    }, 50);
} window.refreshSettingsMSims = refreshSettingsMSims;

function refreshSettingsSims() {
	$.wiki("<<replace #npcSettingsMenu>><<npcSettingsMenu>><</replace>>");
} window.refreshSettingsSims = refreshSettingsSims;

// 弹幕系统核心代码 ↓

// SC等级配置
const SC_LEVELS = [
	{ min: 0, max: 49, color: '#F5F5F5', name: 'white' },      // 白色
	{ min: 50, max: 99, color: '#90EE90', name: 'green' },     // 绿色
	{ min: 100, max: 499, color: '#87CEEB', name: 'blue' },    // 蓝色
	{ min: 500, max: 999, color: '#DDA0DD', name: 'purple' },  // 紫色
	{ min: 1000, max: 4999, color: '#FFD700', name: 'gold' },  // 金色
	{ min: 5000, max: Infinity, color: '#FF6B6B', name: 'red' } // 红色
];

// 根据金额获取SC颜色
function getSCColor(amount) {
	for (let level of SC_LEVELS) {
		if (amount >= level.min && amount <= level.max) {
			return level.color;
		}
	}
	return '#F5F5F5'; // 默认白色
}window.getSCColor = getSCColor;

// 初始化弹幕数据结构
function initDanmakuSystem() {
	if (!V.danmakuSystem) {
		V.danmakuSystem = {
			normalPool: [],
			scList: [],
			scQueue: [],
			selectedSC: null,
			danmakuTimer: null,
			currentDanmaku: [],
			maxDanmaku: 7,
			keyboardListenerActive: false,
			danmakuIdCounter: 0 // 用于追踪弹幕ID
		};
	}
	
	if (!V.livemode) {
		V.livemode = "normal";
	}
	
	// 初始化直播配置
	if (!V.liveTitle) V.liveTitle = "来看猫娘跳舞吧~";
	if (!V.liveContentText) V.liveContentText = "你舒展着双臂,扭动着腰肢,裙摆随着你的起舞而摆动。";
	if (!V.liveAudienceNum) V.liveAudienceNum = 1065;
	if (!V.liveAtmosphere) V.liveAtmosphere = "热烈的";
	if (V.liveAdminWatch === undefined) V.liveAdminWatch = false;
	
	if (V.danmakuSystem.normalPool.length === 0) {
		const defaultPool = [
			"🟦主播没活可以咬尾巴玩",
			"🟦我超，猫娘",
			"🟦超管冲晕了？这不封？",
			"🟦佛了，怎么哪都有广告狗,d站药丸😅",
			"🟦主播看下私信",
			"🟦←别问，超管也爱看",
			"🟦尾巴怎么固定的？？？",
			"🟦有考虑做点副业吗",
			"🟦犬 系 震 怒",
			"🟦主播今天状态不错啊",
			"🟦这舞跳的真好",
			"🟦可以教教我吗",
			"🟦主播加油！",
			"🟦人气越来越高了",
			"🟦我是新来的，求关注",
			"🟦这个直播间氛围好好",
			"🟦主播多久直播一次？",
			"🟦有没有粉丝群啊"
		];
		
		if (V.customDanmakuPool && V.customDanmakuPool.length > 0) {
			V.danmakuSystem.normalPool = defaultPool.concat(V.customDanmakuPool);
		} else {
			V.danmakuSystem.normalPool = defaultPool;
		}
	}
}window.initDanmakuSystem = initDanmakuSystem;

// 生成随机普通弹幕
function getRandomDanmaku() {
	const pool = V.danmakuSystem.normalPool;
	return {
		id: V.danmakuSystem.danmakuIdCounter++,
		text: pool[Math.floor(Math.random() * pool.length)],
		type: 'normal'
	};
}

// 生成SC
function generateSC() {
	if (V.danmakuSystem.scList.length > 0) {
		return null;
	}
	
	if (Math.random() < 0.1) {
		const defaultSCTemplates = [
			{ text: "主播跳的真好！支持你！", amount: 50 },
			{ text: "太可爱了吧！继续加油！", amount: 100 },
			{ text: "这是什么神仙主播！", amount: 200 },
			{ text: "我的天！绝了！", amount: 500 },
			{ text: "主播我爱你！", amount: 1000 },
			{ text: "这是我见过最棒的直播！", amount: 5000 }
		];
		
		const scTemplates = (V.customSCTemplates && V.customSCTemplates.length > 0) 
			? V.customSCTemplates 
			: defaultSCTemplates;
		
		const template = scTemplates[Math.floor(Math.random() * scTemplates.length)];
		const amount = template.amount || 100;
		const sc = {
			id: Date.now(),
			text: template.text,
			amount: amount,
			color: getSCColor(amount),
			timestamp: Date.now(),
			type: 'sc'
		};
		
		return sc;
	}
	
	return null;
}

// 添加弹幕到显示列表(动画)
function addDanmakuToDisplay(danmaku) {
	V.danmakuSystem.currentDanmaku.push(danmaku);
	
	if (V.danmakuSystem.currentDanmaku.length > V.danmakuSystem.maxDanmaku) {
		V.danmakuSystem.currentDanmaku.shift();
	}
}

// 刷新弹幕显示
function refreshDanmaku() {
	initDanmakuSystem();
	
	// 清空当前弹幕，重新生成
	V.danmakuSystem.currentDanmaku = [];
	
	// 随机生成4-7条不重复的弹幕
	const danmakuCount = Math.floor(Math.random() * 4) + 4; // 4到7条
	const usedTexts = new Set(); // 用于追踪已使用的弹幕文本
	const pool = V.danmakuSystem.normalPool;
	
	let attempts = 0;
	const maxAttempts = pool.length * 2; // 防止无限循环
	
	while (V.danmakuSystem.currentDanmaku.length < danmakuCount && attempts < maxAttempts) {
		const randomText = pool[Math.floor(Math.random() * pool.length)];
		
		if (!usedTexts.has(randomText)) {
			usedTexts.add(randomText);
			V.danmakuSystem.currentDanmaku.push({
				id: V.danmakuSystem.danmakuIdCounter++,
				text: randomText,
				type: 'normal'
			});
		}
		
		attempts++;
	}
	
	const newSC = generateSC();
	if (newSC) {
		V.danmakuSystem.scList.push(newSC);
	}
	
	updateDanmakuDisplay();
}window.refreshDanmaku = refreshDanmaku;

// 点击"继续直播"、"回应弹幕"时，所有弹幕都会被清空并重新随机生成4-7条新弹幕
// const danmakuCount = Math.floor(Math.random() * 4) + 4; 改为固定值，比如 const danmakuCount = 7; 可以固定生成的弹幕数量

// 更新弹幕DOM显示(带上移动画)
function updateDanmakuDisplay() {
	const container = document.getElementById('danmaku_mini_screen');
	if (!container) return;
	
	// 先显示SC
	let newHTML = '';
	V.danmakuSystem.scList.forEach((sc, index) => {
		const isSelected = V.danmakuSystem.selectedSC && V.danmakuSystem.selectedSC.id === sc.id;
		newHTML += `
			<div class="danmaku_sc_element ${isSelected ? 'selected' : ''}" 
			     id="danmaku_sc_${sc.id}" 
			     style="background-color: ${sc.color};"
			     onclick="selectSC(${sc.id})">
				<strong>💰 ￡${sc.amount}</strong><br>${sc.text}
			</div>
		`;
	});
	
	// 再显示普通弹幕
	V.danmakuSystem.currentDanmaku.forEach((danmaku, index) => {
		newHTML += `
			<div class="danmaku_mini_screen_element" 
				id="danmaku_${danmaku.id}" 
				data-index="${index}">
				<span class="danmaku_text">${danmaku.text}</span>
				<span class="danmaku_delete" onclick="deleteDanmaku(${danmaku.id})">🗑️</span>
			</div>
		`;
	});
	
	container.innerHTML = newHTML;
	
	// 触发新弹幕的进入动画
	setTimeout(() => {
		const elements = container.querySelectorAll('.danmaku_mini_screen_element');
		elements.forEach((el, index) => {
			el.style.animation = 'none';
			setTimeout(() => {
				el.style.animation = 'danmakuSlideUp 0.3s ease-out forwards';
			}, 10);
		});
	}, 10);
}

// 删除指定弹幕
function deleteDanmaku(danmakuId) {
	V.danmakuSystem.currentDanmaku = V.danmakuSystem.currentDanmaku.filter(d => d.id !== danmakuId);
	updateDanmakuDisplay();
}window.deleteDanmaku = deleteDanmaku;

// 选中SC
function selectSC(scId) {
	const sc = V.danmakuSystem.scList.find(s => s.id === scId);
	if (sc) {
		V.danmakuSystem.selectedSC = sc;
		updateDanmakuDisplay();
		updateLiveOptions();
	}
}window.selectSC = selectSC;

// 更新直播配置显示
function updateLiveDisplay() {
	// 更新标题
	const titleEl = document.getElementById('live_title');
	if (titleEl && V.liveTitle) {
		titleEl.textContent = V.liveTitle;
	}
	
	// 更新观众数
	const audienceEl = document.getElementById('audience_count');
	if (audienceEl && V.liveAudienceNum !== undefined) {
		audienceEl.textContent = V.liveAudienceNum;
	}
	
	// 更新直播内容
	const contentEl = document.getElementById('live_content_display');
	if (contentEl && V.liveContentText) {
		contentEl.textContent = V.liveContentText;
	}
	
	// 更新状态栏
	const msgEl = document.getElementById('live_msg');
	if (msgEl) {
		let atmText = V.liveAtmosphere || "热烈的";
		let adminText = V.liveAdminWatch 
			? "<span class='red'>超管正在关注你的直播间!</span>"
			: "<span class='lblue'>超管目前没有特别关注你的直播间。</span>";
		msgEl.innerHTML = `直播间的气氛是<span class='green'>${atmText}</span>。${adminText}`;
	}
}window.updateLiveDisplay = updateLiveDisplay;

// 更新直播选项
function updateLiveOptions() {
	const optionsContainer = document.querySelector('#live_options_container');
	if (!optionsContainer) return;
	
	V.phaseSims = 0;
	
	let optionsHTML = `<br><a onclick="continueLive()" id="live_action_1">(1) 继续直播</a>`;
	
	optionsHTML += ` |`;
	optionsHTML += `<label> 正常直播 <input type="radio" name="livemode" value="normal" ${V.livemode === 'normal' ? 'checked' : ''} onchange="changeLiveMode('normal')"></label>`;
	optionsHTML += ` |`;
	optionsHTML += `<label> <span class="purple">试着吸引粉丝</span> <input type="radio" name="livemode" value="fans" ${V.livemode === 'fans' ? 'checked' : ''} onchange="changeLiveMode('fans')"></label>`;
	optionsHTML += ` |`;
	optionsHTML += `<label> <span class="pink">来点擦边</span> <input type="radio" name="livemode" value="sexual" ${V.livemode === 'sexual' ? 'checked' : ''} onchange="changeLiveMode('sexual')"></label>`;
	
	if (V.danmakuSystem && V.danmakuSystem.selectedSC) {
		optionsHTML += `<br><a onclick="respondToSC()" id="live_action_2" style="color: #FFD700; font-weight: bold;">(2) 回应SC</a>`;
		V.phaseSims = 1;
	}

	if (V.phaseSims == 1) {
		optionsHTML += `<br><a onclick="respondToDanmaku()" id="live_action_3">(3) 回应弹幕</a>`;
		optionsHTML += `<br><a onclick="endLive()" id="live_action_4">(4) 光速下播</a>`;
	} else {
		optionsHTML += `<br><a onclick="respondToDanmaku()" id="live_action_2">(2) 回应弹幕</a>`;
		optionsHTML += `<br><a onclick="endLive()" id="live_action_3">(3) 光速下播</a>`;
	}
	
	optionsContainer.innerHTML = optionsHTML;
}window.updateLiveOptions = updateLiveOptions;

// 改变直播模式
function changeLiveMode(mode) {
	V.livemode = mode;
	console.log(`直播模式切换为: ${mode}`);
	
	const messages = {
		'normal': '你切换到了正常直播模式。',
		'fans': '你决定试着吸引更多粉丝。',
		'sexual': '你准备来点擦边内容……'
	};
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = messages[mode] || '';
	}
}window.changeLiveMode = changeLiveMode;

// 继续直播
function continueLive() {
	if (typeof passTimePCSim === 'function') {
		passTimePCSim(5);
	}
	
	let message = '';
	
	switch(V.livemode) {
		case 'normal':
			message = "你继续正常直播，观众们看起来很满意。";
			break;
		case 'fans':
			message = "你努力展现自己的才艺，试图吸引更多粉丝关注！";
			if (V.liveAudienceNum) V.liveAudienceNum += Math.floor(Math.random() * 20) + 5;
			break;
		case 'sexual':
			message = "你的动作变得更加大胆，直播间的气氛瞬间火热起来……";
			if (V.liveAudienceNum) V.liveAudienceNum += Math.floor(Math.random() * 50) + 10;
			break;
		default:
			message = "你继续舞蹈着，观众们看起来很满意。";
	}
	
	refreshDanmaku();
	updateLiveDisplay();
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = message;
	}
	
	updateLiveOptions();
}window.continueLive = continueLive;

// 回应SC
function respondToSC() {
	if (!V.danmakuSystem.selectedSC) return;
	
	const sc = V.danmakuSystem.selectedSC;
	
	if (typeof passTimePCSim === 'function') {
		passTimePCSim(3);
	}
	
	V.money += sc.amount * 100;
	
	V.danmakuSystem.scList = V.danmakuSystem.scList.filter(s => s.id !== sc.id);
	V.danmakuSystem.selectedSC = null;
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = 
			`你感谢了这位打赏￡${sc.amount}的观众。直播间的气氛更加热烈了！+￡${sc.amount}`;
	}
	
	refreshDanmaku();
	updateLiveOptions();
}window.respondToSC = respondToSC;

// 回应普通弹幕
function respondToDanmaku() {
	if (typeof passTimePCSim === 'function') {
		passTimePCSim(2);
	}
	refreshDanmaku();
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = 
			"你回应了一些弹幕，观众们很开心。";
	}
	
	updateLiveOptions();
}window.respondToDanmaku = respondToDanmaku;

// 结束直播
function endLive() {
	if (V.danmakuSystem && V.danmakuSystem.danmakuTimer) {
		clearInterval(V.danmakuSystem.danmakuTimer);
		V.danmakuSystem.danmakuTimer = null;
	}
	
	removeLiveKeyboardListener();
	
	if (V.danmakuSystem) {
		V.danmakuSystem.currentDanmaku = [];
		V.danmakuSystem.selectedSC = null;
		V.danmakuSystem.keyboardListenerActive = false;
	}
	
	document.getElementById("screenSims").style.display = "block";
	document.getElementById("live_window").style.display = "none";
	document.getElementById("windowbarSims_live").classList.remove("noclickSims_White");
	document.getElementById("shutDownKey").classList.remove("noclickSims_White");
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = "你结束了直播,观众们依依不舍。";
	}
}window.endLive = endLive;

// 键盘事件处理
function handleLiveKeyPress(event) {
	const liveWindow = document.getElementById('live_window');
	if (!liveWindow || liveWindow.style.display !== 'block') {
		return;
	}
	
	if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
		return;
	}
	
	const key = event.key;
	
	if (V.phaseSims === 1) {
		switch(key) {
			case '1':
				event.preventDefault();
				continueLive();
				break;
			case '2':
				event.preventDefault();
				respondToSC();
				break;
			case '3':
				event.preventDefault();
				respondToDanmaku();
				break;
			case '4':
				event.preventDefault();
				endLive();
				break;
		}
	} else {
		switch(key) {
			case '1':
				event.preventDefault();
				continueLive();
				break;
			case '2':
				event.preventDefault();
				respondToDanmaku();
				break;
			case '3':
				event.preventDefault();
				endLive();
				break;
		}
	}
}window.handleLiveKeyPress = handleLiveKeyPress;

// 添加键盘监听
function addLiveKeyboardListener() {
	if (!V.danmakuSystem.keyboardListenerActive) {
		document.addEventListener('keydown', handleLiveKeyPress);
		V.danmakuSystem.keyboardListenerActive = true;
		console.log('直播键盘快捷键已启用');
	}
}window.addLiveKeyboardListener = addLiveKeyboardListener;

// 移除键盘监听
function removeLiveKeyboardListener() {
	if (V.danmakuSystem && V.danmakuSystem.keyboardListenerActive) {
		document.removeEventListener('keydown', handleLiveKeyPress);
		V.danmakuSystem.keyboardListenerActive = false;
		console.log('直播键盘快捷键已禁用');
	}
}window.removeLiveKeyboardListener = removeLiveKeyboardListener;

// 启动直播
function startLiveStreaming() {
	initDanmakuSystem();
	
	V.danmakuSystem.currentDanmaku = [
		{ id: V.danmakuSystem.danmakuIdCounter++, text: "🟦主播没活可以咬尾巴玩", type: 'normal' },
		{ id: V.danmakuSystem.danmakuIdCounter++, text: "🟦我超,猫娘", type: 'normal' },
		{ id: V.danmakuSystem.danmakuIdCounter++, text: "🟦超管冲晕了?这不封?", type: 'normal' },
		{ id: V.danmakuSystem.danmakuIdCounter++, text: "🟦佛了,怎么哪都有广告狗,d站药丸😅", type: 'normal' }
	];
	
	updateDanmakuDisplay();
	updateLiveOptions();
	updateLiveDisplay();
	
	addLiveKeyboardListener();
	
	//if (V.danmakuSystem.danmakuTimer) {
	//	clearInterval(V.danmakuSystem.danmakuTimer);
	//}
	
	//V.danmakuSystem.danmakuTimer = setInterval(function() {
	//	if (document.getElementById('live_window') && 
	//	    document.getElementById('live_window').style.display === 'block') {
	//		refreshDanmaku();
	//	}
	//}, 5000);
}window.startLiveStreaming = startLiveStreaming;

// 修改原有的createLiveWindow0函数
function createLiveWindow0_New() {
	document.getElementById("windowbarSims_live").classList.add("noclickSims_White");
	document.getElementById("shutDownKey").classList.add("noclickSims_White");
	document.getElementById("screenSims").style.display = "none";
	document.getElementById("live_window").style.display = "block";
	
	if (document.getElementById("sentence_1_0")) {
		document.getElementById("sentence_1_0").textContent = "直播开始了！观众们看上去很期待。";
	}
	
	startLiveStreaming();
}window.createLiveWindow0_New = createLiveWindow0_New;

// 弹幕系统核心代码 ↑