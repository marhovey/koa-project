// 查询数据表
const QUERY_TABLE = (tableName) => `select * from ${tableName}`

// 插入数据
const INSERT_TABLE = (tableName, obj) => {
  var key = '', val = '', j = 0;
  for(var i in obj) {
    if (j === 0) {
      key += `${i}, `
      val += `${obj[i]}, `
    } else {
      key += `${i}`
      val += `${obj[i]}`
    }
    j++;
  }
  return `INSERT INTO ${tableName} (${key}) VALUES (${val});`
}

// 更新数据
const UPDATE_TABLE = (tableName, primaryObj, updateObj) => {

}

module.exports = {
  QUERY_TABLE,
  INSERT_TABLE
}