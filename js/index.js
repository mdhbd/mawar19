(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = " \n/* Hadiah Ulang Tahun buat yg clalu ada di hatiqu...\n * \"Mawar Dina Sitio\"\n * dari Chocky Andri Sihombing\n */\n \nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*                   \n *\n * Hai cewek!            \n *\n * Hari ini, hari spesial buat kamu ya sayang? \n *\n * Udah Nambah umur kamu satu tahun. Jadi 32 ya?            \n * Hahahaha, 29 deng...\n * \n *\n * Panjang Umur, Sehat terus, banyak rejeki\n * Makin sukses dan dekat sama Tuhan. Makin sayang sama aku pastinya..\n * AMIIINNN....        \n *\n * Aku mau kasih sesuatu buat kamu.\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Penasaran yaaa?? hahhaa\n * Liat ya sayang, apa yg mau aku kasih ke kamu.\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\npre { left: 50%; }\n\n#lopelope, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#lopelope { z-index: 8; }\n#echo  { z-index: 7; }\n\n#lopelope::before, #lopelope::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#lopelope::before, #echo::before {\n  left: 150px;\n}\n\n#lopelope::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* \n * Kurang bagus ya??\n * Emang, itu hati aku waktu belum ketemu sama kamu\n * Nah ini pas mulai kenal sama kamu\n */\n\n#lopelope::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#lopelope::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* \n * Lumayan lah yaaa..\n * Nah ini pas aku udah mulai sayang sama kamu\n */\n\n#lopelope i::before {\n  content: 'Mawar Dina Sitio';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/*\n * Gimana? Bagus kan??\n * Mau tau perasaan aku pas nembak kamu?\n * Kaya gini nih...\n */\n\n@-webkit-keyframes degdegser {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes degdegser {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Ko ga berubah ya???  \n * bentar bentar....\n * ahhaha\n */\n\n#lopelope, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#lopelope { \n  -webkit-animation-name: degdegser; \n          animation-name: degdegser; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * SIAPPP...           \n */\n\n#lopelope, #echo {\n\n/* \n * AWAASSSSSS...          \n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n * ...NAHHH Gua kata juga apee!\n * Deg deg an kaann...\n */\n  \n}\n\n/* \n *   \n *\n *      \n *\n * Itu kado dari aku..\n *  \n * Iyaa. Hati aku buat kamu....\n * \n * Cieeeeee ahahahahha       \n * \n * Yaudah sana kerja lagi deh ahahahahha\n * \n * \n * Daaa sayang..\n * Sampe ketemu ya...\n *  \n *\n *      \n *\n */ \n\n Mau Lagi...???\n\n Copy Paste Link di bawah ini sayang\n\n https:////goo.gl//6svbZ2 \n \n";

  openComment = false;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"lopelope\"><i></i></span>\n<pre id=\"style-text\"></pre>");

  time = window.innerWidth <= 578 ? 4 : 50;

  writeStyles(styles, 0, time);

}).call(this);
