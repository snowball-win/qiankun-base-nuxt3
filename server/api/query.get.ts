// 文件名里的get可以省略，默认为get请求，省略后为：query.ts
export default defineEventHandler((event) => {
  const query = getQuery(event)
  return { a: query.param1, b: query.param2 }
})