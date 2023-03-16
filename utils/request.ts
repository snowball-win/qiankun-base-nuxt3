import { ElMessage } from 'element-plus'
import { hash } from 'ohash'
import { UseFetchOptions } from 'nuxt/dist/app/composables'

async function fetch (url: string, fetchOptions?: UseFetchOptions<any>): Promise<any> {
//   const IS_SERVER = process.server
//   const IsProduction = process.env.NODE_ENV === 'production'
//   const token = useCookie("token");
//   const headers = { // headers信息-暂时用不到
//       'Authorization' : `Bearer ${token.value}`
//   }
  // const { public: { baseURL, apiBaseURL } } = useRuntimeConfig()
  // 兼容本地proxy
  // const reqUrl = ((IS_SERVER || IsProduction) ? baseURL : apiBaseURL) + url
  // const reqUrl = baseURL+ url
  // 由于本地开发采用的nitro代理  导致本地开发时useAsyncData中在客户端和服务端的生成的key不一致
  // 为了确保初次渲染客户端和服务端数据一致 现在自定义key
  // key: a unique key to ensure that data fetching can be properly de-duplicated across requests, if not provided, it will be generated based on the static code location where useAsyncData is used.
  const key = hash(JSON.stringify(fetchOptions) + url)
  return useFetch(url, { ...fetchOptions, key, query: {t: +new Date()} }).then(({ data }: any) => {
    const value = data.value
    if (!value) {
      return Promise.reject()
    }
    if (value.code === '0') {
      return value
    }
    // console.log('ElMessage', url, value)
    ElMessage({
      message: value.msg,
      type: 'error',
    })
    return Promise.reject(value)
  })
}
 
export default new class Http {
 
  get(url: string, params?: any, options?: any): Promise<any> {
    return fetch(url, { method: 'get', params, ...options })
  }

  post(url: string, body?: any, options?: any): Promise<any>  {
    return fetch(url, { method: 'post', body, ...options })
  }

  put(url: string, body?: any, options?: any): Promise<any>  {
    return fetch(url, { method: 'put', body, ...options  })
  }

  delete(url: string, body?: any, options?: any): Promise<any>  {
    return fetch(url, { method: 'delete', body, ...options  })
  }
}
