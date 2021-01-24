<template>
  <div>
    <div class="fly-panel">
      <h3 class="fly-panel-title">温馨通道</h3>
      <div class="fly-panel-main layui-row">
        <ul class="layui-clear imooc-quick">
          <li class="layui-col-xs6"
              v-for="(item,index) in lists"
              :key="'tips'+index">
            <a :href="item.link"
               target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTips } from '@/api/content'
export default {
  name: 'tips',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    getTips().then((res) => {
      if (res.code === 200) {
        this.lists = res.data
      }
    }).catch((err) => {
      if (err) {
        this.$alert(err.msg)
        console.log(err)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$boder-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
}
.imooc-quick {
  border: 1px solid $boder-color;
  border-bottom: none;
  border-right: none;
  .layui-col-xs6 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border: 1px solid $boder-color;
    border-left: none;
    border-top: none;
    box-sizing: border-box;
    a {
      display: block;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
