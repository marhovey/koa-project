const router = require('koa-router')();
const utils = require('../../utils/utils');

router.get('/', async (ctx, next) => {
  let query = ctx.request.query;
  let results = await utils.getArticle('articles', query.id);
  ctx.body = JSON.stringify({
    data: results,
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();