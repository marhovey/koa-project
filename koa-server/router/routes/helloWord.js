const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = JSON.stringify({
    data: 'Hello My First Koa Project',
    errMsg: '操作成功',
    errCode: 0
  });
  next();
})

module.exports = router.routes();