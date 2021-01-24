<template>
  <div>
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <imooc-list></imooc-list>
        </div>
        <div class="layui-col-md4">
          <imooc-hotlist></imooc-hotlist>
          <imooc-ads></imooc-ads>
          <imooc-links></imooc-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/contents/List.vue'
import HotList from '@/components/sidebar/HotList.vue'
import Ads from '@/components/sidebar/Ads.vue'
import Links from '@/components/sidebar/Links.vue'
export default {
  name: 'template1',
  components: {
    'imooc-list': List,
    'imooc-hotlist': HotList,
    'imooc-ads': Ads,
    'imooc-links': Links
  }
}
</script>

<style lang="scss" scoped>
</style>
