const sql = require('./sql');
const query = require('./query');
const utils = {
  getArtList: async (tableName, pageNum, pageSize) => {
    let SQL = sql.QUERY_TABLE(tableName, `limit ${pageSize} offset ${pageNum * pageSize}`), data = {};
    data.data = await query(SQL)
    for (var i in data.data) {
      let comCnt = await query(`select count(*) as count from comments where art_id=${data.data[i].art_id};`)
      data.data[i].commentCnt = comCnt[0].count
    }
    let count = await query(`select count(*) as count from ${tableName};`)
    data.count = count[0].count
    data.currentPage = pageNum
    return data
  },
  getArticle: async (tableName, id) => {
    let contRow = await query(sql.QUERY_TABLE(tableName, `where id=${id}`))
    let infoRow = await query(sql.QUERY_TABLE('art_list', `where art_id=${id}`))
    let info = infoRow[0]
    query(sql.UPDATE_TABLE('art_list', {art_id: id}, {views: info.views + 1}))
    let data = {
      content: contRow[0].content,
      ...info
    }
    return data
  }
}

module.exports = utils
