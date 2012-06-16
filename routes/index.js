var site = require('./site');
var photos = require('./photos');

app.get('/', site.index);
app.get('/about', site.about);
app.get('/contact', site.contact);

app.get('/photos', photos.read);
app.get('/photos/:query', photos.query);
app.post('/photos', photos.create);
