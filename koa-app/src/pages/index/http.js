import server from '../../utils/server';

const httpServer = {
  baseErrFunc:() => {
    console.log('')
  },
  getTableList: (data) => {
    const config = {
      url: '/api/helloWorld',
      type: 'get',
      data: data,
      sucFunc: httpServer.getTableSucFunc,
      errFunc: httpServer.baseErrFunc
    }
    server(config)
  },
  getTableSucFunc: (res) => {
    this.setState({
      dataList: res.data
    }, () => {
      console.log(this.state.dataList)
    })
  }
}

export default httpServer