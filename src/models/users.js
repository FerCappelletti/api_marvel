const db = require("../../config/database");

const post = (data, callback) => {
    let valid_set = Object.keys(data).map((value) => {
      return value;
    });
    let fields_set = valid_set.map((prop) => {
      return ` \`${prop}\``;
    });
    let values_set = valid_set.map((prop) => {
      return ` "${data[prop]}"`;
    });
    var sql =
      `INSERT INTO users
     (` +
      fields_set.join(" ,") +
      ", created_at) VALUES " +
      " (" +
      values_set.join(" ,") +
      ", CURRENT_TIMESTAMP)";

  return db.query(sql, [], callback);
}

const get = async (data, callback) => {
  let sql = `
    SELECT *
    FROM users u
    WHERE u.email = ?`;

  if (callback) {
    db.query(
      sql,
      { replacements: [data.email], type: db.QueryTypes.SELECT },
      callback
    );
  } else {
    try {
      return await db.query(sql, {
        replacements: [data.email],
        type: db.QueryTypes.SELECT,
      });
    } catch (error) {
      throw error;
    }
  }
};

module.exports = {
  post,
  get
}
