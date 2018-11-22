module.exports = {
  apps: [{
    name: 'vue-example-project',
    cwd: "/Users/le.cao.dat/Workspaces/www/production/current",
    error_file: "/Users/le.cao.dat/Workspaces/www/production/logs/web.err.log",
    out_file: "/Users/le.cao.dat/Workspaces/www/production/logs/web.out.log",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'le.cao.dat',
      host: '172.16.32.72',
      ref: 'origin/master',
      repo: 'git@github.com:LeCaoDat/vue-example-project.git',
      fetch: 'all',
      path: '/Users/le.cao.dat/Workspaces/www/production',
      'post-deploy': 'yarn install && yarn build production'
    }
  }
}
