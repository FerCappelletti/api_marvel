const conf_db_host = process.env.DB_HOST
  ? process.env.DB_HOST  : "localhost", // host
  conf_db_name = process.env.DB_NAME || 'apibase', // database name
  conf_user = process.env.DB_USER || 'root'// user name
  conf_password = process.env.DB_PASSWORD, // password
  conf_port = process.env.DB_PORT || 3306; // port number
module.exports = {
  conf_db_name: conf_db_name,
  conf_user: conf_user,
  conf_password: conf_password,
  conf_port: conf_port,
};
