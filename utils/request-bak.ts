import { _AsyncData } from 'nuxt3/dist/app/composables/asyncData'
import { ElMessage } from 'element-plus'

// 指定后端返回的基本数据类型
export interface ResponseConfig {
    code: number,
    status: number,
    data: any,
    msg: string
}
export interface ValueConfig {
    value: any,
}

const fetch = (url: string, options?: any): Promise<any>  => {
    const token = useCookie("token");
    const headers = { // headers信息
        'Authorization' : `Bearer ${token.value}`
    }
    const { public: { baseUrl } } = useRuntimeConfig() // 3.0正式版环境变量要从useRuntimeConfig里的public拿
    const reqUrl = baseUrl + url
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options, headers }).then(({ data, error }: _AsyncData) => {
            if (error.value) {
                reject(error.value)
                return
            }
            const value = data.value
            if (!value) {
                // 这里处理错误回调
                // reject(value)
                // $router.replace('/reject/' + value.status)
            }else if(value.code == 102){
                ElMessage({
                    message: value.msg,
                    type: 'error',
                })
            } else {
                resolve(ref(value))
            }
        }).catch((err: any) => {
            reject(err)
        })
    })
}
 
export default new class Http {
 
    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }
 
    post(url: string, params?: any): Promise<any>  {
        return fetch(url, { method: 'post', params })
    }
 
    put(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'put', body })
    }
 
    delete(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'delete', body })
    }
}