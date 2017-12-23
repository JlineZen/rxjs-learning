/** 发布者模式 **/

function Producer () {
	if (!(this instanceof Producer)) { // 必须new实例才能使用
		throw new Error('Class constructor Producer cannot be invoked without "new"')
	}
	this.listeners = []
}

/** 添加listener **/
Producer.prototype.addListener = function (listener) {
	if (typeof listener === 'function') {
		this.listeners.push(listener)
	} else {
		throw new Error('listener must be a function')
	}
}

/** 删除listener **/
Producer.prototype.removeListener = function (listener) {
	this.listeners.splice(this.listeners.indexOf(listener), 1)
}

/** 发送通知 **/
Producer.prototype.notify = function () {
	var args = [].slice.call(arguments)
	this.listeners.forEach(function (listener) {
		listener(args)
	})
}