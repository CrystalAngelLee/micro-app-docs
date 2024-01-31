import{_ as p,r as o,o as c,c as i,d as n,e as a,b as t,a as s}from"./app-TSWLVs-5.js";const r={},d=s(`<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h1><h3 id="micro-app-environment" tabindex="-1"><a class="header-anchor" href="#micro-app-environment"><span><code>__MICRO_APP_ENVIRONMENT__</code></span></a></h3><p><strong>描述：判断应用是否在微前端环境中</strong></p><p>在子应用中通过 <code>window.__MICRO_APP_ENVIRONMENT__</code> 判断是否在微前端环境中。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我在微前端环境中&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-app-name" tabindex="-1"><a class="header-anchor" href="#micro-app-name"><span><code>__MICRO_APP_NAME__</code></span></a></h3><p><strong>描述：应用名称</strong></p><p>在子应用中通过 <code>window.__MICRO_APP_NAME__</code> 获取应用的name值，即<code>&lt;micro-app&gt;</code>标签的name值。</p><h3 id="micro-app-public-path" tabindex="-1"><a class="header-anchor" href="#micro-app-public-path"><span><code>__MICRO_APP_PUBLIC_PATH__</code></span></a></h3><p><strong>描述：子应用的静态资源前缀</strong></p>`,10),l={href:"https://webpack.docschina.org/guides/public-path/#on-the-fly",target:"_blank",rel:"noopener noreferrer"},_=s(`<p><strong>步骤1:</strong> 在<code>子应用</code>src目录下创建名称为<code>public-path.js</code>的文件，并添加如下内容</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_ENVIRONMENT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  __webpack_public_path__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__MICRO_APP_PUBLIC_PATH__
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2:</strong> 在子应用的入口文件的<code>最顶部</code>引入<code>public-path.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./public-path&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="micro-app-base-route" tabindex="-1"><a class="header-anchor" href="#micro-app-base-route"><span><code>__MICRO_APP_BASE_ROUTE__</code></span></a></h3><p><strong>描述：子应用的基础路由</strong></p>`,6),u={href:"/v0/zh/route#%E5%9F%BA%E7%A1%80%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},h=s(`<h3 id="micro-app-base-application" tabindex="-1"><a class="header-anchor" href="#micro-app-base-application"><span><code>__MICRO_APP_BASE_APPLICATION__</code></span></a></h3><p><strong>描述：判断应用是否是基座应用</strong></p><p>在执行<code>microApp.start()</code>后此值才会生效</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__MICRO_APP_BASE_APPLICATION__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是基座应用&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(m,k){const e=o("ExternalLinkIcon");return c(),i("div",null,[d,n("p",null,[a("用于设置webpack动态"),n("a",l,[a("public-path"),t(e)]),a("，将子应用的静态资源补全为 http 开头的绝对地址。")]),_,n("p",null,[a("详情见"),n("a",u,[a("路由-基础路由"),t(e)]),a("一章。")]),h])}const g=p(r,[["render",v],["__file","env.html.vue"]]);export{g as default};
