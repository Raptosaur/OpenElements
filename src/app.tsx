import { useState } from "preact/hooks";
import { Renderer } from "./components/Renderer.tsx";

export function App() {
  return (
    <>
      <Renderer
        config={{
          _id: "69d3bce4ddba0ee5b04d45c8",
          name: "Time and day - theCozyDeck",
          type: "regular",
          settings: {
            width: 1920,
            height: 1080,
            name: "1080p",
          },
          widgets: [
            {
              id: 1,
              group: null,
              version: 1,
              type: "se-widget-custom-event-list",
              name: "Widget",
              visible: true,
              locked: false,
              listeners: {
                "tip-latest": true,
                "host-latest": true,
                "raid-latest": true,
                "cheer-latest": true,
                "follower-latest": true,
                "redemption-latest": true,
                "subscriber-latest": true,
              },
              css: {
                top: "0.77px",
                left: "15.15px",
                width: "504.84px",
                height: "196.52px",
                opacity: 1,
                "z-index": 2,
              },
              text: {
                css: {
                  color: "#fff",
                  message: {
                    color: "#fff",
                    "font-size": 16,
                    "text-align": "center",
                    "font-family": "Nunito",
                    "line-height": 1.3,
                    enableShadow: false,
                  },
                  "z-index": 1,
                  position: "relative",
                  "font-size": 24,
                  scrolling: {
                    direction: "left",
                  },
                  "text-align": "left",
                  "font-family": "Nunito",
                  "font-weight": "bold",
                  "line-height": 1.3,
                  "text-shadow": "rgb(0, 0, 0) 1px 1px 1px",
                },
                type: "text",
                value: null,
                scrolling: {
                  speed: 6,
                  direction: "left",
                },
                enableShadow: true,
              },
              image: {
                css: {
                  "max-width": "100%",
                },
                type: "image",
              },
              video: {
                css: {
                  width: 320,
                  height: 240,
                },
                type: "video",
                volume: 0.5,
              },
              audio: {
                volume: 1,
              },
              variables: {
                js: "const _0x78fc27=_0x260c;(function(_0x2b79c4,_0x55ae5f){const _0x24afdb=_0x260c,_0x361658=_0x2b79c4();while(!![]){try{const _0x41921e=parseInt(_0x24afdb(0x79))/0x1*(parseInt(_0x24afdb(0xd9))/0x2)+-parseInt(_0x24afdb(0x77))/0x3+-parseInt(_0x24afdb(0xf4))/0x4*(parseInt(_0x24afdb(0xbb))/0x5)+-parseInt(_0x24afdb(0xa8))/0x6*(-parseInt(_0x24afdb(0xf0))/0x7)+parseInt(_0x24afdb(0x9e))/0x8+-parseInt(_0x24afdb(0x70))/0x9+parseInt(_0x24afdb(0x9a))/0xa;if(_0x41921e===_0x55ae5f)break;else _0x361658['push'](_0x361658['shift']());}catch(_0x222855){_0x361658['push'](_0x361658['shift']());}}}(_0x3eb9,0xdb067));let customFonts=new Set();const wrapper=document[_0x78fc27(0xda)](_0x78fc27(0x87)),title=document[_0x78fc27(0xda)](_0x78fc27(0xa9)),cloud=document[_0x78fc27(0xda)](_0x78fc27(0x7e)),weatherLayer=document['querySelector'](_0x78fc27(0xa5));let debugMode=!0x1;const sunLayer=document[_0x78fc27(0xda)](_0x78fc27(0xc7));let debugInterval,fieldData;const dayKeys=[_0x78fc27(0x7f),_0x78fc27(0xc6),_0x78fc27(0x81),_0x78fc27(0xc1),_0x78fc27(0x9d),_0x78fc27(0xc3),_0x78fc27(0xbc)],starsLayer=document[_0x78fc27(0xda)](_0x78fc27(0xa0)),NUM_STARS=0xf;let stars=[],simulatedMinutes=0x0;const themes={'sunrise':[_0x78fc27(0x82),_0x78fc27(0x8d),_0x78fc27(0xd5)],'day':[_0x78fc27(0xac),_0x78fc27(0xa6),_0x78fc27(0x84)],'sunset':['#D94F32',_0x78fc27(0x8a),_0x78fc27(0x7a)],'night':[_0x78fc27(0xd3),'#0C2A96',_0x78fc27(0xad)]},themeTimes={'sunriseStart':0x12c,'sunriseEnd':0x1a4,'dayEnd':0x3c0,'sunsetEnd':0x438,'nightEnd':0x12c};function loadFont(_0x4989ea){const _0x4a6814=_0x78fc27;return!_0x4989ea||customFonts['has'](_0x4989ea)?Promise[_0x4a6814(0xd4)]():new Promise((_0x245ec5,_0x9734da)=>{const _0x257313=_0x4a6814;let _0x4476a9=document['createElement']('link');_0x4476a9['href']=_0x257313(0x8b)+_0x4989ea[_0x257313(0xe3)](/ /g,'+')+_0x257313(0xbe),_0x4476a9['rel']=_0x257313(0xe5),_0x4476a9['onload']=()=>{const _0x2cefad=_0x257313;customFonts[_0x2cefad(0x89)](_0x4989ea),_0x245ec5();},_0x4476a9[_0x257313(0xe1)]=()=>_0x9734da(Error(_0x257313(0x74)+_0x4989ea)),document[_0x257313(0xca)]['appendChild'](_0x4476a9);});}function setWeatherEffect(_0x8b9435){const _0x5549f5=_0x78fc27;weatherLayer[_0x5549f5(0xdb)]='',_0x5549f5(0x91)===_0x8b9435&&renderRain(),_0x5549f5(0xc0)===_0x8b9435&&renderSnow(),_0x5549f5(0x9b)===_0x8b9435&&renderWind(),_0x5549f5(0xea)===_0x8b9435&&(cloud[_0x5549f5(0x75)]['opacity']=0x1);}function _0x260c(_0x1dd5e2,_0x2086c8){const _0x3eb981=_0x3eb9();return _0x260c=function(_0x260c9f,_0x4d850d){_0x260c9f=_0x260c9f-0x70;let _0x36c64d=_0x3eb981[_0x260c9f];return _0x36c64d;},_0x260c(_0x1dd5e2,_0x2086c8);}function renderRain(){const _0x1cb5bd=_0x78fc27;for(let _0x561e7d=0x0;_0x561e7d<0x3c;_0x561e7d++){let _0x289b4d=document[_0x1cb5bd(0xb2)](_0x1cb5bd(0x85));_0x289b4d[_0x1cb5bd(0xb6)]['add'](_0x1cb5bd(0xd2)),_0x289b4d[_0x1cb5bd(0x75)]['left']=0x64*Math[_0x1cb5bd(0xe8)]()+'vw',_0x289b4d[_0x1cb5bd(0x75)][_0x1cb5bd(0xe9)]='-20px',_0x289b4d['style'][_0x1cb5bd(0xaf)]=0.5+0.7*Math[_0x1cb5bd(0xe8)]()+'s',weatherLayer['appendChild'](_0x289b4d);}cloud[_0x1cb5bd(0x75)][_0x1cb5bd(0x9f)]=0x1;}function renderSnow(){const _0xc300a5=_0x78fc27;cloud[_0xc300a5(0x75)][_0xc300a5(0x9f)]=0x1;for(let _0x3f4ea7=0x0;_0x3f4ea7<0x28;_0x3f4ea7++){let _0x3a9ff0=document[_0xc300a5(0xb2)]('div');_0x3a9ff0['classList']['add'](_0xc300a5(0x92)),_0x3a9ff0[_0xc300a5(0x75)][_0xc300a5(0xf3)]=0x64*Math[_0xc300a5(0xe8)]()+'vw',_0x3a9ff0[_0xc300a5(0x75)][_0xc300a5(0xe9)]=_0xc300a5(0xaa),_0x3a9ff0[_0xc300a5(0x75)][_0xc300a5(0xaf)]=0x3+0x3*Math[_0xc300a5(0xe8)]()+'s',weatherLayer[_0xc300a5(0x7c)](_0x3a9ff0);}}function _0x3eb9(){const _0x212934=['head','text','display','field','getDate','.date','fieldData','animation','rain-drop','#0C38A3','resolve','#9FAAC8','toUpperCase','--scale','march','2tHvilm','querySelector','innerHTML','detail','.day','none','\\x2043.27%,\\x20','dayEnd','onerror','january','replace','floor','stylesheet','addEventListener','onWidgetLoad','random','top','cloud','font','charAt','block','getUTCHours','textContent','749toxxyM','onEventReceived','november','left','44TItBtK','5397705zxTVxn','setProperty','getUTCFullYear','map','Font\\x20failed\\x20to\\x20load:\\x20','style','night','2185008kbhKAz','twinkle\\x20','1143463QvwEJW','#6190E8','day','appendChild','width','.cloud-layer','sunday','december','tuesday','#FD7840','october','#378FE8','div','june','.wrapper','getUTCMonth','add','#FFAD87','https://fonts.googleapis.com/css2?family=','getMonth','#FAD7AF','july','\\x200%,\\x20','documentElement','rain','snow-flake','UTC','padStart','getHours','nightEnd','sunset','monthDay','september','4352960nsVkeg','wind','\\x2067.43%)','thursday','13392048MMMPcb','opacity','.stars-layer','getBoundingClientRect','sunriseStart','match','background','.weather-layer','#61A5ED','getDay','19146PAlFgb','.title','-20px','timeFormat','#80B7F0','#0A0E58','round','animationDuration','fontFamily','push','createElement','s\\x20infinite\\x20alternate','toString','-100px','classList','timezone','sunriseEnd','height','sunsetEnd','622270SBVegL','saturday','sunrise',':wght@100;200;300;400;500;600;700;800;900&display=swap','radial-gradient(186.03%\\x20131.18%\\x20at\\x2032.94%\\x20108.97%,\\x20','snow','wednesday','dateFormat','friday','wind-line','april','monday','.sun-layer','local','scale'];_0x3eb9=function(){return _0x212934;};return _0x3eb9();}function renderWind(){const _0x4a67de=_0x78fc27;for(let _0x231ab4=0x0;_0x231ab4<0x19;_0x231ab4++){let _0x6b3142=document[_0x4a67de(0xb2)](_0x4a67de(0x85));_0x6b3142['classList'][_0x4a67de(0x89)](_0x4a67de(0xc4)),_0x6b3142[_0x4a67de(0x75)][_0x4a67de(0xf3)]=_0x4a67de(0xb5),_0x6b3142[_0x4a67de(0x75)][_0x4a67de(0xe9)]=0x64*Math[_0x4a67de(0xe8)]()+'vh',_0x6b3142['style'][_0x4a67de(0xaf)]=0x2+0x2*Math['random']()+'s',weatherLayer['appendChild'](_0x6b3142);}}function updateTimeAndTheme(){const _0x5d0269=_0x78fc27;let _0x92507d,_0x55d6ed,_0x246214,_0x420e00=new Date(),_0x6bc240;if(debugMode)_0x92507d=Math['floor'](simulatedMinutes/0x3c),_0x55d6ed=Math[_0x5d0269(0xe4)](simulatedMinutes%0x3c),_0x6bc240=new Date(_0x420e00['getFullYear'](),_0x420e00[_0x5d0269(0x8c)](),_0x420e00[_0x5d0269(0xce)](),_0x92507d,_0x55d6ed);else{if(_0x5d0269(0xc8)===fieldData[_0x5d0269(0xb7)])_0x92507d=_0x420e00[_0x5d0269(0x95)](),_0x55d6ed=_0x420e00['getMinutes'](),_0x6bc240=new Date(_0x420e00);else{let _0x3d1f23=parseFloat(fieldData['timezone'][_0x5d0269(0xe3)]('UTC','')),_0x207e20=_0x420e00[_0x5d0269(0xee)](),_0x4aaa57=_0x420e00['getUTCMinutes'](),_0x171573=0x3c*_0x207e20+_0x4aaa57+0x3c*_0x3d1f23,_0x3dcf3f=(_0x171573%0x5a0+0x5a0)%0x5a0;_0x92507d=Math[_0x5d0269(0xe4)](_0x3dcf3f/0x3c),_0x55d6ed=Math[_0x5d0269(0xe4)](_0x3dcf3f%0x3c);let _0x59cd21=Date[_0x5d0269(0x93)](_0x420e00[_0x5d0269(0x72)](),_0x420e00[_0x5d0269(0x88)](),_0x420e00['getUTCDate'](),0x0,0x0,0x0);_0x6bc240=new Date(_0x59cd21+0xea60*_0x171573);}}_0x246214=0x3c*_0x92507d+_0x55d6ed;let _0xc2a3c6=[_0x5d0269(0x7f),_0x5d0269(0xc6),'tuesday','wednesday',_0x5d0269(0x9d),'friday','saturday'][_0x6bc240[_0x5d0269(0xa7)]()],_0x370528=fieldData[_0xc2a3c6]||_0xc2a3c6['charAt'](0x0)['toUpperCase']()+_0xc2a3c6['slice'](0x1),_0x1f014c=[_0x5d0269(0xe2),'february',_0x5d0269(0xd8),_0x5d0269(0xc5),'may',_0x5d0269(0x86),_0x5d0269(0x8e),'august',_0x5d0269(0x99),_0x5d0269(0x83),_0x5d0269(0xf2),_0x5d0269(0x80)][_0x6bc240[_0x5d0269(0x8c)]()],_0x115f3f=fieldData[_0x1f014c]||_0x1f014c[_0x5d0269(0xec)](0x0)[_0x5d0269(0xd6)]()+_0x1f014c['slice'](0x1),_0x4e1d24=_0x6bc240[_0x5d0269(0xce)]();document[_0x5d0269(0xda)](_0x5d0269(0xdd))[_0x5d0269(0xef)]=_0x370528,_0x5d0269(0x98)===fieldData[_0x5d0269(0xc2)]?document[_0x5d0269(0xda)](_0x5d0269(0xcf))[_0x5d0269(0xef)]=_0x115f3f+'\\x20'+_0x4e1d24:document[_0x5d0269(0xda)](_0x5d0269(0xcf))[_0x5d0269(0xef)]=_0x4e1d24+'\\x20'+_0x115f3f;let _0x1727a4,_0x33b7aa,_0x5d577b;_0x246214>=themeTimes[_0x5d0269(0xa2)]&&_0x246214<themeTimes[_0x5d0269(0xb8)]?(_0x1727a4=_0x5d0269(0x76),_0x33b7aa=_0x5d0269(0xbd),_0x5d577b=(_0x246214-themeTimes['sunriseStart'])/(themeTimes[_0x5d0269(0xb8)]-themeTimes[_0x5d0269(0xa2)])):_0x246214>=themeTimes['sunriseEnd']&&_0x246214<themeTimes[_0x5d0269(0xe0)]?(_0x1727a4=_0x5d0269(0xbd),_0x33b7aa=_0x5d0269(0x7b),_0x5d577b=(_0x246214-themeTimes['sunriseEnd'])/(themeTimes[_0x5d0269(0xe0)]-themeTimes[_0x5d0269(0xb8)])):_0x246214>=themeTimes[_0x5d0269(0xe0)]&&_0x246214<themeTimes[_0x5d0269(0xba)]?(_0x1727a4=_0x5d0269(0x7b),_0x33b7aa='sunset',_0x5d577b=(_0x246214-themeTimes[_0x5d0269(0xe0)])/(themeTimes[_0x5d0269(0xba)]-themeTimes[_0x5d0269(0xe0)])):(_0x1727a4=_0x5d0269(0x97),_0x33b7aa=_0x5d0269(0x76),_0x5d577b=_0x246214>=themeTimes[_0x5d0269(0xba)]?(_0x246214-themeTimes[_0x5d0269(0xba)])/(0x5a0-themeTimes[_0x5d0269(0xba)]+themeTimes['nightEnd']):(_0x246214+(0x5a0-themeTimes[_0x5d0269(0xba)]))/(0x5a0-themeTimes['sunsetEnd']+themeTimes[_0x5d0269(0x96)])),updateSunOpacity(_0x246214),updateStars(_0x1727a4,_0x33b7aa);let [_0x51ca30,_0x35a4b4,_0x58f8c0]=themes[_0x1727a4][_0x5d0269(0x73)]((_0xfa4f7e,_0x36e52e)=>lerpColor(_0xfa4f7e,themes[_0x33b7aa][_0x36e52e],_0x5d577b));wrapper[_0x5d0269(0x75)][_0x5d0269(0xa4)]=_0x5d0269(0xbf)+_0x51ca30+_0x5d0269(0x8f)+_0x35a4b4+_0x5d0269(0xdf)+_0x58f8c0+_0x5d0269(0x9c);let _0x1dce4c=_0x92507d,_0x273758='';'us'===fieldData[_0x5d0269(0xab)]&&(_0x1dce4c=_0x92507d%0xc||0xc,_0x273758=_0x92507d>=0xc?'PM':'AM');let _0x1b2aa7=_0x55d6ed[_0x5d0269(0xb4)]()[_0x5d0269(0x94)](0x2,'0');document['querySelector']('.am-pm')[_0x5d0269(0xef)]='us'===fieldData[_0x5d0269(0xab)]?_0x273758:'',document[_0x5d0269(0xda)]('.hour')['textContent']=_0x1dce4c+':'+_0x1b2aa7;}function lerpColor(_0x1f5bbd,_0x5895a9,_0x4b3d9a){const _0x10fe72=_0x78fc27;let _0x26a851=_0x1f5bbd[_0x10fe72(0xa3)](/\\w\\w/g)[_0x10fe72(0x73)](_0x213b79=>parseInt(_0x213b79,0x10)),_0x574703=_0x5895a9[_0x10fe72(0xa3)](/\\w\\w/g)[_0x10fe72(0x73)](_0x10f89e=>parseInt(_0x10f89e,0x10)),_0x16e911=_0x26a851[_0x10fe72(0x73)]((_0x3f59de,_0x122d04)=>Math[_0x10fe72(0xae)](_0x3f59de+(_0x574703[_0x122d04]-_0x3f59de)*_0x4b3d9a));return'#'+_0x16e911[_0x10fe72(0x73)](_0x5b55d7=>_0x5b55d7[_0x10fe72(0xb4)](0x10)[_0x10fe72(0x94)](0x2,'0'))['join']('');}function createStars(){const _0x1480e7=_0x78fc27;starsLayer[_0x1480e7(0xdb)]='',stars=[];for(let _0x2385fb=0x0;_0x2385fb<0xf;_0x2385fb++){let _0x56709a=document[_0x1480e7(0xb2)](_0x1480e7(0x85));_0x56709a[_0x1480e7(0xb6)][_0x1480e7(0x89)]('star');let _0x282445=wrapper[_0x1480e7(0xa1)]();_0x56709a['style']['top']=Math[_0x1480e7(0xe8)]()*_0x282445[_0x1480e7(0xb9)]+'px',_0x56709a[_0x1480e7(0x75)][_0x1480e7(0xf3)]=Math[_0x1480e7(0xe8)]()*_0x282445[_0x1480e7(0x7d)]+'px';let _0x3a114f=0.8+1.2*Math[_0x1480e7(0xe8)](),_0x42994d=0x2*Math[_0x1480e7(0xe8)]();_0x56709a[_0x1480e7(0x75)][_0x1480e7(0xd1)]=_0x1480e7(0x78)+_0x3a114f+_0x1480e7(0xb3),_0x56709a[_0x1480e7(0x75)]['animationDelay']=_0x42994d+'s',starsLayer['appendChild'](_0x56709a),stars[_0x1480e7(0xb1)](_0x56709a);}}function updateStars(_0x3717fd,_0x406dba){const _0x26938d=_0x78fc27;_0x26938d(0x76)===_0x3717fd||'night'===_0x406dba?(starsLayer['style'][_0x26938d(0xcc)]=_0x26938d(0xed),0x0===stars['length']&&createStars()):starsLayer[_0x26938d(0x75)][_0x26938d(0xcc)]=_0x26938d(0xde);}function updateSunOpacity(_0x3a87ab){const _0x972d4e=_0x78fc27;if(cloud[_0x972d4e(0x75)][_0x972d4e(0x9f)]>0x0){sunLayer[_0x972d4e(0x75)][_0x972d4e(0x9f)]=0x0;return;}if(_0x3a87ab>=0x294&&_0x3a87ab<=0x3c0){let _0x154540=0x1;_0x3a87ab<0x2b2?_0x154540=(_0x3a87ab-0x294)/0x1e:_0x3a87ab>0x3a2&&(_0x154540=(0x3c0-_0x3a87ab)/0x1e),sunLayer[_0x972d4e(0x75)][_0x972d4e(0x9f)]=_0x154540;}else sunLayer['style'][_0x972d4e(0x9f)]=0x0;}window[_0x78fc27(0xe6)](_0x78fc27(0xe7),async _0x4ec331=>{const _0x50bad0=_0x78fc27;setInterval(updateTimeAndTheme,0x3e8),await loadFont((fieldData=_0x4ec331['detail'][_0x50bad0(0xd0)])['font']);let _0x52807f=fieldData['weatherEffect'];setWeatherEffect(_0x52807f),wrapper['style'][_0x50bad0(0xb0)]=fieldData[_0x50bad0(0xeb)],title[_0x50bad0(0xdb)]=fieldData[_0x50bad0(0xcb)];let _0x387825=document[_0x50bad0(0x90)];_0x387825[_0x50bad0(0x75)][_0x50bad0(0x71)](_0x50bad0(0xd7),fieldData[_0x50bad0(0xc9)]),wrapper['style'][_0x50bad0(0x7d)]=fieldData[_0x50bad0(0x7d)]+'px';}),window[_0x78fc27(0xe6)](_0x78fc27(0xf1),function(_0x4b4282){const _0x45960e=_0x78fc27;let {event:_0x3fa9f1}=_0x4b4282[_0x45960e(0xdc)];'debugButton'===_0x3fa9f1[_0x45960e(0xcd)]&&(debugMode=!0x0,simulatedMinutes=0x0,debugInterval&&clearInterval(debugInterval),debugInterval=setInterval(()=>{(simulatedMinutes+=1.2)>=0x5a0&&(simulatedMinutes=0x0,debugMode=!0x1,clearInterval(debugInterval)),updateTimeAndTheme();},0xa));});",
                css: ".theme-sunrise,:root{--bg1:#FD7840;--bg2:#FAD7AF;--bg3:#9FAAC8}.date,.day,.hour{color:var(--text-main)}:root{--scale:1;--width:300px;--text-main:#ffffff;--text-muted:rgba(255,255,255,0.7);--shadow-default:3px 3px 7.4px rgba(0, 0, 0, 0.10);--bg-gradient:radial-gradient(186.03% 131.18% at 32.94% 108.97%, #FD7840 0%, #FAD7AF 43.27%, #9FAAC8 67.43%)}.cloud-layer{top:0;mix-blend-mode:hue;z-index:-12;left:0;position:absolute;opacity:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(217,217,217,.7) 0,rgba(115,115,115,.7) 100%)}.am-pm,.date,.day,.hour,.title,.wrapper{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sun-layer{position:absolute;top:-40px;right:29%;width:100px;height:72px;border-radius:50%;background:radial-gradient(circle at 50% 50%,#f3ebcb 0,#f3ebcb 20.73%);filter:blur(14.4px);z-index:1;pointer-events:none}.stars-layer,.weather-layer{top:0;left:0;pointer-events:none;position:absolute;overflow:hidden}.stars-layer{width:100%;height:100%;z-index:3}.star{position:absolute;width:3px;height:3px;background:#fff;clip-path:polygon(50% 0%,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0% 50%,40% 40%);opacity:.8;animation:2.5s infinite alternate twinkle}.weather-layer{width:100%;height:100%;z-index:1}@keyframes twinkle{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1.2)}}.rain-drop{position:absolute;width:1px;height:15px;background:rgba(255,255,255,.4);animation:linear infinite rain-fall}.snow-flake,.wind-line{height:2px;position:absolute}@keyframes rain-fall{to{transform:translateY(110vh);opacity:0}}.snow-flake{width:2px;background:#fff;border-radius:50%;opacity:.8;animation:linear infinite snow-fall}@keyframes snow-fall{to{transform:translateY(100vh)}}.wind-line{width:30px;border-radius:2px;background:rgba(255,255,255,.3);animation:linear infinite wind-blow}@keyframes wind-blow{to{transform:translateX(120vw);opacity:0}}.icon svg{display:block}.theme-day{--bg1:#80B7F0;--bg2:#61A5ED;--bg3:#378FE8}.theme-sunset{--bg1:#D94F32;--bg2:#FFAD87;--bg3:#6190E8}.theme-night{--bg1:#0C38A3;--bg2:#0C2A96;--bg3:#0A0E58}.wrapper{border:1px solid #fff;position:absolute;display:flex;overflow:hidden;top:50%;left:50%;width:var(--width);padding:16px;justify-content:space-between;align-items:flex-end;border-radius:15px;background:radial-gradient(186.03% 131.18% at 32.94% 108.97%,var(--bg1) 0,var(--bg2) 43.27%,var(--bg3) 67.43%);box-shadow:var(--shadow-default);transition:background 2s linear;transform:translate(-50%,-50%) scale(var(--scale))}.date-wrapper{display:flex;width:79px;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0}.calendar{width:10px;height:11px;aspect-ratio:10/11}.date,.day{text-align:right;font-size:12px;font-weight:400;line-height:100%}.time{display:flex;width:85.436px;flex-direction:column;align-items:flex-start;gap:5px;flex-shrink:0}.hour{font-size:30px;font-weight:500;letter-spacing:-1.8px;line-height:100%;margin-bottom:-10px}.am-pm,.title{line-height:100%;font-weight:400}.am-pm{color:var(--text-muted);font-size:12px}.horizontal{display:flex;align-items:baseline;flex-direction:row;gap:4px}.clock{fill:var(--text-main);width:8px;height:8px}.title{color:var(--text-main);font-size:10px;text-transform:uppercase}",
                html: '<div class="wrapper">\r\n    <div class="weather-layer"></div>\r\n    <div class="stars-layer"></div>\r\n    <div class="sun-layer"></div>\r\n    <div class="cloud-layer"></div>\r\n    <div class="time">\r\n        <div class="horizontal">\r\n            <div class="icon clock"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"\r\n                    fill="none">\r\n                    <path\r\n                        d="M4.0022 8C2.88494 8 1.93857 7.61227 1.16309 6.8368C0.387695 6.06142 0 5.11507 0 3.99773C0 2.88884 0.387695 1.94533 1.16309 1.1672C1.93857 0.389066 2.88494 0 4.0022 0C5.1112 0 6.05472 0.389066 6.83278 1.1672C7.61093 1.94533 8 2.88884 8 3.99773C8 5.11507 7.61093 6.06142 6.83278 6.8368C6.05472 7.61227 5.1112 8 4.0022 8ZM3.99993 7.2C4.88884 7.2 5.64441 6.88889 6.26664 6.26667C6.88887 5.64444 7.19999 4.88889 7.19999 4C7.19999 3.11111 6.88887 2.35556 6.26664 1.73333C5.64441 1.11111 4.88884 0.8 3.99993 0.8C3.11103 0.8 2.35546 1.11111 1.73323 1.73333C1.111 2.35556 0.79988 3.11111 0.79988 4C0.79988 4.88889 1.111 5.64444 1.73323 6.26667C2.35546 6.88889 3.11103 7.2 3.99993 7.2ZM4.39994 3.84307V2.34867C4.39994 2.23533 4.36158 2.14036 4.28487 2.06373C4.20825 1.98702 4.11322 1.94867 3.9998 1.94867C3.88638 1.94867 3.7914 1.98702 3.71486 2.06373C3.63824 2.14036 3.59993 2.23533 3.59993 2.34867V3.97747C3.59993 4.04022 3.61295 4.10102 3.63899 4.15987C3.66495 4.21871 3.7006 4.27093 3.74593 4.31653L4.98355 5.55893C5.06293 5.64169 5.15715 5.68307 5.26622 5.68307C5.3752 5.68307 5.47107 5.64169 5.55383 5.55893C5.63658 5.47627 5.67796 5.38124 5.67796 5.27387C5.67796 5.16649 5.63658 5.07142 5.55383 4.98867L4.39994 3.84307Z"\r\n                        fill="white" />\r\n                </svg></div>\r\n            <div class="title">CURRENT TIME</div>\r\n        </div>\r\n        <div class="horizontal">\r\n            <div class="hour">7:44</div>\r\n            <div class="am-pm">am</div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="date-wrapper">\r\n        <div class="horizontal">\r\n            <div class="icon calendar"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11"\r\n                    viewBox="0 0 10 11" fill="none">\r\n                    <path\r\n                        d="M1.06338 11C0.766225 11 0.514706 10.8993 0.308824 10.6979C0.102941 10.4965 0 10.2504 0 9.95972V2.25752C0 1.96682 0.102941 1.72076 0.308824 1.51935C0.514706 1.31794 0.766225 1.21723 1.06338 1.21723H1.87779V0.442526C1.87779 0.316405 1.92098 0.211097 2.00735 0.1266C2.09373 0.0422 2.20137 0 2.33029 0C2.45931 0 2.56696 0.0422 2.65324 0.1266C2.73961 0.211097 2.78279 0.316405 2.78279 0.442526V1.21723H7.23985V0.431593C7.23985 0.309116 7.28206 0.206541 7.36647 0.123867C7.45098 0.0412888 7.55583 0 7.68103 0C7.80623 0 7.91103 0.0412888 7.99544 0.123867C8.07995 0.206541 8.12221 0.309116 8.12221 0.431593V1.21723H8.93662C9.23378 1.21723 9.48529 1.31794 9.69118 1.51935C9.89706 1.72076 10 1.96682 10 2.25752V9.95972C10 10.2504 9.89706 10.4965 9.69118 10.6979C9.48529 10.8993 9.23378 11 8.93662 11H1.06338ZM1.06338 10.1368H8.93662C8.98191 10.1368 9.02338 10.1184 9.06103 10.0814C9.09878 10.0446 9.11765 10.004 9.11765 9.95972V4.55934H0.882353V9.95972C0.882353 10.004 0.901226 10.0446 0.938971 10.0814C0.976618 10.1184 1.01809 10.1368 1.06338 10.1368ZM0.882353 3.69616H9.11765V2.25752C9.11765 2.21321 9.09878 2.17264 9.06103 2.13581C9.02338 2.09888 8.98191 2.08042 8.93662 2.08042H1.06338C1.01809 2.08042 0.976618 2.09888 0.938971 2.13581C0.901226 2.17264 0.882353 2.21321 0.882353 2.25752V3.69616ZM5 6.72838C4.85598 6.72838 4.73324 6.67875 4.63176 6.57949C4.53039 6.48032 4.47971 6.36024 4.47971 6.21925C4.47971 6.07836 4.53039 5.95828 4.63176 5.85901C4.73324 5.75984 4.85598 5.71026 5 5.71026C5.14402 5.71026 5.26677 5.75984 5.36824 5.85901C5.46961 5.95828 5.52029 6.07836 5.52029 6.21925C5.52029 6.36024 5.46961 6.48032 5.36824 6.57949C5.26677 6.67875 5.14402 6.72838 5 6.72838ZM2.64706 6.72838C2.50304 6.72838 2.38029 6.67875 2.27882 6.57949C2.17745 6.48032 2.12676 6.36024 2.12676 6.21925C2.12676 6.07836 2.17745 5.95828 2.27882 5.85901C2.38029 5.75984 2.50304 5.71026 2.64706 5.71026C2.79108 5.71026 2.91382 5.75984 3.01529 5.85901C3.11667 5.95828 3.16735 6.07836 3.16735 6.21925C3.16735 6.36024 3.11667 6.48032 3.01529 6.57949C2.91382 6.67875 2.79108 6.72838 2.64706 6.72838ZM7.35294 6.72838C7.20892 6.72838 7.08618 6.67875 6.98471 6.57949C6.88333 6.48032 6.83265 6.36024 6.83265 6.21925C6.83265 6.07836 6.88333 5.95828 6.98471 5.85901C7.08618 5.75984 7.20892 5.71026 7.35294 5.71026C7.49696 5.71026 7.61971 5.75984 7.72118 5.85901C7.82255 5.95828 7.87324 6.07836 7.87324 6.21925C7.87324 6.36024 7.82255 6.48032 7.72118 6.57949C7.61971 6.67875 7.49696 6.72838 7.35294 6.72838ZM5 8.9859C4.85598 8.9859 4.73324 8.93627 4.63176 8.837C4.53039 8.73783 4.47971 8.6178 4.47971 8.47691C4.47971 8.33592 4.53039 8.21584 4.63176 8.11667C4.73324 8.01741 4.85598 7.96777 5 7.96777C5.14402 7.96777 5.26677 8.01741 5.36824 8.11667C5.46961 8.21584 5.52029 8.33592 5.52029 8.47691C5.52029 8.6178 5.46961 8.73783 5.36824 8.837C5.26677 8.93627 5.14402 8.9859 5 8.9859ZM2.64706 8.9859C2.50304 8.9859 2.38029 8.93627 2.27882 8.837C2.17745 8.73783 2.12676 8.6178 2.12676 8.47691C2.12676 8.33592 2.17745 8.21584 2.27882 8.11667C2.38029 8.01741 2.50304 7.96777 2.64706 7.96777C2.79108 7.96777 2.91382 8.01741 3.01529 8.11667C3.11667 8.21584 3.16735 8.33592 3.16735 8.47691C3.16735 8.6178 3.11667 8.73783 3.01529 8.837C2.91382 8.93627 2.79108 8.9859 2.64706 8.9859ZM7.35294 8.9859C7.20892 8.9859 7.08618 8.93627 6.98471 8.837C6.88333 8.73783 6.83265 8.6178 6.83265 8.47691C6.83265 8.33592 6.88333 8.21584 6.98471 8.11667C7.08618 8.01741 7.20892 7.96777 7.35294 7.96777C7.49696 7.96777 7.61971 8.01741 7.72118 8.11667C7.82255 8.21584 7.87324 8.33592 7.87324 8.47691C7.87324 8.6178 7.82255 8.73783 7.72118 8.837C7.61971 8.93627 7.49696 8.9859 7.35294 8.9859Z"\r\n                        fill="white" />\r\n                </svg></div>\r\n            <div class="day">Monday</div>\r\n        </div>\r\n        <div class="date">October 19</div>\r\n    </div>\r\n</div>',
                fields:
                  '{\n  "debugButton": {\n    "type": "button",\n    "label": "See a 24h loop",\n    "value": "debug-button-pressed",\n    "group": "⚙️ Visuals"\n  },\n  "font": {\n    "type": "googleFont",\n    "label": "Font",\n    "default": "Roboto",\n    "group": "⚙️ Visuals"\n  },\n  "text": {\n    "type": "input",\n    "label": "Header text",\n    "default": "",\n    "group": "⚙️ Visuals"\n  },\n  "scale": {\n    "type": "slider",\n    "label": "Widget size",\n    "default": 1,\n    "min": 0.1,\n    "max": 5,\n    "step": 0.1,\n    "group": "⚙️ Visuals"\n  },\n  "width": {\n    "type": "slider",\n    "label": "Widget width",\n    "default": 300,\n    "min": 170,\n    "max": 350,\n    "step": 10,\n    "group": "⚙️ Visuals"\n  },\n  "weatherEffect": {\n    "type": "dropdown",\n    "label": "Weather Effect",\n    "value": "none",\n    "options": {\n      "none": "Sunny",\n      "rain": "Rain",\n      "cloud": "Cloudy",\n      "snow": "Snow",\n      "wind": "Wind"\n    },\n    "group": "🌦️ Weather Effects"\n  },\n  "monday": {\n    "type": "input",\n    "label": "Monday",\n    "default": "Monday",\n    "group": "🌐 Day Names"\n  },\n  "tuesday": {\n    "type": "input",\n    "label": "Tuesday",\n    "default": "Tuesday",\n    "group": "🌐 Day Names"\n  },\n  "wednesday": {\n    "type": "input",\n    "label": "Wednesday",\n    "default": "Wednesday",\n    "group": "🌐 Day Names"\n  },\n  "thursday": {\n    "type": "input",\n    "label": "Thursday",\n    "default": "Thursday",\n    "group": "🌐 Day Names"\n  },\n  "friday": {\n    "type": "input",\n    "label": "Friday",\n    "default": "Friday",\n    "group": "🌐 Day Names"\n  },\n  "saturday": {\n    "type": "input",\n    "label": "Saturday",\n    "default": "Saturday",\n    "group": "🌐 Day Names"\n  },\n  "sunday": {\n    "type": "input",\n    "label": "Sunday",\n    "default": "Sunday",\n    "group": "🌐 Day Names"\n  },\n  "january": {\n    "type": "input",\n    "label": "January",\n    "default": "January",\n    "group": "🌐 Month Names"\n  },\n  "february": {\n    "type": "input",\n    "label": "February",\n    "default": "February",\n    "group": "🌐 Month Names"\n  },\n  "march": {\n    "type": "input",\n    "label": "March",\n    "default": "March",\n    "group": "🌐 Month Names"\n  },\n  "april": {\n    "type": "input",\n    "label": "April",\n    "default": "April",\n    "group": "🌐 Month Names"\n  },\n  "may": {\n    "type": "input",\n    "label": "May",\n    "default": "May",\n    "group": "🌐 Month Names"\n  },\n  "june": {\n    "type": "input",\n    "label": "June",\n    "default": "June",\n    "group": "🌐 Month Names"\n  },\n  "july": {\n    "type": "input",\n    "label": "July",\n    "default": "July",\n    "group": "🌐 Month Names"\n  },\n  "august": {\n    "type": "input",\n    "label": "August",\n    "default": "August",\n    "group": "🌐 Month Names"\n  },\n  "september": {\n    "type": "input",\n    "label": "September",\n    "default": "September",\n    "group": "🌐 Month Names"\n  },\n  "october": {\n    "type": "input",\n    "label": "October",\n    "default": "October",\n    "group": "🌐 Month Names"\n  },\n  "november": {\n    "type": "input",\n    "label": "November",\n    "default": "November",\n    "group": "🌐 Month Names"\n  },\n  "december": {\n    "type": "input",\n    "label": "December",\n    "default": "December",\n    "group": "🌐 Month Names"\n  },\n  "timeFormat": {\n    "type": "dropdown",\n    "label": "Time Format",\n    "value": "us",\n    "options": {\n      "us": "12h AM/PM",\n      "eu": "24h"\n    },\n    "group": "⚙️ Display Options"\n  },\n  "dateFormat": {\n    "type": "dropdown",\n    "label": "Date Format",\n    "value": "monthDay",\n    "options": {\n      "monthDay": "Month + Day",\n      "dayMonth": "Day + Month"\n    },\n    "group": "⚙️ Display Options"\n  },\n  "timezone": {\n    "type": "dropdown",\n    "label": "Timezone (UTC Offset)",\n    "value": "local",\n    "options": {\n      "local": "Local Time",\n      "UTC-12": "UTC−12",\n      "UTC-11": "UTC−11",\n      "UTC-10": "UTC−10",\n      "UTC-9": "UTC−9",\n      "UTC-8": "UTC−8",\n      "UTC-7": "UTC−7",\n      "UTC-6": "UTC−6",\n      "UTC-5": "UTC−5",\n      "UTC-4": "UTC−4",\n      "UTC-3": "UTC−3",\n      "UTC-2": "UTC−2",\n      "UTC-1": "UTC−1",\n      "UTC+0": "UTC+0",\n      "UTC+1": "UTC+1",\n      "UTC+2": "UTC+2",\n      "UTC+3": "UTC+3",\n      "UTC+4": "UTC+4",\n      "UTC+5": "UTC+5",\n      "UTC+6": "UTC+6",\n      "UTC+7": "UTC+7",\n      "UTC+8": "UTC+8",\n      "UTC+9": "UTC+9",\n      "UTC+10": "UTC+10",\n      "UTC+11": "UTC+11",\n      "UTC+12": "UTC+12"\n    },\n    "group": "⚙️ Time Settings"\n  }\n}',
                fieldData: {
                  may: "May",
                  font: "Poppins",
                  july: "July",
                  june: "June",
                  text: "Current Time",
                  april: "April",
                  march: "March",
                  scale: 1.7,
                  theme: "texture",
                  width: 220,
                  august: "August",
                  friday: "Friday",
                  locale: "en-US",
                  minTip: 1,
                  monday: "Monday",
                  sunday: "Sunday",
                  january: "January",
                  minHost: 1,
                  minRaid: 1,
                  october: "October",
                  tuesday: "Tuesday",
                  december: "December",
                  february: "February",
                  minCheer: 1,
                  november: "November",
                  saturday: "Saturday",
                  thursday: "Thursday",
                  timezone: "local",
                  direction: "top",
                  fontColor: "rgb(255, 255, 255)",
                  iconColor: "rgb(255, 255, 255, 255)",
                  september: "September",
                  textOrder: "nameFirst",
                  wednesday: "Wednesday",
                  dateFormat: "monthDay",
                  timeFormat: "us",
                  debugButton: "debug-button-pressed",
                  eventsLimit: 5,
                  fadeoutTime: 999,
                  includeSubs: "yes",
                  includeTips: "yes",
                  includeHosts: "yes",
                  includeRaids: "yes",
                  includeCheers: "yes",
                  weatherEffect: "none",
                  backgroundColor: "rgba(36, 6, 73, 0.15)",
                  includeFollowers: "yes",
                  backgroundOpacity: 50,
                  includeRedemptions: "yes",
                },
              },
              provider: "twitch",
            },
          ],
          channel: "5e94fd4601b654ad643c6b01",
          preview:
            "https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-3.jpg",
          mobile: false,
          campaign: false,
          favorite: false,
          createdAt: "2026-04-06T14:02:12.141Z",
          updatedAt: "2026-04-06T15:58:17.669Z",
        }}
      />
    </>
  );
}
