exports.config = {
	multiCapabilities: [/*{
		'browserName': 'firefox'
	}, */{
		'browserName': 'chrome'
	}],
	specs: [
		'cep-spec.js',
		'cpf-cnpj-spec.js',
		'date-spec.js',
		'ie-spec.js',
		'money-spec.js',
		'nfe-spec.js',
		'number-spec.js',
		'percentage-spec.js',
		'phone-spec.js',
		'scientific-notation-spec.js',
		'time-spec.js'
	],
	baseUrl: 'http://localhost:8000/demo'
}
