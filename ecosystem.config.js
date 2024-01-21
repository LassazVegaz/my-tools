module.exports = {
  apps: [
    {
      name: "tools",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p 8200",
      env: {
        DATABASE_URL: "file:C:/Users/lasin/lassi-tools/lassi_tools_db.db",
        DEPLOY: 1,
      },
      autorestart: false,
    },
  ],
};
