"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[6522],{3527:(a,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var e=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3},i="Translations",s={unversionedId:"making-a-plugin/translations",id:"making-a-plugin/translations",title:"Translations",description:"WorldTool's translations are stored in function files, which set storage values in the worldtool",source:"@site/docs/making-a-plugin/translations.md",sourceDirName:"making-a-plugin",slug:"/making-a-plugin/translations",permalink:"/worldtool-docs/docs/making-a-plugin/translations",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/worldtool-docs/docs/making-a-plugin/hooks"},next:{title:"Processes",permalink:"/worldtool-docs/docs/making-a-plugin/processes"}},r={},d=[{value:"Adding Translations to Existing Languages",id:"adding-translations-to-existing-languages",level:2},{value:"Adding a Language",id:"adding-a-language",level:2}],u={toc:d},g="wrapper";function p(a){let{components:t,...n}=a;return(0,o.kt)(g,(0,e.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"translations"},"Translations"),(0,o.kt)("p",null,"WorldTool's translations are stored in function files, which set storage values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"worldtool:storage")," storage:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Language")," - ID string of the current language. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"worldtool:en_us"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'Translation."translation_key"'),' - Translation with the key "translation_key".'),(0,o.kt)("p",null,"Text is then displayed as such: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"nbt":"Translation.\\"translation_key\\"","storage":"worldtool:storage"}'),".",(0,o.kt)("br",null),"\nIf the translation is stored as a JSON string, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},'"interpret":true')," to display it."),(0,o.kt)("h2",{id:"adding-translations-to-existing-languages"},"Adding Translations to Existing Languages"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"hooks#languageen_us"},(0,o.kt)("inlineCode",{parentName:"a"},"language/en_us")," hook")," can be used to add translations to the existing language: ",(0,o.kt)("inlineCode",{parentName:"p"},"English (US)"),".",(0,o.kt)("br",null),"\nFor the sake of compatibility and future-proofing, please either add a prefix to custom translation keys, or use your own storage for them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mcfunction"},'# Adds the translation "myplugin.info.example_translation"\ndata modify storage worldtool:storage Translation."myplugin.info.example_translation" set value "Example translation!"\n')),(0,o.kt)("h2",{id:"adding-a-language"},"Adding a Language"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you have a language that you would like to add to WorldTool, please contact me on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/jn8d4zb"},"Discord")," about it. Languages are available to translate to on ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/worldtool"},"Crowdin"),"."),(0,o.kt)("p",{parentName:"admonition"},"If you already have completed the language as a plugin, you can also open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ellivers/WorldTool/pulls"},"pull request"),".")),(0,o.kt)("p",null,"To begin, make a function file that sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"Language")," value to an appropriate ID, copy-paste all translations from the default ",(0,o.kt)("inlineCode",{parentName:"p"},"worldtool:language/en_us")," function and translate them."),(0,o.kt)("p",null,"To allow other plugins to utilize your language, add a function tag to your plugin and call it at the bottom of the function. To ensure that custom translations that other plguins add are displayed correctly, call the ",(0,o.kt)("a",{parentName:"p",href:"hooks#languageen_us"},"hook")," for the default WorldTool ",(0,o.kt)("inlineCode",{parentName:"p"},"en_us")," language above your own function tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mcfunction"},'# Example language\n\ndata modify storage worldtool:storage Language set value "myplugin:example"\n\ndata modify storage worldtool:storage Translation."translation_key" set value "Example translation!"\n#(More translations...)\n\nfunction #worldtool:hooks/language/en_us\nfunction #myplugin:example_language\n')))}p.isMDXComponent=!0}}]);