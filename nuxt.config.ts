import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from "unplugin-icons/resolver";
const lifecycle = process.env.npm_lifecycle_event;
import { loadEnv } from 'vite'
import qiankun from 'vite-plugin-qiankun'
console.log('基础服务路径：', loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME)

export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: { // 运行时常量
        public: { // 客户端-服务端都能访问
            baseUrl: loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME
        }
    },
    app: {
        head: {
            title: 'ssr-snow',
            charset: 'utf-8',
            htmlAttrs: {
                lang: 'zh-CN'
            },
            link: [
                { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/swiper@8/swiper-bundle.css'}
            ],
            meta: [
                { name: "keywords", content: "vue3,nuxt3,ssr,snow" },
                { name: "description", content: "snow-nuxt3-web" },
                { name: "viewport", content: "user-scalable=0,width=device-width, initial-scale=1.0" },
            ],
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://webapi.amap.com/maps?v=2.0&key=296cad8de4082b7f0975ed1c39ea12f5'
                },
                {
                    type: 'text/javascript',
                    src: 'https://unpkg.com/swiper@8/swiper-bundle.js'
                }
            ],
        }
    },
    // nitro: {
    //     devProxy: {
    //         '/api': {
    //             target: 'https://md.heng-tai.com.cn',
    //             changeOrigin: true,
    //         },
    //     }
    // },
    vite: {
        // server: {
        //     proxy: {
        //         '/m-staff-center': {
        //             target: 'https://md.heng-tai.com.cn',
        //             changeOrigin: true
        //         },
        //     }
        // },
        server:{
            headers: {
              'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
            },
        },
        plugins: [
            qiankun('vue3', {
                useDevMode: true
            }),
            AutoImport({ // 自动引入element
                resolvers: [
                    ElementPlusResolver(
                    ),
                    IconsResolver()
                ]
            }),
            Components({
                dts: true,
                resolvers: [ElementPlusResolver(
                    {
                        importStyle: false
                    }
                )]
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@use "~/assets/scss/global.scss" as *;',
                    ]
                }
            }
        }
    },
    components: true,
    css: ["~/assets/scss/index.scss"],
    // transpile: ["element-plus"],
    postcss: {
        plugins: {
            "autoprefixer": {
                overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"]
            },
            'postcss-pxtorem': {
                rootValue: 37.5,
                propList: ['*'],
                mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
                exclude: 'ignore',
            },
        },
    },
    build: {
        transpile: lifecycle === "build" ? ["element-plus", "swiper"] : [],
    },
})