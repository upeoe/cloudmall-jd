const setup = `
  /*
  * Inspired by http://strml.net/
  * 大家好，这里是爱美购
  */

  /**
  * 先给所有元素加上过度效果
  */
  * {
    -webkit-transition: all .1s;
    -moz-transition: all .1s;
    -o-transition: all .1s;
    transition: all .1s;
  }

  /**
  * 白色的背景太单调了，让我们加点样式
  */
  html {
    color: rgb(222,222,222);
    background: rgb(0,43,54);
  }

  /**
  * 修改一下文字的边框
  */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    overflow: auto;
    width: 90vw;
    margin: 2.5vh 5vw;
    height: 90vh;
  }
  .styleEditor {
    height: 45vh;
  }

  /**
  * 让我们代码高亮一下
  *
  */
  .token.selector{
    color: rgb(133,153,0);
  }
  .token.property{
    color: rgb(187,137,0);
  }
  .token.punctuation{
    color: yellow;
  }
  .token.function{
    color: rgb(42,161,152);
  }

  /**
  * 
  * 让我们做一些准备工作
  * 
  */
  html{
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed; left: 0; top: 0;
  }

  /**
  * 
  * 接下来准备一个编辑器
  * 
  */
  .resumeEditor {
    position: fixed;
    top: 50%; left: 0;
    padding: .5em;  margin: 2.5vh;
    width: 95vw; height: 45vh;
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
  }

  /**
  * 
  * 现在让我来个自我介绍吧
  * 
  */
`

const beauty = `
  /*
  * 再加点样式吧
  */
  .resumeEditor {
  padding: 2em;
  }
  .resumeEditor h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
  }
  .resumeEditor ul, .resumeEditor ol {
  list-style: none;
  }
  .resumeEditor ul> li::before {
  content: '•';
  margin-right: .5em;
  }
  .resumeEditor ol {
  counter-reset: section;
  }
  .resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
  }
  .resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
  }


  /**
  * 
  * CloudMall 期待你的加入，https://www.cloudmall.ai
  * 
  */

`

export default [
    setup,
    `
  /**
  * 
  * 好像有点单调，让我们美化一下 markdown 吧
  * 
  */
  `
    ,
    beauty
]