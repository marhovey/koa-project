import { server } from '../../utils/server';

const httpService = function () {
  const httpServer = {
    baseErrFunc () {
      console.log('')
    },
    getDetail (id) {
      const config = {
        url: `/api/article?id=${id}`,
        type: 'get',
        sucFunc: httpServer.getDetailSucFunc,
        errFunc: httpServer.baseErrFunc
      }
      server(config)
    },
    getDetailSucFunc (res) {
      this.setState({
        article: res.data
      })
    }
  }
  return httpServer
}

export default httpService