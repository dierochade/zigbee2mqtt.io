"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81505],{927032:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-18c5234c","path":"/devices/SIN-4-RS-20_PRO.html","title":"NodOn SIN-4-RS-20_PRO control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"NodOn SIN-4-RS-20_PRO control via MQTT","description":"Integrate your NodOn SIN-4-RS-20_PRO via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Calibration (enum)","slug":"calibration-enum","link":"#calibration-enum","children":[]},{"level":3,"title":"Calibration vertical run time up (numeric)","slug":"calibration-vertical-run-time-up-numeric","link":"#calibration-vertical-run-time-up-numeric","children":[]},{"level":3,"title":"Calibration vertical run time down (numeric)","slug":"calibration-vertical-run-time-down-numeric","link":"#calibration-vertical-run-time-down-numeric","children":[]},{"level":3,"title":"Calibration rotation run time up (numeric)","slug":"calibration-rotation-run-time-up-numeric","link":"#calibration-rotation-run-time-up-numeric","children":[]},{"level":3,"title":"Calibration rotation run time down (numeric)","slug":"calibration-rotation-run-time-down-numeric","link":"#calibration-rotation-run-time-down-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715802425000},"filePathRelative":"devices/SIN-4-RS-20_PRO.md"}')},28302:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var i=o(166252);const a=(0,i._)("h1",{id:"nodon-sin-4-rs-20-pro",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#nodon-sin-4-rs-20-pro","aria-hidden":"true"},"#"),(0,i.Uk)(" NodOn SIN-4-RS-20_PRO")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SIN-4-RS-20_PRO")],-1),l=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Roller shutter relay switch")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position, tilt), calibration, calibration_vertical_run_time_up, calibration_vertical_run_time_down, calibration_rotation_run_time_up, calibration_rotation_run_time_down, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SIN-4-RS-20_PRO.png",alt:"NodOn SIN-4-RS-20_PRO"})])],-1),s=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-enum" tabindex="-1"><a class="header-anchor" href="#calibration-enum" aria-hidden="true">#</a> Calibration (enum)</h3><p>Automatic calibration of the roller shutter.. Value can be found in the published state on the <code>calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>stop</code>, <code>start</code>.</p><h3 id="calibration-vertical-run-time-up-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-vertical-run-time-up-numeric" aria-hidden="true">#</a> Calibration vertical run time up (numeric)</h3><p>Manuel calibration: Set vertical run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_up&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id="calibration-vertical-run-time-down-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-vertical-run-time-down-numeric" aria-hidden="true">#</a> Calibration vertical run time down (numeric)</h3><p>Manuel calibration: Set vertical run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_vertical_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_vertical_run_time_down&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>10 ms</code>.</p><h3 id="calibration-rotation-run-time-up-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-rotation-run-time-up-numeric" aria-hidden="true">#</a> Calibration rotation run time up (numeric)</h3><p>Manuel calibration: Set rotation run time up of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_up</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_up&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p><h3 id="calibration-rotation-run-time-down-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-rotation-run-time-down-numeric" aria-hidden="true">#</a> Calibration rotation run time down (numeric)</h3><p>Manuel calibration: Set rotation run time down of the roller shutter. Do not change it if your roller shutter is already calibrated.. Value can be found in the published state on the <code>calibration_rotation_run_time_down</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_rotation_run_time_down&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>ms</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),m={},_=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[n,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=NodOn"},{default:(0,i.w5)((()=>[(0,i.Uk)("NodOn")])),_:1})])]),c,d,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);