const router = require('koa-router')();
const util = require('../../utils/utils');

router.get('/', async (ctx, next) => {
  let results = await util.getArtList('art_list');
  ctx.body = JSON.stringify({
    data: results,
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();