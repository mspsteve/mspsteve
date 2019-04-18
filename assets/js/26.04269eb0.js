(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{163:function(a,e,t){a.exports=t.p+"assets/img/jvm-8.6c26c460.png"},202:function(a,e,t){"use strict";t.r(e);var v=[function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"java内存模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java内存模型","aria-hidden":"true"}},[a._v("#")]),a._v(" java内存模型")]),a._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#happen-before原则"}},[a._v("happen-before原则")])]),v("li",[v("a",{attrs:{href:"#基本概念"}},[a._v("基本概念")])]),v("li",[v("a",{attrs:{href:"#使用内存屏障"}},[a._v("使用内存屏障")]),v("ul",[v("li",[v("a",{attrs:{href:"#硬件级别"}},[a._v("硬件级别")])]),v("li",[v("a",{attrs:{href:"#java内存屏障"}},[a._v("java内存屏障")])]),v("li",[v("a",{attrs:{href:"#volatile语义中的内存屏障"}},[a._v("volatile语义中的内存屏障")])]),v("li",[v("a",{attrs:{href:"#final语义中的内存屏障"}},[a._v("final语义中的内存屏障")])])])]),v("li",[v("a",{attrs:{href:"#限制处理器优化-mark一下，有时间处理"}},[a._v("限制处理器优化(mark一下，有时间处理)")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"happen-before原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#happen-before原则","aria-hidden":"true"}},[a._v("#")]),a._v(" happen-before原则")]),a._v(" "),v("p",[a._v("  happen-before关系是用来描述两个操作的可见性。具体原则可以分为以下8种：")]),a._v(" "),v("ul",[v("li",[a._v("单线程：在同一个线程中，书写在前面的操作happen-before后面的操作。")]),a._v(" "),v("li",[a._v("锁：同一个锁的"),v("code",[a._v("unlock")]),a._v("操作happen-before此锁的lock操作。")]),a._v(" "),v("li",[a._v("volatile：对一个volatile变量的写操作happen-before对此变量的任意操作(当然也包括写操作了)。")]),a._v(" "),v("li",[a._v("传递性：如果A操作 happen-before B操作，B操作happen-before C操作，那么A操作happen-before C操作。")]),a._v(" "),v("li",[a._v("线程启动：同一个线程的"),v("code",[a._v("start")]),a._v("方法happen-before此线程的其它方法。")]),a._v(" "),v("li",[a._v("线程中断：对线程"),v("code",[a._v("interrupt")]),a._v("方法的调用happen-before被中断线程的检测到中断发送的代码。")]),a._v(" "),v("li",[a._v("线程终结：线程中的所有操作都happen-before线程的终止检测。")]),a._v(" "),v("li",[a._v("对象创建：一个对象的初始化完成先于他的"),v("code",[a._v("finalize")]),a._v("方法调用。")])]),a._v(" "),v("h2",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),v("ul",[v("li",[a._v("原子性，是指在一个操作中，CPU不可以在中途暂停然后再调度，即不被中断操作，要不执行完成，要不就不执行。")]),a._v(" "),v("li",[a._v("可见性，是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。")]),a._v(" "),v("li",[a._v("有序性，即程序执行的顺序按照代码的先后顺序执行。")])]),a._v(" "),v("p",[a._v("  缓存一致性问题其实就是可见性问题，而处理器优化是可以导致原子性问题的，指令重排即会导致有序性问题。\n为了保证共享内存的正确性（可见性、有序性、原子性），java内存模型定义了共享内存系统中多线程程序读写操作行为的规范，\n其目的是解决由于多线程通过共享内存进行通信时，存在的本地内存数据不一致、编译器会对代码指令重排序、处理器会对代码乱序执行等带来的问题。\n下面是java内存模型的结构图："),v("br"),a._v(" "),v("img",{attrs:{src:t(163),alt:"jvm-内存模型"}})]),a._v(" "),v("h2",{attrs:{id:"使用内存屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用内存屏障","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用内存屏障")]),a._v(" "),v("h3",{attrs:{id:"硬件级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬件级别","aria-hidden":"true"}},[a._v("#")]),a._v(" 硬件级别")]),a._v(" "),v("ul",[v("li",[a._v("硬件层的内存屏障分为两种："),v("code",[a._v("Load Barrier")]),a._v("和"),v("code",[a._v("Store Barrie")]),a._v("r即读屏障和写屏障。")])]),a._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),v("p",[a._v("内存屏障有两个作用："),v("br"),a._v("\n阻止屏障两侧的指令重排序；"),v("br"),a._v("\n强制把写缓冲区/高速缓存中的脏数据等写回主内存，让缓存中相应的数据失效。")])]),a._v(" "),v("ul",[v("li",[a._v("对于"),v("code",[a._v("Load Barrier")]),a._v("来说，在指令前插入"),v("code",[a._v("Load Barrier")]),a._v("，可以让高速缓存中的数据失效，强制从新从主内存加载数据；")]),a._v(" "),v("li",[a._v("对于"),v("code",[a._v("Store Barrier")]),a._v("来说，在指令后插入"),v("code",[a._v("Store Barrier")]),a._v("，能让写入缓存中的最新数据更新写入主内存，让其他线程可见。")])]),a._v(" "),v("h3",{attrs:{id:"java内存屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java内存屏障","aria-hidden":"true"}},[a._v("#")]),a._v(" java内存屏障")]),a._v(" "),v("p",[a._v("  java的内存屏障通常所谓的四种即LoadLoad,StoreStore,LoadStore,StoreLoad实际上也是上述两种的组合，\n完成一系列的屏障和数据同步功能。具体如下：")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("LoadLoad")]),a._v("屏障：对于这样的语句Load1; "),v("code",[a._v("LoadLoad")]),a._v("; Load2，在Load2及后续读取操作要读取的数据被访问前，保证Load1要读取的数据被读取完毕。")]),a._v(" "),v("li",[v("code",[a._v("StoreStore")]),a._v("屏障：对于这样的语句Store1; "),v("code",[a._v("StoreStore")]),a._v("; Store2，在Store2及后续写入操作执行前，保证Store1的写入操作对其它处理器可见。")]),a._v(" "),v("li",[v("code",[a._v("LoadStore")]),a._v("屏障：对于这样的语句Load1; "),v("code",[a._v("LoadStore")]),a._v("; Store2，在Store2及后续写入操作被刷出前，保证Load1要读取的数据被读取完毕。")]),a._v(" "),v("li",[v("code",[a._v("StoreLoad")]),a._v("屏障：对于这样的语句Store1; "),v("code",[a._v("StoreLoad")]),a._v("; Load2，在Load2及后续所有读取操作执行前，保证Store1的写入对所有处理器可见。\n它的开销是四种屏障中最大的。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能")])]),a._v(" "),v("h3",{attrs:{id:"volatile语义中的内存屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#volatile语义中的内存屏障","aria-hidden":"true"}},[a._v("#")]),a._v(" volatile语义中的内存屏障")]),a._v(" "),v("ul",[v("li",[a._v("volatile的内存屏障策略非常严格保守，非常悲观且毫无安全感的心态：")])]),a._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),v("p",[a._v("在每个volatile写操作前插入StoreStore屏障，在写操作后插入StoreLoad屏障；"),v("br"),a._v("\n在每个volatile读操作前插入LoadLoad屏障，在读操作后插入LoadStore屏障；")])]),a._v(" "),v("ul",[v("li",[a._v("由于内存屏障的作用，避免了volatile变量和其它指令重排序、线程之间实现了通信，使得volatile表现出了锁的特性。")])]),a._v(" "),v("h3",{attrs:{id:"final语义中的内存屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#final语义中的内存屏障","aria-hidden":"true"}},[a._v("#")]),a._v(" final语义中的内存屏障")]),a._v(" "),v("ul",[v("li",[a._v("对于final域，编译器和CPU会遵循两个排序规则：")])]),a._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),v("p",[a._v("新建对象过程中，构造体中对final域的初始化写入和这个对象赋值给其他引用变量，这两个操作不能重排序；（废话嘛）"),v("br"),a._v("\n初次读包含final域的对象引用和读取这个final域，这两个操作不能重排序；（晦涩，意思就是先赋值引用，再调用final值）")])]),a._v(" "),v("ul",[v("li",[a._v("总之上面规则的意思可以这样理解，必需保证一个对象的所有final域被写入完毕后才能引用和读取。这也是内存屏障的起的作用：")]),a._v(" "),v("li",[a._v("写final域：在编译器写final域完毕，构造体结束之前，会插入一个StoreStore屏障，保证前面的对final写入对其他线程/CPU可见，并阻止重排序。")]),a._v(" "),v("li",[a._v("读final域：在上述规则2中，两步操作不能重排序的机理就是在读final域前插入了LoadLoad屏障。")]),a._v(" "),v("li",[a._v("X86处理器中，由于CPU不会对写-写操作进行重排序，所以StoreStore屏障会被省略；而X86也不会对逻辑上有先后依赖关系的操作进行重排序，所以LoadLoad也会变省略。")])]),a._v(" "),v("h2",{attrs:{id:"限制处理器优化-mark一下，有时间处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制处理器优化-mark一下，有时间处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 限制处理器优化(mark一下，有时间处理)")])])}],r=t(0),_=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},v,!1,null,null,null);_.options.__file="java内存模型.md";e.default=_.exports}}]);