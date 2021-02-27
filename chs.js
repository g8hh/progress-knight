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
    'Touch the eye': '触摸眼球',
    'Wizard': '巫师',
    'Wooden hut': '木屋',
    'Properties': '属性',
    'Progress Knight': '骑士进度条',
    'Small palace': '小宫殿',
    'Strength': '力量',
    'Tent': '帐篷',
    'The Arcane Association': '奥术协会',
    'Veteran footman': '资深步兵',
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
    'Super immortality': '超级永生',
    'Net/day': '净/天',
    'Muscle memory': '肌肉记忆',
    'Military': '军队',
    'Merchant': '商人',
    'Meditation': '冥想',
    'Large house': '大房子',
    'Knight': '骑士',
    'Join the discord community!': '加入discord社区！',
    'Intimidation': '威胁',
    'Immortality': '永生',
    'Income/day': '收入/天',
    'Homeless': '无家可归',
    'Hard reset game': '硬重置',
    'Grand palace': '大宫殿',
    'Fundamentals': '基本原理',
    'Elite knight': '精英骑士',
    'Effect': '效果',
    'Dumbbells': '哑铃',
    'Day': '天',
    'Dark influence': '邪恶势力',
    'Demon training': '魔鬼训练',
    'Disable warp': '禁用扭曲',
    'Common work': '常规工作',
    'Butler': '男仆',
    'Blood meditation': '血之冥想',
    'Concentration': '专注',
    'Bargaining': '讨价还价',
    'Battle tactics': '战斗战术',
    'Blacksmith': '铁匠',
    'Affects game speed': '影响游戏速度',
    'Affects dark magic xp gain': '影响黑魔法经验收益',
    'Affects all xp gain': '影响所有经验收益',
    'Concentration lvl': '专注等级',
    'evil': '邪恶',
    'Fisherman': '渔夫',
    'Footman': '步兵',
    'Happiness': '幸福',
    'Balance (in coins': '余额 (以硬币计',
    'Legendary knight': '传奇骑士',
    'Farmer lvl': '农民等级',
    'Enable warp': '启用扭曲',
    'Embrace evil': '拥抱邪恶',
    'Demon\'s wealth': '恶魔的财富',
    'Bargaining lvl': '讨价还价等级',
    'Battle tactics lvl': '战斗战术等级',
    'Fisherman lvl': '渔夫等级',
    'Strength lvl': '力量等级',
    'Productivity lvl': '生产力等级',
    'Squire lvl': '护卫等级',
    'Meditation lvl': '冥想等级',
    'Miner lvl': '矿工等级',
    'Veteran knight lvl': '资深骑士等级',
    'Merchant lvl': '商人等级',
    'Footman lvl': '步兵等级',
    'Veteran footman lvl': '资深步兵等级',
    'Knight lvl': '骑士等级',
    'Blacksmith lvl': '铁匠等级',
    'Mana control lvl': '法力控制等级',
    'Muscle memory lvl': '肌肉记忆等级',
    'Student mage lvl': '学生等级',
    'Apprentice mage lvl': '学徒法师等级',
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
    'Obliterate squadrons of enemy soldiers in one go with extraordinary proficiency, while equipped with the finest gear. Such a feared unit on the battlefield is paid extremely well.': '用最精良的装备，一次歼灭敌军中队。这样一支令人敬畏的部队在战场上的薪水非常高。',
    'Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.': '比普通的房子大得多，普通的房子有更多的房间和多层。这栋建筑很宽敞，但价格不菲。',
    'Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?': '用魔法延长你的寿命。然而，这真的是你一直在寻找的永生吗?',
    'Create and revise battle strategies, improving experience gained in the military.': '创建和修改作战策略，提高在军队中获得的经验。',
    'Condition your body and strength through harsh training. Stronger individuals are paid more in the military.': '通过艰苦的训练来调节你的身体和力量。更强壮的人在军队中得到更多的报酬。',
    'Collapse entire armies in mere seconds with your magically imbued blade. The handful of elite knights who attain this level of power are showered with coins.': '用你的魔法剑在几秒钟内瓦解整个军队。少数精英骑士获得这个等级的权力会得到大量的金币。',
    'Carry around your knight\'s shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.': '带着你骑士的盾牌和剑沿着战场行进。工资很低，但工作经验很有价值。',
    'Plow the fields and grow the crops. It\'s not much but it\'s honest work.': '犁地，种庄稼。这工作不多，但很正经。',
    ', which will heavily impact your future lives.': '，这将严重影响你们未来的生活。',
    'Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.': '深入危险的洞穴，开采有价值的矿石。与所涉及的风险相比，报酬是相当少的。',
    'Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease.': '用邪恶赋予你的强大力量包围你自己，让你轻松地获得和吸收任何工作或技能。',
    'Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.': '镶嵌在一颗罕见的蓝宝石上，这个咒语激活你体内更多的魔法通道，让你更容易学习魔法。',
    'Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.': '通过其他生物的牺牲来成长和培养你内在的邪恶，急剧增加邪恶收益。',
    'Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before.': '在剧烈运动中用来比以前更快地增强和积累力量的重型工具。',
    'Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.': '让你的家庭随时保持清洁，每天还准备三顿美味的饭菜，让你在一个更快乐，无压力的心情。',
    'Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts.': '学会散发一种恶魔的气息，打击其他商家的极度恐惧，迫使他们给你很大的折扣。',
    'Learn to procrastinate less at work and receive more job experience per day.': '学会在工作中减少拖延，每天积累更多的工作经验。',
    'Productivity': '生产力',
    'Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.': '放下你的生命与敌人的士兵战斗。一份勇敢，体面的工作但你在这个宏伟的计划中仍然毫无价值。',
    'Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.': '钓上各种各样的鱼，然后把它们卖成一把硬币。一份轻松但收入微薄的工作。',
    'Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn\'t very pleasant.': '破烂的原木和肮脏的干草和马粪粘在一起。虽然比帐篷坚固多了，但是臭气也不太好闻。',
    'Slash and pierce through enemy soldiers with ease, while covered in steel from head to toe. A decently paying and very respectable job.': '从头到脚都裹着钢铁，轻松地刺穿敌军士兵。一份报酬丰厚、非常体面的工作。',
    'Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.': '睡在不舒服、肮脏的街道上，每天晚上几乎冻死。不会比这更糟了。',
    'Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.': '为军队冶炼矿石，精心锻造武器。一份体面的、报酬不错的普通工作。',
    'Something tells you that the amulet might transform even further after living for': '直觉告诉你，这个护身符在为之而生之后可能会进一步变形',
    'Spend your days administrating The Arcane Association and investigate the concepts of true immortality. The chairman receives ludicrous amounts of pay daily.': '花时间管理你的神秘协会和调查的概念，真正的永生。会长每天收到的薪水多得可笑。',
    'Study the theory of mana and practice basic spells. There is minor pay to cover living costs, however, this is a necessary stage in becoming a mage.': '学习法术力理论并练习基本法术。 可以支付生活费用的少量薪水，但是，这是成为法师的必经阶段。',
    'Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.': '昼夜不停地挣扎着几个铜币。 感觉就像您每天都处在死亡边缘。',
    'Strengthen your neurons through habit and repetition, improving strength gains throughout the body.': '通过习惯和重复来强化你的神经元，改善全身力量的增强。',
    'Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.': '用木框架和茅草屋顶建造的。以公平的价格提供体面的生活条件。',
    'Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user.': '加强你全身的魔法通道，帮助你成为一个更强大的魔法使用者。',
    'Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.': '储存了大量的书籍，每一本都包含了大量的信息，从基本的生活技能到复杂的魔法咒语。',
    'for your jobs and skills equivalent to': '对你的工作和技能相当',
    'Fill your mind with peace and tranquility to tap into greater happiness from within.': '让你的头脑充满和平与安宁，从内心发掘更大的幸福。',
    'Feared worldwide, obliterate entire nations in a blink of an eye. Roughly every century, only one holy knight is worthy of receiving such an esteemed title.': '让全世界都感到恐惧，一眨眼的功夫就把整个国家都毁灭了。大约每个世纪，只有一位神圣骑士配得上这样一个受人尊敬的头衔。',
    'A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.': '一座完全由金银构成的宏伟住宅。以可笑的价格提供最豪华和舒适的生活条件。',
    'A fine blade used to slay enemies even quicker in combat and therefore gain more experience.': '在战斗中可以更快地杀死敌人，从而获得更多经验。',
    'A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly.': '仅仅是人的身体就太软弱无力，无法抵挡邪恶。用禁止的方法训练，慢慢变成一个能够快速吸收知识的恶魔。',
    'A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.': '一个写下你所有想法和发现的地方，让你学得更快。',
    'A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.': '一张由两根软弱的木棒托着的破布。生活条件很糟糕，但至少你有个栖身之所。',
    'A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.': '一个非常丰富和精心建造的结构，镶有精细的金属，如银。维持奢华的生活方式需要极高的费用。',
    'Assists you in completing day to day activities, giving you more time to be productive at work.': '帮助你完成每天的活动，给你更多的时间在工作中更有效率。',
    'Bend space and time through forbidden techniques, resulting in a faster gamespeed.': '通过禁止的技术扭曲空间和时间，导致更快的游戏速度。',
    'Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that a master wizard has enough destructive power to wipe an empire off the map.': '拥有无与伦比的天赋，可以随心所欲地施展难以置信的魔术。据说巫师大师拥有足够的破坏力，足以将一个帝国从地图上抹去。',
    'More experienced and useful than the average footman, take out the enemy forces in battle with your might. The pay is not that bad.': '比普通步兵更有经验，更有用，在战斗中用你的力量消灭敌人。(工资没那么低。)',
    'Study the tricks of the trade and persuasive skills to lower any type of expense.': '学习交易技巧和说服技巧来降低任何类型的费用。',
    'Tame the raging and growing evil within you, improving evil gain in-between rebirths.': '驯服你内心的愤怒和增长的邪恶，在转世之间提高邪恶增益。',
    'This means you will learn everything again much more quickly than you did in your previous life.': '这意味着你学习每一件事的速度要比你以前更快。',
    'Through harnessing ancient, forbidden techniques, lengthen your lifespan drastically beyond comprehension.': '通过利用古老的、被禁止的技术，将你的寿命大大延长到无法理解的程度。',
    'Through the means of dark magic, multiply the raw matter of the coins you receive from your job.': '通过黑魔法，将您从工作中获得的硬币的原始物质相乘。',
    'Travel from town to town, bartering fine goods. The job pays decently well and is a lot less manually-intensive.': '从一个城镇到另一个城镇，以物易物。这份工作报酬不错，而且不需要太多的体力劳动。',
    'Turn the tides of battle through casting intermediate spells and mentor other apprentices. The pay for this particular job is extremely high.': '通过施放中间法术和指导其他学徒来扭转战斗的趋势。这份工作的报酬非常高。',
    'Under the supervision of a mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.': '在法师的指导下，在战斗中对敌人施展基本法术。将提供相当数量的工资以支付生活费用。',
    'Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.': '使用先进的法术来蹂躏和摧毁整个军团的敌人士兵。只有一小部分的法师配得上这个角色，并能得到高得离谱的报酬。',
    'Utilising your unmatched combat ability, slaugher enemies effortlessly. Most footmen in the military would never be able to acquire such a well paying job like this.': '利用你无与伦比的战斗能力，毫不费力地屠杀敌人。军队里的大多数男仆都不可能得到这样一份报酬优厚的工作。',
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
    "Battle tactics level ": "战斗战术等级 ",
    "Veteran knight level ": "资深骑士等级 ",
    "Strength level ": "力量等级 ",
    "Farmer level ": "农民等级 ",
    "Productivity level ": "生产力等级 ",
    "Concentration level ": "专注等级 ",
    "Beggar level ": "乞丐等级 ",
    "Miner level ": "矿工等级 ",
    "Fisherman level ": "渔夫等级 ",
    "Meditation level ": "冥想等级 ",
    "Squire level ": "护卫等级 ",
    "Veteran footman level ": "资深步兵等级 ",
    "Knight level ": "骑士等级 ",
    "Footman level ": "步兵等级 ",
    "Blacksmith level ": "铁匠等级 ",
    "Mana control level ": "法力控制等级 ",
    "Bargaining level ": "讨价还价等级 ",
    "Student level ": "学生等级 ",
    "Apprentice mage level ": "学徒法师等级 ",
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
//换行加多空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^x([\d\.]+) Evil gain$/, 'x$1 邪恶收益'],
    [/^x([\d\.]+) Longer lifespan$/, 'x$1 更长的寿命'],
    [/^x([\d\.]+) Military pay$/, 'x$1 军费'],
    [/^x([\d\.]+) Gamespeed$/, 'x$1 游戏速度'],
    [/^x([\d\.]+) Job pay$/, 'x$1 工资'],
    [/^x([\d\.]+) T.A.A. xp$/, 'x$1 T.A.A.经验'],
    [/^x([\d\.]+) Magic xp$/, 'x$1 魔法经验'],
    [/^x([\d\.]+) Skill xp$/, 'x$1 技能经验'],
    [/^x([\d\.]+) Strength xp$/, 'x$1 力量经验'],
    [/^x([\d\.]+) Military xp$/, 'x$1 军队经验'],
    [/^x([\d\.]+) Job xp$/, 'x$1 工作经验'],
    [/^x([\d\.]+) Expenses$/, 'x$1 花费'],
    [/^x([\d\.]+) Happiness$/, 'x$1 幸福'],
    [/^x([\d\.]+) All xp$/, 'x$1 全部经验'],
    [/^If you decide to embrace evil, all of your levels, coins and even max levels will be reset.\n(.+)You will be reborn as a fresh slate. However, you will unlock a new line of skills and gain$/, '如果你决定接受邪恶，那么你所有的关卡、金币甚至最高关卡都将被重置。你将以崭新的面貌重生。然而，你将解锁一个新的技能线和获得'],
    [/^Your gut instinct was right. The moment you hit the grand age of 200, you hear an ominous hum coming from the amulet.\n(.+)A mouth emerges from its surface and begins to cackle, and proceeds to say\: "So you've made it this far... Are you ready to embrace evil\?"$/, '你的直觉是对的。当你到达200岁的时候，你会听到护身符发出不祥的嗡嗡声。一张嘴从它的表面露出来，咯咯地笑着说\:“你已经走到这一步了……你准备好迎接邪恶了吗\?”'],
    [/^You stumble across a strange looking amulet on your 25th birthday. It does not look like\n(.+)it has any worth on the market given that it's made from cheap-looking copper. However, you\n(.+)feel a weird urge to keep the amulet, so you slip it into your pocket for safekeeping.$/, '你在25岁生日时偶然发现了一个奇怪的护身符。它看起来不像在市场上有任何价值，因为它是由看起来很便宜的铜制成的。然而，你有一种奇怪的冲动想要保存这个护身符，所以你把它放进口袋里妥善保管。'],
    [/^Concentration level (.+)\/(.+), Meditation level (.+)\/$/, '专注等级 $1\/$2，冥想等级 $3\/'],
    [/^On your 65th birthday, you once again encounter the strange, unexplained shivering from your\n(.+)amulet. But this time, a living eyeball emerges from the centre. Although terribly frightened,\n(.+)you realise you do not have many years to live left anyway so you consider touching the eye\n(.+)to see what happens.$/, '在你65岁生日时，你再次遇到奇怪的，无法解释的颤抖从你的护身符。但这一次，一个活生生的眼球从中心出现了。尽管非常害怕，你意识到你已经没有多少年可以活了，所以你考虑触摸一下眼睛，看看会发生什么。'],
    [/^(\d+)\/(\d+), Veteran footman level (\d+)\/$/, '$1\/$2, 资深步兵等级 $3\/'],
    [/^(\d+)\/(\d+), Blacksmith level (\d+)\/$/, '$1\/$2, 铁匠等级 $3\/'],
    [/^(\d+)\/(\d+), Footman level (\d+)\/$/, '$1\/$2, 步兵等级 $3\/'],
    [/^(\d+)\/(\d+), Veteran knight level (\d+)\/$/, '$1\/$2, 资深骑士等级 $3\/'],
    [/^(\d+)\/(\d+), Mana control level (\d+)\/$/, '$1\/$2, 法力控制等级 $3\/'],
    [/^(\d+)\/(\d+), Battle tactics level (\d+)\/$/, '$1\/$2, 战斗战术等级 $3\/'],
    [/^(\d+)\/(\d+), Apprentice mage level (\d+)\/$/, '$1\/$2, 学徒法师等级 $3\/'],
    [/^(\d+)\/(\d+), Student level (\d+)\/$/, '$1\/$2, 学生等级 $3\/'],
    [/^(\d+)\/(\d+), Knight level (\d+)\/$/, '$1\/$2, 骑士等级 $3\/'],
    [/^(\d+)\/(\d+), Miner level (\d+)\/$/, '$1\/$2, 矿工等级 $3\/'],
    [/^(\d+)\/(\d+), Fisherman level (\d+)\/$/, '$1\/$2, 渔夫等级 $3\/'],
    [/^(\d+)\/(\d+), Strength level (\d+)\/$/, '$1\/$2, 力量等级 $3\/'],
    [/^(\d+)\/(\d+), Productivity level (\d+)\/$/, '$1\/$2, 生产力等级 $3\/'],
    [/^(\d+)\/(\d+), Squire level (\d+)\/$/, '$1\/$2, 护卫等级 $3\/'],
    [/^(\d+)\/(\d+), Meditation level (\d+)\/$/, '$1\/$2, 冥想等级 $3\/'],
    [/^(\d+) \+ the max level of the skill or job \/ (\d+).$/, '$1 \+ 最大级别的技能或工作 \/ $2。'],
    [/^On your 45th birthday, you feel the amulet shiver uncontrollably in your pocket. You take it\n(.+)out and the constant shivering suddenly stops. More to your bizarre surprise, you notice\n(.+)a strange etching on the centre of the amulet.$/, '在你45岁生日的时候，你感觉到你口袋里的护身符在不受控制地颤抖。你把它拿出来，不停的颤抖突然停止了。更让你惊讶的是，你会注意到↵这个护身符的中心有一个奇怪的蚀刻。'],
    [/^By touching the eyeball, you will be reborn and have to restart life again, losing all your levels and coins.\n(.+)However, you will gain$/, '通过触摸眼球，你将获得重生并重新开始生命，失去所有关卡和金币。然而,你会得到'],
    [/^Mana control level (\d+)\/(\d+), Student level (\d+)\/$/, '法力控制等级 $1\/$2，学生等级 $3\/'],
    [/^Battle tactics level (\d+)\/(\d+), Knight level (\d+)\/$/, '战斗战术等级 $1\/$2，骑士等级 $3\/'],
    [/^Battle tactics level (\d+)\/(\d+), Footman level (\d+)\/$/, '战斗战术等级 $1\/$2，步兵等级 $3\/'],
    [/^Bargaining level (\d+)\/(\d+), Blacksmith level (\d+)\/$/, '议价等级 $1\/$2，铁匠等级 $3\/'],
    [/^(\d+) evil$/, '$1 邪恶'],
    [/^(\d+) whole centuries$/, '整整 $1 世纪'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);