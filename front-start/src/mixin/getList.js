import {
  getList
} from '@/api/content'

const mixin = {
  data() {
    return {
      isEnd: false,
      // isRepeate: false,
      isTop: 0,
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      current: '',
      lists: []
    }
  },
  methods: {
    _getLists() {
      // if (this.isRepeate) return
      if (this.isEnd) return
      // this.isRepeate = true
      let options = {
        catalog: this.catalog,
        isTop: this.isTop,
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
    }
  }
}

export {
  mixin
}
