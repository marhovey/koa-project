const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = 'hello World';
  next();
})

module.exports = router.routes();