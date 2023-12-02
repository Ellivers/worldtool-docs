"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[6083],{8058:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>n,toc:()=>i});var s=o(7462),a=(o(7294),o(3905));const r={sidebar_position:4},l="Processes",n={unversionedId:"making-a-plugin/processes",id:"making-a-plugin/processes",title:"Processes",description:"About processes and process data.",source:"@site/docs/making-a-plugin/processes.md",sourceDirName:"making-a-plugin",slug:"/making-a-plugin/processes",permalink:"/worldtool-docs/docs/making-a-plugin/processes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/worldtool-docs/docs/making-a-plugin/translations"},next:{title:"General Tool Operations",permalink:"/worldtool-docs/docs/making-a-plugin/general-tool-operations"}},p={},i=[{value:"Setting up Blocks per Tick",id:"setting-up-blocks-per-tick",level:2},{value:"Setting Up Files",id:"setting-up-files",level:2}],c={toc:i},u="wrapper";function k(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,s.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"processes"},"Processes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../technical/processes"},"About processes and process data"),"."),(0,a.kt)("h2",{id:"setting-up-blocks-per-tick"},"Setting up Blocks per Tick"),(0,a.kt)("p",null,'A "blocks per tick" value is simply how many blocks the process handles every tick. This is not required, but can help for customizability.'),(0,a.kt)("p",null,"All you need to do is add your blocks per tick configuration with the ",(0,a.kt)("a",{parentName:"p",href:"hooks#setup_blocks_per_tick"},(0,a.kt)("inlineCode",{parentName:"a"},"setup_blocks_per_tick")," hook"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mcfunction"},'# Sets the default blocks per tick value and different preset values for the "myplugin:example" process\nexecute unless data storage worldtool:storage BlocksPerTick.Processes[{ID:"myplugin:example"}] run data modify storage worldtool:storage BlocksPerTick.Processes append value {ID:"myplugin:example",Value:4000,Presets:{Low:600,Medium:2000,High:4000}}\n')),(0,a.kt)("p",null,"You can then get the current value for your process with the ",(0,a.kt)("inlineCode",{parentName:"p"},'BlocksPerTick.Processes[{ID:"myplugin:example"}].Value')," data."),(0,a.kt)("h2",{id:"setting-up-files"},"Setting Up Files"),(0,a.kt)("p",null,"To follow these steps, you'll have to first have set up a process as a ",(0,a.kt)("a",{parentName:"p",href:"general-tool-operations"},"General Tool operation"),", ",(0,a.kt)("a",{parentName:"p",href:"brushes"},"brush")," or ",(0,a.kt)("a",{parentName:"p",href:"shapes"},"shape")," (or perhaps through a custom start system?)."),(0,a.kt)("p",null,"How to set up a basic process that iterates over an area:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ellivers/WorldTool/blob/master/other%20stuff/scripts/process_folder_generator.py"},"process structure generator python script"),' to more easily create a base folder structure to work from. When running the script, enter your process name (for example: "example") and the path where it\'s supposed to be (for example "myplugin:processes"). Then, just copy the result folder inside the "output" folder and paste it where you want it to be.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the process structure is in place, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," process function, delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"# PROCESS-SPECIFIC COMMANDS HERE")," line and replace it with whatever commands you want to run for every block. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"worldtool:process/place_block.primary")," function to place the primary process block and the ",(0,a.kt)("inlineCode",{parentName:"p"},"worldtool:process/place_block.secondary")," function to place the secondary process block. Before placing a block, make sure you're not replacing a block with the same block by checking ",(0,a.kt)("inlineCode",{parentName:"p"},"unless blocks ~ ~ ~ ~ ~ ~ 27451 1 19 all")," (primary block) or ",(0,a.kt)("inlineCode",{parentName:"p"},"unless blocks ~ ~ ~ ~ ~ ~ 27449 1 19 all")," (secondary block) before placing a block."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-mcfunction"},"# The logic that the Fill process uses\nexecute unless blocks ~ ~ ~ ~ ~ ~ 27451 1 19 all run function worldtool:process/place_block.primary\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That's all for the logic itself. To make the process actually run, you need to add a check using the ",(0,a.kt)("a",{parentName:"p",href:"hooks#processcheck_tags"},(0,a.kt)("inlineCode",{parentName:"a"},"process/check_tags")," hook"),". For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"execute if entity @s[tag=myplugin.process.example] run function myplugin:processes/example/main"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your process is all ready to go!"))))}k.isMDXComponent=!0}}]);