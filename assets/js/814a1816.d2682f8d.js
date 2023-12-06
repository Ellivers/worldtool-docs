"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[550],{4200:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=n(5893),s=n(1151);const t={sidebar_position:5},a="General Tool Operations",l={id:"making-a-plugin/general-tool-operations",title:"General Tool Operations",description:"To add a button to either open your operation menu or start your operation, use the uigeneral/pluginpage hook.",source:"@site/docs/making-a-plugin/general-tool-operations.md",sourceDirName:"making-a-plugin",slug:"/making-a-plugin/general-tool-operations",permalink:"/worldtool-docs/docs/making-a-plugin/general-tool-operations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Processes",permalink:"/worldtool-docs/docs/making-a-plugin/processes"},next:{title:"Brushes",permalink:"/worldtool-docs/docs/making-a-plugin/brushes"}},i={},c=[{value:"Menu",id:"menu",level:2},{value:"Block Selection",id:"block-selection",level:2},{value:"Start",id:"start",level:2},{value:"Set Up Process",id:"set-up-process",level:2},{value:"Run Process",id:"run-process",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"general-tool-operations",children:"General Tool Operations"}),"\n",(0,r.jsxs)(o.p,{children:["To add a button to either open your operation menu or start your operation, use the ",(0,r.jsxs)(o.a,{href:"hooks#ui_generalplugin_page",children:[(0,r.jsx)(o.code,{children:"ui_general/plugin_page"})," hook"]}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"menu",children:"Menu"}),"\n",(0,r.jsx)(o.p,{children:"A General Tool operation menu can look something like this:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-mcfunction",children:'# Example starting menu for a General Tool operation\r\n\r\nfunction worldtool:ui/clear_chat\r\n\r\n# Don\'t forget to remove this tag with the "ui/remove_menu_tags" hook\r\ntag @s add myplugin.menu.example\r\n\r\n# Back button specifically for going back to the General Tool\'s main menu\r\n# For non-specific back buttons, use worldtool:ui/back_button and the "ui/back_using_tags" hook\r\nfunction worldtool:ui_general/back_button\r\n\r\n# Display the menu itself\r\ntellraw @s {"nbt":"Translation.\\"myplugin.some_menu_text\\"","storage":"worldtool:storage"}\r\n\r\n# Display a close button\r\nfunction worldtool:ui/close_button\r\n\r\n# This makes the feedback message not show up for this function\r\nfunction worldtool:ui/anti_feedback_chat_message/load\n'})}),"\n",(0,r.jsx)(o.h2,{id:"block-selection",children:"Block Selection"}),"\n",(0,r.jsxs)(o.p,{children:["If you want a ",(0,r.jsx)(o.a,{href:"../chat-menu-system#block-selection",children:"block selection menu"})," directly on your main menu, call the ",(0,r.jsx)(o.code,{children:"primary"}),", ",(0,r.jsx)(o.code,{children:"secondary"})," or ",(0,r.jsx)(o.code,{children:"both"})," function inside ",(0,r.jsx)(o.code,{children:"worldtool:ui_general/input/start/"}),", and then use the ",(0,r.jsx)(o.a,{href:"hooks#inputprimary_block",children:(0,r.jsx)(o.code,{children:"input/primary_block"})})," and/or ",(0,r.jsx)(o.a,{href:"hooks#inputsecondary_block",children:(0,r.jsx)(o.code,{children:"input/secondary_block"})})," hooks to run something when a block is selected."]}),"\n",(0,r.jsx)(o.h2,{id:"start",children:"Start"}),"\n",(0,r.jsxs)(o.p,{children:["General Tool operations are started with a function that adds a setup tag and runs the function ",(0,r.jsx)(o.code,{children:"worldtool:process_start/general/load"}),". Make sure to remove the tag in the ",(0,r.jsxs)(o.a,{href:"hooks#uiremove_menu_tags",children:[(0,r.jsx)(o.code,{children:"ui/remove_menu_tags"})," hook"]}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-mcfunction",children:"# Example of an operation starting function\r\ntag @s add mplugin.setup.example\r\nfunction worldtool:process_start/general/load\n"})}),"\n",(0,r.jsx)(o.h2,{id:"set-up-process",children:"Set Up Process"}),"\n",(0,r.jsxs)(o.p,{children:["Use the ",(0,r.jsxs)(o.a,{href:"hooks#process_startcommonsetup_process",children:[(0,r.jsx)(o.code,{children:"process_start/common/setup_process"})," hook"]})," to check for your setup and run a function to set up your process."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-mcfunction",children:'# Example of a process setup function\r\n\r\n# Tell the function that sets up all the processes that everything is alright\r\nscoreboard players set #success worldtool 1\r\n\r\ndata modify storage worldtool:storage Processes prepend value {ProcessName:\'{"nbt":"Translation.\\"myplugin.process.example\\"","storage":"worldtool:storage"}\',ID:"myplugin:example",Tags:["myplugin.process.example"]}\r\n# If you have set up blocks per tick data for this process\r\ndata modify storage worldtool:storage Processes[0].BlocksPerTick set from storage worldtool:storage BlocksPerTick.Processes[{ID:"myplugin:example"}]\r\n\r\nfunction worldtool:process_start/general/set_process_values\r\n\r\n# Remove the setup tag\r\ntag @s remove myplugin.setup.example\r\n\r\n# This last line is unneeded if your process does not affect any blocks\r\nfunction worldtool:technical/save_load/backup/load\n'})}),"\n",(0,r.jsxs)(o.p,{children:["If you want your menu to re-open after the process has started, use the ",(0,r.jsxs)(o.a,{href:"hooks#uireopen_menuafter_starting",children:[(0,r.jsx)(o.code,{children:"ui/reopen_menu/after_starting"})," hook"]}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"run-process",children:"Run Process"}),"\n",(0,r.jsxs)(o.p,{children:["Main page: ",(0,r.jsx)(o.a,{href:"processes",children:"Processes"}),"."]})]})}function d(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);