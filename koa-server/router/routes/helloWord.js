const router = require('koa-router')();
const allService = require('../../conf/mysql.config');
router.get('/', async (ctx, next) => {
  // allService.createTable('createTable');
  let results = await allService.getUserData('list_article');
  ctx.body = JSON.stringify({
    data: results,
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();