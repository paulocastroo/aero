test('API: Functions', t => {
	let app = aero('test/apps/empty')
	let methods = [
		'run',
		'stop',
		'restart',
		'get',
		'post',
		'use',
		'on'
	]

	t.plan(methods.length)
	methods.forEach(method => t.ok(app[method], `app.${method}`))
})