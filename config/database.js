module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-18-204-142-254.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd7oaqi1v2ng1ae'),
      user: env('DATABASE_USERNAME', 'muuhyfnlqfgged'),
      password: env('DATABASE_PASSWORD', '8a165fce89416d0372e1580983c7beb8b35f453f421c29d0429e044a097df652'),
      ssl: { 
        // rejectUnauthorized: env.bool('DATABASE_SSL', true),
        "rejectUnauthorized": false,
      },
    },
  },
});
