"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42724],{46265:(e,t,n)=>{n.r(t),n.d(t,{data:()=>l});const l={key:"v-474f0c30",path:"/guide/adapters/flashing/connecting_cc2530.html",title:"Connecting the CC2530",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Pin layouts",slug:"pin-layouts",children:[]},{level:2,title:"Using a USB to serial adapter",slug:"using-a-usb-to-serial-adapter",children:[{level:3,title:"Confirmed working",slug:"confirmed-working",children:[]},{level:3,title:"Connecting",slug:"connecting",children:[]}]},{level:2,title:"To a Raspberry Pi (Zero)",slug:"to-a-raspberry-pi-zero",children:[{level:3,title:"Wiring CC2530 to the Raspberry",slug:"wiring-cc2530-to-the-raspberry",children:[]},{level:3,title:"Configuring Zigbee2MQTT",slug:"configuring-zigbee2mqtt",children:[]}]},{level:2,title:"Via an ESP8266 as a serial to WiFi bridge",slug:"via-an-esp8266-as-a-serial-to-wifi-bridge",children:[{level:3,title:"Wiring",slug:"wiring",children:[]},{level:3,title:"Option 1 - Flashing the ESP8266 with ESPEasy",slug:"option-1-flashing-the-esp8266-with-espeasy",children:[]},{level:3,title:"Setting up ESPEasy",slug:"setting-up-espeasy",children:[]},{level:3,title:"Option 2 - Flashing the ESP8266 with Tasmota",slug:"option-2-flashing-the-esp8266-with-tasmota",children:[]},{level:3,title:"Setting up Tasmota",slug:"setting-up-tasmota",children:[]},{level:3,title:"Zigbee2MQTT configuration",slug:"zigbee2mqtt-configuration",children:[]}]}],filePathRelative:"guide/adapters/flashing/connecting_cc2530.md",git:{updatedTime:1661623134e3}}},5719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ze});var l=n(66252),a=n(18476),i=n(90070),r=n(61430),s=n(80654),A=n(17641),o=n(31230);const u=(0,l._)("h1",{id:"connecting-the-cc2530",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#connecting-the-cc2530","aria-hidden":"true"},"#"),(0,l.Uk)(" Connecting the CC2530")],-1),c=(0,l._)("h2",{id:"pin-layouts",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#pin-layouts","aria-hidden":"true"},"#"),(0,l.Uk)(" Pin layouts")],-1),d=(0,l._)("p",null,"The pin layout is different between each CC2530 module",-1),g=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Name"),(0,l._)("th",null,"Pin layout"),(0,l._)("th",null,"Picture")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,"CC2530"),(0,l._)("td",null,[(0,l._)("img",{src:a,alt:"CC2530 pin layout"})]),(0,l._)("td",null,[(0,l._)("img",{src:i,alt:"CC2530"})])]),(0,l._)("tr",null,[(0,l._)("td",null,"Webee CC2530 + CC2591"),(0,l._)("td",null,[(0,l._)("img",{src:r,alt:"Webee CC2530 + CC2591 pin layout"})]),(0,l._)("td",null,[(0,l._)("img",{src:s,alt:"CC2530 + CC2591"})])])])],-1),_=(0,l._)("h2",{id:"using-a-usb-to-serial-adapter",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#using-a-usb-to-serial-adapter","aria-hidden":"true"},"#"),(0,l.Uk)(" Using a USB to serial adapter")],-1),h=(0,l._)("h3",{id:"confirmed-working",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#confirmed-working","aria-hidden":"true"},"#"),(0,l.Uk)(" Confirmed working")],-1),p=(0,l._)("p",null,"This how-to has been confirmed working with the following CC2530 based devices:",-1),b=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Device"),(0,l._)("th",null,"Image")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("strong",null,"CC2530")]),(0,l._)("td",null,[(0,l._)("img",{src:i,alt:"CC2530"})])])])],-1),m=(0,l._)("p",null,"and the following USB to serial adapters:",-1),f=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Device"),(0,l._)("th",null,"Image")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("strong",null,"CP2102")]),(0,l._)("td",null,[(0,l._)("img",{src:A,alt:"CP2102"})])])])],-1),y=(0,l._)("h5",{id:"flashing-the-firmware",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#flashing-the-firmware","aria-hidden":"true"},"#"),(0,l.Uk)(" Flashing the firmware")],-1),k=(0,l.Uk)("The required coordinator firmware can be found here: "),w={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("Zigbee 1.2"),C=(0,l.Uk)(" and "),P={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("Zigbee 3.0"),U=(0,l.Uk)("."),S=(0,l._)("h3",{id:"connecting",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#connecting","aria-hidden":"true"},"#"),(0,l.Uk)(" Connecting")],-1),T=(0,l._)("p",null,"Connect to CC2530 to the USB to serial adapter using the following mapping:",-1),M=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{"text-align":"center"}},"USB-Serial Adapter"),(0,l._)("th",{style:{"text-align":"center"}},"CC2530")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"3V3"),(0,l._)("td",{style:{"text-align":"center"}},"VCC")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"GND"),(0,l._)("td",{style:{"text-align":"center"}},"GND")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"TXD"),(0,l._)("td",{style:{"text-align":"center"}},"P02")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"RXD"),(0,l._)("td",{style:{"text-align":"center"}},"P03")])])],-1),v=(0,l._)("p",null,"Now plug in the USB-to-serial adapter in your USB port and start Zigbee2MQTT, enjoy!",-1),D=(0,l._)("h2",{id:"to-a-raspberry-pi-zero",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#to-a-raspberry-pi-zero","aria-hidden":"true"},"#"),(0,l.Uk)(" To a Raspberry Pi (Zero)")],-1),B=(0,l._)("p",null,"CC2530 can be connected to a Raspberry PI (Zero) via GPIO Pins - no USB2FTDI is needed.",-1),Q=(0,l.Uk)("The use of UART by the installed Linux has to be disabled: "),R={href:"https://www.raspberrypi.org/documentation/configuration/uart.md",target:"_blank",rel:"noopener noreferrer"},Z=(0,l.Uk)("Detailed explanation here"),N=(0,l._)("p",null,"Enable UART in the Kernel and disable UART use for BlueTooth.",-1),G=(0,l._)("p",null,[(0,l.Uk)("In "),(0,l._)("code",null,"/boot/config.txt"),(0,l.Uk)(" add following lines:")],-1),W=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"enable_uart=1\ndtoverlay=pi3-disable-bt\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),j=(0,l._)("p",null,"Disable the modem system service (on the command line):",-1),q=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"sudo systemctl disable hciuart\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),I=(0,l._)("p",null,[(0,l.Uk)("Remove the console entry by removing any of those entries from "),(0,l._)("code",null,"/boot/cmdline.txt"),(0,l.Uk)(" if present:")],-1),F=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"console=serial0,115200 console=ttyAMA0,115200\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),z=(0,l._)("p",null,"Reboot your Raspberry.",-1),L=(0,l._)("h3",{id:"wiring-cc2530-to-the-raspberry",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#wiring-cc2530-to-the-raspberry","aria-hidden":"true"},"#"),(0,l.Uk)(" Wiring CC2530 to the Raspberry")],-1),K=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"CC C2530 -> Raspberry\nVCC -> 3,3V (Pin1)\nGND -> GND (Pin6)\nP02 -> TXD (Pin8 / BCM 14)\nP03 -> RXD (Pin10 / BCM 15)\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br")])],-1),V=(0,l._)("p",null,[(0,l._)("img",{src:o,alt:"CC2531PI"})],-1),J=(0,l._)("h3",{id:"configuring-zigbee2mqtt",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#configuring-zigbee2mqtt","aria-hidden":"true"},"#"),(0,l.Uk)(" Configuring Zigbee2MQTT")],-1),O=(0,l._)("p",null,[(0,l.Uk)("Change the Serial Port in your "),(0,l._)("code",null,"data/configuration.yaml"),(0,l.Uk)(" file:")],-1),H=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"serial:\n  port: /dev/ttyAMA0\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),X=(0,l._)("p",null,"Have fun.",-1),Y=(0,l._)("h2",{id:"via-an-esp8266-as-a-serial-to-wifi-bridge",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#via-an-esp8266-as-a-serial-to-wifi-bridge","aria-hidden":"true"},"#"),(0,l.Uk)(" Via an ESP8266 as a serial to WiFi bridge")],-1),$=(0,l._)("p",null,"This setup allows you to connect a CC2530 to an ESP8266 which can be put everywhere in your house. Via a serial socket, Zigbee2MQTT will connect to your CC2530.",-1),ee=(0,l._)("h3",{id:"wiring",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#wiring","aria-hidden":"true"},"#"),(0,l.Uk)(" Wiring")],-1),te=(0,l._)("p",null,"Wire the CC2530 to the ESP8266 using the following scheme:",-1),ne=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{style:{"text-align":"center"}},"ESP8266"),(0,l._)("th",{style:{"text-align":"center"}},"CC2530")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"3v3"),(0,l._)("td",{style:{"text-align":"center"}},"VCC")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"GND"),(0,l._)("td",{style:{"text-align":"center"}},"GND")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"TX"),(0,l._)("td",{style:{"text-align":"center"}},"P02")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"RX"),(0,l._)("td",{style:{"text-align":"center"}},"P03")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"GND"),(0,l._)("td",{style:{"text-align":"center"}},"P20")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"GND"),(0,l._)("td",{style:{"text-align":"center"}},"P04")]),(0,l._)("tr",null,[(0,l._)("td",{style:{"text-align":"center"}},"GND"),(0,l._)("td",{style:{"text-align":"center"}},"P05")])])],-1),le=(0,l._)("h3",{id:"option-1-flashing-the-esp8266-with-espeasy",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#option-1-flashing-the-esp8266-with-espeasy","aria-hidden":"true"},"#"),(0,l.Uk)(" Option 1 - Flashing the ESP8266 with ESPEasy")],-1),ae=(0,l._)("p",null,"The ESP8266 needs to be flashed with ESPEasy. ESPEasy has suficient documentation on how to get you up and running:",-1),ie={href:"https://www.letscontrolit.com/wiki/index.php?title=Tutorial_ESPEasy_Firmware_Upload",target:"_blank",rel:"noopener noreferrer"},re=(0,l.Uk)("How to flash the ESP8266 with ESPEasy"),se=(0,l.Uk)("ESP8266 firmware: "),Ae={href:"https://github.com/letscontrolit/ESPEasy/releases",target:"_blank",rel:"noopener noreferrer"},oe=(0,l.Uk)("ESP_Easy_mega-XXXXXXXX_normal_ESP8266_4096.bin"),ue={href:"https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction",target:"_blank",rel:"noopener noreferrer"},ce=(0,l.Uk)("More information about ESPEasy"),de=(0,l._)("h3",{id:"setting-up-espeasy",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#setting-up-espeasy","aria-hidden":"true"},"#"),(0,l.Uk)(" Setting up ESPEasy")],-1),ge=(0,l._)("p",null,"Open the ESPEasy web interface and complete the setup. Afterwards open the web interface again.",-1),_e=(0,l._)("p",null,[(0,l.Uk)("Click on "),(0,l._)("em",null,"Devices"),(0,l.Uk)(" Edit of the first task and select "),(0,l._)("em",null,"Communication - Serial Server"),(0,l.Uk)(" from the dropdown list.")],-1),he=(0,l._)("p",null,"Fill in the form as following:",-1),pe=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'a.    Name: ZIGBEE2MQTT\nb.    Enabled: checked\nc.    TCP Port: a number between 1000 and 9999 "1775"\nd.    Baud Rate: 115200\ne.    Data bits: 8\nf.    Parity: No Parity\ng.    Stop bits: 1\nh.    Reset target after boot: - none –\ni.    RX receive timeout: 0\nj.    Event processing: Generic\n')]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br")])],-1),be=(0,l._)("p",null,"Press Submit, the setup is now completed.",-1),me=(0,l._)("h3",{id:"option-2-flashing-the-esp8266-with-tasmota",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#option-2-flashing-the-esp8266-with-tasmota","aria-hidden":"true"},"#"),(0,l.Uk)(" Option 2 - Flashing the ESP8266 with Tasmota")],-1),fe=(0,l._)("p",null,[(0,l.Uk)("The ESP8266 needs to be flashed with Tasmota firmware, "),(0,l._)("strong",null,'"zbbridge" build'),(0,l.Uk)(". Please find flashing instructions in the following guides:")],-1),ye={href:"https://github.com/arendst/Tasmota",target:"_blank",rel:"noopener noreferrer"},ke=(0,l.Uk)("Tasmota github"),we={href:"https://tasmota.github.io/docs/Getting-Started/",target:"_blank",rel:"noopener noreferrer"},xe=(0,l.Uk)("Getting started"),Ce={href:"https://tasmota.github.io/docs/Serial-to-TCP-Bridge/",target:"_blank",rel:"noopener noreferrer"},Pe=(0,l.Uk)("Serial to TCP Bridge docs"),Ee=(0,l._)("p",null,"You don't need MQTT for the serial to network functionality but it is a nice option to monitor your bridge.",-1),Ue=(0,l._)("h3",{id:"setting-up-tasmota",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#setting-up-tasmota","aria-hidden":"true"},"#"),(0,l.Uk)(" Setting up Tasmota")],-1),Se=(0,l._)("p",null,[(0,l.Uk)('Open the Tasmota web interface and complete the basic network setup. Next in "Configuration", "Configure Module" define your RX and TX pins. The Rx/Tx are relative to the ESP device. For example with ESP8266/ESP01\'s hardware serial, set GPIO1 as '),(0,l._)("code",null,"TCP Tx"),(0,l.Uk)(" and GPIO3 as "),(0,l._)("code",null,"TCP Rx"),(0,l.Uk)(".")],-1),Te=(0,l._)("p",null,[(0,l.Uk)('Next, in Tasmota\'s main screen, open "Console". Enter '),(0,l._)("code",null,"TCPBaudRate 115200"),(0,l.Uk)(". Decide on the port number to use and set it. For example for port = 8888 run:")],-1),Me=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"Rule1 ON System#Boot do TCPStart 8888 endon\nRule1 1\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),ve=(0,l._)("h3",{id:"zigbee2mqtt-configuration",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#zigbee2mqtt-configuration","aria-hidden":"true"},"#"),(0,l.Uk)(" Zigbee2MQTT configuration")],-1),De=(0,l._)("p",null,[(0,l.Uk)("Now add the following to the Zigbee2MQTT "),(0,l._)("code",null,"configuration.yaml"),(0,l.Uk)(":")],-1),Be=(0,l._)("div",{class:"language-yaml ext-yml line-numbers-mode"},[(0,l._)("pre",{class:"language-yaml"},[(0,l._)("code",null,[(0,l._)("span",{class:"token key atrule"},"serial"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token key atrule"},"port"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'tcp://192.168.2.13:20108'"),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token key atrule"},"adapter"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(" zstack\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br")])],-1),Qe=(0,l._)("p",null,"Note to change the IP address and port. You can now start Zigbee2qmtt.",-1),Re={},Ze=(0,n(83744).Z)(Re,[["render",function(e,t){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[u,c,d,g,_,h,p,b,m,f,y,(0,l._)("p",null,[k,(0,l._)("a",w,[x,(0,l.Wm)(n)]),C,(0,l._)("a",P,[E,(0,l.Wm)(n)]),U]),S,T,M,v,D,B,(0,l._)("p",null,[Q,(0,l._)("a",R,[Z,(0,l.Wm)(n)])]),N,G,W,j,q,I,F,z,L,K,V,J,O,H,X,Y,$,ee,te,ne,le,ae,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",ie,[re,(0,l.Wm)(n)])]),(0,l._)("li",null,[se,(0,l._)("a",Ae,[oe,(0,l.Wm)(n)])]),(0,l._)("li",null,[(0,l._)("a",ue,[ce,(0,l.Wm)(n)])])]),de,ge,_e,he,pe,be,me,fe,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",ye,[ke,(0,l.Wm)(n)])]),(0,l._)("li",null,[(0,l._)("a",we,[xe,(0,l.Wm)(n)])]),(0,l._)("li",null,[(0,l._)("a",Ce,[Pe,(0,l.Wm)(n)])])]),Ee,Ue,Se,Te,Me,ve,De,Be,Qe],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,l]of t)e[n]=l;return e}},31230:(e,t,n)=>{e.exports=n.p+"assets/img/CC2530_PI.5d76f9c5.jpg"},17641:(e,t,n)=>{e.exports=n.p+"assets/img/CP2102.9b7919dc.png"},90070:(e,t,n)=>{e.exports=n.p+"assets/img/cc2530.3b0e534a.jpg"},80654:e=>{e.exports="data:image/jpeg;base64,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"},18476:(e,t,n)=>{e.exports=n.p+"assets/img/cc2530_pin_layout.d28e67d9.png"},61430:(e,t,n)=>{e.exports=n.p+"assets/img/webee_cc2530_cc2591_pinlayout.c476b9b5.png"}}]);