"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92649],{896888:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-39822a3f","path":"/guide/adapters/","title":"Supported Adapters","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1,"next":"../installation/"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Coordinator backups","slug":"coordinator-backups","link":"#coordinator-backups","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]}]}],"git":{"updatedTime":1715802425000},"filePathRelative":"guide/adapters/README.md"}')},215750:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var a=r(166252);const o=(0,a._)("h1",{id:"supported-adapters",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#supported-adapters","aria-hidden":"true"},"#"),(0,a.Uk)(" Supported Adapters")],-1),i=(0,a._)("p",null,"All officially supported adapters are listed on this page. Note that before an adapter can be used with Zigbee2MQTT it has to be flashed with a coordinator firmware (some adapters come preflashed).",-1),n={class:"custom-container tip"},s=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),d=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),l=(0,a._)("p",null,"Before buying an adapter, please read the notes below!",-1),u=(0,a.uE)("<li>Network adapters connected via WiFi might have reduced stability as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections. If cannot use a locally connected USB or UART/GPIO adapter then the recommendation is to use remote adapter that connected via Ethernet (wired) to avoid issues.</li><li>What are the differences between the various CC2652/CC1352 chips? <ul><li>Chips ending with <code>P</code> have a power amplifier which support up-to 20dBm vs 5dBm on adapters ending with <code>R</code>/<code>RB</code>.</li><li>Chips starting with <code>CC1352</code> support the sub-1 GHz frequency (which is not relevant for Zigbee since it uses 2.4 GHz), <code>CC2652</code> only supports 2.4 GHz. So for Zigbee2MQTT purposes there is no difference between <code>CC1352</code> and <code>CC2652</code>.</li><li>Chips ending with <code>RB</code> don&#39;t require a crystal on the PCB, this only makes a difference for the manufacturing process.</li></ul></li>",2),c=(0,a._)("h3",{id:"coordinator-backups",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#coordinator-backups","aria-hidden":"true"},"#"),(0,a.Uk)(" Coordinator backups")],-1),h=(0,a._)("p",null,[(0,a.Uk)("Note that only adapters based on zStack or EmberZNet currently support backing up the coordinator ("),(0,a._)("code",null,"coordinator_backup.json"),(0,a.Uk)(").")],-1),p=(0,a._)("h4",{id:"flashing-an-existing-adapter",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#flashing-an-existing-adapter","aria-hidden":"true"},"#"),(0,a.Uk)(" Flashing an existing adapter")],-1),f={href:"https://www.zigbee2mqtt.io/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices",target:"_blank",rel:"noopener noreferrer"},g=(0,a._)("h4",{id:"is-your-os-unable-to-find-your-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#is-your-os-unable-to-find-your-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Is your OS unable to find your device?")],-1),m={href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"},b={href:"https://ftdichip.com/drivers/vcp-drivers/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.wch-ic.com/downloads/category/30.html",target:"_blank",rel:"noopener noreferrer"},w=(0,a._)("h3",{id:"router",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#router","aria-hidden":"true"},"#"),(0,a.Uk)(" Router")],-1),_=(0,a._)("p",null,"Besides serving as a coordinator some adapters can also be used as a Zigbee router (check if there is a router firmware by clicking on your adapter). To factory reset/pair:",-1),v=(0,a._)("li",null,"Texas Instruments CC2531: press the S2 button for 5 seconds.",-1),y=(0,a._)("li",null,"Texas Instruments CC2530: power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times).",-1),C=(0,a._)("li",null,"Adapters based on CC2652/CC1352: single press (one of the) buttons on the device",-1),U={href:"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.zigbee2mqtt.io/devices/SLZB-06M.html",target:"_blank",rel:"noopener noreferrer"},S={},W=(0,r(983744).Z)(S,[["render",function(e,t){const r=(0,a.up)("RouterLink"),S=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[o,i,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(r,{to:"/guide/adapters/zstack.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("zStack based (Texas Instruments)")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"/guide/adapters/emberznet.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("EmberZNet based (Silicon Labs)")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"/guide/adapters/deconz.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("deCONZ based (Dresden Elektronik)")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"/guide/adapters/zigate.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("ZiGate based")])),_:1})])]),(0,a._)("div",n,[s,(0,a._)("p",null,[(0,a.Uk)("Want to migrate to a different adapter? Read "),(0,a.Wm)(r,{to:"/guide/faq/#how-do-i-migrate-from-one-adapter-to-another"},{default:(0,a.w5)((()=>[(0,a.Uk)("this")])),_:1})])]),d,l,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("Want to migrate to a different adapter? This may require repairing all your devices in some cases, see "),(0,a.Wm)(r,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,a.w5)((()=>[(0,a.Uk)("FAQ")])),_:1})]),u]),c,h,p,(0,a._)("p",null,[(0,a.Uk)("Flashing tools can be used to upgrade the firmware on an existing adapter without needing to repair devices. See the "),(0,a._)("a",f,[(0,a.Uk)("FAQ"),(0,a.Wm)(S)]),(0,a.Uk)(" for information on what does and does not require repairing of devices.")]),g,(0,a._)("p",null,[(0,a.Uk)("If you're asking yourself \"Why won't my dongle or adapter show up?\" when you are using (for example) Flash Programmer 2, chances are that your OS can't communicate with your device over VCP (Virtual COM Port) serial port, causing your dongle not showing up as a flashable device. To fix this problem, be sure to install a USB-to-UART bridge/converter VCP driver for your operating system like the one at "),(0,a._)("a",m,[(0,a.Uk)("Silicon Labs"),(0,a.Wm)(S)]),(0,a.Uk)(", "),(0,a._)("a",b,[(0,a.Uk)("FTDI Chip"),(0,a.Wm)(S)]),(0,a.Uk)(", or "),(0,a._)("a",k,[(0,a.Uk)("WCH (CH34x/CH91xx)"),(0,a.Wm)(S)]),(0,a.Uk)(".")]),w,_,(0,a._)("ul",null,[v,y,C,(0,a._)("li",null,[(0,a.Uk)("Adapters based on Silicon Labs EmberZNet: "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",U,[(0,a.Uk)("Sonoff Dongle-E"),(0,a.Wm)(S)])]),(0,a._)("li",null,[(0,a._)("a",x,[(0,a.Uk)("SMLight SLZB-06M"),(0,a.Wm)(S)])])])])])])}]])}}]);