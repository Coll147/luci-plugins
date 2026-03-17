'use strict';
'require baseclass';
'require form';

return baseclass.extend({
	trigger: _('4G Signal (uqmi RSSI)'),
	description: _('LED ON = RSSI >= threshold (good signal). LED OFF = weak or no signal.'),
	kernel: false,

	addFormOptions(s) {
		let o;

		o = s.option(form.Value, 'device', _('Modem device'));
		o.placeholder = '/dev/cdc-wdm0';
		o.rmempty     = true;
		o.modalonly   = true;
		o.depends('trigger', 'uqmi-rssi');

		o = s.option(form.Value, 'threshold', _('RSSI threshold (dBm)'));
		o.placeholder = '-80';
		o.datatype    = 'integer';
		o.rmempty     = true;
		o.modalonly   = true;
		o.depends('trigger', 'uqmi-rssi');
		o.description = _('LED turns ON when RSSI is at or above this value (default: −80 dBm)');

		o = s.option(form.Value, 'interval', _('Poll interval (seconds)'));
		o.placeholder = '10';
		o.datatype    = 'uinteger';
		o.rmempty     = true;
		o.modalonly   = true;
		o.depends('trigger', 'uqmi-rssi');
	}
});
