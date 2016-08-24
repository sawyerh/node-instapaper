var Bookmarks = function Bookmarks(client) {
  this.client = client;
};

Bookmarks.prototype.list = function(params, callback) {
  return this.client.request('/bookmarks/list', params, callback);
};

Bookmarks.prototype.delete = function(id, callback) {
  return this.client.request('/bookmarks/delete', { bookmark_id : id }, callback);
};

Bookmarks.prototype.star = function(id, callback) {
  return this.client.request('/bookmarks/star', { bookmark_id : id }, callback);
};

Bookmarks.prototype.unstar = function(id, callback) {
  return this.client.request('/bookmarks/unstar', { bookmark_id : id }, callback);
};

Bookmarks.prototype.archive = function(id, callback) {
  return this.client.request('/bookmarks/archive', { bookmark_id : id }, callback);
};

Bookmarks.prototype.unarchive = function(id, callback) {
  return this.client.request('/bookmarks/unarchive', { bookmark_id : id }, callback);
};

Bookmarks.prototype.getText = function(id, callback) {
  return this.client.request('/bookmarks/get_text', { bookmark_id : id }, callback);
};

module.exports = Bookmarks;