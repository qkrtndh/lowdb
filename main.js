const low = require('lowdb') //lowdb 모듈을 불러온다
const FileSync = require('lowdb/adapters/FileSync')//어떤방식으로 데이터를 저장할 것인가. 여기서는 파일동기형식
const adapter = new FileSync('db.json')//데이터를 db.json이라는 파일에 json 형식으로 저장하겠다.
const db = low(adapter)//lowdb에 파일 동기형식으로 데이터를 저장하겠다고 지정.

db.defaults({topic:[],auth:[]}).write();//기본적으로 준비되어야 할 데이터를 초기화한다. 객체형식으로 json 파일에 추가된다.







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