const addressInput = document.getElementsByClassName('Header__input')[0];
const content = document.getElementsByClassName('Content')[0];
const webview = document.getElementsByClassName('Content__webview')[0];
const webviewSizeView = document.getElementsByClassName('Content__size-view')[0];
const pickerBtn = document.getElementsByClassName('SideBar__pick-btn')[0];
const runBtn = document.getElementsByClassName('SideBar__run-btn')[0];
const options = document.getElementsByClassName('Option')[0];
const alert = document.getElementsByClassName('Alert')[0];
const alertFailTitle = document.getElementsByClassName('Alert__message-title--fail')[0];
const alertFailText = document.getElementsByClassName('Alert__message-text--fail')[0];
const title = document.getElementsByTagName('title')[0];
const webviewWidthControllerInput = document.getElementsByClassName('WebviewWidthController__input')[0];

module.exports = {addressInput, content, webview, webviewSizeView, pickerBtn, runBtn, options, alert, alertFailTitle, alertFailText, title, webviewWidthControllerInput};
