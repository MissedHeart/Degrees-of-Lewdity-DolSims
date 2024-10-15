const hookSims1 = [
	(...args) => { V.Judgement_Examine_Finished = 0; },//风纪委员初始事件
	(...args) => { V.City_Library_3rd_trespassing = 1; },//三楼每天最多撬锁一次
	(...args) => { V.Seath_Noticed_Daily = 1; },//希斯第一阶段心防下降机制
	(...args) => { V.kylar_abduction_today_Sims = 0; },//凯拉尔每日最多一狙
	(...args) => { V.usedpraySims = 1; },//纳垢技能
	(...args) => {
		if (V.Gym_Card >= 2 && Time.weekDay !== 7) {
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
	//https://github.com/Lyoko-Jeremie/DoLTimeWrapperAddonMod
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