'use strict';
'require baseclass';
'require form';

return baseclass.extend({
	trigger: _('Ping target'),
	description: _('The LED indicates reachability of a host'),
	kernel: false,
	addFormOptions(s){
		let o;

		o = s.option(form.Value, 'target', _('Ping target'));
		o.placeholder = '8.8.8.8';
		o.rmempty = false;
		o.modalonly = true;
		o.depends('trigger', 'ping');

		o = s.option(form.Value, 'interval', _('Check interval (seconds)'));
		o.placeholder = '5';
		o.datatype = 'uinteger';
		o.rmempty = true;
		o.modalonly = true;
		o.depends('trigger', 'ping');

		o = s.option(form.Flag, 'invert', _('Light on failure'));
		o.modalonly = true;
		o.depends('trigger', 'ping');
		o.rmempty = true;
	}
});
