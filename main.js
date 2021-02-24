const low = require('lowdb') //lowdb 모듈을 불러온다
const FileSync = require('lowdb/adapters/FileSync')//어떤방식으로 데이터를 저장할 것인가. 여기서는 파일동기형식
const adapter = new FileSync('db.json')//데이터를 db.json이라는 파일에 json 형식으로 저장하겠다.
const db = low(adapter)//lowdb에 파일 동기형식으로 데이터를 저장하겠다고 지정.

db.defaults({ topic: [], author: [] }).write();//기본적으로 준비되어야 할 데이터를 초기화한다. 객체형식으로 json 파일에 추가된다.
/*db.get('author').push({
    id: 1, name: 'egoing', profile: 'developher'
}).write();
db.get('topic').push({
    id: 1, title: 'lowdb', description: 'lowdb is ...', author: 1
}).write();
db.get('topic').push({
    id: 2, title: 'mysql', description: 'mysql is ...', author: 1
}).write();
*/

//console.log(db.get('topic').value())
console.log(db.get('topic').filter({author:1,title:'lowdb'}).value())



/*
var http = require('http');	// 서버 만드는 모듈 불러오기
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';	// 실행할 url
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);*/