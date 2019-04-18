(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{233:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"io"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#io","aria-hidden":"true"}},[t._v("#")]),t._v(" io")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#io字符集和字符集编码的关系"}},[t._v("IO字符集和字符集编码的关系")])]),e("li",[e("a",{attrs:{href:"#decoder系列"}},[t._v("Decoder系列")]),e("ul",[e("li",[e("a",{attrs:{href:"#streamdecoder"}},[t._v("StreamDecoder")])]),e("li",[e("a",{attrs:{href:"#stringdecoder将字节转为string类型（字符）"}},[t._v("StringDecoder将字节转为String类型（字符）")])])])]),e("li",[e("a",{attrs:{href:"#decoder和serializable的区别"}},[t._v("Decoder和Serializable的区别")])]),e("li",[e("a",{attrs:{href:"#reader-inputstream系列解析"}},[t._v("Reader InputStream系列解析")]),e("ul",[e("li",[e("a",{attrs:{href:"#reader-主要解决字符流读取问题"}},[t._v("Reader 主要解决字符流读取问题")])]),e("li",[e("a",{attrs:{href:"#inputstream主要解决字节流的读取"}},[t._v("InputStream主要解决字节流的读取")])]),e("li",[e("a",{attrs:{href:"#inputstreamreader的作用"}},[t._v("InputStreamReader的作用")])])])]),e("li",[e("a",{attrs:{href:"#writer-outputstream"}},[t._v("Writer OutputStream")])]),e("li",[e("a",{attrs:{href:"#字节流和字符流的设计模式"}},[t._v("字节流和字符流的设计模式")])]),e("li",[e("a",{attrs:{href:"#file类"}},[t._v("File类")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"io字符集和字符集编码的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#io字符集和字符集编码的关系","aria-hidden":"true"}},[t._v("#")]),t._v(" IO字符集和字符集编码的关系")]),t._v(" "),e("ul",[e("li",[t._v("字符集编码是规则，字符集是按照规则下的全集；")]),t._v(" "),e("li",[t._v("java默认的字符集编码是操作系统的；")]),t._v(" "),e("li",[t._v("web页面的页面集编码：meta 中指定，跳转时会根据浏览器的优化准备，对输入是否编码优化；浏览器中地址栏输入取决于浏览器的字符集；")])]),t._v(" "),e("h2",{attrs:{id:"decoder系列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decoder系列","aria-hidden":"true"}},[t._v("#")]),t._v(" Decoder系列")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("主要解决字节和字符的转化问题")])]),t._v(" "),e("h3",{attrs:{id:"streamdecoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#streamdecoder","aria-hidden":"true"}},[t._v("#")]),t._v(" StreamDecoder")]),t._v(" "),e("ul",[e("li",[t._v("InputStream到Reader的过程要指定编码字符集，否则将采用操作系统默认字符集，可能会出现乱码问题；")]),t._v(" "),e("li",[t._v("StreamDecoder 为字节到字符的转化器；")]),t._v(" "),e("li",[t._v("StreamDecoder 会判断charset是否为JVM支持的字符集，否则会抛异常；")])]),t._v(" "),e("h3",{attrs:{id:"stringdecoder将字节转为string类型（字符）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stringdecoder将字节转为string类型（字符）","aria-hidden":"true"}},[t._v("#")]),t._v(" StringDecoder将字节转为String类型（字符）")]),t._v(" "),e("h2",{attrs:{id:"decoder和serializable的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decoder和serializable的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" Decoder和Serializable的区别")]),t._v(" "),e("ul",[e("li",[t._v("Decoder 主要用来解决编码问题；")]),t._v(" "),e("li",[t._v("Serializable序列化协议则主要解决哪些数据是用Decoder；")])]),t._v(" "),e("h2",{attrs:{id:"reader-inputstream系列解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reader-inputstream系列解析","aria-hidden":"true"}},[t._v("#")]),t._v(" Reader InputStream系列解析")]),t._v(" "),e("h3",{attrs:{id:"reader-主要解决字符流读取问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reader-主要解决字符流读取问题","aria-hidden":"true"}},[t._v("#")]),t._v(" Reader 主要解决字符流读取问题")]),t._v(" "),e("ul",[e("li",[t._v("BufferedReader 中使用char[]数据缓存数据，减少一次读取较大量数据频繁的System.arraycopy。")]),t._v(" "),e("li",[t._v("PushbackReader unreader方法推回一个字符数组，将其复制到推回缓冲区前面。")])]),t._v(" "),e("h3",{attrs:{id:"inputstream主要解决字节流的读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputstream主要解决字节流的读取","aria-hidden":"true"}},[t._v("#")]),t._v(" InputStream主要解决字节流的读取")]),t._v(" "),e("ul",[e("li",[t._v("InputStream 主要解决字符流的读取，将读取的数据转化为字符。")]),t._v(" "),e("li",[t._v("ByteArrayInputStream和StringBufferInputStream 读取内存数据")])]),t._v(" "),e("h3",{attrs:{id:"inputstreamreader的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputstreamreader的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" InputStreamReader的作用")]),t._v(" "),e("ul",[e("li",[t._v("实现字节流->字符流")]),t._v(" "),e("li",[t._v("实现原理：\n"),e("ul",[e("li",[t._v("使用InputStream构造StreamDecoder；")]),t._v(" "),e("li",[t._v("使用StreamDecoder的字符集编码格式，将字节转为字符流；")])])])]),t._v(" "),e("h2",{attrs:{id:"writer-outputstream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writer-outputstream","aria-hidden":"true"}},[t._v("#")]),t._v(" Writer OutputStream")]),t._v(" "),e("ul",[e("li",[t._v("Writer 主要实现字符的写入问题；")]),t._v(" "),e("li",[t._v("OutputStream 主要实现字节的写入功能：PrintWriter")]),t._v(" "),e("li",[t._v("OutputStreamWriter的作用:实现字符流->字节流")]),t._v(" "),e("li",[t._v("OutputStreamWriter的作用:\n"),e("ul",[e("li",[t._v("使用OutputStream构造StreamEncoder;")]),t._v(" "),e("li",[t._v("使用StreamDecoder的字符集编码格式，将字符转化字节流")])])]),t._v(" "),e("li",[t._v("flush方法：如果一直调用write()，没有调用flush方法，则一直会写在内存中，且在满足默认大小时，会调用System.arrayCopy()方法发生数组复制功能；")])]),t._v(" "),e("h2",{attrs:{id:"字节流和字符流的设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字节流和字符流的设计模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 字节流和字符流的设计模式")]),t._v(" "),e("ul",[e("li",[t._v("采用的设计模式为装饰者模式")]),t._v(" "),e("li",[t._v("装饰模式的核心思想是：不断地给流添加新的功能，将对象不断地new 放进去")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("/**\n * bufr.reader实现缓存功能---\x3eInputStreamReader.reader字节流向字符流转换\n * ---\x3e调用FileInputStream.reader实现字节的读取\n */")]),t._v("\nBufferedReader bufr "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("BufferedReader")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                         "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("InputStreamReader")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("FileInputStream")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"D:\\\\demo.txt"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                     "),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{attrs:{class:"token comment"}},[t._v("//读取文件的字节流---\x3e字节流转化为字符流---\x3e创建字符流缓冲区")]),t._v("\nBufferedWriter bufw "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("BufferedWriter")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("OutputStreamWriter")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("System"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"file类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file类","aria-hidden":"true"}},[t._v("#")]),t._v(" File类")]),t._v(" "),e("ul",[e("li",[t._v("File类是对文件系统中文件以及文件夹进行封装的对象，可以通过对象的思想来操作文件和文件夹。")]),t._v(" "),e("li",[t._v("File类保存文件或目录的各种元数据信息")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("文件名、文件长度、最后修改时间、是否可读、获取当前文件的路径名，判断指定文件是否存在、获得当前目录中的文件列表，创建、删除文件和目录等方法。")])])])}],!1,null,null,null);s.options.__file="README.md";a.default=s.exports}}]);