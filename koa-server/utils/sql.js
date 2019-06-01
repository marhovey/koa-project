// 查询数据表
const QUERY_TABLE = (tableName, rules) => `select * from ${tableName} ${rules};`

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
  var fields = 'set ', primarys='', uInd = 1, pInd=1, upKeys = Object.keys(updateObj), pKeys = Object.keys(primaryObj);
  for(var i of upKeys) {
    if (uInd === upKeys.length) {
      fields += `${i}=${updateObj[i]}`
    } else {
      fields += `${i}=${updateObj[i]}, `
    }
    uInd++;
  }
  for (var j of pKeys) {
    if (pInd === pKeys.length) {
      primarys += `${j}=${primaryObj[j]}`
    } else {
      primarys += `${j}=${primaryObj[j]} and `
    }
    pInd++;
  }
  console.log(`update ${tableName} ${fields} where ${primarys};`)
  return `update ${tableName} ${fields} where ${primarys};`
}

module.exports = {
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE
}