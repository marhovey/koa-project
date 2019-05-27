const articleList = require('./routes/articleList')

var router = require('koa-router')()
router.prefix('/api')
router.use('/articleList', articleList)

module.exports = router