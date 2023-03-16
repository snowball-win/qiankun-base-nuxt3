export default defineNuxtPlugin(()=>{
    return {
        provide: {
            hello: (msg: string) => `hello ${msg}`
        }
    }
})