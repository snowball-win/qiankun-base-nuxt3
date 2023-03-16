import { hash } from 'ohash'

// 后端返回的数据类型
export interface ResOptions<T> {
  data?: T
  code?: number
  msg?: string
}

const fetch = (url: string, options?: any): Promise<any> => {
  // const { $config } = useNuxtApp()
  // const { VITE_API_HOST } = $config.public
  const { public: { VITE_API_HOST } } = useRuntimeConfig() // 3.0正式版环境变量要从useRuntimeConfig里的public拿
  const reqUrl = VITE_API_HOST + url // 你的接口地址
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url)
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, key }).then(({ data, error }) => {
      if (error.value) {
        reject(error.value)
        return
      }
      const value: ResOptions<any> = data.value
      console.log('useFetchResData: ', value)
      if (!value) {
        // 这里处理错你自定义的错误，例如code !== 1
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
      } else {
        resolve(value)
      }
    }).catch((err: any) => {
      console.log(err)
      reject(err)
    })
  })
}

export default class Http {

  get = (url: string, params?: any) => {
    return fetch(url, { method: 'get', params })
  }

  post = (url: string, body?: any) => {
    return fetch(url, { method: 'post', body })
  }

  put = (url: string, body?: any) => {
    return fetch(url, { method: 'put', body })
  }

  delete = (url: string, body?: any) => {
    return fetch(url, { method: 'delete', body })
  }
}