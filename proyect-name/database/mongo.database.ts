import { connect } from 'mongoose';

export const mongoDB = async (): Promise<void> => {
  try {
    const mongoProd: string = process.env.MONGO_CNN || '';
    const mongoDev: string = process.env.MONGO_TEST_ENVIROMENT || '';

    if (process.env.DEV === 'development') {
      await connect(mongoDev);
    } else {
      await connect(mongoProd);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Database connection error');
  }
};
