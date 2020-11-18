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
  let sql =
    `INSERT INTO characters
     (` +
    fields_set.join(" ,") +
    ", created_at) VALUES " +
    " (" +
    values_set.join(" ,") +
    ", CURRENT_TIMESTAMP)";

  return db.query(sql, [], callback);
};

const getAll = async (id, callback) => {
  let sql = `
    SELECT *
    FROM characters c
    WHERE c.id_user = ?`;

  if (callback) {
    db.query(
      sql,
      { replacements: [id], type: db.QueryTypes.SELECT },
      callback
    );
  } else {
    try {
      return await db.query(sql, {
        replacements: [id],
        type: db.QueryTypes.SELECT,
      });
    } catch (error) {
      throw error;
    }
  }
}

const $deleteOne = async (id, callback) => {
  let sql = `
    DELETE
    FROM characters c
    WHERE c.id = ?`

  if (callback) {
    db.query(sql, { replacements: [id] }, callback);
  } else {
    try {
      return await db.query(sql, {
        replacements: [id]
      });
    } catch (error) {
      throw error;
    }
  }
};

module.exports = {
  post,
  getAll,
  $deleteOne
}