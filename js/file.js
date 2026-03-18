let i = 0
let students = [{
		name: "01 曹江霖"
	},
	{
		name: "02 陈警贤"
	},
	{
		name: "03 陈龙轩"
	},
	{
		name: "04 陈泽嘉"
	},
	{
		name: "05 戴京睿"
	},
	{
		name: "06 邓雅馨"
	},
	{
		name: "07 高一安"
	},
	{
		name: "08 郭佳纯"
	},
	{
		name: "09 韩梦媛"
	},
	{
		name: "10 洪培升"
	},
	{
		name: "11 黄培林"
	},
	{
		name: "12 黄文轩"
	},
	{
		name: "13 江骏达"
	},
	{
		name: "14 李富航"
	},
	{
		name: "15 李旻熠"
	},
	{
		name: "16 李仝东"
	},
	{
		name: "17 李娅楠"
	},
	{
		name: "18 林以宣"
	},
	{
		name: "19 林志铧"
	},
	{
		name: "20 刘桂鸣"
	},
	{
		name: "21 刘小宝"
	},
	{
		name: "22 刘芷言"
	},
	{
		name: "23 刘子欣"
	},
	{
		name: "24 罗欣怡"
	},
	{
		name: "25 彭子柔"
	},
	{
		name: "26 屈思远"
	},
	{
		name: "27 王鹏宇"
	},
	{
		name: "28 王汪洋"
	},
	{
		name: "29 吴绮欣"
	},
	{
		name: "30 杨俊彦"
	},
	{
		name: "31 杨子轩"
	},
	{
		name: "32 叶瑛莹"
	},
	{
		name: "33 张舒琪"
	},
	{
		name: "34 张钰涵"
	},
	{
		name: "35 郑如皓"
	},
	{
		name: "36 郑钰洁"
	},
	{
		name: "37 钟俊逸"
	},
	{
		name: "38 朱润楠"
	},
	{
		name: "39&nbsp;邹&nbsp;&nbsp;&nbsp;&nbsp;圳"
	},
	{
		name: "40 丁锦鹏"
	}
]

function suiji() {
	i = Math.floor(Math.random() * students.length);
	document.getElementById("hao").innerHTML = students[i].name;
}
