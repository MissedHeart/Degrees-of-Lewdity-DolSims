const hookSims1 = [
	//https://github.com/Lyoko-Jeremie/DoLTimeWrapperAddonMod
	(...args) => { V.Judgement_Examine_Finished = 0; },//风纪委员每日晨检
	(...args) => { V.City_Library_3rd_trespassing = 1; },//三楼每天最多撬锁一次
	(...args) => { V.Seath_Noticed_Daily = 1; },//希斯第一阶段心防下降机制
	(...args) => { V.kylar_abduction_today_Sims = 0; },//凯拉尔每日最多一狙
	(...args) => { V.usedpraySims = 1; },//纳垢技能
	(...args) => {
		if (V.adultshopintro == 1 && V.adultshopunlocked == undefined && V.adultshopprogress < 22 && Time.weekDay == 6) {
			V.alarmTextSims1 = 0;
			V.adultshopcontributionStoredSims = V.adultshopcontribution;
		}
	},//成人用品店是否帮忙
	(...args) => {
		if (V.alarmTextSims2 != 1 && V.brothelshowdata.missed == true && Time.weekDay == 7) {
			V.alarmTextSims2 = 1;
		}
	},//布莱尔鸽子
	(...args) => {
		if (V.alarmTextSims3 != 1 && V.averydatemissed == true && Time.weekDay == 1) {
			V.alarmTextSims3 = 1;
		}
	},//艾弗里鸽子
	(...args) => { V.LibraryClosedMsgSims = -1; },//创伤换腐化梦境事件 为1或0说明昨晚发生了战斗
	(...args) => {
		if (V.world_corruption_soft >= 90) {
			if (true)
			{
				V.world_corruption_soft -= 50;
				C.npc.Seath.trauma = Math.min(100, C.npc.Seath.trauma += 50);
				C.npc.Seath.love = C.npc.Seath.trauma;
				if (true)
				{
					V.LibraryClosedMsgSims = 1;
				}
			}
		}
		if (C.npc.Seath.trauma >= 100 && V.LibraryClosedSims != 6) {
			V.LibraryClosedSims = 7;
		}
		if (V.LibraryClosedSims > 0) {
			if (V.LibraryClosedSims != 7)
			{
				C.npc.Seath.trauma = Math.clamp(C.npc.Seath.trauma - 10, 0, 100);
				C.npc.Seath.love = C.npc.Seath.trauma;
			}
			V.LibraryClosedSims -= 1;
		}
	},//创伤换腐化
	(...args) => {
		if (V.Gym_Card >= 2 && Time.weekDay !== 1) {
			V.Gym_Card -= 1;
		}
	},//健身房每日扣费，周日除外
	(...args) => {
		if (V.SSCDailyAppliedSims) {
			Skin.Sunscreen.remove();
			Skin.Sunscreen.apply();//不得不说，这部分的原版代码写得真是绕圈子
			V.SSCAppliedSims = 1;
			if (Skin.Sunscreen.usesLeft == 0) {
				V.SSCAppliedSimsLast = 1;
				V.SSCDailyAppliedSims = 0;
			}
		}
	},//每日防晒霜
	(...args) => {
		if (V.Judgement_Init >= 3 && false) {//假如开启了风纪委员系统，无论是PC充当还是他人充当，都会引起数值的变化//暂时设定为只有PC充当才会变化
			V.DisciplineSims.value += 0.2;//风纪委员已上任
			if (C.npc.Whitney.state != "dungeon") {//未触发惠特尼解雇事件，则每天-0.5
				V.DisciplineSims.value -= 0.5;
			}
			if (V.SchoolOrder_award_0) {
				V.DisciplineSims.value += 0.3;
			}
			V.DisciplineSims.value = Math.clamp(V.DisciplineSims.value, 0, 50.0);//目前锁死上限为50，后续同样
			V.DisciplineSims.value = Math.round(V.DisciplineSims.value * 10) / 10;
		}
	},//纪律
	(...args) => {
		if (V.Judgement_Init >= 3 && false) {//假如开启了风纪委员系统，无论是PC充当还是他人充当，都会引起数值的变化//暂时设定为只有PC充当才会变化
			if (V.cool >= 240) {//学校声望差分
				V.PopularitySims.value += 0.5;
			}
			else if (V.cool >= 160) {
				V.PopularitySims.value += 0.3;
			}
			else if (V.cool >= 120) {
				V.PopularitySims.value += 0.1;
			}
			else if (V.cool >= 80) {
				V.PopularitySims.value -= 0.1;
			}
			else if (V.cool >= 40) {
				V.PopularitySims.value -= 0.3;
			}
			else {
				V.PopularitySims.value -= 0.5;
			}
			if (C.npc.Whitney.dom < 8 && C.npc.Whitney.state != "dungeon") {//惠特尼支配差分
				V.PopularitySims.value += 0.3;
			}
			else if (C.npc.Whitney.dom > 20 && C.npc.Whitney.state != "dungeon") {
				V.PopularitySims.value -= 0.5;
			}
			else if (C.npc.Whitney.state != "dungeon") {
				V.PopularitySims.value += 0.1;
			}
			if (V.whitneyromance == 1 && C.npc.Whitney.state != "dungeon") {//惠特尼恋人
				V.PopularitySims.value += 0.1;
			}
			if (V.cool >= 240 && V.kylarenglish >= 1 && C.npc.Kylar.state != "prison") {//凯拉尔恋人
				V.PopularitySims.value += 0.1;
			}
			else if (V.kylarenglish >= 1 && C.npc.Kylar.state != "prison") {
				V.PopularitySims.value -= 0.1;
			}
			V.PopularitySims.value = Math.clamp(V.PopularitySims.value, 0, 50.0);//目前锁死上限为50，后续同样
			V.PopularitySims.value = Math.round(V.PopularitySims.value * 10) / 10;
		}
	},//人气
	(...args) => {
		if (V.Judgement_Init >= 3 && false) {//假如开启了风纪委员系统，无论是PC充当还是他人充当，都会引起数值的变化//暂时设定为只有PC充当才会变化
			V.HorninessSims.value += (Math.round(V.world_corruption_soft / 10) / 10);//世界腐化度
			if (V.SchoolOrder.privacy == "normal") {
				V.HorninessSims.value -= 0.3;
			}
			if (V.SchoolOrder.pantie == "normal") {
				V.HorninessSims.value -= 0.2;
			}
			V.HorninessSims.value = Math.clamp(V.HorninessSims.value, 0, 50.0);//目前锁死上限为50，后续同样
			V.HorninessSims.value = Math.round(V.HorninessSims.value * 10) / 10;
		}
	},//欲望
	(...args) => {
		if (V.Judgement_Init >= 3 && false) {//假如开启了风纪委员系统，无论是PC充当还是他人充当，都会引起数值的变化//暂时设定为只有PC充当才会变化
			if (V.delinquency >= 1000) {//学校违纪差分
				V.InfluenceSims.value -= 0.9;
			}
			else if (V.delinquency >= 800) {
				V.InfluenceSims.value -= 0.7;
			}
			else if (V.delinquency >= 600) {
				V.InfluenceSims.value -= 0.5;
			}
			else if (V.delinquency >= 400) {
				V.InfluenceSims.value -= 0.3;
			}
			else if (V.delinquency >= 200) {
				V.InfluenceSims.value -= 0.1;
			}
			else if (V.delinquency >= 10) {
				V.InfluenceSims.value += 0.1;
				V.test = 0.5;
			}
			else {
				V.InfluenceSims.value += 0.3;
				V.test = 0.3;
			}
			if (C.npc.Leighton.love >= 10) {
				V.InfluenceSims.value += 0.3;
			}
			if (C.npc.Mason.love >= 10) {
				V.InfluenceSims.value += 0.1;
			}
			if (C.npc.Sirris.love >= 10) {
				V.InfluenceSims.value += 0.1;
			}
			if (C.npc.River.love >= 10) {
				V.InfluenceSims.value += 0.1;
			}
			if (C.npc.Doren.love >= 10) {
				V.InfluenceSims.value += 0.1;
			}
			if (C.npc.Winter.love >= 10) {
				V.InfluenceSims.value += 0.1;
			}
			V.InfluenceSims.value = Math.clamp(V.InfluenceSims.value, 0, 50.0);//目前锁死上限为50，后续同样
			V.InfluenceSims.value = Math.round(V.InfluenceSims.value * 10) / 10;
		}
	},//支持
];
hookSims1.forEach(hook => {
	window.addonDoLTimeWrapperAddon.addFunctionHook({
		key: 'dayPassed',
		pos: 'after',
		type: 'call',
		hook: hook,
	});
});

// const hookSims2 = [
// 	(...args) => { V.willpower *= 1.2; },
// ];
// hookSims2.forEach(hook => {
// 	window.addonDoLTimeWrapperAddon.addFunctionHook({
// 		key: 'V.willpower *= 0.99;',
// 		pos: 'before',
// 		type: 'get',
// 		hook: hook,
// 		change: true,
// 	});
// });
//有空得研究一下怎么截断返回值

const hookSims3 = [
	(...args) => {
		if (Time.schoolTerm && V.scienceprojectwon == 1) {
			V.science_exam = Math.clamp(V.science_exam + 7, -107, 200);
		}
	},//科学成绩增加，抵消衰减
	(...args) => {
		if (Time.schoolTerm && V.mathsprojectwon == 1) {
			V.maths_exam = Math.clamp(V.maths_exam + 7, -107, 200);
		}
	},//数学成绩增加，抵消衰减
	(...args) => {
		if (Time.schoolTerm && V.englishPlayWell == 1) {
			V.english_exam = Math.clamp(V.english_exam + 7, -107, 200);
		}
	},//语文成绩增加，抵消衰减
	(...args) => {
		if (Time.schoolTerm && V.museumAntiques.museumCount >= 25) {
			V.history_exam = Math.clamp(V.history_exam + 7, -107, 200);
		}
	},//历史成绩增加，抵消衰减
];
hookSims3.forEach(hook => {
	window.addonDoLTimeWrapperAddon.addFunctionHook({
		key: 'weekPassed',
		pos: 'before',
		type: 'call',
		hook: hook,
	});
});

// const hookSims4 = [
// 	(...args) => {
// 		if (V.wolfbuild >= 1) {
// 			V.wolfbuild += 1;
// 		}
// 		if (V.catbuild >= 1) {
// 			V.catbuild += 1;
// 		}
// 		if (V.cowbuild >= 1) {
// 			V.cowbuild += 1;
// 		}
// 		if (V.birdbuild >= 1) {
// 			V.birdbuild += 1;
// 		}
// 		if (V.foxbuild >= 1) {
// 			V.foxbuild += 1;
// 		}
// 	},//科学成绩增加，抵消衰减
// ];
// hookSims4.forEach(hook => {
// 	window.addonDoLTimeWrapperAddon.addFunctionHook({
// 		key: 'dayPassed',
// 		pos: 'before',
// 		type: 'call',
// 		hook: hook,
// 	});
// });