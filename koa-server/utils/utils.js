const sql = require('../../utils/sql');
const query = require('../../utils/query');

const getArtList = (tableName, pageNum, pageSize) => {
  let SQL = sql(tableName), data = {};
  SQL += ` limit ${pageSize} offset ${pageNum * pageSize};`
  data.data = query(SQL)
  for (var i in data.data) {
    data.commentCnt = query(`select count(*) from comments where art_id=${data.data[i].art_id};`)
  }
  data.count = query(`select count(*) from ${tableName};`)
  data.currentPage = pageNum
  return data
}