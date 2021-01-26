import Post from '../model/Post'

class ContentController {
  async getPostList(ctx) {
    const body = ctx.body
    // 测试数据
    const post = new Post({
      title: 'test title',
      content: 'test content',
      catalog: 'ask',
      fav: 20,
      isEnd: '0',
      reads: '0',
      answer: '0',
      status: '0',
      isTop: '0',
      sort: '0',
      tags: [{
        name: '精华',
        class: ''
      }]
    })

    const tmp = await post.save()
    console.log('🚀 ~ file: ContentController.js ~ line 25 ~ ContentController ~ getPostList ~ tmp', tmp)

    const sort = body.sort ? body.sort : 'created'
    const page = body.page ? parseInt(body.page) : 0
    const limit = body.limit ? parseInt(body.limit) : 20
    const options = {}
    if (typeof body.catalog !== 'undefined' && body.catalog !== '') {
      options.catalog = body.catalog
    }
    if (typeof body.isTop !== 'undefined' && body.isTop !== '') {
      options.isTop = body.isTop
    }
    if (typeof body.status !== 'undefined' && body.status !== '') {
      options.status = body.status
    }
    if (typeof body.isEnd !== 'undefined' && body.isEnd !== '') {
      options.isEnd = body.isEnd
    }
    if (typeof body.tags !== 'undefined' && body.tags !== '') {
      options.tags = {
        $elemMatch: {
          name: body.tags
        }
      }
    }
    const result = await Post.getList(options, sort, page, limit)
    ctx.body = {
      code: 200,
      data: result,
      msg: '获取文章列表成功'
    }
  }
}
export default ContentController