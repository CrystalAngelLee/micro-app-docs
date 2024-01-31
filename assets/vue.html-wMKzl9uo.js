import{_ as r,r as o,o as d,c as k,b as a,w as e,d as n,e as s,a as p}from"./app-TSWLVs-5.js";const m={},v=p(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h1><p>本篇以<code>Vue 2、3</code>作为案例介绍vue的接入方式，其它版本vue的接入方式以此类推，我们默认开发者掌握了各版本vue的开发技巧，比如示例中vue2的代码如何转换为vue1。</p><h2 id="作为基座应用" tabindex="-1"><a class="header-anchor" href="#作为基座应用"><span>作为基座应用</span></a></h2><p>我们强烈建议基座应用采用history模式，hash路由的基座应用只能加载hash路由的子应用，history模式的基座应用对这两种子应用都支持。</p><p>在以下案例中，我们默认基座的路由为history模式。</p><h4 id="_1、安装依赖" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖"><span>1、安装依赖</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @micro-zoe/micro-app <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、在入口处引入" tabindex="-1"><a class="header-anchor" href="#_2、在入口处引入"><span>2、在入口处引入</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// entry</span>
<span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">&#39;@micro-zoe/micro-app&#39;</span>

microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、分配一个路由给子应用" tabindex="-1"><a class="header-anchor" href="#_3、分配一个路由给子应用"><span>3、分配一个路由给子应用</span></a></h4>`,10),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// router.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" VueRouter "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MyPage "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./my-page.vue'"),s(`

Vue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("VueRouter"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" routes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 👇 非严格匹配，/my-page/* 都指向 MyPage 页面"),s(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/my-page/*'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-page'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(" MyPage"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(` routes
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// router.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRouter"),n("span",{class:"token punctuation"},","),s(" createWebHistory "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MyPage "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./my-page.vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" routes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 👇 非严格匹配，/my-page/* 都指向 MyPage 页面"),s(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/my-page/:page*'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-page'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(" MyPage"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"history"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createWebHistory"),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BASE_URL"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  routes
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(` router
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=p(`<h4 id="_4、在页面中嵌入子应用" tabindex="-1"><a class="header-anchor" href="#_4、在页面中嵌入子应用"><span>4、在页面中嵌入子应用</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- my-page.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>子应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 \`/my-page\`
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app1<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://localhost:3000/<span class="token punctuation">&#39;</span></span> <span class="token attr-name">baseroute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/my-page<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作为子应用" tabindex="-1"><a class="header-anchor" href="#作为子应用"><span>作为子应用</span></a></h2><h4 id="_1、设置跨域支持" tabindex="-1"><a class="header-anchor" href="#_1、设置跨域支持"><span>1、设置跨域支持</span></a></h4><p>在<code>vue.config.js</code>中添加配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;Access-Control-Allow-Origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、设置基础路由-如果基座是history路由-子应用是hash路由-这一步可以省略" tabindex="-1"><a class="header-anchor" href="#_2、设置基础路由-如果基座是history路由-子应用是hash路由-这一步可以省略"><span>2、设置基础路由<code>(如果基座是history路由，子应用是hash路由，这一步可以省略)</code></span></a></h4>`,7),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(" VueRouter "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" routes "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./router'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"VueRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'history'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由"),s(`
  `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(" window"),n("span",{class:"token punctuation"},"."),s("__MICRO_APP_BASE_ROUTE__ "),n("span",{class:"token operator"},"||"),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BASE_URL"),n("span",{class:"token punctuation"},","),s(`
  routes`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRouter"),n("span",{class:"token punctuation"},","),s(" createWebHistory "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" routes "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./router'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由"),s(`
  `),n("span",{class:"token literal-property property"},"history"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createWebHistory"),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"."),s("__MICRO_APP_BASE_ROUTE__ "),n("span",{class:"token operator"},"||"),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BASE_URL"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  routes`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h4",{id:"_3、设置-publicpath",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3、设置-publicpath"},[n("span",null,"3、设置 publicPath")])],-1),w={href:"https://webpack.docschina.org/guides/public-path/#on-the-fly",target:"_blank",rel:"noopener noreferrer"},j=p(`<p><em>如果子应用不是webpack构建的，这一步可以省略。</em></p><p><strong>步骤1:</strong> 在子应用src目录下创建名称为<code>public-path.js</code>的文件，并添加如下内容</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line</span>
  __webpack_public_path__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_PUBLIC_PATH__
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2:</strong> 在子应用入口文件的<strong>最顶部</strong>引入<code>public-path.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// entry</span>
<span class="token keyword">import</span> <span class="token string">&#39;./public-path&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、监听卸载" tabindex="-1"><a class="header-anchor" href="#_4、监听卸载"><span>4、监听卸载</span></a></h4><p>子应用被卸载时会接受到一个名为<code>unmount</code>的事件，在此可以进行卸载相关操作。</p>`,7),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// main.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 监听卸载操作"),s(`
window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'unmount'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// main.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 监听卸载操作"),s(`
window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'unmount'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=p('<h2 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例"><span>实战案例</span></a></h2><p>以上介绍了vue如何接入微前端，但在实际使用中会涉及更多功能，如数据通信、路由跳转、打包部署，为此我们提供了一套案例，用于展示vue作为基座嵌入(或作为子应用被嵌入) react、vue、angular、vite、nextjs、nuxtjs等框架，在案例中我们使用尽可能少的代码实现尽可能多的功能。</p><p>案例地址：https://github.com/micro-zoe/micro-app-demo-0.x</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h4 id="_1、基座应用中抛出警告-micro-app未定义" tabindex="-1"><a class="header-anchor" href="#_1、基座应用中抛出警告-micro-app未定义"><span>1、基座应用中抛出警告，micro-app未定义</span></a></h4><p><strong>报错信息：</strong></p><ul><li>vue2: <code>[Vue warn]: Unknown custom element: &lt;micro-app&gt;</code></li><li>vue3: <code>[Vue warn]: Failed to resolve component: micro-app</code></li></ul>',7),E=n("strong",null,"参考issue：",-1),A={href:"https://github.com/vuejs/vue-next/issues/1414",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,[n("strong",null,"解决方式："),s(" 在基座应用中添加如下配置")],-1),C=n("p",null,"在入口文件main.js中设置ignoredElements，详情查看：https://cn.vuejs.org/v2/api/#ignoredElements",-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// main.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

Vue`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("ignoredElements "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token string"},"'micro-app'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,"在vue.config.js中添加chainWebpack配置，如下：",-1),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// vue.config.js"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"chainWebpack"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"config"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    config`),n("span",{class:"token punctuation"},"."),s(`module
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vue-loader'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"options"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      options`),n("span",{class:"token punctuation"},"."),s("compilerOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},"."),s("compilerOptions "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"isCustomElement"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"tag"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^micro-app"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("tag"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` options
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("p",null,"在vite.config.js中通过vue插件设置isCustomElement，如下：",-1),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"compilerOptions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function-variable function"},"isCustomElement"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"tag"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^micro-app"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("tag"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h4",{id:"_2、当基座和子应用都是vue-router4-点击浏览器返回按钮页面丢失",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2、当基座和子应用都是vue-router4-点击浏览器返回按钮页面丢失"},[n("span",null,"2、当基座和子应用都是vue-router4，点击浏览器返回按钮页面丢失")])],-1),U=n("p",null,[n("strong",null,"原因："),s(" vue-router4没有对路由堆栈state做唯一性标记，导致基座和子应用相互影响，vue-router3及其它框架路由没有类似问题。")],-1),S=n("p",null,[n("strong",null,"测试版本："),s(" vue-router@4.0.12")],-1),L=n("strong",null,"相关issue：",-1),H={href:"https://github.com/micro-zoe/micro-app/issues/155",target:"_blank",rel:"noopener noreferrer"},W=p(`<p><strong>解决方式：</strong> 在子应用中添加如下设置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果__MICRO_APP_BASE_ROUTE__为 \`/基座应用基础路由/子应用基础路由/\`，则应去掉\`/基座应用基础路由\`</span>
  <span class="token comment">// 如果对这句话不理解，可以参考案例：https://github.com/micro-zoe/micro-app-demo-0.x</span>
  <span class="token keyword">const</span> realBaseRoute <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_BASE_ROUTE__

  router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state<span class="token operator">?.</span>current <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state<span class="token punctuation">.</span>current <span class="token operator">=</span> window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>realBaseRoute<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state<span class="token punctuation">.</span>current <span class="token operator">=</span> realBaseRoute <span class="token operator">+</span>  <span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>state<span class="token punctuation">.</span>current <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、vue-router在hash模式无法通过base设置基础路由" tabindex="-1"><a class="header-anchor" href="#_3、vue-router在hash模式无法通过base设置基础路由"><span>3、vue-router在hash模式无法通过base设置基础路由</span></a></h4><p><strong>解决方式：</strong> 创建一个空的路由页面，将其它路由作为它的children，具体设置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> RootApp <span class="token keyword">from</span> <span class="token string">&#39;./root-app.vue&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>__MICRO_APP_BASE_ROUTE__ <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> RootApp<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 其他的路由都写到这里</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>root-app.vue</code>内容如下：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function z(G,q){const t=o("CodeGroupItem"),c=o("CodeGroup"),l=o("ExternalLinkIcon"),i=o("TabPanel"),u=o("Tabs");return d(),k("div",null,[v,a(c,null,{default:e(()=>[a(t,{title:"Vue2"},{default:e(()=>[b]),_:1}),a(t,{title:"Vue3"},{default:e(()=>[g]),_:1})]),_:1}),h,a(c,null,{default:e(()=>[a(t,{title:"Vue2"},{default:e(()=>[_]),_:1}),a(t,{title:"Vue3"},{default:e(()=>[y]),_:1})]),_:1}),f,n("p",null,[s("这一步借助了webpack的功能，避免子应用的静态资源使用相对地址时加载失败的情况，详情参考webpack文档 "),n("a",w,[s("publicPath"),a(l)])]),j,a(c,null,{default:e(()=>[a(t,{title:"Vue2"},{default:e(()=>[x]),_:1}),a(t,{title:"Vue3"},{default:e(()=>[R]),_:1})]),_:1}),P,n("p",null,[E,s(),n("a",A,[s("vue-next@1414"),a(l)])]),V,a(u,null,{default:e(()=>[a(i,{title:"Vue2"},{default:e(()=>[C,O]),_:1}),a(i,{title:"Vue3"},{default:e(()=>[I,M]),_:1}),a(i,{title:"Vite + Vue3"},{default:e(()=>[B,T]),_:1})]),_:1}),N,U,S,n("p",null,[L,s(),n("a",H,[s("155"),a(l)])]),W])}const $=r(m,[["render",z],["__file","vue.html.vue"]]);export{$ as default};
