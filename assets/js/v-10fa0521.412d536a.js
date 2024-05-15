"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54381],{412527:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-10fa0521","path":"/devices/TS0601_floor_thermostat.html","title":"TuYa TS0601_floor_thermostat control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_floor_thermostat control via MQTT","description":"Integrate your TuYa TS0601_floor_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715802425000},"filePathRelative":"devices/TS0601_floor_thermostat.md"}')},212095:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var d=o(166252);const a=(0,d._)("h1",{id:"tuya-ts0601-floor-thermostat",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#tuya-ts0601-floor-thermostat","aria-hidden":"true"},"#"),(0,d.Uk)(" TuYa TS0601_floor_thermostat")],-1),l=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"TS0601_floor_thermostat")],-1),s=(0,d._)("td",null,"Vendor",-1),i=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Zigbee thermostat for electric floors")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"climate (system_mode, preset, running_state, current_heating_setpoint, local_temperature, local_temperature_calibration), deadzone_temperature, lock (state), schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, linkquality")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_floor_thermostat.png",alt:"TuYa TS0601_floor_thermostat"})])],-1),h=(0,d._)("tr",null,[(0,d._)("td",null,"White-label"),(0,d._)("td",null,"ELECTSMART EST-120Z")],-1),n=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>running_state</code>, <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>0.1</code>.</li></ul><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric" aria-hidden="true">#</a> Deadzone temperature (numeric)</h3><p>Floor temperature. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text" aria-hidden="true">#</a> Schedule monday (text)</h3><p>Schedule for monday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text" aria-hidden="true">#</a> Schedule tuesday (text)</h3><p>Schedule for tuesday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text" aria-hidden="true">#</a> Schedule wednesday (text)</h3><p>Schedule for wednesday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text" aria-hidden="true">#</a> Schedule thursday (text)</h3><p>Schedule for thursday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text" aria-hidden="true">#</a> Schedule friday (text)</h3><p>Schedule for friday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text" aria-hidden="true">#</a> Schedule saturday (text)</h3><p>Schedule for saturday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text" aria-hidden="true">#</a> Schedule sunday (text)</h3><p>Schedule for sunday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),a,(0,d._)("table",null,[l,(0,d._)("tbody",null,[c,(0,d._)("tr",null,[s,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,d.w5)((()=>[(0,d.Uk)("TuYa")])),_:1})])]),i,u,r,h])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),n])}]])}}]);