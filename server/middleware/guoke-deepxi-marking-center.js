
// import { UseFetchOptions } from 'nuxt/dist/app/composables'
const { public: { baseUrl } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
  // console.log('4eeeeee', event.node.req.url)
  if (event.node.req.url?.includes('/m-staff-center')) {
    // console.log('New request: api', baseUrl + event.node.req.url, event.node.req.method)
    const {method, url} = event.node.req
    const options = {
      responseType: 'json',
    }
    options.headers = {
      'content-type': 'application/json',
      accept: 'application/json'
    }
    options.method = method
    if (method !== 'get' && method !== 'GET') {
      options.body = JSON.stringify(await readBody(event))
      console.log('req.body', options.body)
    }
    const resBody = await $fetch(baseUrl + url, options)
    .then(res => res)
    .catch(err => {
      console.log(err)
      return {
        code: '1',
        msg: '服务端错误',
        payload: null
      }
    })
    // console.log('res.body', resBody)
    // (resBody as ReadableStream).getReader()
    // const string = Buffer.from(resBody._handle.buffer).toString('utf8')
    // console.log('res.body', string)
    return resBody
  }
})
