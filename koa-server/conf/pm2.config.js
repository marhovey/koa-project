module.exports = {
  'apps': [{
    'name': 'koa-server',
    'script': './index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // exec_mode: 'cluster_mode',
    // mode: 'cluster',
    // instances: 1,
    autorestart: false,
    error: './logs/pm2-err.log',
    merge_logs: true,
    output: './logs/pm2-out.log',
    pid_file: './pids/koa-server.pid',
    watch: false,
    max_memory_restart: '1G',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};