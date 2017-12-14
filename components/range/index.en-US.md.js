webpackJsonp([94,155],{621:function(e,t){e.exports={content:["article",["p","A ",["code","Range"]," component for selecting particular value in range, eg: controls the display brightness of the screen."],["h3","Rule"],["ul",["li",["p","By default, the minimum value in the left and maximum value in the right of ",["code","Silder"]," ."]],["li",["p","Generally ",["code","Slider"]," is positioned horizontally."]]],["h2","Common API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","min"],["td","Number"],["td","0"],["td","The minimum value the slider can slide to."]],["tr",["td","max"],["td","Number"],["td","100"],["td","The maximum value the slider can slide to."]],["tr",["td","step"],["td","Number or null"],["td","1"],["td","The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ",["code","marks"]," no null, ",["code","step"]," can be ",["code","null"],"."]],["tr",["td","value"],["td",["span","Number, Number"]],["td"],["td","The value of Range."]],["tr",["td","defaultValue"],["td",["span","Number, Number"]],["td",["span","0, 0"]],["td","The default value of Range."]],["tr",["td","disabled"],["td","Boolean"],["td","false"],["td","If true, the slider will not be interactable."]],["tr",["td","onChange"],["td","Function"],["td","Noop"],["td","Callback function that is called when the user changes the Range's value."]],["tr",["td","onAfterChange"],["td","Function"],["td","Noop"],["td","Fired when ",["code","ontouchend"]," is fired."]],["tr",["td","marks (",["code","web only"],")"],["td","Object{Number:String}"],["td","{ }"],["td","Tick mark of Range, type of key must be number, and must in closed interval ",["span","min, max"],"."]],["tr",["td","dots (",["code","web only"],")"],["td","Boolean"],["td","false"],["td","Whether the thumb can be dragged over tick only."]],["tr",["td","included (",["code","web only"],")"],["td","Boolean"],["td","true"],["td","Make effect when ",["code","marks"]," not null\uff0c",["code","true"]," means containment and ",["code","false"]," means coordinative"]],["tr",["td","count"],["td","number"],["td",["code","1"]],["td","Determine how many ranges to render, and multiple handles will be rendered (number + 1)."]],["tr",["td","allowCross"],["td","boolean"],["td",["code","true"]],["td",["code","allowCross"]," could be set as ",["code","true"]," to allow those handles to cross."]],["tr",["td","pushable"],["td","boolean or number"],["td",["code","true"]],["td",["code","pushable"]," could be set as ",["code","true"]," to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles. Example: ",["img",{title:null,src:"http://i.giphy.com/l46Cs36c9HrHMExoc.gif",alt:null}]]],["tr",["td","handleStyle(",["code","web"],")"],["td","Array",["span","Object"]],["td"],["td","style of handle\uff0cwill be applied to mutli handle follow the array elemetns order"]],["tr",["td","trackStyle(",["code","web"],")"],["td","Array",["span","Object"]],["td"],["td","style of track\uff0cwill be applied to mutli track follow the array elemetns order"]],["tr",["td","railStyle(",["code","web"],")"],["td","Object"],["td"],["td","style of slider base style, which means the area that not been selected"]]]],["h2","ToolTip(Web Only)"],["blockquote",["p","Note: In order to be used on demand, ",["code","Slider"]," has been split into ",["code","Slider"],", ",["code","Range"]," and ",["code","creatToolTip"]," in version 1.0.x, eg: use ",["code","Slider"]," with ",["code","tooltip"]," like this:"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Range<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> createTooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> RangeWithTooltip <span class="token operator">=</span> <span class="token function">createTooltip</span><span class="token punctuation">(</span>Range<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// High Order Component</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RangeWithTooltip</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import { Range, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';\n\nconst RangeWithTooltip = createTooltip(Range); // High Order Component\n<RangeWithTooltip defaultValue={[4, 16]} min={0} max={30} />"]]],meta:{category:"Components",type:"Data Entry",title:"Range",filename:"components/range/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Common-API",title:"Common API"},"Common API"]],["li",["a",{className:"bisheng-toc-h2",href:"#ToolTip(Web-Only)",title:"ToolTip(Web Only)"},"ToolTip(Web Only)"]]]}}});