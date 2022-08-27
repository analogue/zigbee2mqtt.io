"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42702],{2964:(e,t,l)=>{l.r(t),l.d(t,{data:()=>i});const i={key:"v-65961b95",path:"/devices/RTCGQ14LM.html",title:"Xiaomi RTCGQ14LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCGQ14LM control via MQTT",description:"Integrate your Xiaomi RTCGQ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-30T08:00:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Motion_sensitivity (enum)",slug:"motion-sensitivity-enum",children:[]},{level:3,title:"Detection_interval (numeric)",slug:"detection-interval-numeric",children:[]},{level:3,title:"Trigger_indicator (binary)",slug:"trigger-indicator-binary",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCGQ14LM.md",git:{updatedTime:1661623134e3}}},73459:(e,t,l)=>{l.r(t),l.d(t,{default:()=>le});var i=l(66252),n=l(92511);const a=(0,i._)("h1",{id:"xiaomi-rtcgq14lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#xiaomi-rtcgq14lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Xiaomi RTCGQ14LM")],-1),A=(0,i._)("table",null,[(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])]),(0,i._)("tbody",null,[(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"RTCGQ14LM")]),(0,i._)("tr",null,[(0,i._)("td",null,"Vendor"),(0,i._)("td",null,"Xiaomi")]),(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Aqara P1 human body movement and illuminance sensor")]),(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"occupancy, illuminance_lux, illuminance, motion_sensitivity, detection_interval, trigger_indicator, device_temperature, battery, voltage, linkquality")]),(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCGQ14LM.jpg",alt:"Xiaomi RTCGQ14LM"})])]),(0,i._)("tr",null,[(0,i._)("td",null,"White-label"),(0,i._)("td",null,"Xiaomi MS-S02")])])],-1),r=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),u=(0,i._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,i.Uk)(" Adapter firmware")],-1),o=(0,i._)("p",null,"In order for this device to work, at least the following firmware is required on your adapter:",-1),d=(0,i.Uk)("CC2530/CC2531: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},s=(0,i._)("code",null,"20211115",-1),h=(0,i.Uk)("CC1352/CC2652: "),p={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("code",null,"20211114",-1),_=(0,i.Uk)("CC2538: "),U={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},v=(0,i._)("code",null,"20211222",-1),b=(0,i.Uk)("Conbee II: "),f={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},k=(0,i._)("code",null,"0x26720700",-1),g=(0,i._)("p",null,[(0,i._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),y=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),w=(0,i._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, try with a single short button press.",-1),T=(0,i._)("p",null,[(0,i._)("img",{src:n,alt:"RTCGQ14LM pairing"})],-1),q=(0,i._)("p",null,[(0,i._)("em",null,"Note: When you fail to pair a device, try replacing the battery, this could solve the problem.")],-1),x=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),F=(0,i.Uk)("This device supports OTA updates, for more information see "),S=(0,i.Uk)("OTA updates"),P=(0,i.Uk)("."),B=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),L=(0,i.Uk)("How to use device type specific configuration"),Q=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"occupancy_timeout"),(0,i.Uk)(': Time in seconds after which occupancy is cleared after detecting it (default is "detection_interval" + 2 seconds). The value must be equal to or greater than "detection_interval", and it can also be a fraction. The value must be a number with a minimum value of '),(0,i._)("code",null,"0")])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"no_occupancy_since"),(0,i.Uk)(": Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a "),(0,i._)("code",null,'{"no_occupancy_since": 10}'),(0,i.Uk)(" will be send after 10 seconds and a "),(0,i._)("code",null,'{"no_occupancy_since": 60}'),(0,i.Uk)(" after 60 seconds. The value must be a list of number.")])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"illuminance_precision"),(0,i.Uk)(": Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of "),(0,i._)("code",null,"0"),(0,i.Uk)(" and with a with a maximum value of "),(0,i._)("code",null,"3")])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"illuminance_calibration"),(0,i.Uk)(": Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.")])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"device_temperature_precision"),(0,i.Uk)(": Number of digits after decimal point for device_temperature, takes into effect on next report of device. The value must be a number with a minimum value of "),(0,i._)("code",null,"0"),(0,i.Uk)(" and with a with a maximum value of "),(0,i._)("code",null,"3")])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("code",null,"device_temperature_calibration"),(0,i.Uk)(": Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.")])])],-1),W=(0,i._)("h2",{id:"exposes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,i.Uk)(" Exposes")],-1),N=(0,i._)("h3",{id:"occupancy-binary",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#occupancy-binary","aria-hidden":"true"},"#"),(0,i.Uk)(" Occupancy (binary)")],-1),X=(0,i._)("p",null,[(0,i.Uk)("Indicates whether the device detected occupancy. Value can be found in the published state on the "),(0,i._)("code",null,"occupancy"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. If value equals "),(0,i._)("code",null,"true"),(0,i.Uk)(" occupancy is ON, if "),(0,i._)("code",null,"false"),(0,i.Uk)(" OFF.")],-1),V=(0,i._)("h3",{id:"illuminance-lux-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#illuminance-lux-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Illuminance_lux (numeric)")],-1),C=(0,i._)("p",null,[(0,i.Uk)("Measured illuminance in lux. Value can be found in the published state on the "),(0,i._)("code",null,"illuminance"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The unit of this value is "),(0,i._)("code",null,"lx"),(0,i.Uk)(".")],-1),G=(0,i._)("h3",{id:"illuminance-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#illuminance-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Illuminance (numeric)")],-1),R=(0,i._)("p",null,[(0,i.Uk)("Measured illuminance in lux. Value can be found in the published state on the "),(0,i._)("code",null,"illuminance"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The unit of this value is "),(0,i._)("code",null,"lx"),(0,i.Uk)(".")],-1),M=(0,i._)("h3",{id:"motion-sensitivity-enum",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#motion-sensitivity-enum","aria-hidden":"true"},"#"),(0,i.Uk)(" Motion_sensitivity (enum)")],-1),D=(0,i._)("p",null,[(0,i.Uk)(". Press pairing button right before changing this otherwise it will fail.. Value can be found in the published state on the "),(0,i._)("code",null,"motion_sensitivity"),(0,i.Uk)(" property. To read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") the value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"motion_sensitivity": ""}'),(0,i.Uk)(". To write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") a value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"motion_sensitivity": NEW_VALUE}'),(0,i.Uk)(". The possible values are: "),(0,i._)("code",null,"low"),(0,i.Uk)(", "),(0,i._)("code",null,"medium"),(0,i.Uk)(", "),(0,i._)("code",null,"high"),(0,i.Uk)(".")],-1),E=(0,i._)("h3",{id:"detection-interval-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#detection-interval-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Detection_interval (numeric)")],-1),K=(0,i._)("p",null,[(0,i.Uk)("Time interval for detecting actions. Press pairing button right before changing this otherwise it will fail.. Value can be found in the published state on the "),(0,i._)("code",null,"detection_interval"),(0,i.Uk)(" property. To read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") the value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"detection_interval": ""}'),(0,i.Uk)(". To write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") a value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"detection_interval": NEW_VALUE}'),(0,i.Uk)(". The minimal value is "),(0,i._)("code",null,"2"),(0,i.Uk)(" and the maximum value is "),(0,i._)("code",null,"65535"),(0,i.Uk)(". The unit of this value is "),(0,i._)("code",null,"s"),(0,i.Uk)(".")],-1),H=(0,i._)("h3",{id:"trigger-indicator-binary",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#trigger-indicator-binary","aria-hidden":"true"},"#"),(0,i.Uk)(" Trigger_indicator (binary)")],-1),Z=(0,i._)("p",null,[(0,i.Uk)("When this option is enabled then blue LED will blink once when motion is detected. Press pairing button right before changing this otherwise it will fail.. Value can be found in the published state on the "),(0,i._)("code",null,"trigger_indicator"),(0,i.Uk)(" property. To read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") the value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"trigger_indicator": ""}'),(0,i.Uk)(". To write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") a value publish a message to topic "),(0,i._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,i.Uk)(" with payload "),(0,i._)("code",null,'{"trigger_indicator": NEW_VALUE}'),(0,i.Uk)(". If value equals "),(0,i._)("code",null,"true"),(0,i.Uk)(" trigger_indicator is ON, if "),(0,i._)("code",null,"false"),(0,i.Uk)(" OFF.")],-1),O=(0,i._)("h3",{id:"device-temperature-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#device-temperature-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Device_temperature (numeric)")],-1),j=(0,i._)("p",null,[(0,i.Uk)("Temperature of the device. Value can be found in the published state on the "),(0,i._)("code",null,"device_temperature"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The unit of this value is "),(0,i._)("code",null,"°C"),(0,i.Uk)(".")],-1),I=(0,i._)("h3",{id:"battery-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#battery-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Battery (numeric)")],-1),Y=(0,i._)("p",null,[(0,i.Uk)("Remaining battery in %. Value can be found in the published state on the "),(0,i._)("code",null,"battery"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The minimal value is "),(0,i._)("code",null,"0"),(0,i.Uk)(" and the maximum value is "),(0,i._)("code",null,"100"),(0,i.Uk)(". The unit of this value is "),(0,i._)("code",null,"%"),(0,i.Uk)(".")],-1),z=(0,i._)("h3",{id:"voltage-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#voltage-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Voltage (numeric)")],-1),J=(0,i._)("p",null,[(0,i.Uk)("Voltage of the battery in millivolts. Value can be found in the published state on the "),(0,i._)("code",null,"voltage"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The unit of this value is "),(0,i._)("code",null,"mV"),(0,i.Uk)(".")],-1),$=(0,i._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,i.Uk)(" Linkquality (numeric)")],-1),ee=(0,i._)("p",null,[(0,i.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,i._)("code",null,"linkquality"),(0,i.Uk)(" property. It's not possible to read ("),(0,i._)("code",null,"/get"),(0,i.Uk)(") or write ("),(0,i._)("code",null,"/set"),(0,i.Uk)(") this value. The minimal value is "),(0,i._)("code",null,"0"),(0,i.Uk)(" and the maximum value is "),(0,i._)("code",null,"255"),(0,i.Uk)(". The unit of this value is "),(0,i._)("code",null,"lqi"),(0,i.Uk)(".")],-1),te={},le=(0,l(83744).Z)(te,[["render",function(e,t){const l=(0,i.up)("OutboundLink"),n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,A,r,u,o,(0,i._)("ul",null,[(0,i._)("li",null,[d,(0,i._)("a",c,[s,(0,i.Wm)(l)])]),(0,i._)("li",null,[h,(0,i._)("a",p,[m,(0,i.Wm)(l)])]),(0,i._)("li",null,[_,(0,i._)("a",U,[v,(0,i.Wm)(l)])]),(0,i._)("li",null,[b,(0,i._)("a",f,[k,(0,i.Wm)(l)])])]),g,y,w,T,q,x,(0,i._)("p",null,[F,(0,i.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[S])),_:1}),P]),B,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[L])),_:1})])]),Q,W,N,X,V,C,G,R,M,D,E,K,H,Z,O,j,I,Y,z,J,$,ee],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[l,i]of t)e[l]=i;return e}},92511:e=>{e.exports="data:image/jpeg;base64,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"}}]);