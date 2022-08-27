"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41297],{46457:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-c1ea6bc8",path:"/devices/mTouch_Astro.html",title:"CTM Lyng mTouch_Astro control via MQTT",lang:"en-US",frontmatter:{title:"CTM Lyng mTouch_Astro control via MQTT",description:"Integrate your CTM Lyng mTouch_Astro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Device_mode (enum)",slug:"device-mode-enum",children:[]},{level:3,title:"Device_enabled (binary)",slug:"device-enabled-binary",children:[]},{level:3,title:"Child_lock (binary)",slug:"child-lock-binary",children:[]},{level:3,title:"Group_id (numeric)",slug:"group-id-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/mTouch_Astro.md",git:{updatedTime:1661623134e3}}},41382:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});const d=(0,o(66252).uE)('<h1 id="ctm-lyng-mtouch-astro" tabindex="-1"><a class="header-anchor" href="#ctm-lyng-mtouch-astro" aria-hidden="true">#</a> CTM Lyng mTouch_Astro</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>mTouch_Astro</td></tr><tr><td>Vendor</td><td>CTM Lyng</td></tr><tr><td>Description</td><td>mTouch Astro OP, astro clock</td></tr><tr><td>Exposes</td><td>switch (state), action, device_mode, device_enabled, child_lock, group_id, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/mTouch_Astro.jpg" alt="CTM Lyng mTouch_Astro"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum" aria-hidden="true">#</a> Device_mode (enum)</h3><p>Device mode.. Value can be found in the published state on the <code>device_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>astro_clock</code>, <code>timer</code>, <code>daily_timer</code>, <code>weekly_timer</code>.</p><h3 id="device-enabled-binary" tabindex="-1"><a class="header-anchor" href="#device-enabled-binary" aria-hidden="true">#</a> Device_enabled (binary)</h3><p>Turn the device on or off. Value can be found in the published state on the <code>device_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_enabled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_enabled&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> device_enabled is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child_lock (binary)</h3><p>Physical input on the device enabled/disabled. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>locked</code> child_lock is ON, if <code>unlocked</code> OFF.</p><h3 id="group-id-numeric" tabindex="-1"><a class="header-anchor" href="#group-id-numeric" aria-hidden="true">#</a> Group_id (numeric)</h3><p>The device sends commands with this group ID. Put dvices in this group to control them.. Value can be found in the published state on the <code>group_id</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),i={},c=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);