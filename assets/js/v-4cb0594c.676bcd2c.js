"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98989],{495015:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-4cb0594c","path":"/devices/TS0601_fan_and_light_switch.html","title":"TuYa TS0601_fan_and_light_switch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_fan_and_light_switch control via MQTT","description":"Integrate your TuYa TS0601_fan_and_light_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Status indication (binary)","slug":"status-indication-binary","link":"#status-indication-binary","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Fan speed (enum)","slug":"fan-speed-enum","link":"#fan-speed-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715802425000},"filePathRelative":"devices/TS0601_fan_and_light_switch.md"}')},364894:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(166252);const a=(0,o._)("h1",{id:"tuya-ts0601-fan-and-light-switch",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts0601-fan-and-light-switch","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS0601_fan_and_light_switch")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS0601_fan_and_light_switch")],-1),s=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Fan & light switch")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"status_indication, switch (state), power_on_behavior, fan_speed, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_fan_and_light_switch.png",alt:"TuYa TS0601_fan_and_light_switch"})])],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Liwokit Fan+Light-01")],-1),r=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="status-indication-binary" tabindex="-1"><a class="header-anchor" href="#status-indication-binary" aria-hidden="true">#</a> Status indication (binary)</h3><p>Light switch. Value can be found in the published state on the <code>status_indication</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_indication&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> status indication is ON, if <code>OFF</code> OFF.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power-on behavior (enum)</h3><p>Controls the behavior when the device is powered on after power loss. If you get an <code>UNSUPPORTED_ATTRIBUTE</code> error, the device does not support it.. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="fan-speed-enum" tabindex="-1"><a class="header-anchor" href="#fan-speed-enum" aria-hidden="true">#</a> Fan speed (enum)</h3><p>Speed off the fan. Value can be found in the published state on the <code>fan_speed</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_speed&quot;: NEW_VALUE}</code>. The possible values are: <code>minimum</code>, <code>medium</code>, <code>maximum</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),p={},_=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),l,c,u,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),r])}]])}}]);