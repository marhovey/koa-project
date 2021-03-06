const router = require('koa-router')();
const utils = require('../../utils/utils');

router.get('/', async (ctx, next) => {
  let query = ctx.request.query;
  let results = await utils.getArtList('art_list', query.pageNum, query.pageSize);
  // let results = await utils.getArtList('list_article', 0, 10);
  ctx.body = JSON.stringify({
    data: results,
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();