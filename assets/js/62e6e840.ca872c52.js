"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[9346],{2969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6},l="Brushes",s={unversionedId:"making-a-plugin/brushes",id:"making-a-plugin/brushes",title:"Brushes",description:"Step-by-step instructions on how to make a brush for the Brush Tool:",source:"@site/docs/making-a-plugin/brushes.md",sourceDirName:"making-a-plugin",slug:"/making-a-plugin/brushes",permalink:"/worldtool-docs/docs/making-a-plugin/brushes",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"General Tool Operations",permalink:"/worldtool-docs/docs/making-a-plugin/general-tool-operations"},next:{title:"Shapes",permalink:"/worldtool-docs/docs/making-a-plugin/shapes"}},i={},u=[],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brushes"},"Brushes"),(0,r.kt)("p",null,"Step-by-step instructions on how to make a brush for the Brush Tool:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a new item modifier for selecting your brush."),(0,r.kt)("p",{parentName:"li"},"Example of a brush item modifier:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "function": "minecraft:set_nbt",\n        "tag": "{WorldTool:{Brush:\\"myplugin:example\\",BrushSettings:{Requires:[\\"block\\",\\"area\\"],MaxSize:39}}}"\n    },\n    {\n        "function": "minecraft:set_lore",\n        "lore": [\n            {"nbt":"Translation.\\"myplugin.lore.selected_brush.example\\"","storage": "worldtool:storage","color": "yellow","italic":   false},\n            {"nbt":"Translation.\\"lore.selected_block\\"","storage": "worldtool:storage","color": "light_purple","italic": false},\n            {"nbt":"SelectedItem.tag.WorldTool.PrimaryBlock.State.Name", "entity": "@s","italic": false},\n            "",\n            {"nbt":"Translation.\\"lore.brush.1\\"","storage": "worldtool:storage","interpret": true,"italic": false},\n            {"nbt":"Translation.\\"lore.brush.2\\"","storage": "worldtool:storage","interpret": true,"italic": false}\n        ],\n        "entity": "this",\n        "replace": true\n    }\n]\n')),(0,r.kt)("p",{parentName:"li"},"The parts you need to pay attention to are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Brush")," ID."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Requires")," list, which specifies what the brush needs to use. The available requirements are ",(0,r.kt)("inlineCode",{parentName:"li"},"block")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"area"),"."),(0,r.kt)("li",{parentName:"ul"},"The first ",(0,r.kt)("a",{parentName:"li",href:"translations#adding-translations-to-existing-languages"},"translation")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},'"lore"')," list."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a new function for running when your brush is selected."),(0,r.kt)("p",{parentName:"li"},"Example of a brush selection function:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-mcfunction"},"# Called by worldtool:ui_brush/select_brush/menu\n# Example of a brush selection function\n\n# This is used to make sure the user is holding the Brush Tool\nfunction worldtool:ui_brush/check_tool\n\n# Call your item modifier\nitem modify entity @s weapon.mainhand myplugin:example_brush\nfunction worldtool:ui/sound.change_item\n\n# Options you want to change when your brush is selected\nitem modify entity @s weapon.mainhand worldtool:brush_tool/settings/before_block/off\n#(...)\n\n# Go back to the main Brush Tool menu\nfunction worldtool:ui_brush/menu\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a new predicate for checking when your brush is selected."),(0,r.kt)("p",{parentName:"li"},"Example of a brush predicate:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "condition": "minecraft:entity_properties",\n\n    "entity": "this",\n    "predicate": {\n        "equipment": {\n            "mainhand": {\n                "nbt": "{WorldTool:{Brush:\\"myplugin:example\\"}}"\n            }\n        }\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"hooks#ui_brushbrush_list"},(0,r.kt)("inlineCode",{parentName:"a"},"ui_brush/brush_list")," hook")," to display a button for your brush, which when clicked calls the function you made for it. Use the predicate you made to display a grayed out button when the brush is already selected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"hooks#ui_brushmenuadd_tags"},(0,r.kt)("inlineCode",{parentName:"a"},"ui_brush/menu/add_tags")," hook")," to remove or add the settings you want to have available in the menu. The full list of tags is:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.brush_size")," (Default = available)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.hollow")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.overwrite")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.structure")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.before_block")," (Default = available)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.structure")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.structure_rotation")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.structure_mirror")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.structure_offset")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.greenery_rate")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.remove_current_greenery")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.flat")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.axis")," (Default = unavailable)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.setting.update_block")," (Default = available)",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wt.brush_selections.normal")," (Default = available)",(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"hooks#process_startbrushstart"},(0,r.kt)("inlineCode",{parentName:"a"},"process_start/brush/start")," hook")," to check if your brush is selected with its predicate, and if so, run a function to use the brush. If you want to use a process for it, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:process_start/brush/start/normal/start")," function and proceed to the next step. If not, this is the end of the instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make another function, to set up your brush process."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-mcfunction"},'# Example of a process setup function\n\n# Tell the function that sets up all the processes that everything is alright\nscoreboard players set #success worldtool 1\n\ndata modify storage worldtool:storage Processes prepend value {DisplayName:\'{"nbt":"Translation.\\\\"myplugin.process.brush.example\\\\"","storage":"worldtool:storage"}\',ID:"myplugin:example",Tags:["myplugin.process.example","wt.no_message"]}\n# If you have set up blocks per tick data for this process\ndata modify storage worldtool:storage Processes[0].BlocksPerTick set from storage worldtool:storage BlocksPerTick.Processes[{ID:"worldtool:paint"}].Value\n\nfunction worldtool:process_start/brush/start/normal/setup_process/set_process_values\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"hooks#process_startbrushnormal_startprocesses"},(0,r.kt)("inlineCode",{parentName:"a"},"process_start/brush/normal_start/processes")," hook")," to check if your brush is selected with its predicate, and if so, run your process setup function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"processes#setting-up-files"},"Follow these steps to make your process work"),", and you're all set!"))))}c.isMDXComponent=!0}}]);