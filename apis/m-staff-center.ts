import Http from '@/utils/request'
 
export const config1 = (params: any) => {
    return Http.get('/m-staff-center/api/v1/role/pageList', params)
}
export const getVideoList = (params: any) => {
    return Http.post('/m-staff-center/api/v1/UcAuthCompany/getName', params)
}
