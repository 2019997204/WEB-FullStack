<template>
  <div>
    <div class="fly-panel"
         style="margin-bottom: 0;">

      <div class="fly-panel-title fly-filter">
        <a :class="{'layui-this': status === '' && tag === ''}"
           @click.prevent="search()">综合</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === '0'}"
           @click.prevent="search(0)">未结</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === '1'}"
           @click.prevent="search(1)">已结</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === '' && tag === '精华'}"
           @click.prevent="search(2)">精华</a>
        <span class="fly-filter-right layui-hide-xs">
          <a :class="{'layui-this': sort === 'created'}"
             @click.prevent="search(3)">按最新</a>
          <span class="fly-mid"></span>
          <a :class="{'layui-this': sort==='answer'}"
             @click.prevent="search(4)">按热议</a>
        </span>
      </div>
      <list-item :lists="lists"
                 :isEnd="isEnd"
                 @nextPage="nextPage()"></list-item>
    </div>
  </div>
</template>

<script>
// import { getList } from '@/api/content'
import ListItem from './ListItem'
import { mixin } from '@/mixin/getList'
export default {
  mixins: [mixin],
  name: 'list',
  components: {
    ListItem
  },
  /* data () {
    return {
      isEnd: false,
      // isRepeate: false,
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      current: '',
      lists: []
    }
  }, */
  watch: {
    current (oldval, newval) {
      console.log('current:' + oldval + ',' + newval)
      this.init()
    },
    '$route' (newval, oldval) {
      console.log(newval)
      let catalog = this.$route.params['catalog']
      if (typeof catalog !== 'undefined' && catalog !== '') {
        this.catalog = catalog
      }
      this.init()
    }
  },
  mounted () {
    let catalog = this.$route.params['catalog']
    if (typeof catalog !== 'undefined' && catalog !== '') {
      this.catalog = catalog
    }
    this._getLists()
  },
  methods: {
    search (val) {
      console.log(val)
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      switch (val) {
        // 未结贴
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结贴
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 精华标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        case 3:
          this.status = ''
          this.tag = '精华'
          this.sort = 'created'
          break
        case 4:
          this.status = ''
          this.tag = ''
          this.sort = 'answer'
          break
        // 综合标签
        default:
          this.status = ''
          this.tag = ''
          this.sort = 'created'
          this.current = ''
          break
      }
    },
    /* _getLists () {
      // if (this.isRepeate) return
      if (this.isEnd) return
      // this.isRepeate = true
      let options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        srot: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options).then((res) => {
        // 加入请求锁,防止用户多次点击,等待数据返回后,再打开
        // this.isRepeate = false
        console.log(res)
        // this.lists = res.data
        // 对于异常当判断,res.code非200 ,我们给用户一个提示
        // 是否lists长度为0,如果为零既可以直接赋值
        // 当lists长度不为0,后面请求当数据,加入到lists里面来
        if (res.code === 200) {
          // 判断res.data的长度,如果小于20条,给用户一个提示
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
          // this.lists = []
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
      }).catch((err) => {
        // this.isRepeate = false
        if (err) {
          this.$alert(err.message)
          console.log(err)
        }
      })
    }, */
    nextPage () {
      this.page++
      this._getLists()
    },
    init () {
      this.page = 0
      this.isEnd = false
      this.lists = []
      this._getLists()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
