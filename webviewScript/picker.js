import sendToHost from './sendToHost';

const guide = document.createElement('div');
guide.classList.add('guide');
guide.style.position = 'fixed';
guide.style.border = '1px solid #3880ff';
guide.style.zIndex = '99999999';
guide.style.pointerEvents = 'none';

const eventCover = document.createElement('div');
eventCover.classList.add('eventCover');
eventCover.style.position = 'fixed';
eventCover.style.left = 0;
eventCover.style.top = 0;
eventCover.style.right = 0;
eventCover.style.bottom = 0;
eventCover.style.zIndex = '99999999';
eventCover.style.pointerEvents = 'none';

document.body.appendChild(guide);
document.body.appendChild(eventCover);

let nowElement;

function windowResizeInPicked() {
  sendToHost('window-resize');
}

function windowScrollInPicked() {
  sendToHost('window-scroll');
}

function pickerMouseOver(e) {
  nowElement = e.target;
  const {width, height, top, left} = nowElement.getBoundingClientRect();
  guide.style.width = width + 'px';
  guide.style.height = height + 'px';
  guide.style.top = top + 'px';
  guide.style.left = left + 'px';
}

function pickerMouseDown(e) {
  window.htmlToSketch.selectedElement = nowElement;
  eventCover.style.pointerEvents = 'auto';
  eventCover.style.visibility = 'visible';
  guide.style.pointerEvents = 'auto';
  guide.style.background = 'rgba(0, 0, 0, 0)';
  guide.style.outline = '20000px solid rgba(0, 0, 0, 0.4)';
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  sendToHost('picker-picked');
  window.addEventListener('resize', windowResizeInPicked);
  window.addEventListener('scroll', windowScrollInPicked);
}

export function startPicker() {
  guide.style.visibility = 'visible';
  document.body.addEventListener('mouseover', pickerMouseOver);
  document.body.addEventListener('mousedown', pickerMouseDown);
}

export function stopPicker() {
  window.h2s_SelectedElement = false;
  guide.style.left = '-9999999px';
  guide.style.visibility = 'hidden';
  guide.style.outline = 0;
  guide.style.pointerEvents = 'none';
  eventCover.style.pointerEvents = 'none';
  eventCover.style.visibility = 'hidden';
  document.body.removeEventListener('mouseover', pickerMouseOver);
  document.body.removeEventListener('mousedown', pickerMouseDown);
  window.removeEventListener('resize', windowResizeInPicked);
  window.removeEventListener('scroll', windowScrollInPicked);
}