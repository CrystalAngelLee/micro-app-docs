import{_ as l,r as o,o as u,c as i,b as a,w as t,a as p,d as n,e as s}from"./app-TSWLVs-5.js";const r={},k=p(`<h1 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive"><span>keep-alive</span></a></h1><p><em>0.6.0及以上版本支持</em></p><p>在应用之间切换时，你有时会想保留这些应用的状态，以便恢复用户的操作行为和提升重复渲染的性能，此时开启keep-alive模式可以达到这样的效果。</p><p>开启keep-alive后，应用卸载时不会销毁，而是推入后台运行。</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">keep-alive</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><p>keep-alive模式与普通模式最大的不同是生命周期，因为它不会被真正的卸载，也就不会触发 <code>unmount</code> 事件。</p><p>在基座和子应用中的生命周期如下：</p><h3 id="基座应用" tabindex="-1"><a class="header-anchor" href="#基座应用"><span>基座应用</span></a></h3><h4 id="_1-created" tabindex="-1"><a class="header-anchor" href="#_1-created"><span>1. created</span></a></h4><p><code>&lt;micro-app&gt;</code>标签初始化后，加载资源前触发。</p><h4 id="_2-beforemount" tabindex="-1"><a class="header-anchor" href="#_2-beforemount"><span>2. beforemount</span></a></h4><p>加载资源完成后，开始渲染之前触发<code>(只在初始化时执行一次)</code>。</p><h4 id="_3-mounted" tabindex="-1"><a class="header-anchor" href="#_3-mounted"><span>3. mounted</span></a></h4><p>子应用渲染结束后触发<code>(只在初始化时执行一次)</code>。</p><h4 id="_4-error" tabindex="-1"><a class="header-anchor" href="#_4-error"><span>4. error</span></a></h4><p>子应用渲染出错时触发，只有会导致渲染终止的错误才会触发此生命周期。</p><h4 id="_5-afterhidden" tabindex="-1"><a class="header-anchor" href="#_5-afterhidden"><span>5. afterhidden</span></a></h4><p>子应用卸载时触发。</p><h4 id="_6-beforeshow" tabindex="-1"><a class="header-anchor" href="#_6-beforeshow"><span>6. beforeshow</span></a></h4><p>子应用再次渲染之前触发<code>(初始化时不执行)</code>。</p><h4 id="_7-aftershow" tabindex="-1"><a class="header-anchor" href="#_7-aftershow"><span>7. aftershow</span></a></h4><p>子应用再次渲染之后触发<code>(初始化时不执行)</code>。</p><h4 id="监听生命周期" tabindex="-1"><a class="header-anchor" href="#监听生命周期"><span>监听生命周期</span></a></h4>`,25),d=n("p",null,"因为React不支持自定义事件，所以我们需要引入一个polyfill。",-1),m=n("p",null,[n("code",null,"在<micro-app>标签所在的文件顶部"),s("添加polyfill，注释也要复制。")],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s("/** "),n("span",{class:"token keyword"},"@jsxRuntime"),s(" classic */")]),s(`
`),n("span",{class:"token doc-comment comment"},[s("/** "),n("span",{class:"token keyword"},"@jsx"),s(" jsxCustomEvent */")]),s(`
`),n("span",{class:"token keyword"},"import"),s(" jsxCustomEvent "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@micro-zoe/micro-app/polyfill/jsx-custom-event'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,[n("strong",null,"开始使用")],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token operator"},"<"),s("micro"),n("span",{class:"token operator"},"-"),s(`app
  name`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'xx'"),s(`
  url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'xx'"),s(`
  onCreated`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'micro-app元素被创建'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onBeforemount`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'即将被渲染，只在初始化时执行一次'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onMounted`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已经渲染完成，只在初始化时执行一次'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onAfterhidden`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已卸载'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onBeforeshow`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'即将重新渲染，初始化时不执行'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onAftershow`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已经重新渲染，初始化时不执行'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
  onError`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'渲染出错'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,"vue中监听方式和普通事件一致。",-1),g=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("micro-app")]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("xx"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("xx"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@created"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("created"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@beforemount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("beforemount"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@mounted"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("mounted"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@afterhidden"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("afterhidden"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@beforeshow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("beforeshow"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@aftershow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("aftershow"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"@error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("error"),n("span",{class:"token punctuation"},"'")]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"created"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'micro-app元素被创建'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"beforemount"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'即将被渲染，只在初始化时执行一次'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"mounted"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已经渲染完成，只在初始化时执行一次'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"afterhidden"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已卸载'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"beforeshow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'即将重新渲染，初始化时不执行'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"aftershow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'已经重新渲染，初始化时不执行'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"error"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'渲染出错'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=p(`<h3 id="子应用" tabindex="-1"><a class="header-anchor" href="#子应用"><span>子应用</span></a></h3><p>keep-alive模式下，在子应用卸载、重新渲染时，micro-app都会向子应用发送名为<code>appstate-change</code>的自定义事件，子应用可以通过监听该事件获取当前状态，状态值可以通过事件对象属性<code>e.detail.appState</code>获取。</p><p><code>e.detail.appState</code>的值有三个：afterhidden、beforeshow、aftershow，分别对应卸载、即将渲染、已经渲染。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 监听keep-alive模式下的应用状态</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;appstate-change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>appState <span class="token operator">===</span> <span class="token string">&#39;afterhidden&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已卸载&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>appState <span class="token operator">===</span> <span class="token string">&#39;beforeshow&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;即将重新渲染&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>appState <span class="token operator">===</span> <span class="token string">&#39;aftershow&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已经重新渲染&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用初始化时不会触发<code>appstate-change</code>事件。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h4 id="_1、再次渲染时url和页面不匹配" tabindex="-1"><a class="header-anchor" href="#_1、再次渲染时url和页面不匹配"><span>1、再次渲染时url和页面不匹配</span></a></h4><p>keep-alive的应用在卸载时会保留页面状态，再次渲染时直接恢复，当应用再次渲染时的url与离开时不一致，则出现url和页面不匹配的问题。</p><p>如果这个问题对你造成了困扰，可以通过监听<code>appstate-change</code>事件，在<code>beforeshow</code>时进行修复，根据url跳转对应的页面。</p><h4 id="_2、如何恢复页面滚动位置" tabindex="-1"><a class="header-anchor" href="#_2、如何恢复页面滚动位置"><span>2、如何恢复页面滚动位置？</span></a></h4><p>micro-app不会记录页面滚动位置，应用再次渲染时也不会进行恢复，需要开发者进行记录和恢复。</p><h4 id="_3、子应用内部页面切换后状态丢失" tabindex="-1"><a class="header-anchor" href="#_3、子应用内部页面切换后状态丢失"><span>3、子应用内部页面切换后状态丢失</span></a></h4><p>micro-app的keep-alive是应用级别的，它只会保留当前正在活动的页面状态，以保证应用被卸载和重新渲染时的状态保留，如果想要缓存具体的页面或组件，需要使用子应用框架的能力，如：vue的keep-alive。</p>`,13);function x(w,j){const e=o("TabPanel"),c=o("Tabs");return u(),i("div",null,[k,a(c,null,{default:t(()=>[a(e,{title:"React"},{default:t(()=>[d,m,h,v,b]),_:1}),a(e,{title:"Vue"},{default:t(()=>[f,g]),_:1})]),_:1}),_])}const q=l(r,[["render",x],["__file","keep-alive.html.vue"]]);export{q as default};
