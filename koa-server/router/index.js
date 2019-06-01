const articleList = require('./routes/articleList')
const articles = require('./routes/articles')

var router = require('koa-router')()
router.prefix('/api')
router.use('/articleList', articleList)
router.use('/article', articles)

module.exports = router