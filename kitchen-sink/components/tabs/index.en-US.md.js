webpackJsonp([58,141],{646:function(t,e){t.exports={content:["section",["p","A ",["code","Tabs"]," is used to allow users to switch between different views."],["h3","Rule"],["ul",["li",["p","Generally a ",["code","Tabs"]," should have 2-4 tab pane, the title of each tab pane should be concise\uff0cnormally has 2-4 words.."]],["li",["p","In the secondary page of iOS, it is not recommended to use left and right swipe to switch tab, which conflicts with back swipe gestrue in iOS. eg:  tabs in details page."]]]],meta:{category:"Components",type:"Navigation",title:"Tabs",filename:"components/tabs/index.en-US.md"},api:["section",["h2","API"],["p","Support WEB, React-Native."],["h3","Tabs"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","activeKey"],["td","Current TabPane's key"],["td","String"],["td","\u65e0"]],["tr",["td","defaultActiveKey"],["td","Default actived tabPanel's key, if activeKey is not set."],["td","String"],["td","first pane"]],["tr",["td","onChange"],["td","Callback when tab is switched"],["td","(key: string): void"],["td","\u65e0"]],["tr",["td","onTabClick"],["td","Callback when tab is clicked"],["td","(key: string): void"],["td","\u65e0"]],["tr",["td","animated"],["td","Whether to change tabs with animation,"],["td","boolean"],["td",["code","true"]]],["tr",["td","swipeable"],["td","Whether to switch tabs with swipe gestrue in the content"],["td","boolean"],["td",["code","true"]]],["tr",["td","hammerOptions(",["code","Web Only"],")"],["td","The options of ",["a",{title:null,href:"http://hammerjs.github.io/recognizer-pan/"},"pan"]," and ",["a",{title:null,href:"http://hammerjs.github.io/recognizer-swipe/"},"swipe"]," gestrue in ",["a",{title:null,href:"http://hammerjs.github.io/"},"hammerjs"]," can be customized if ",["code","swipeable"]," is ",["code","true"]],["td","object"],["td","{}"]],["tr",["td","tabBarPosition"],["td","Position of tabs. Options: top and bottom"],["td","string"],["td",["code","top"]]],["tr",["td","destroyInactiveTabPane"],["td","Whether to destroy the inactive tabPane (for optimization)"],["td","boolean"],["td","false"]],["tr",["td","underlineColor(",["code","react-native only"],")"],["td","Underline color of ",["code","Tabs"]],["td","string"],["td",["code","#ddd"]]],["tr",["td","activeUnderlineColor(",["code","react-native only"],")"],["td","Underline color of active tabPane"],["td","string"],["td",["code","#108ee9"]]],["tr",["td","textColor(",["code","react-native only"],")"],["td","color of text"],["td","string"],["td",["code","#000"]]],["tr",["td","activeTextColor(",["code","react-native only"],")"],["td","color of text for active tabPanel"],["td","string"],["td",["code","#108ee9"]]],["tr",["td","barStyle(",["code","react-native only"],")"],["td","style for tab's bar"],["td","object"],["td",["code","{}"]]],["tr",["td","prefixCls(",["code","web only"],")"],["td","prefix className"],["td","string"],["td",["code","am-tabs"]]],["tr",["td","className(",["code","web only"],")"],["td","className  for ",["code","Tabs"]],["td","string"],["td","\u65e0"]],["tr",["td","pageSize(",["code","web only"],")"],["td","The number of tab panes in the visible area, it can be seen as one page"],["td","number"],["td","5"]],["tr",["td","speed(",["code","web only"],")"],["td","The scroll speed of ",["code","TabBar"]," in multiple page mode"],["td","Number: 1 ~ 10"],["td","8"]],["tr",["td","tabBarhammerOptions(",["code","web only"],")"],["td","same as ",["code","hammerOptions"]," which is used to custom swipe gestrue of ",["code","TabBar"]],["td","Obejct"],["td","{}"]]]],["h3","Tabs.TabPane"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","key"],["td","TabPane's key"],["td","String"],["td"]],["tr",["td","tab"],["td","Show text in TabPane's head"],["td","React.Element or String"],["td"]]]]]}}});