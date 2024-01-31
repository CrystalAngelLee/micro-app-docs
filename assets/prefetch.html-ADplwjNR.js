import{_ as p,r as e,o as t,c as o,d as n,e as s,b as c,a as l}from"./app-TSWLVs-5.js";const r={},i=l(`<h1 id="预加载" tabindex="-1"><a class="header-anchor" href="#预加载"><span>预加载</span></a></h1><p>预加载是指在应用尚未渲染时提前加载资源并缓存，从而提升首屏渲染速度。</p><p>预加载并不是同步执行的，它会在浏览器空闲时间，依照开发者传入的顺序，依次加载每个应用的静态资源，以确保不会影响基座应用的性能。</p><h3 id="microapp-prefetch-array-app-function-array-app" tabindex="-1"><a class="header-anchor" href="#microapp-prefetch-array-app-function-array-app"><span>microApp.preFetch(Array&lt;app&gt; | Function =&gt; Array&lt;app&gt;)</span></a></h3><p>preFetch接受app数组或一个返回app数组的函数，app的值如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// 应用名称，必传</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// 应用地址，必传</span>
  disableScopecss<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 是否关闭样式隔离，非必传</span>
  disableSandbox<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 是否关闭沙盒，非必传</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> microApp <span class="token keyword">from</span> <span class="token string">&#39;@micro-zoe/micro-app&#39;</span>

<span class="token comment">// 方式一</span>
microApp<span class="token punctuation">.</span><span class="token function">preFetch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-app&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 方式二</span>
microApp<span class="token punctuation">.</span><span class="token function">preFetch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-app&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 方式三</span>
microApp<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">preFetchApps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-app&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 函数类型</span>
  <span class="token comment">// preFetchApps: () =&gt; [</span>
  <span class="token comment">//   { name: &#39;my-app&#39;, url: &#39;xxx&#39; }</span>
  <span class="token comment">// ],</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={class:"custom-container note"},d=n("p",{class:"custom-container-title"},"Note",-1),k=n("code",null,"disableScopecss",-1),m=n("code",null,"disableSandbox",-1),v=n("code",null,"<micro-app>",-1),b={href:"/v0/zh/configure",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,[s("如果子应用开启了shadowDOM，则预加载中的"),n("code",null,"disableScopecss"),s("需要设置为true")],-1);function y(_,x){const a=e("ExternalLinkIcon");return t(),o("div",null,[i,n("div",u,[d,n("ol",null,[n("li",null,[s("预加载入参："),k,s("、"),m,s(" 必须和 "),v,n("a",b,[s("配置项"),c(a)]),s("保持一致。如果产生冲突，以先执行的一方为准。")]),h])])])}const f=p(r,[["render",y],["__file","prefetch.html.vue"]]);export{f as default};
