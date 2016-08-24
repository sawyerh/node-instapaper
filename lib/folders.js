var Folders = function Folders(client) {
  this.client = client;
};

Folders.prototype.list = function(params, callback) {
  return this.client.request('/folders/list', params, callback);
};

Folders.prototype.add = function(title, callback) {
  return this.client.request('/folders/add', { title : title }, callback);
};

Folders.prototype.delete = function(id, callback) {
  return this.client.request('/folders/delete', { bookmark_id : id }, callback);
};


module.exports = Folders;