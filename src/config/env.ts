import dotenv from 'dotenv';

console.log('NODE_ENV', process.env.NODE_ENV);

dotenv.config({
    path: process.env.NODE_ENV != '' && process.env.NODE_ENV != undefined ? `.env.${process.env.NODE_ENV}` : '.env'
});

export const config = {
    app_name: process.env.APP_NAME,
    app_port: process.env.APP_PORT,

    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_database: process.env.DB_DATABASE,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
};
