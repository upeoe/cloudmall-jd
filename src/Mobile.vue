<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `
/*
 * Inspired by http://strml.net/
 * 大家好，这里是爱美购
 */

/**
 * 先给所有元素加上过度效果
 */
* {
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
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


`,
          `
/**
 * 
 * 好像有点单调，让我们美化一下 markdown 吧
 * 
 */
`
          ,
          `
/*
 * 再加点样式吧
 */
.resumeEditor {
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
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
`,
`

/**
 * 
 * 爱美购期待你的加入，http://www.cloudmall.ai
 * 
 */

`
],
        currentMarkdown: '',
        fullMarkdown: `
爱美购（CloudMall）
---
CloudMall 是一个涵盖超过三千万商品的综合购物平台，
旨在让生活在世界各地的用户轻松买到全球最好的产品，
不仅物流信息全程跟踪，还支持全国各国当地的支付方式，
从美国到欧洲，从东亚到中东，CloudMall 使购物变得轻松又有趣。

关于我们
---

「工作在爱美购」

有一种工作，叫爱美购的工作。

我们厌倦沉闷无趣，官僚主义式的人际关系；

因此爱美购的工作，只有活泼开朗的小伙伴以及简单扁平的工作氛围。

我们反感按部就班，成为商业机器里的螺丝钉；

因此爱美购的工作需要你每天打开脑洞，用自己天马行空却又接地气的灵感，创造你的工作。

我们害怕落后于人，沦落为没有竞争力的被淘汰者；

因此爱美购的工作，每一天都是全新的，新的任务，新的机遇和新的挑战层出不穷。
渐渐地你会发现，每过一天，你都会有一点点的成长。

我们相信爱美购的工作对于渴望成长的你而言绝不仅仅是工作本身，
而是一个舞台，一个能让你挥洒汗水，发挥创意，追逐梦想的舞台。
如果你希望人生有一段不平凡的经历，那么请来和我们相遇，我们一直在等你。



「和谁一起奋斗」

爱美购主要成员来自普林斯顿大学、中山大学等优秀院校；
他们在各自领域内均具有丰富经验，曾供职于包括 Google、高盛等公司机构。
我们希望整合行业内最优质的产业及人才资源，并提供不间断的交流与成长机会，
创建顶尖的学习型团队，以吸引全球最优秀的互联网人才汇集于此。



「工作环境」

爱美购的深圳办公室位于有中国硅谷之称的深圳南山科技园。
在高大上的超甲级写字楼里，我们拒绝格子办公桌的单调。
除了全苹果办公设备及站立办公区，
我们还配备了娱乐室，餐饮区，茶水间，娱乐室等区域，
更有 PS4，桌游和豆豆沙发等意想不到的设施，
只为创造一个开放自由，有无穷创造力和战斗力的空间。



「活力爱美购」

作为一支年轻的团队，各种活动当然少不了，
包括每周的下午茶、运动日，每月的生日(Hong Bao)趴，部门团建和公司出游等等。
另外，基于个人兴趣爱好，公司目前已经聚集了各类运动社、美食社、户外社、桌游社等社团，
不定期举办各种交流活动。我们相信在这些圈子里，你总能找到一个，你喜欢的。


工作内容
---

- 设计、开发、测试、部署以及维护并改进各子系统；
- 管理项目优先级并按时交付；根据能力和团队需求，您将有可能被分配到以下一个或多个项目：
  - 用户应用产品：主流客户端开发，运营前后台；
  - 商品索引系统：亿级SKU的库存价格实时跟踪同步，并对商品进行智能分类、本地化、图片处理和去重；
  - 国际化商务交易系统：跨境、跨语言商品交付及物流调配；
  - 商业智能应用系统：商机挖掘、精准搜索推荐、市场程序化管理。

任职要求
---

- 全日制统招本科及以上，3-5年以上软件开发工作经验；
- 精通至少一门以下语言：Go，Python，C/C++；根据项目需要，有兴趣并有能力学习其他编程语言；
- 熟悉Unix/Linux环境；Memcache/Redis/MongoDB等存储系统；
- 能独立设计开发包括前后端交互（C/S）的业务子系统；
- 熟悉常见的设计模式、单元测试、持续开发集成、Code Review，并能在日常工作践行；
- 了解搜索引擎、电子商务、社交类应用的系统基本架构，能对已有的子系统进行优化调整的优先；
- 活跃的开源项目贡献者优先。

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
