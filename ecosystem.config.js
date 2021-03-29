module.exports = {
  apps: [
    {
      name: "bot",
      script: "yarn start",
      log_file: "combined.log",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
