const sql = require('./sql');
const query = require('./query');
const utils = {
  getArtList: async (tableName, pageNum, pageSize) => {
    let SQL = sql.QUERY_TABLE(tableName), data = {};
    SQL += ` limit ${pageSize} offset ${pageNum * pageSize};`
    data.data = await query(SQL)
    for (var i in data.data) {
      let comCnt = await query(`select count(*) as count from comments where art_id=${data.data[i].art_id};`)
      data.commentCnt = comCnt[0].count
    }
    let count = await query(`select count(*) as count from ${tableName};`)
    data.count = count[0].count
    data.currentPage = pageNum
    return data
  }
}

module.exports = utils
