tubekeys = {};
tubekeys.settings = {};
tubekeys.settings.hotkeys = {};

tubekeys.settings.set = function(key, value) {
    localStorage[key] = value;
};

tubekeys.settings.get = function(key, defaultValue) {	
    return localStorage[key] || defaultValue;
};

tubekeys.settings.remove = function(key) {
    localStorage.removeItem(key);
};

tubekeys.settings.onFirstTime = function() {
    //tubekeys.settings.setShortcutKey('');
};

tubekeys.settings.isFirstTime = function() {
    return (tubekeys.settings.get('isFirstTime') ? false : true);
};

tubekeys.settings.hotkeys.getNextKey = function() {
	return tubekeys.settings.get('nextKey');
};

tubekeys.settings.hotkeys.setNextKey = function(key) {
	tubekeys.settings.set('nextKey', key);
};

tubekeys.settings.hotkeys.getPrevKey = function() {
    return tubekeys.settings.get('prev');
};

tubekeys.settings.hotkeys.setPrevKey = function(key) {
    tubekeys.settings.set('prev', key);
};

tubekeys.settings.keyCombination = function(ctrl, alt, shift, key) { 
	this.ctrl = ctrl;
	this.alt = alt;
	this.shift = shift;
	this.key = key;

	tubekeys.settings.keyCombination.prototype.toString = function() {
		var ctrlString = (this.ctrl) ? ('Control + ') : ('');
        var altString =  (this.alt) ? 'Alt + ' : '';
        var shiftString = (this.shift) ? 'Shift + ' : '';
        var keyString = String.fromCharCode(this.key);
        return ctrlString + altString + shiftString + keyString;
	}
};

tubekeys.settings.onLoad = function() { 
    //tubekeys.settings.hotkeys.getNextKey().toString();
    //$('.setting_button').innerText = '';
};

tubekeys.settings.lastPressedKey = null;

tubekeys.settings.onKeyDown = function(event) {
    if(!event.which),
        return;

	tubekeys.settings.lastPressedKey = new tubekeys.settings.keyCombination(
		event.ctrlKey, event.altKey, event.shiftKey, event.which);	
    
    //TODO:
    document.getElementById(messageId).innerHTML = "<strong>" +
     tubekeys.settings.lastPressedKey.toString() + "</strong>"; //todo
};

tubekeys.settings.registerHotkey = function(shortcutKeyName,buttonId, buttonMessageId) {
    if (tubekeys.settings.isEditingShortcut) {
    	tubekeys.settings.endSettingShortcut(shortcutKeyName,buttonId, buttonMessageId);
    } else {
        tubekeys.settings.startSettingShortcut(buttonId, buttonMessageId);
    }
};

tubekeys.settings.startSettingShortcut = function(buttonId, buttonMessageId) {
    tubekeys.settings.isEditingShortcut = true;

    document.addEventListener('keydown', tubekeys.settings.onKeyDown); //TODO: replace with jquery find window

    document.getElementById(buttonId).innerText = 'Finish'; //TODO: replace with jquery find
    document.getElementById(buttonMessageId).innerText = 'Press any key combination then click Finish'; //TODO: replace with jquery find
};

tubekeys.settings.endSettingShortcut = function(shortcutKeyName, buttonId, buttonMessageId) {
    tubekeys.settings.isEditingShortcut = false;
	
    document.removeEventListener('keydown', tubekeys.settings.onKeyDown); //TODO: jquery

    tubekeys.settings.setShortcutKey(shortcutKeyName, tubekeys.settings.lastPressedKey);

    document.getElementById(buttonId).innerText = 'Set Keyboard Combination'; //TODO: jquery
    document.getElementById(buttonMessageId).innerText = ''; //TODO: jquery
};

tubekeys.settings.setShortcutKey = function(shortcutKeyName,keyCombination) {
    tubekeys.settings.set(shortcutKeyName, keyCombination)
}