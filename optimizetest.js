console.log('optimizetest.js is loaded.');
window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {
	var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
	form.querySelector('._form-content').style.display = 'none';
	thank_you.innerHTML = message;
	thank_you.style.display = 'block';
	const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
	var visitorObject = window[vgoAlias];
	if (email && typeof visitorObject !== 'undefined') {
		visitorObject('setEmail', email);
		visitorObject('update');
	} else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
		// Site tracking URL to use after inline form submission.
		_load_script(trackcmp_url);
	}
	if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
	var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
	if (old_error) old_error.parentNode.removeChild(old_error);
	err.innerHTML = message;
	err.className = '_error-inner _form_error _no_arrow';
	var wrapper = document.createElement('div');
	wrapper.className = '_form-inner';
	wrapper.appendChild(err);
	button.parentNode.insertBefore(wrapper, button);
	document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
	if (html) {
		var div = document.createElement('div');
		div.className = '_error-html';
		div.innerHTML = html;
		err.appendChild(div);
	}
};
window._load_script = function(url, callback) {
	var head = document.querySelector('head'), script = document.createElement('script'), r = false;
	script.type = 'text/javascript';
	script.charset = 'utf-8';
	script.src = url;
	if (callback) {
		script.onload = script.onreadystatechange = function() {
			if (!r && (!this.readyState || this.readyState == 'complete')) {
				r = true;
				callback();
			}
		};
	}
	head.appendChild(script);
};
(window._activate_modal = function() {
	if (window.location.search.search("excludeform") !== -1) return false;
	var getCookie = function(name) {
		var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
		return match ? match[2] : null;
	}
	var setCookie = function(name, value) {
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 1000 * 60 * 60 * 24 * 365;
		now.setTime(expireTime);
		document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
	}
			var addEvent = function(element, event, func) {
		if (element.addEventListener) {
			element.addEventListener(event, func);
		} else {
			var oldFunc = element['on' + event];
			element['on' + event] = function() {
				oldFunc.apply(this, arguments);
				func.apply(this, arguments);
			};
		}
	}
	var _removed = false;
	var _form_output = '\<style\>\n #_form_60F7CC5A18A34_ { font-size:14px; line-height:1.6; font-family:arial, helvetica, sans-serif; margin:0; }\n #_form_60F7CC5A18A34_ * { outline:0; }\n ._form_hide { display:none; visibility:hidden; }\n ._form_show { display:block; visibility:visible; }\n #_form_60F7CC5A18A34_._form-top { top:0; }\n #_form_60F7CC5A18A34_._form-bottom { bottom:0; }\n #_form_60F7CC5A18A34_._form-left { left:0; }\n #_form_60F7CC5A18A34_._form-right { right:0; }\n #_form_60F7CC5A18A34_ input[type=\"text\"],#_form_60F7CC5A18A34_ input[type=\"date\"],#_form_60F7CC5A18A34_ textarea { padding:6px; height:auto; border:#979797 1px solid; border-radius:4px; color:#000 !important; font-size:14px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }\n #_form_60F7CC5A18A34_ textarea { resize:none; }\n #_form_60F7CC5A18A34_ ._submit { -webkit-appearance:none; cursor:pointer; font-family:arial, sans-serif; font-size:14px; text-align:center; background:#4451ff !important; border:0 !important; -moz-border-radius:4px !important; -webkit-border-radius:4px !important; border-radius:4px !important; color:#fff !important; padding:7px !important; }\n #_form_60F7CC5A18A34_ ._close-icon { cursor:pointer; background-image:url(\'https:\/\/d226aj4ao1t61q.cloudfront.net\/esfkyjh1u_forms-close-dark.png\'); background-repeat:no-repeat; background-size:14.2px 14.2px; position:absolute; display:block; top:11px; right:9px; overflow:hidden; width:16.2px; height:16.2px; }\n #_form_60F7CC5A18A34_ ._close-icon:before { position:relative; }\n #_form_60F7CC5A18A34_ ._form-body { margin-bottom:30px; }\n #_form_60F7CC5A18A34_ ._form-image-left { width:150px; float:left; }\n #_form_60F7CC5A18A34_ ._form-content-right { margin-left:164px; }\n #_form_60F7CC5A18A34_ ._form-branding { color:#fff; font-size:10px; clear:both; text-align:left; margin-top:30px; font-weight:100; }\n #_form_60F7CC5A18A34_ ._form-branding ._logo { display:block; width:130px; height:14px; margin-top:6px; background-image:url(\'https:\/\/d226aj4ao1t61q.cloudfront.net\/hh9ujqgv5_aclogo_li.png\'); background-size:130px auto; background-repeat:no-repeat; }\n #_form_60F7CC5A18A34_ .form-sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0, 0, 0, 0); border:0; }\n #_form_60F7CC5A18A34_ ._form-label,#_form_60F7CC5A18A34_ ._form_element ._form-label { font-weight:bold; margin-bottom:5px; display:block; }\n #_form_60F7CC5A18A34_._dark ._form-branding { color:#333; }\n #_form_60F7CC5A18A34_._dark ._form-branding ._logo { background-image:url(\'https:\/\/d226aj4ao1t61q.cloudfront.net\/jftq2c8s_aclogo_dk.png\'); }\n #_form_60F7CC5A18A34_ ._form_element { position:relative; margin-bottom:10px; font-size:0; max-width:100%; }\n #_form_60F7CC5A18A34_ ._form_element * { font-size:14px; }\n #_form_60F7CC5A18A34_ ._form_element._clear { clear:both; width:100%; float:none; }\n #_form_60F7CC5A18A34_ ._form_element._clear:after { clear:left; }\n #_form_60F7CC5A18A34_ ._form_element input[type=\"text\"],#_form_60F7CC5A18A34_ ._form_element input[type=\"date\"],#_form_60F7CC5A18A34_ ._form_element select,#_form_60F7CC5A18A34_ ._form_element textarea:not(.g-recaptcha-response) { display:block; width:100%; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-family:inherit; }\n #_form_60F7CC5A18A34_ ._field-wrapper { position:relative; }\n #_form_60F7CC5A18A34_ ._inline-style { float:left; }\n #_form_60F7CC5A18A34_ ._inline-style input[type=\"text\"] { width:150px; }\n #_form_60F7CC5A18A34_ ._inline-style:not(._clear) + ._inline-style:not(._clear) { margin-left:20px; }\n #_form_60F7CC5A18A34_ ._form_element img._form-image { max-width:100%; }\n #_form_60F7CC5A18A34_ ._form_element ._form-fieldset { border:0; padding:0.01em 0 0 0; margin:0; min-width:0; }\n #_form_60F7CC5A18A34_ ._clear-element { clear:left; }\n #_form_60F7CC5A18A34_ ._full_width { width:100%; }\n #_form_60F7CC5A18A34_ ._form_full_field { display:block; width:100%; margin-bottom:10px; }\n #_form_60F7CC5A18A34_ input[type=\"text\"]._has_error,#_form_60F7CC5A18A34_ textarea._has_error { border:#f37c7b 1px solid; }\n #_form_60F7CC5A18A34_ input[type=\"checkbox\"]._has_error { outline:#f37c7b 1px solid; }\n #_form_60F7CC5A18A34_ ._error { display:block; position:absolute; font-size:14px; z-index:10000001; }\n #_form_60F7CC5A18A34_ ._error._above { padding-bottom:4px; bottom:39px; right:0; }\n #_form_60F7CC5A18A34_ ._error._below { padding-top:4px; top:100%; right:0; }\n #_form_60F7CC5A18A34_ ._error._above ._error-arrow { bottom:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-top:5px solid #f37c7b; }\n #_form_60F7CC5A18A34_ ._error._below ._error-arrow { top:0; right:15px; border-left:5px solid transparent; border-right:5px solid transparent; border-bottom:5px solid #f37c7b; }\n #_form_60F7CC5A18A34_ ._error-inner { padding:8px 12px; background-color:#f37c7b; font-size:14px; font-family:arial, sans-serif; color:#fff; text-align:center; text-decoration:none; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; }\n #_form_60F7CC5A18A34_ ._error-inner._form_error { margin-bottom:5px; text-align:left; }\n #_form_60F7CC5A18A34_ ._button-wrapper ._error-inner._form_error { position:static; }\n #_form_60F7CC5A18A34_ ._error-inner._no_arrow { margin-bottom:10px; }\n #_form_60F7CC5A18A34_ ._error-arrow { position:absolute; width:0; height:0; }\n #_form_60F7CC5A18A34_ ._error-html { margin-bottom:10px; }\n .pika-single { z-index:10000001 !important; }\n #_form_60F7CC5A18A34_ input[type=\"text\"].datetime_date { width:69%; display:inline; }\n #_form_60F7CC5A18A34_ select.datetime_time { width:29%; display:inline; height:32px; }\n ._form-wrapper { z-index:9999999; }\n #_form_60F7CC5A18A34_._animated { -webkit-animation-duration:1s; animation-duration:1s; -webkit-animation-fill-mode:both; animation-fill-mode:both; }\n #_form_60F7CC5A18A34_._animated._fast { -webkit-animation-duration:0.4s; animation-duration:0.4s; }\n @-webkit-keyframes _fadeIn { 0% { opacity:0; }\n 100% { opacity:1; }\n }\n @keyframes _fadeIn { 0% { opacity:0; }\n 100% { opacity:1; }\n }\n #_form_60F7CC5A18A34_._fadeIn { -webkit-animation-name:_fadeIn; animation-name:_fadeIn; }\n @media all and (min-width:320px) and (max-width:667px) { ::-webkit-scrollbar { display:none; }\n #_form_60F7CC5A18A34_ { margin:0; width:100%; min-width:100%; max-width:100%; box-sizing:border-box; }\n #_form_60F7CC5A18A34_ * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-size:1em; }\n #_form_60F7CC5A18A34_ ._form-content { margin:0; width:100%; }\n #_form_60F7CC5A18A34_ ._form-inner { display:block; min-width:100%; }\n #_form_60F7CC5A18A34_ ._form-title,#_form_60F7CC5A18A34_ ._inline-style { margin-top:0; margin-right:0; margin-left:0; }\n #_form_60F7CC5A18A34_ ._form-title { font-size:1.2em; }\n #_form_60F7CC5A18A34_ ._form_element { margin:0 0 20px; padding:0; width:100%; }\n #_form_60F7CC5A18A34_ ._form-element,#_form_60F7CC5A18A34_ ._inline-style,#_form_60F7CC5A18A34_ input[type=\"text\"],#_form_60F7CC5A18A34_ label,#_form_60F7CC5A18A34_ p,#_form_60F7CC5A18A34_ textarea:not(.g-recaptcha-response) { float:none; display:block; width:100%; }\n #_form_60F7CC5A18A34_ ._row._checkbox-radio label { display:inline; }\n #_form_60F7CC5A18A34_ ._row,#_form_60F7CC5A18A34_ p,#_form_60F7CC5A18A34_ label { margin-bottom:0.7em; width:100%; }\n #_form_60F7CC5A18A34_ ._row input[type=\"checkbox\"],#_form_60F7CC5A18A34_ ._row input[type=\"radio\"] { margin:0 !important; vertical-align:middle !important; }\n #_form_60F7CC5A18A34_ ._row input[type=\"checkbox\"] + span label { display:inline; }\n #_form_60F7CC5A18A34_ ._row span label { margin:0 !important; width:initial !important; vertical-align:middle !important; }\n #_form_60F7CC5A18A34_ ._form-image { max-width:100%; height:auto !important; }\n #_form_60F7CC5A18A34_ input[type=\"text\"] { padding-left:10px; padding-right:10px; font-size:16px; line-height:1.3em; -webkit-appearance:none; }\n #_form_60F7CC5A18A34_ input[type=\"radio\"],#_form_60F7CC5A18A34_ input[type=\"checkbox\"] { display:inline-block; width:1.3em; height:1.3em; font-size:1em; margin:0 0.3em 0 0; vertical-align:baseline; }\n #_form_60F7CC5A18A34_ button[type=\"submit\"] { padding:20px; font-size:1.5em; }\n #_form_60F7CC5A18A34_ ._inline-style { margin:20px 0 0 !important; }\n }\n #_form_60F7CC5A18A34_ { position:relative; margin:50px auto; padding:20px; overflow:visible; -moz-border-radius:10px; -webkit-border-radius:10px; border-radius:10px; outline:none; box-shadow:0 1px 13px rgba(0, 0, 0, 0.3); z-index:10000000; background:#fff !important; width:500px; color:#030303 !important; }\n #_form_60F7CC5A18A34_._form-modal { font-family:\"IBM Plex Sans\", Helvetica, sans-serif, \'IBM Plex Sans\', arial, sans-serif; padding:20px; -moz-border-radius:4px; -webkit-border-radius:4px; border-radius:4px; -moz-box-shadow:0px 1px 13px 0px rgba(0, 0, 0, 0.3); -webkit-box-shadow:0px 1px 13px 0px rgba(0, 0, 0, 0.3); box-shadow:0px 1px 13px 0px rgba(0, 0, 0, 0.3); }\n #_form_60F7CC5A18A34_._form-modal input { background:#fff; color:#5d5d5d !important; -moz-border-radius:4px; -webkit-border-radius:4px; border-radius:4px; font-family:\"IBM Plex Sans\", Helvetica, sans-serif, \'IBM Plex Sans\', arial, sans-serif; }\n #_form_60F7CC5A18A34_._form-modal input::placeholder { color:#5d5d5d; }\n #_form_60F7CC5A18A34_._form-modal ._submit { font-family:\"IBM Plex Sans\", Helvetica, sans-serif, \'IBM Plex Sans\', arial, sans-serif; }\n #_form_60F7CC5A18A34_ ._form-title { font-size:22px; line-height:22px; font-weight:600; margin-bottom:20px; }\n #_form_60F7CC5A18A34_ ._close { cursor:pointer; position:absolute; top:-16px; right:-18px; width:auto; margin:0; padding:18px; overflow:visible; background-color:#fff; -moz-border-radius:100%; -webkit-border-radius:100%; border-radius:100%; outline:none; box-shadow:0 1px 5px rgba(0, 0, 0, 0.3); -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }\n #_form_60F7CC5A18A34_ ._form-thank-you { text-align:center; padding:20px; font-size:18px; }\n #_form_60F7CC5A18A34_ ._form-element { position:relative; }\n #_form_60F7CC5A18A34_ ._form-image { margin-bottom:20px; }\n #_form_60F7CC5A18A34_ ._form-image-left ._form-image { margin-bottom:0; }\n ._form-wrapper { position:fixed; top:0; right:0; bottom:0; left:0; background-color:rgba(0, 0, 0, 0.6); overflow:auto; overflow-y:scroll; }\n @media all and (min-width:1px) and (max-width:667px) { #_form_60F7CC5A18A34_ { position:static; top:0; left:0; right:0; margin:30px auto; width:90%; min-width:90%; max-width:90%; transform:initial; }\n #_form_60F7CC5A18A34_ ._close { top:16px; right:16px; }\n #_form_60F7CC5A18A34_ ._form-thank-you { position:relative; top:initial; left:initial; margin:12px 0; }\n }\n\<\/style\>\n\<link href=\"https:\/\/fonts.googleapis.com\/css2?family=Lato&family=Montserrat&family=Roboto&display=swap\" rel=\"stylesheet\"\>\n\<form method=\"POST\" action=\"https://xccelerate80597.activehosted.com\/proc.php\" id=\"_form_60F7CC5A18A34_\" class=\"_form _form_105 _form-modal _animated _fast _dark\" novalidate\>\n	\<input type=\"hidden\" name=\"u\" value=\"60F7CC5A18A34\" \/\>\n	\<input type=\"hidden\" name=\"f\" value=\"105\" \/\>\n	\<input type=\"hidden\" name=\"s\" \/\>\n	\<input type=\"hidden\" name=\"c\" value=\"0\" \/\>\n	\<input type=\"hidden\" name=\"m\" value=\"0\" \/\>\n	\<input type=\"hidden\" name=\"act\" value=\"sub\" \/\>\n	\<input type=\"hidden\" name=\"v\" value=\"2\" \/\>\n	\<div class=\"_close\"\>\n		\<i class=\"_close-icon\"\>\<\/i\>\n	\<\/div\>\n			\<div class=\"_form-content\"\>\n							\<div class=\"_form-title\"\>Request Syllabus\<\/div\>\n										\<div class=\"_form-body\"\>Fill in some basic information and we will send you the syllabus shortly through email.\<\/div\>\n										\<div class=\"_form-element\"\>\<label class=\"form-sr-only\" for=\"_field_name\"\>Type your name\<\/label\>\<input id=\"_field_name\" type=\"text\" name=\"name\" placeholder=\"Type your name\" class=\"_form_full_field _field_name\" required\>\<\/div\>\n						\<div class=\"_form-element\"\>\<label class=\"form-sr-only\" for=\"_field_email\"\>Type your email\<\/label\>\<input id=\"_field_email\" type=\"text\" name=\"email\" placeholder=\"Type your email\" class=\"_form_full_field _field_email\" required\>\<\/div\>\n			                \<div class=\"_form-element\"\>\<label class=\"form-sr-only\" for=\"_field_phone\"\>Type your phone number\<\/label\>\<input id=\"_field_phone\" type=\"text\" name=\"phone\" placeholder=\"Type your phone number\" class=\"_form_full_field _field_phone\" required\>\<\/div\>\n			            				\<button id=\"_form_105_submit\" type=\"submit\" class=\"_submit _full_width\"\>Submit\<\/button\>\n					\<\/div\>\n		\<div class=\"_form-thank-you\" style=\"display:none;\"\>\<\/div\>\n	\<\/form\>\n';
	var _form_outer = document.createElement('div');
	_form_outer.className = '_form-wrapper';
	_form_outer.innerHTML = _form_output;
	if (!document.body) { document.firstChild.appendChild(document.createElement('body')); }
	document.body.appendChild(_form_outer);
	var form_to_submit = document.getElementById('_form_60F7CC5A18A34_');
	var close_icon = _form_outer.querySelector('._close');
	var close_form = function() {
		if (_form_outer) _form_outer.parentNode.removeChild(_form_outer);
		remove_tooltips();
		_removed = true;
				setCookie("_form_105_", new Date());
			};
	addEvent(close_icon, 'click', close_form);
	var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

	var getUrlParam = function(name) {
		var regexStr = '[\?&]' + name + '=([^&#]*)';
		var results = new RegExp(regexStr, 'i').exec(window.location.href);
		return results != undefined ? decodeURIComponent(results[1]) : false;
	};

	for (var i = 0; i < allInputs.length; i++) {
		var regexStr = "field\\[(\\d+)\\]";
		var results = new RegExp(regexStr).exec(allInputs[i].name);
		if (results != undefined) {
			allInputs[i].dataset.name = window.cfields[results[1]];
		} else {
			allInputs[i].dataset.name = allInputs[i].name;
		}
		var fieldVal = getUrlParam(allInputs[i].dataset.name);

		if (fieldVal) {
			if (allInputs[i].dataset.autofill === "false") {
				continue;
			}
			if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
				if (allInputs[i].value == fieldVal) {
					allInputs[i].checked = true;
				}
			} else {
				allInputs[i].value = fieldVal;
			}
		}
	}

	var remove_tooltips = function() {
		for (var i = 0; i < tooltips.length; i++) {
			tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
		}
		tooltips = [];
	};
	var remove_tooltip = function(elem) {
		for (var i = 0; i < tooltips.length; i++) {
			if (tooltips[i].elem === elem) {
				tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
				tooltips.splice(i, 1);
				return;
			}
		}
	};
	var create_tooltip = function(elem, text) {
		var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
		if (elem.type != 'radio' && elem.type != 'checkbox') {
			tooltip.className = '_error';
			arrow.className = '_error-arrow';
			inner.className = '_error-inner';
			inner.innerHTML = text;
			tooltip.appendChild(arrow);
			tooltip.appendChild(inner);
			elem.parentNode.appendChild(tooltip);
		} else {
			tooltip.className = '_error-inner _no_arrow';
			tooltip.innerHTML = text;
			elem.parentNode.insertBefore(tooltip, elem);
			new_tooltip.no_arrow = true;
		}
		new_tooltip.tip = tooltip;
		new_tooltip.elem = elem;
		tooltips.push(new_tooltip);
		return new_tooltip;
	};
	var resize_tooltip = function(tooltip) {
		var rect = tooltip.elem.getBoundingClientRect();
		tooltip.tip.className = tooltip.tip.className + ' _above';
	};
	var resize_tooltips = function() {
		if (_removed) return;
		for (var i = 0; i < tooltips.length; i++) {
			if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
		}
	};
	var validate_field = function(elem, remove) {
		var tooltip = null, value = elem.value, no_error = true;
		remove ? remove_tooltip(elem) : false;
		if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
		if (elem.getAttribute('required') !== null) {
			if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
				var elems = form_to_submit.elements[elem.name];
				if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
					no_error = elem.checked;
				}
				else {
					no_error = false;
					for (var i = 0; i < elems.length; i++) {
						if (elems[i].checked) no_error = true;
					}
				}
				if (!no_error) {
					tooltip = create_tooltip(elem, "Please select an option.");
				}
			} else if (elem.type =='checkbox') {
				var elems = form_to_submit.elements[elem.name], found = false, err = [];
				no_error = true;
				for (var i = 0; i < elems.length; i++) {
					if (elems[i].getAttribute('required') === null) continue;
					if (!found && elems[i] !== elem) return true;
					found = true;
					elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
					if (!elems[i].checked) {
						no_error = false;
						elems[i].className = elems[i].className + ' _has_error';
						err.push("Checking %s is required".replace("%s", elems[i].value));
					}
				}
				if (!no_error) {
					tooltip = create_tooltip(elem, err.join('<br/>'));
				}
			} else if (elem.tagName == 'SELECT') {
				var selected = true;
				if (elem.multiple) {
					selected = false;
					for (var i = 0; i < elem.options.length; i++) {
						if (elem.options[i].selected) {
							selected = true;
							break;
						}
					}
				} else {
					for (var i = 0; i < elem.options.length; i++) {
						if (elem.options[i].selected && !elem.options[i].value) {
							selected = false;
						}
					}
				}
				if (!selected) {
					elem.className = elem.className + ' _has_error';
					no_error = false;
					tooltip = create_tooltip(elem, "Please select an option.");
				}
			} else if (value === undefined || value === null || value === '') {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "This field is required.");
			}
		}
		if (no_error && elem.name == 'email') {
			if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "Enter a valid email address.");
			}
		}
		if (no_error && /date_field/.test(elem.className)) {
			if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "Enter a valid date.");
			}
		}
		tooltip ? resize_tooltip(tooltip) : false;
		return no_error;
	};
	var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }
        return false
	};
	var validate_form = function(e) {
		var err = form_to_submit.querySelector('._form_error'), no_error = true;
		if (!submitted) {
			submitted = true;
			for (var i = 0, len = allInputs.length; i < len; i++) {
				var input = allInputs[i];
				if (needs_validate(input)) {
					if (input.type == 'text') {
						addEvent(input, 'blur', function() {
							this.value = this.value.trim();
							validate_field(this, true);
						});
						addEvent(input, 'input', function() {
							validate_field(this, true);
						});
					} else if (input.type == 'radio' || input.type == 'checkbox') {
						(function(el) {
							var radios = form_to_submit.elements[el.name];
							for (var i = 0; i < radios.length; i++) {
								addEvent(radios[i], 'click', function() {
									validate_field(el, true);
								});
							}
						})(input);
					} else if (input.tagName == 'SELECT') {
						addEvent(input, 'change', function() {
							validate_field(this, true);
						});
					} else if (input.type == 'textarea'){
						addEvent(input, 'input', function() {
							validate_field(this, true);
						});
					}
				}
			}
		}
		remove_tooltips();
		for (var i = 0, len = allInputs.length; i < len; i++) {
			var elem = allInputs[i];
			if (needs_validate(elem)) {
				if (elem.tagName.toLowerCase() !== "select") {
					elem.value = elem.value.trim();
				}
				validate_field(elem) ? true : no_error = false;
			}
		}
		if (!no_error && e) {
			e.preventDefault();
		}
		resize_tooltips();
		return no_error;
	};
	addEvent(window, 'resize', resize_tooltips);
	addEvent(window, 'scroll', resize_tooltips);
	window._old_serialize = null;
	if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;
	_load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function() {
		window._form_serialize = window.serialize;
		if (window._old_serialize) window.serialize = window._old_serialize;
	});
	var form_submit = function(e) {
		e.preventDefault();
		if (validate_form()) {
			// use this trick to get the submit button & disable it using plain javascript
			document.querySelector('#_form_105_submit').disabled = true;
						setCookie("_form_105_", new Date());
						var serialized = _form_serialize(document.getElementById('_form_60F7CC5A18A34_')).replaceAll('%0A', '\\n');
			var err = form_to_submit.querySelector('._form_error');
			err ? err.parentNode.removeChild(err) : false;
			_load_script('https://xccelerate80597.activehosted.com/proc.php?' + serialized + '&jsonp=true');
		}
		return false;
	};
	addEvent(form_to_submit, 'submit', form_submit);
})();
