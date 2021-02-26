/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Active': '激活',
    'Age': '年龄',
    'Beggar': '乞丐',
    'Beggar lvl': '乞丐等级',
    'House': '房子',
    'Holy knight': '圣骑士',
    'Import': '导入',
    'Import/export save': '导入/导出存档',
    'Farmer': '农民',
    'Export': '导出',
    'Evil': '邪恶',
    'Evil control': '邪恶控制',
    'Expense/day': '费用/天',
    'years': '年',
    'Xp/day': '经验/天',
    'xp multipliers': '经验倍数',
    'Xp left': '经验剩余',
    'Level': '等级',
    'Library': '图书馆',
    'Mage': '法师',
    'Lifespan': '寿命',
    'Magic': '魔法',
    'Mana control': '法力控制',
    'Master wizard': '精灵法师',
    'Max level': '最高级',
    'Miner': '矿工',
    'Misc': '杂项',
    'Jobs': '工作',
    'Skills': '技能',
    'Shop': '商店',
    'Pause': '暂停',
    'Personal squire': '私人护卫',
    'Required: ': '要求: ',
    'Reset': '重置',
    'Sapphire charm': '蓝宝石护符',
    'Settings': '设置',
    'Skip': '跳过',
    'Squire': '护卫',
    'Student': '学生',
    'Steel longsword': '钢长剑',
    'Study desk': '书桌',
    'Task': '任务',
    'Toggle': '切换',
    'Touch the eye': '注视',
    'Wizard': '巫师',
    'Wooden hut': '木屋',
    'Properties': '属性',
    'Progress Knight': '骑士进度条',
    'Small palace': '小宫殿',
    'Strength': '力量',
    'Tent': '帐篷',
    'The Arcane Association': '奥术协会',
    'Veteran footman': '资深仆人',
    'Veteran knight': '资深骑士',
    'Toggle light/dark mode': '切换亮/暗模式',
    'Time warping': '时间扭曲',
    'Amulet': '护身符',
    'Age has caught up to you': '年龄已经赶上了你',
    'Apprentice mage': '学徒法师',
    'Auto-learn': '自动学习',
    'Auto-promote': '自动提升',
    'Book': '书',
    'Chairman': '会长',
    'Combat': '战斗',
    'Cottage': '茅屋',
    'Current job': '当前工作',
    'Current skill': '当前技能',
    'Dark magic': '黑暗魔法',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Your age has met your lifespan, use the amulet to rebirth before you pass away': '你的年龄已经达到了你的寿命，用护身符在你死前重生',
    'Improve your learning speed through practising intense concentration activities.': '通过练习集中注意力的活动来提高你的学习速度。',
    'A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.': '一个专门的区域，提供了许多精致的文具和装备设计，以促进您的研究进展。',
    'A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.': '用石头、砖和坚固的木材建造的建筑，里面有几个房间。虽然很贵，但这是一个舒适的住所。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Strength level ": "力量等级",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^x([\d\.]+) Happiness$/, 'x$1 幸福值'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);