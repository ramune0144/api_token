
module.exports = {
  doLogin(db, email, password ) {
    return db('users')
      .select('user_name','name','sname')
      .where('email', email)
      .where('enc_password', password)
      .limit(1);
  },

  getList(db) {
    return db('users').orderBy('user_name');
  },

  save(db, data) {
    return db('users').insert(data, 'id');
  },

  update(db, id, data) {
    return db('users')
      .where('id', id)
      .update(data);
  },

  remove(db, id) {
    return db('users')
      .where('id', id)
      .del();
  },

  getInfo(db, id) {
    return db('users')
      .where('id', id);
  }

};