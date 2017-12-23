/** 化二维数组为一维数组 **/

//　方式一
Array.prototype.concatAll = function () {
	var result = [] // 将要返回的一维数组
	this.forEach(function (item) {
		item.forEach(function (item) {
			result.push(item)
		})
	})
	return result
}

// 方式二
Array.prototype.concatAll = function () {
	var result = []
	// ES6新特性  
	/***
	* console.log(...[12, 34]) // 12 34
	*
	***/
	this.forEach(function (item) {
		result.push(...item)
	})
	return result
}

// 方式三
Array.prototype.concatAll = function () {
	var result = []
	this.forEach(function (item) {
		// 利用apply方法
		result.push.apply(result, item)
	})
	return result
}