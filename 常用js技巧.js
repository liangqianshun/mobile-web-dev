// 判断设备是否触摸屏设备，参考：https://github.com/thebird/Swipe/blob/master/swipe.js
var surportTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
