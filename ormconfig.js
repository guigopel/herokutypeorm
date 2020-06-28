console.log('process.env.DATABASE_URL:',process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  // "url": "postgres://ymvoquslxaapke:7fe06f9635990e6686403543217ee7538f536488db6867ddc5a9971b8a24e10b@ec2-184-72-235-159.compute-1.amazonaws.com:5432/d4pscanbd96l0u",
  // "host": "192.168.99.100",
  // "port": 5433,
  // "username": "postgres",
  // "password": "docker",
  // "database": "postgres",
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/database/migrations/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
