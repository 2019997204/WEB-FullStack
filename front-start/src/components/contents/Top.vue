<template>
  <div>
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a>置顶</a>
        <a href="#signin"
           class="layui-hide-sm layui-show-xs-block fly-right"
           id="LAY_goSignin"
           style="color: #FF5722;">去签到</a>
      </div>
      <list-item :lists="lists"
                 :isShow="false"></list-item>

    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { mixin } from '@/mixin/getList'
export default {
  mixins: [mixin],
  name: 'top',
  data () {
    return {
      isTop: 1
    }
  },
  components: {
    ListItem
  },
  mounted () {
    this._getLists()
  }
}
</script>

<style lang="scss" scoped>
</style>
