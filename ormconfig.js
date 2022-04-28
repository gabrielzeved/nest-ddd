
module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'admin',
  database: process.env.DATABASE_NAME || 'test',
  entities: ["dist/**/*.entity.js"],
  synchronize: false,
  logging: false,
  migrationsTableName: 'custom_migration_table',
  migrations: ['dist/database/typeorm/migrations/*.js'],
  useUTC: true,
  cli: {
    migrationsDir: 'src/database/typeorm/migrations',
  },
}