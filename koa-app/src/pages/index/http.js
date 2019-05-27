import server from '../../utils/server';

const httpServer = {
  baseErrFunc:() => {
    console.log('')
  },
  getTableList: (data) => {
    const config = {
      url: '/api/articleList',
      type: 'get',
      data: data,
      sucFunc: httpServer.getTableSucFunc,
      errFunc: httpServer.baseErrFunc
    }
    server(config)
  },
  getTableSucFunc: (res) => {
    this.setState({
      dataList: res.data.data,
      totalCnt: res.data.count,
      currentPage: res.data.currentPage
    }, () => {
      console.log(this.state.dataList)
    })
  }
}

export default httpServer