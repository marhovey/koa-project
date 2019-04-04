const helloWorld = require('./routes/helloWord')

var router = require('koa-router')()
router.prefix('/api')
router.use('/helloWorld', helloWorld)

module.exports = router