const sql = require('./sql');
const query = require('./query');
const utils = {
  getArtList: async (tableName, pageNum, pageSize) => {
    let SQL = sql.QUERY_TABLE(tableName), data = {};
    SQL += ` limit ${pageSize} offset ${pageNum * pageSize};`
    data.data = await query(SQL)
    for (var i in data.data) {
      data.commentCnt = await query(`select count(*) from comments where art_id=${data.data[i].art_id};`)
    }
    data.count = await query(`select count(*) from ${tableName};`)
    data.currentPage = pageNum
    return data
  }
}

module.exports = utils
