let fs = require('fs')
let path = require('path')

module.exports = (MyClass, directory) => {
	fs.readdirSync(directory)
	.map(file => path.join(directory, file))
	.filter(file => fs.statSync(file).isFile())
	.map(file => file.replace(/\.[^/.]+$/, ''))
	.forEach(file => {
		let baseName = path.basename(file)

		if(baseName === 'index')
			return

		let func = require(file)

		if(func.constructor.name === 'GeneratorFunction')
			func = Promise.coroutine(func)

		MyClass.prototype[baseName] = func
	})
}