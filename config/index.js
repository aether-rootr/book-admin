export default {
  development: {
    baseUrl: '/api' // 测试接口域名
  },
  beta: {
    baseUrl: 'http://localhost:8081/manage-api/admin' // 测试接口域名
  },
  release: {
    baseUrl: 'http://localhost:8081/manage-api/admin' // 正式接口域名
  }
}
