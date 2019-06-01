import { server } from '../../utils/server';

const httpService = function() {
  const httpServer = {
    baseErrFunc () {
      console.log('')
    },
    getTableList (data) {
      const config = {
        url: `/api/articleList?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
        type: 'get',
        data: data,
        sucFunc: httpServer.getTableSucFunc,
        errFunc: httpServer.baseErrFunc
      }
      server(config)
    },
    getTableSucFunc (res) {
      this.setState({
        dataList: res.data.data,
        totalCnt: res.data.count,
        currentPage: res.data.currentPage * 1 + 1
      })
    }
  }
  return httpServer
}


export default httpService