const router = require('koa-router')();
const allService = require('../../conf/mysql.config');
router.get('/', async (ctx, next) => {
  let results = await allService.getUserData('dx');
  ctx.body = JSON.stringify({
    data: '账号：' + results[0].name + '密码：' + results[0].password,
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();