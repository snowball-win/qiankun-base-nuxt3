module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        exec_mode: 'fork', // fork , cluster集群
        instances: '1',
        script: './.output/server/index.mjs',
        env: {
          NODE_ENV: "development",
          NITRO_PORT: 3000,
          NITRO_HOST: '127.0.0.1'
        },
        env_production: {
          NODE_ENV: "production",
          NITRO_PORT: 3000,
          NITRO_HOST: '127.0.0.1'
        }
      }
    ]
  }