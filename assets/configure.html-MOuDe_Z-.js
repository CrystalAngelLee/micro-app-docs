import{_ as p,r as o,o as l,c,d as s,e as a,b as t,a as n}from"./app-TSWLVs-5.js";const i={},r=n('<h1 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h1><p>通过配置项，我们可以决定开启或关闭某些功能。</p><h2 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h2><ul><li>Desc: <code>应用名称</code></li><li>Type: <code>string</code></li><li>Default: <code>必传参数</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39;&gt;&lt;/micro-app&gt;</code></li><li>注意事项: 必须以字母开头，且不可以带特殊符号(中划线、下划线除外)</li></ul><p>每个<code>name</code>都对应一个应用，当多个应用同时渲染时，name不可以重复。</p><p>当<code>name</code>的值发生变化时，会卸载当前应用并重新渲染。</p><h2 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>url</span></a></h2><ul><li>Desc: <code>应用地址</code></li><li>Type: <code>string</code></li><li>Default: <code>必传参数</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39;&gt;&lt;/micro-app&gt;</code></li></ul><p>url必须指向子应用的index.html，如：http://localhost:3000/ 或 http://localhost:3000/index.html</p><p>MicroApp会根据url地址自动补全子应用的静态资源，如js、css、图片等</p><p>当<code>url</code>的值发生变化时，会卸载当前应用并根据新的<code>url</code>值重新渲染。</p><h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe"><span>iframe</span></a></h2><ul><li>Desc: <code>开启iframe沙箱</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app iframe&gt;&lt;/micro-app&gt;</code></li></ul><p>MicroApp有两种沙箱方案：<code>with沙箱</code>和<code>iframe沙箱</code>。</p><p>默认开启with沙箱，如果with沙箱无法正常运行，可以尝试切换到iframe沙箱，比如vite。</p><h2 id="inline" tabindex="-1"><a class="header-anchor" href="#inline"><span>inline</span></a></h2><ul><li>Desc: <code>使用内联script</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; inline&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用的js会被提取并在后台运行，这会导致调试困难。</p><p>开启inline后，被提取的js会作为script标签插入应用中运行，在开发环境中更方便调试。</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>开启inline后会稍微损耗性能，建议在开发环境中使用。</p></div><h2 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy"><span>destroy</span></a></h2><ul><li>Desc: <code>卸载时强制删除缓存资源</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; destroy&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用被卸载后不会删除缓存的静态资源和数据，以便在重新渲染时获得更好的性能。</p><p>开启destroy，子应用在卸载后会清空缓存资源和数据，当重新渲染时将和初次渲染的行为保持一致。</p><h2 id="clear-data" tabindex="-1"><a class="header-anchor" href="#clear-data"><span>clear-data</span></a></h2><ul><li>Desc: <code>卸载时清空数据通讯中的缓存数据</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; clear-data&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用被卸载后数据通讯中的缓存数据会被保留，如果你希望清空这些数据，设置<code>clear-data</code>即可。</p><p>子应用卸载时会同时清空主应用发送给当前子应用，和当前子应用发送给主应用的数据。</p>',28),u={href:"/zh/configure#destroy",target:"_blank",rel:"noopener noreferrer"},d=n('<h2 id="disable-scopecss" tabindex="-1"><a class="header-anchor" href="#disable-scopecss"><span>disable-scopecss</span></a></h2><ul><li>Desc: <code>关闭样式隔离</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; disable-scopecss&gt;&lt;/micro-app&gt;</code></li></ul><p>关闭样式隔离可以提升页面渲染速度，在此之前，请确保各应用之间样式不会相互污染。</p><h2 id="disable-sandbox" tabindex="-1"><a class="header-anchor" href="#disable-sandbox"><span>disable-sandbox</span></a></h2><ul><li>Desc: <code>关闭js沙箱</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; disable-sandbox&gt;&lt;/micro-app&gt;</code></li></ul><p>关闭沙箱可能会导致一些不可预料的问题，通常情况不建议这样做。</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>关闭沙箱后以下功能将失效:</p><ol><li>样式隔离</li><li>元素隔离</li><li>路由隔离</li><li><code>__MICRO_APP_ENVIRONMENT__</code>、<code>__MICRO_APP_PUBLIC_PATH__</code>等全局变量</li><li>baseroute</li></ol></div><h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr"><span>ssr</span></a></h2><ul><li>Desc: <code>开启ssr模式</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; ssr&gt;&lt;/micro-app&gt;</code></li><li>版本要求: <code>0.5.3及以上版本</code></li></ul><p>当子应用是ssr应用时，需要设置ssr属性，此时micro-app会根据ssr模式加载子应用。</p><h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive"><span>keep-alive</span></a></h2><ul><li>Desc: <code>开启keep-alive模式</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; keep-alive&gt;&lt;/micro-app&gt;</code></li><li>版本要求: <code>0.6.0及以上版本</code></li></ul><p>开启keep-alive后，应用卸载时会进入缓存，而不是销毁它们，以便保留应用的状态和提升重复渲染的性能。</p>',13),k={href:"/zh/configure#destroy",target:"_blank",rel:"noopener noreferrer"},m=n('<h2 id="disable-memory-router" tabindex="-1"><a class="header-anchor" href="#disable-memory-router"><span>disable-memory-router</span></a></h2><ul><li>Desc: <code>关闭虚拟路由系统</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; disable-memory-router&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用将运行在虚拟路由系统中，和主应用的路由系统进行隔离，避免相互影响。</p><p>子应用的路由信息会作为query参数同步到浏览器地址上，如下：</p><p><img src="https://img12.360buyimg.com/imagetools/jfs/t1/204018/30/36539/9736/6523add2F41753832/31f5ad7e48ea6570.png" alt="alt" title=":size=700"></p>',5),h=s("code",null,"disable-memory-router",-1),g={href:"/zh/browser-router",target:"_blank",rel:"noopener noreferrer"},v=n(`<h2 id="default-page" tabindex="-1"><a class="header-anchor" href="#default-page"><span>default-page</span></a></h2><ul><li>Desc: <code>指定默认渲染的页面</code></li><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; default-page=&#39;页面地址&#39;&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用渲染后会展示首页，设置<code>default-page</code>可以指定子应用渲染的页面。</p><p>注意：</p><ol><li>如果关闭了虚拟路由系统，<code>default-page</code>也将失效。</li></ol><h2 id="keep-router-state" tabindex="-1"><a class="header-anchor" href="#keep-router-state"><span>keep-router-state</span></a></h2><ul><li>Desc: <code>保留路由状态</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; keep-router-state&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用卸载后重新渲染，将和首次加载一样渲染子应用的页面。</p><p>设置<code>keep-router-state</code>可以保留子应用路由状态，在卸载后重新渲染时将恢复卸载前的页面（页面中的状态不保留）。</p><p>注意：</p><ol><li>如果关闭了虚拟路由系统，<code>keep-router-state</code>也将失效。</li><li>当设置了<code>default-page</code>时<code>keep-router-state</code>将失效，因为它的优先级小于<code>default-page</code></li></ol><h2 id="disable-patch-request" tabindex="-1"><a class="header-anchor" href="#disable-patch-request"><span>disable-patch-request</span></a></h2><ul><li>Desc: <code>关闭子应用请求的自动补全功能</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; disable-patch-request&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，MicroApp对子应用的fetch、XMLHttpRequest、EventSource进行重写，当请求相对地址时会使用子应用域名自动补全</p><p>如：<code>fetch(&#39;/api/data&#39;)</code> 补全为 <code>fetch(子应用域名 + &#39;/api/data&#39;)</code></p><p>如果不需要这样的补全，可以配置<code>disable-patch-request</code>进行关闭，此时相对地址会兜底到主应用域名。</p><p>如：<code>fetch(&#39;/api/data&#39;)</code> 兜底为 <code>fetch(主应用域名 + &#39;/api/data&#39;)</code></p><h2 id="baseroute" tabindex="-1"><a class="header-anchor" href="#baseroute"><span>baseroute</span></a></h2><ul><li>Desc: <code>设置子应用的基础路由</code></li><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; baseroute=&#39;/my-page/&#39;&gt;&lt;/micro-app&gt;</code></li></ul><p>在微前端环境下，子应用可以从window.__MICRO_APP_BASE_ROUTE__上获取baseroute的值，用于设置基础路由。</p><p>默认情况下，baseroute的功能是被禁止的，若要开启需先关闭memory-router</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">baseroute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/my-page/<span class="token punctuation">&#39;</span></span> <span class="token attr-name">disable-memory-router</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber"><span>fiber</span></a></h2><ul><li>Desc: <code>开启fiber模式</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式: <code>&lt;micro-app name=&#39;xx&#39; url=&#39;xx&#39; fiber&gt;&lt;/micro-app&gt;</code></li></ul><p>默认情况下，子应用js是同步执行的，这会阻塞主应用的渲染线程，当开启fiber后，micro-app会降低子应用的优先级，通过异步执行子应用的js文件，以减小对主应用的影响，快速响应用户操作。</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>开启fiber后会降低子应用的渲染速度。</p></div><h2 id="shadowdom" tabindex="-1"><a class="header-anchor" href="#shadowdom"><span>shadowDOM</span></a></h2><ul><li>Desc: <code>开启shadowDOM</code></li><li>Type: <code>string(boolean)</code></li><li>Default: <code>false</code></li><li>使用方式:</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">shadowDOM</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>shadowDOM具有更强的样式隔离能力，开启后，<code>&lt;micro-app&gt;</code>标签会成为一个真正的WebComponent。</p><p>但shadowDOM在React框架及一些UI库中的兼容不是很好，经常会出现一些不可预料的问题，除非你很清楚它会带来的问题并有信心解决，否则不建议使用。</p><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h2><p>全局配置会影响每一个子应用，请小心使用！</p><p><strong>使用方式</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">&#39;@micro-zoe/micro-app&#39;</span>

microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">iframe</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token literal-property property">destroy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token literal-property property">shadowDOM</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;disable-scopecss&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;disable-sandbox&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;keep-alive&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;disable-memory-router&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;keep-router-state&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
  <span class="token string-property property">&#39;disable-patch-request&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认值false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望在某个应用中不使用全局配置，可以单独配置关闭：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> 
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> 
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> 
  <span class="token attr-name">iframe</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">destroy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">shadowDOM</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">ssr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">disable-scopecss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">disable-sandbox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">keep-alive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">disable-memory-router</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">keep-router-state</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">disable-patch-request</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>false<span class="token punctuation">&#39;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它配置" tabindex="-1"><a class="header-anchor" href="#其它配置"><span>其它配置</span></a></h2><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3><p>当多个子应用使用相同的js或css资源，在link、script设置<code>global</code>属性会将文件提取为公共文件，共享给其它应用。</p><p>设置<code>global</code>属性后文件第一次加载会放入公共缓存，其它子应用加载相同的资源时直接从缓存中读取内容，从而提升渲染速度。</p><p><strong>使用方式</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xx.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">global</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xx.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">global</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="globalassets" tabindex="-1"><a class="header-anchor" href="#globalassets"><span>globalAssets</span></a></h3><p>globalAssets用于设置全局共享资源，它和预加载的思路相同，在浏览器空闲时加载资源并放入缓存，提高渲染效率。</p><p>当子应用加载相同地址的js或css资源时，会直接从缓存中提取数据，从而提升渲染速度。</p><p><strong>使用方式</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">&#39;@micro-zoe/micro-app&#39;</span>

microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">globalAssets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js地址1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;js地址2&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// js地址</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;css地址1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css地址2&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// css地址</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exclude-过滤元素" tabindex="-1"><a class="header-anchor" href="#exclude-过滤元素"><span>exclude(过滤元素)</span></a></h3><p>当子应用不需要加载某个js或css，可以通过在link、script、style设置exclude属性，当micro-app遇到带有exclude属性的元素会进行删除。</p><p><strong>使用方式</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xx.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exclude</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xx.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exclude</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">exclude</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ignore-忽略元素" tabindex="-1"><a class="header-anchor" href="#ignore-忽略元素"><span>ignore(忽略元素)</span></a></h3><p>当link、script、style元素具有ignore属性，micro-app不会处理它，元素将原封不动进行渲染。</p><p>使用场景例如：jsonp</p><p>jsonp会创建一个script元素加载数据，正常情况script会被拦截导致jsonp请求失败，此时可以给script元素添加ignore属性，跳过拦截。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 修改jsonp方法，在创建script元素后添加ignore属性</span>
<span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>
script<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;ignore&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57);function b(x,f){const e=o("ExternalLinkIcon");return l(),c("div",null,[r,s("p",null,[s("a",u,[a("destroy"),t(e)]),a("也有同样的效果。")]),d,s("p",null,[a("keep-alive的优先级小于"),s("a",k,[a("destroy"),t(e)]),a("，当两者同时存在时，keep-alive将失效。")]),m,s("p",null,[a("设置"),h,a("可以关闭虚拟路由系统，子应用将基于浏览器的路由系统进行渲染，参考"),s("a",g,[a("browser-router"),t(e)])]),v])}const _=p(i,[["render",b],["__file","configure.html.vue"]]);export{_ as default};
