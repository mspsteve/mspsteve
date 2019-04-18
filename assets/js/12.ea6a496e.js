(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{227:function(_,v,a){"use strict";a.r(v);var t=a(0),i=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"秒杀系统设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统设计","aria-hidden":"true"}},[_._v("#")]),_._v(" 秒杀系统设计")]),_._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#秒杀概念"}},[_._v("秒杀概念")])]),a("li",[a("a",{attrs:{href:"#实现目标"}},[_._v("实现目标")])]),a("li",[a("a",{attrs:{href:"#架构原则"}},[_._v("架构原则")])]),a("li",[a("a",{attrs:{href:"#实现方案"}},[_._v("实现方案")])]),a("li",[a("a",{attrs:{href:"#热点数据处理"}},[_._v("热点数据处理")])]),a("li",[a("a",{attrs:{href:"#流量削峰"}},[_._v("流量削峰")])]),a("li",[a("a",{attrs:{href:"#性能优化"}},[_._v("性能优化")])]),a("li",[a("a",{attrs:{href:"#减库存操作"}},[_._v("减库存操作")]),a("ul",[a("li",[a("a",{attrs:{href:"#减库存操作：下单和付款"}},[_._v("减库存操作：下单和付款")])]),a("li",[a("a",{attrs:{href:"#减库存实现与优化方案"}},[_._v("减库存实现与优化方案")])])])]),a("li",[a("a",{attrs:{href:"#兜底方案"}},[_._v("兜底方案")]),a("ul",[a("li",[a("a",{attrs:{href:"#整体思路"}},[_._v("整体思路")])]),a("li",[a("a",{attrs:{href:"#应急预案"}},[_._v("应急预案")])])])])])]),a("p"),_._v(" "),a("h2",{attrs:{id:"秒杀概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒杀概念","aria-hidden":"true"}},[_._v("#")]),_._v(" 秒杀概念")]),_._v(" "),a("p",[a("strong",[_._v("秒杀本质上是解决并发读和并发写问题")])]),_._v(" "),a("ul",[a("li",[_._v("并发读要保证系统尽可能少地读取数据或者尽可能少到服务器请求数据")]),_._v(" "),a("li",[_._v("单独在数据库层面设计表")]),_._v(" "),a("li",[_._v("要设计兜底方案，避免异常情况出现")])]),_._v(" "),a("h2",{attrs:{id:"实现目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现目标","aria-hidden":"true"}},[_._v("#")]),_._v(" 实现目标")]),_._v(" "),a("ul",[a("li",[_._v("高性能 支持高并发，设计数据的动静分离方案、热点的发现与隔离、分层过滤、服务端的极致优化")]),_._v(" "),a("li",[_._v("一致性 保证高并发情况下，库存扣减要保证数据的准确性")]),_._v(" "),a("li",[_._v("高可用 要设计兜底方案")])]),_._v(" "),a("h2",{attrs:{id:"架构原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构原则","aria-hidden":"true"}},[_._v("#")]),_._v(" 架构原则")]),_._v(" "),a("ul",[a("li",[_._v("数据要尽量少 上传给系统的数据和系统返回给用户的数据（通常就是网页）\n"),a("ul",[a("li",[_._v("数据在网络上传输需要时间")]),_._v(" "),a("li",[_._v("服务器在写网络时对数据进行压缩和字符编码，耗CPU")]),_._v(" "),a("li",[_._v("系统依赖的数据能少就少")])])]),_._v(" "),a("li",[_._v("请求数要尽量少 合并CSS和JS文件，拼接url，服务器端做解析")]),_._v(" "),a("li",[_._v("路径要尽量短 合并部署多个相互强依赖的应用，把RPC调用转化为JVM内部调用")]),_._v(" "),a("li",[_._v("依赖要尽量少 完成一次用户请求必须强依赖的系统或者服务，设计不同系统级别，减少不同系统级别间调用")]),_._v(" "),a("li",[_._v("不要有单点 尽可能消除服务和机器的绑定关系，保证服务无状态化")])]),_._v(" "),a("h2",{attrs:{id:"实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 实现方案")]),_._v(" "),a("p",[a("strong",[_._v("秒杀的场景中，对于系统的要求其实就三个字：快、准、稳")])]),_._v(" "),a("ul",[a("li",[_._v("数据的动静分离 动态数据的实质：是否跟访问者相关的个性化数据\n"),a("ul",[a("li",[_._v("静态数据缓存到离用户最近的地方：浏览器、CDN以及缓存")]),_._v(" "),a("li",[_._v("静态化改造就是要直接缓存HTTP连接")]),_._v(" "),a("li",[_._v("web服务器来做缓存：Nginx、Apache、Varnish")])])]),_._v(" "),a("li",[_._v("如何做动静分离的改造\n"),a("ul",[a("li",[_._v("URL 唯一化")]),_._v(" "),a("li",[_._v("分离浏览者相关的因素。浏览者相关的因素包括用户登录信息，动态获取")]),_._v(" "),a("li",[_._v("分离时间因素。服务端输出的时间也通过动态请求获取")]),_._v(" "),a("li",[_._v("异步化地域因素。详情页面上与地域相关的因素做成异步方式获取。")]),_._v(" "),a("li",[_._v("去掉Cookie")])])])]),_._v(" "),a("h2",{attrs:{id:"热点数据处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热点数据处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 热点数据处理")]),_._v(" "),a("p",[a("strong",[_._v("如何发现热点数据，处理热点数据是解决秒杀系统的关键")])]),_._v(" "),a("ul",[a("li",[_._v("发现热点数据\n"),a("ul",[a("li",[_._v("近实时统计热点数据 收集全链路的日志，离线分析top N数据")]),_._v(" "),a("li",[_._v("提前离线统计出数据")])])]),_._v(" "),a("li",[_._v("处理热点数据\n"),a("ul",[a("li",[_._v("优化，使用缓存队列，设置超时时间")]),_._v(" "),a("li",[_._v("限制，使用一致性hash方法，根据hash做分桶，分桶设置处理队列，保证非热点数据的请求处理")]),_._v(" "),a("li",[_._v("隔离，业务隔离、系统隔离、以及数据隔离")])])])]),_._v(" "),a("h2",{attrs:{id:"流量削峰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰","aria-hidden":"true"}},[_._v("#")]),_._v(" 流量削峰")]),_._v(" "),a("p",[a("strong",[_._v("请求数尽可能少")])]),_._v(" "),a("ul",[a("li",[_._v("排队异步策略 内部上下游系统之间调用请求不平缓的场景\n"),a("ul",[a("li",[_._v("消息队列方式")]),_._v(" "),a("li",[_._v("利用线程池加锁等待")]),_._v(" "),a("li",[_._v("先进先出、先进后出等常用的内存排队算法")]),_._v(" "),a("li",[_._v("把请求序列化到文件中，然后再顺序地读文件（例如基于mysql binlog同步机制）来恢复请求等方式")])])]),_._v(" "),a("li",[_._v("答题延缓策略 更适用于秒杀或者营销活动等应用场景\n"),a("ul",[a("li",[_._v("防止部分买家使用秒杀器在参加秒杀时作弊")]),_._v(" "),a("li",[_._v("目的其实就是延缓请求")])])]),_._v(" "),a("li",[_._v("分层过滤策略 非常适合交易性的写请求\n"),a("ul",[a("li",[_._v("将动态请求的读数据缓存（cache）在web端，过滤掉无效的数据读")]),_._v(" "),a("li",[_._v("对读数据不做强一致性校验，减少因为一致性校验产生瓶颈的问题")]),_._v(" "),a("li",[_._v("对写数据进行基于时间的合理分片，过滤掉过期的失效请求")]),_._v(" "),a("li",[_._v("对写请求做限流保护，将超出系统承载能力的请求过滤掉")]),_._v(" "),a("li",[_._v("对写数据进行强一致性校验，只保留最后有效的数据")])])])]),_._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[_._v("#")]),_._v(" 性能优化")]),_._v(" "),a("p",[a("strong",[_._v("使用QPS来衡量系统服务端性能 总QPS =（1000ms/响应时间）× 线程数量")])]),_._v(" "),a("ul",[a("li",[_._v("设置合理的线程数，最大化CPU使用，可以显著提升服务器性能")])]),_._v(" "),a("blockquote",[a("p",[_._v("线程数 = [(线程等待时间 + 线程 CPU 时间) / 线程 CPU 时间] × CPU 数量")])]),_._v(" "),a("blockquote",[a("p",[_._v("线程数 = 2*CPU数量 + 1 默认值")])]),_._v(" "),a("ul",[a("li",[_._v("判断CPU性能瓶颈 JProfiler 和 Yourkit")]),_._v(" "),a("li",[_._v("系统优化\n"),a("ul",[a("li",[_._v("较少编码 字符串IO操作，字符转化为字节必须编码 resp.getOutputStream()直接执行字符操作")]),_._v(" "),a("li",[_._v("较少序列化 必要情况较少RPC调用，直接打包部署")]),_._v(" "),a("li",[_._v("java极致优化 使用代理服务器直接返回静态数据")]),_._v(" "),a("li",[_._v("并发读优化 借助本地缓存和缓存中间件")])])])]),_._v(" "),a("h2",{attrs:{id:"减库存操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减库存操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 减库存操作")]),_._v(" "),a("h3",{attrs:{id:"减库存操作：下单和付款"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减库存操作：下单和付款","aria-hidden":"true"}},[_._v("#")]),_._v(" 减库存操作：下单和付款")]),_._v(" "),a("ul",[a("li",[_._v("下单减库存 下单减库存，可以基于mysql事务来精准空值库存，需保证减库存的幂等性 缺点：下单不一定付款")]),_._v(" "),a("li",[_._v("付款扣库存 并发较高，先下单后付款会导致商品被其他人买走")]),_._v(" "),a("li",[_._v("预扣库存 保留一段时间，超过时间释放库存，付款时若超时重新判断库存")])]),_._v(" "),a("p",[_._v("针对上面三种情况，第一种情况可以在用户下单时，加上一些风控判断：经常下单不付款、设置一次可有卖次数、重复下单不付款次数限制。"),a("br"),_._v("\n电影票、飞机票的抢购一般情况下，采用预扣库存的方案。"),a("br")]),_._v(" "),a("h3",{attrs:{id:"减库存实现与优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减库存实现与优化方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 减库存实现与优化方案")]),_._v(" "),a("ul",[a("li",[_._v("利用数据库事务和数据库表变更条件来控制库存数量")]),_._v(" "),a("li",[_._v("简单库存，不存在总库存联动 直接利用缓存来实现，本地缓存或者redis缓存")]),_._v(" "),a("li",[_._v("大量线程竞争InnoDB行锁，TPS下降解决方案\n"),a("ul",[a("li",[_._v("应用层排队 本机按照商品维度设置队列顺序执行，减少单机对数据库同一记录的并行度，尽可能较少热点数据占用过多的数据库连接")]),_._v(" "),a("li",[_._v("数据库层做排队 数据库层面对单行记录做排队")])])])]),_._v(" "),a("h2",{attrs:{id:"兜底方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兜底方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 兜底方案")]),_._v(" "),a("h3",{attrs:{id:"整体思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体思路","aria-hidden":"true"}},[_._v("#")]),_._v(" 整体思路")]),_._v(" "),a("p",[_._v("系统的高可用建设，它其实是一个系统工程，需要考虑到系统建设的各个阶段，也就是说它其实贯穿了系统建设的整个生命周期，具体如下：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("架构阶段")]),_._v("：架构阶段主要考虑系统的可扩展性和容错性，要避免系统出现单点问题。")]),_._v(" "),a("li",[a("strong",[_._v("编码阶段")]),_._v("：编码最重要的是保证代码的健壮性，例如涉及远程调用问题时，要设置合理的超时退出机制，防止被其他系统拖垮，\n也要对调用的返回结果集有预期，防止返回的结果超出程序处理范围，\n最常见的做法就是对错误异常进行捕获，对无法预料的错误要有默认处理结果。")]),_._v(" "),a("li",[a("strong",[_._v("测试阶段")]),_._v("：测试主要是保证测试用例的覆盖度，保证最坏情况发生时，我们也有相应的处理流程。")]),_._v(" "),a("li",[a("strong",[_._v("发布阶段")]),_._v("：发布时最容易出现错误，因此要有紧急的回滚机制。")]),_._v(" "),a("li",[a("strong",[_._v("运行阶段")]),_._v("：系统的监控要准确及时，发现问题能够准确报警并且报警数据要准确详细，便于排查问题。")]),_._v(" "),a("li",[a("strong",[_._v("故障发生")]),_._v("：首先最重要的就是及时止损，例如由于程序问序问题导致商品价格错误，要及时下架商品或者关闭购买链接，防止造成重大资产损失。\n然后要能够及时恢复服务，并定位原因解决问题。")])]),_._v(" "),a("h3",{attrs:{id:"应急预案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应急预案","aria-hidden":"true"}},[_._v("#")]),_._v(" 应急预案")]),_._v(" "),a("p",[_._v("针对运行阶段的大流量冲击，会采用如下方案来应对：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("降级")]),_._v("：流量达到一定程度，限制或者关闭系统的非核心功能，保证核心业务有充足的资源。实现方案：采用降级开关。")]),_._v(" "),a("li",[a("strong",[_._v("限流")]),_._v("：当系统容量达到瓶颈时，需要限制一部分流量。可采用客户端和服务器端限流。")]),_._v(" "),a("li",[a("strong",[_._v("拒绝服务")]),_._v("：当系统负载达到一定阈值时，直接返回失败。可以再nginx和java层做过载保护。")])])])}],!1,null,null,null);i.options.__file="README.md";v.default=i.exports}}]);