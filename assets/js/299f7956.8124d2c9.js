"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[882],{7742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},o="Processes",i={unversionedId:"technical/processes",id:"technical/processes",title:"Processes",description:"A process is some code that repeats itself and is run every tick until it's done.",source:"@site/docs/technical/processes.md",sourceDirName:"technical",slug:"/technical/processes",permalink:"/worldtool-docs/docs/technical/processes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Technical",permalink:"/worldtool-docs/docs/category/technical"},next:{title:"Area Storage System",permalink:"/worldtool-docs/docs/technical/area-storage-system"}},p={},s=[{value:"Process Data",id:"process-data",level:2},{value:"List of Processes",id:"list-of-processes",level:2},{value:"Fill",id:"fill",level:3},{value:"Replace",id:"replace",level:3},{value:"Filter Measure",id:"filter-measure",level:3},{value:"Clone",id:"clone",level:3},{value:"Randomization Source",id:"randomization-source",level:3},{value:"Randomize",id:"randomize",level:3},{value:"Save Area",id:"save-area",level:3},{value:"Load Area",id:"load-area",level:3},{value:"Checkered",id:"checkered",level:3},{value:"Shell",id:"shell",level:3},{value:"Outline",id:"outline",level:3},{value:"Greenery",id:"greenery",level:3},{value:"Shatter",id:"shatter",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Smooth",id:"smooth",level:3},{value:"Command List",id:"command-list",level:3},{value:"Paint",id:"paint",level:3},{value:"Replace (Brush)",id:"replace-brush",level:3},{value:"Cylinder",id:"cylinder",level:3},{value:"Cone",id:"cone",level:3},{value:"Sphere",id:"sphere",level:3},{value:"Log",id:"log",level:2}],k={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"processes"},"Processes"),(0,r.kt)("p",null,"A process is some code that repeats itself and is run every tick until it's done."),(0,r.kt)("p",null,"Processes can store blocks they use in the chunk at 27450 19."),(0,r.kt)("h2",{id:"process-data"},"Process Data"),(0,r.kt)("p",null,"A process is started by inputting a compound with some data."),(0,r.kt)("h1",{id:""}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manually set:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," (String) - The process ID",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"DisplayName")," (String) - A string containing JSON text of the process name.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," (List) - Tags to add to the process entity.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"SecondaryTags")," (List, optional) - Tags to add to a secondary process entity.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," (Compound, optional) - Additional input data the process might want.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," (Compound, optional) - If the process provides output, this is where it is put.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"BlocksPerTick")," (Integer, optional (if not set, will default to maximum integer)) - The ",(0,r.kt)("a",{parentName:"p",href:"../configuration#blocks-per-tick"},"blocks per tick")," to use for this process.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," (Integer, used by shape generation processes) - The rough size of the finished shape.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Automatically set:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"StartType")," (String, default options are ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:common"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:general"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:brush"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:shape"),") - What system to use for starting the process.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Positions")," (Compound, not used by single-position processes) - Some positions to use.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (List of 3 doubles) - The first corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"2")," (List of 3 doubles) - The second corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary")," (List of 3 doubles, optional) - Starting position for a secondary process entity.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"BlockPositions")," (Compound, used by most General Tool processes) - From which positions to grab process blocks.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Primary")," (List of 3 doubles, optional) - From where to grab the primary block.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary")," (List of 3 doubles, optional) - From where to grab the secondary block.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Position")," (List of 3 doubles, used by single-position processes) - Starting position.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Blocks")," (Compound, used by most Brush Tool and Shape Generation Tool processes) - Which blocks to use as process blocks.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Primary")," (Compound, optional) - The primary block.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"State")," (Compound) - The block's state.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," (String) - The block's ID.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","(Other values)",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," (Compound, optional) - The block's data.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Secondary")," (Compound, optional) - The secondary block.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"State")," (Compound) - The block's state.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," (String) - The block's ID.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","(Other values)",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," (Compound, optional) - The block's data.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"AffectedArea")," (Compound, optional) - Information to give to the backup process, if the affected area is not within the standard positions.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"From")," (List of 3 doubles) - The first corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"To")," (List of 3 doubles) - The second corner.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Owner")," (Integer, optional) - The WorldTool ID of the user that started the process."),(0,r.kt)("h2",{id:"list-of-processes"},"List of Processes"),(0,r.kt)("p",null,"A list of all processes and their most important data. In no particular order."),(0,r.kt)("p",null,"<",">"," around a value denotes that the value is not always there."),(0,r.kt)("h3",{id:"fill"},"Fill"),(0,r.kt)("p",null,"The process for filling an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/fill"},"Fill operation")," and the Brush Tool's ",(0,r.kt)("a",{parentName:"p",href:"../brush_tool/place"},"Place brush"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:fill"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.fill"),(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"replace"},"Replace"),(0,r.kt)("p",null,"The process for replacing blocks in an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/replace"},"Replace operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:replace"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"filter-measure"},"Filter Measure"),(0,r.kt)("p",null,"The process for counting specific blocks in an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/measure"},"Measure > Filter operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:filter_measure"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.filter_measure"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.filter_measure.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.filter_measure.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"clone"},"Clone"),(0,r.kt)("p",null,"The process for cloning an area to another place. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone"},"Clone operation")," with the ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone#modes"},"Standard mode"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:clone"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.message.clone"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.message.non_default"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.secondary_process_entity"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.move"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.rotate"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.filter.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.filter.exclude"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.mirror.x"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.mirror.y"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.mirror.z"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"SecondaryTags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.filter.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.clone.filter.exclude"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Rotation"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"X")," (Integer) - Rotation around the X axis",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," (Integer) - Rotation around the Y axis",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," (Integer) - Rotation around the Z axis",(0,r.kt)("br",null),"\n}"),(0,r.kt)("h3",{id:"randomization-source"},"Randomization Source"),(0,r.kt)("p",null,"The process for selecting a source for randomization. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/randomize#select-source"},"Randomize operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:randomization_source"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.randomization_source"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.no_message"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.randomization_source.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"randomize"},"Randomize"),(0,r.kt)("p",null,"The process for picking random blocks. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/randomize"},"Randomize operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:randomize"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.randomize"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.randomize.replace.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.randomize.replace.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"save-area"},"Save Area"),(0,r.kt)("p",null,"The process for saving an area to data. Used for backups, as well as by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/options#copy-and-paste"},"Copy operation"),", and ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone"},"Clone operation")," with the ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone#modes"},"Template mode"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:save_area"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.save_area"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.no_message"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.dont_reopen_menu"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.save_area.back_up"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.save_area.copy"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.save_area.clone"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"BackupSlots")," (List of strings) - The backup slots (template names) to use.",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"NextPositions"),": ","[ (List) - Lists of position pairs, which make up areas to also also save.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","{",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (List of 3 doubles) - The first corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"2")," (List of 3 doubles) - The second corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","}",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","{...}",(0,r.kt)("br",null),"\n","\u2003","\u2003]",(0,r.kt)("br",null),"\n}",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"SavedAreas"),": [ (List) - The areas that have been saved.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","{",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"TemplateList"),": ","[ (List) - The templates that have been saved, and their relative positions.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Slot")," (String) - The backup slot (template name).",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Pos")," (List of 3 integers) - The template position relative to the process' starting position.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003]",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Positions"),": { (Compound) - The corners (area).",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (List of 3 doubles) - The first corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"2")," (List of 3 doubles) - The second corner.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","}",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","}",(0,r.kt)("br",null),"\n","\u2003","\u2003","]",(0,r.kt)("br",null),"\n}"),(0,r.kt)("h3",{id:"load-area"},"Load Area"),(0,r.kt)("p",null,"The process for loading an area from data. Used by ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/options#undo-and-redo"},"undo"),", ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/options#undo-and-redo"},"redo"),", as well as by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/options#copy-and-paste"},"Paste operation"),", and ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone"},"Clone operation")," with the ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/clone#modes"},"Template mode"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:load_area"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.load_area"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.no_message"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.dont_reopen_menu"),(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"AreaList"),": [ (List) - List of areas to load.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"TemplateList"),": ","[ (List) - The templates that have been saved, and their relative positions.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Slot")," (String) - The backup slot (template name).",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Pos")," (List of 3 integers) - The template position relative to the process' starting position.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003]",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Pos")," (List of 3 doubles, optional) - The starting position for this area.",(0,r.kt)("br",null),"\n","\u2003","\u2003","]",(0,r.kt)("br",null),"\n}"),(0,r.kt)("h3",{id:"checkered"},"Checkered"),(0,r.kt)("p",null,"The process for placing an every-other-block pattern. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/checkered"},"Checkered operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:checkered"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered.replace.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered.replace.exclude"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.start_with_block"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered.alternate.x"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered.alternate.y"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.checkered.alternate.z"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"shell"},"Shell"),(0,r.kt)("p",null,"The process for placing a shell around the inside of the area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/shell"},"Shell operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:shell"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.inner_block"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.up"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.down"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.north"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.south"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.east"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shell.side.west"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"SideSize")," (Integer) - The size of the sides.",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"outline"},"Outline"),(0,r.kt)("p",null,"The process for outlining an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/outline"},"Outline operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:outline"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.outline"),(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Size")," (Integer) - The size of the outlines.",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"greenery"},"Greenery"),(0,r.kt)("p",null,"The process for placing greenery. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/greenery"},"Greenery operation")," and the Brush Tool's ",(0,r.kt)("a",{parentName:"p",href:"../brush_tool/greenery"},"Greenery brush"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:greenery"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.remove_current"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.replace.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.replace.exclude"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.plains"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.sunflower_plains"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.flower_forest"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.taiga"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.desert"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.ocean"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.plant_table.warm_ocean"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.base.standard"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.base.desert"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.greenery.base.ocean"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Rate")," (Integer) - The percentage chance to place greenery on a block.",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"shatter"},"Shatter"),(0,r.kt)("p",null,"The process for shattering blocks in an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/shatter"},"Shatter operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:shatter"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shatter"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shatter.drop_items"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shatter.replace.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.shatter.replace.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"repeat"},"Repeat"),(0,r.kt)("p",null,"The process for repeating an area multiple times. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/repeat"},"Repeat operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:repeat"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.repeat"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.repeat.filter.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.repeat.filter.exclude"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"SecondaryTags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.repeat.filter.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.repeat.filter.exclude"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Amount"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"X")," (Integer) - The amount/direction to repeat along the X axis.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," (Integer) - The amount/direction to repeat along the Y axis.",(0,r.kt)("br",null),"\n","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," (Integer) - The amount/direction to repeat along the Z axis.",(0,r.kt)("br",null),"\n","\u2003","\u2003","}",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Spacing")," (Integer) - The amount of blocks between each copy.",(0,r.kt)("br",null),"\n}"),(0,r.kt)("h3",{id:"smooth"},"Smooth"),(0,r.kt)("p",null,"The process for smoothing an area. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/smooth"},"Smooth operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:smooth"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.message.non_default"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.message.smooth"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.filter.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.filter.exclude"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.up"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.down"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.east"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.west"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.north"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.smooth.direction.south"),">",(0,r.kt)("br",null),"\n]",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),": {",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"Threshold")," (Integer) - The maximum distance in blocks to check for an edge's size.",(0,r.kt)("br",null),"\n}"),(0,r.kt)("h3",{id:"command-list"},"Command List"),(0,r.kt)("p",null,"The process for finding commands from command blocks. Used by the General Tool's ",(0,r.kt)("a",{parentName:"p",href:"../general-tool/command-list"},"Command List operation"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:command_list"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.command_list"),(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"paint"},"Paint"),(0,r.kt)("p",null,"The process for painting blocks. Used by the Brush Tool's ",(0,r.kt)("a",{parentName:"p",href:"../brush_tool/paint"},"Paint brush"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:paint"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.paint"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.no_message"),(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"replace-brush"},"Replace (Brush)"),(0,r.kt)("p",null,"Another process for replacing blocks in an area. Used by the Brush Tool's ",(0,r.kt)("a",{parentName:"p",href:"../brush_tool/replace"},"Replace brush"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:replace_brush"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace_brush"),(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.no_message"),(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace_brush.normal"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.replace_brush.exclude"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"cylinder"},"Cylinder"),(0,r.kt)("p",null,"The process for generating a cylinder shape. Used by the Shape Generation Tool's ",(0,r.kt)("a",{parentName:"p",href:"../shape-generation-tool/cylinder"},"Cylinder shape"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:cylinder"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.cylinder.vertical"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.cylinder.horizontal"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"cone"},"Cone"),(0,r.kt)("p",null,"The process for generating a cone shape. Used by the Shape Generation Tool's ",(0,r.kt)("a",{parentName:"p",href:"../shape-generation-tool/cone"},"Cone shape"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:cone"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.cone.vertical"),">",(0,r.kt)("br",null),"\n","\u2003","\u2003","<",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.cone.horizontal"),">",(0,r.kt)("br",null),"\n]"),(0,r.kt)("h3",{id:"sphere"},"Sphere"),(0,r.kt)("p",null,"The process for generating a sphere shape. Used by the Shape Generation Tool's ",(0,r.kt)("a",{parentName:"p",href:"../shape-generation-tool/sphere"},"Sphere shape"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"worldtool:sphere"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tags"),": ","[",(0,r.kt)("br",null),"\n","\u2003","\u2003",(0,r.kt)("inlineCode",{parentName:"p"},"wt.process.sphere"),(0,r.kt)("br",null),"\n]"),(0,r.kt)("h2",{id:"log"},"Log"),(0,r.kt)("p",null,"The log logs various happenings related to processes not started by players. The log can be viewed with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/function worldtool:cmd/view_log")," and cleared with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/function worldtool:cmd/clear_log"),"."))}d.isMDXComponent=!0}}]);