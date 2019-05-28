const sql = require('./sql');
const query = require('./query');
const utils = {
  getArtList: (tableName, pageNum, pageSize) => {
    let SQL = sql.QUERY_TABLE(tableName), data = {};
    SQL += ` limit ${pageSize} offset ${pageNum * pageSize};`
    data.data = query(SQL)
    for (var i in data.data) {
      data.commentCnt = query(`select count(*) from comments where art_id=${data.data[i].art_id};`)
    }
    data.count = query(`select count(*) from ${tableName};`)
    data.currentPage = pageNum
    return data
  }
}

module.exports = utils
