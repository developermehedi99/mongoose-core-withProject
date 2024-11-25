import mongoose from 'mongoose';
import config from './app/config/config';
import app from './app';

async function main() {
  await mongoose.connect('config.database_url');
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
main();
