import{_ as e,r as o,o as c,c as l,d as n,e as s,b as t,a as p}from"./app-TSWLVs-5.js";const i={},u=p(`<h1 id="nuxtjs" tabindex="-1"><a class="header-anchor" href="#nuxtjs"><span>Nuxtjs</span></a></h1><p>本篇以<code>nuxtjs 2</code>作为案例介绍nuxtjs的接入方式，其它版本nuxtjs接入方式会在后续补充，如果你在使用时出现问题，请在github上提issue告知我们。</p><h2 id="作为基座应用" tabindex="-1"><a class="header-anchor" href="#作为基座应用"><span>作为基座应用</span></a></h2><h4 id="_1、安装依赖" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖"><span>1、安装依赖</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @micro-zoe/micro-app <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、引入micro-app" tabindex="-1"><a class="header-anchor" href="#_2、引入micro-app"><span>2、引入micro-app</span></a></h4><p>因为webComponent只能运行在浏览器环境，所以我们需要在浏览器环境执行micro-app的初始化。</p>`,7),r=n("code",null,"layouts/default.vue",-1),d={href:"https://nuxtjs.org/docs/directory-structure/layouts",target:"_blank",rel:"noopener noreferrer"},k=p(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// layouts/default.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Nuxt <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">&#39;@micro-zoe/micro-app&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、设置动态路由" tabindex="-1"><a class="header-anchor" href="#_3、设置动态路由"><span>3、设置动态路由</span></a></h4><p>通过<code>pages/my-page/_.vue</code>设置动态路由，以确保<code>/my-page/*</code> 都指向当前页面。</p>`,3),v={href:"https://nuxtjs.org/docs/features/file-system-routing#dynamic-routes",target:"_blank",rel:"noopener noreferrer"},m=p(`<h4 id="_4、在页面中嵌入子应用" tabindex="-1"><a class="header-anchor" href="#_4、在页面中嵌入子应用"><span>4、在页面中嵌入子应用</span></a></h4><p>如上所述，micro-app只能运行在浏览器环境，所以在<code>mounted</code>钩子中通过变量控制子应用显示。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>子应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 \`/my-page\`
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>show<span class="token punctuation">&#39;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app1<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://localhost:3000/<span class="token punctuation">&#39;</span></span> <span class="token attr-name">baseroute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/my-page<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-page&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作为子应用" tabindex="-1"><a class="header-anchor" href="#作为子应用"><span>作为子应用</span></a></h2><h4 id="_1、在基座应用中添加ssr配置" tabindex="-1"><a class="header-anchor" href="#_1、在基座应用中添加ssr配置"><span>1、在基座应用中添加ssr配置</span></a></h4><p>当子应用是ssr应用时，基座需要在micro-app元素上添加ssr属性，此时micro-app会根据ssr模式加载子应用。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">ssr</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基座应用不需要设置baseroute属性，因为ssr子应用无法使用。</p><h4 id="_2、设置跨域支持" tabindex="-1"><a class="header-anchor" href="#_2、设置跨域支持"><span>2、设置跨域支持</span></a></h4><p>通过自定义服务设置跨域访问。</p><p><strong>步骤1、在根目录创建<code>server.js</code></strong></p><p><code>server.js</code>的内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// server.js</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Nuxt<span class="token punctuation">,</span> Builder <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nuxt&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> host <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOST</span> <span class="token operator">||</span> <span class="token string">&#39;127.0.0.1&#39;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span>

<span class="token comment">// Import and set Nuxt options</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./nuxt.config.js&#39;</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>dev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span>

<span class="token keyword">const</span> nuxt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Nuxt</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token comment">// Start build process in dev mode</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>dev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span>nuxt<span class="token punctuation">)</span>
  builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置跨域支持</span>
app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Give nuxt middleware to express</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>nuxt<span class="token punctuation">.</span>render<span class="token punctuation">)</span>

<span class="token comment">// Start express server</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> host<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Ready on http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>router<span class="token punctuation">.</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2、修改<code>package.json</code>中的<code>scripts</code>，如下：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production node server.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、设置基础路由" tabindex="-1"><a class="header-anchor" href="#_3、设置基础路由"><span>3、设置基础路由</span></a></h4><p>nuxtjs的基础路由只能在<code>nuxt.config.js</code>中通过<code>router.base</code>写死，无法像SPA应用一样灵活配置。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// nuxt.config.js</span>
<span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token string">&#39;基础路由，与基座分配的路由地址一致&#39;</span><span class="token punctuation">,</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置基础路由</span>
  <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> basePath<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、通过env注入运行时变量assetprefix" tabindex="-1"><a class="header-anchor" href="#_4、通过env注入运行时变量assetprefix"><span>4、通过env注入运行时变量<code>assetPrefix</code></span></a></h4><p><code>assetPrefix</code>为静态资源路径前缀，开发者需要手动通过<code>assetPrefix</code>补全图片地址，避免子应用的图片在使用相对地址时加载失败的情况。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// nuxt.config.js</span>
<span class="token comment">// 基础路由</span>
<span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token string">&#39;基础路由，与基座分配的路由地址一致&#39;</span><span class="token punctuation">,</span>
<span class="token comment">// 静态资源路径前缀</span>
<span class="token keyword">const</span> assetPrefix <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">线上域名</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将 assetPrefix 写入环境变量，通过 process.env.assetPrefix 访问</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    assetPrefix<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置基础路由</span>
  <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> basePath<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;localImg&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 补全图片地址</span>
      <span class="token literal-property property">localImg</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>assetPrefix <span class="token operator">+</span> <span class="token string">&#39;/local-img.png&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、监听卸载" tabindex="-1"><a class="header-anchor" href="#_5、监听卸载"><span>5、监听卸载</span></a></h4><p>子应用被卸载时会接受到一个名为<code>unmount</code>的事件，在此可以进行卸载相关操作。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 监听卸载操作</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unmount&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行卸载相关操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例"><span>实战案例</span></a></h2><p>以上介绍了nuxtjs如何接入微前端，但在实际使用中会涉及更多功能，如数据通信、路由跳转、打包部署，为此我们提供了一套案例，用于展示nuxtjs作为基座嵌入(或作为子应用被嵌入) react、vue、angular、vite、nextjs、nuxtjs等框架，在案例中我们使用尽可能少的代码实现尽可能多的功能。</p><p>案例地址：https://github.com/micro-zoe/micro-app-demo-0.x</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h4 id="_1、控制台抛出警告-vue-warn-unknown-custom-element-micro-app" tabindex="-1"><a class="header-anchor" href="#_1、控制台抛出警告-vue-warn-unknown-custom-element-micro-app"><span>1、控制台抛出警告<code>[Vue warn]: Unknown custom element: &lt;micro-app&gt;</code></span></a></h4><p><strong>解决方式：</strong> 在<code>nuxt.config.js</code>中添加配置，设置<code>ignoredElements</code>忽略micro-app元素。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// nuxt.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ignoredElements</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;micro-app&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),b={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"提示",-1),h={href:"https://github.com/micro-zoe/micro-app/issues/169",target:"_blank",rel:"noopener noreferrer"};function x(f,y){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("如果没有layouts文件，则创建文件"),r,s("，如果已经有layouts文件，直接复用即可，layouts相关信息参考："),n("a",d,[s("layouts"),t(a)])]),k,n("p",null,[s("详情参考："),n("a",v,[s("dynamic-routes"),t(a)])]),m,n("div",b,[g,n("p",null,[s("nuxtjs相关问题可以在"),n("a",h,[s("nuxtjs专属讨论贴"),t(a)]),s("下反馈。")])])])}const _=e(i,[["render",x],["__file","nuxtjs.html.vue"]]);export{_ as default};
