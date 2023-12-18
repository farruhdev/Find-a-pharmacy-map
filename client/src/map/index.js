//let express = require("express");
let express = require("express");
let axios = require("axios");
let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));
app.listen(80,function() {
    console.log("html listening");
});



// //const axios = require('axios');

// // Directions API의 클라이언트 ID와 클라이언트 시크릿
// const CLIENT_ID = 'tnmnaa4nja';
// const CLIENT_SECRET = '4qLdGcOOQ81TjOxRskezAWai6IiOi28YMfoIQpWJ';

// // 출발지와 목적지의 위도, 경도
// const start = {
//   lat: 37.3595704,
//   lng: 127.105399
// };

// const goal = {
//   lat: 37.5512297,
//   lng: 126.988205
// };

// const getDirections = async (start, goal) => {
//   try {
//     const response = await axios.get('https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving', {
//       params: {
//         start: `${start.lng},${start.lat}`,
//         goal: `${goal.lng},${goal.lat}`
//       },
//       headers: {
//         'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
//         'X-NCP-APIGW-API-KEY': CLIENT_SECRET
//       }
//     });

//     return response.data.route.traoptimal[0].path; // 최적 경로의 좌표 배열을 반환
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // 경로 사용 예시
// getDirections(start, goal).then(path => {
//   if (path) {
//     // 경로 정보를 클라이언트에 전달하여 지도 위에 표시
//     console.log(path);
//   }
// });





//https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=SBorfGC%2Fqjy%2F4JpvkAp9zzfe3IOotUgAa5Y%2BTQTjIYVCp5ZYm1tYxWbSI8AffqLoNokqnimUXeLr2gLd5LmHIw%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&Q1=%EA%B0%95%EB%82%A8%EA%B5%AC&QT=1&QN=%EC%82%BC%EC%84%B1%EC%95%BD%EA%B5%AD&ORD=NAME&pageNo=1&numOfRows=10

app.get("/pharmach_list", (req, res) => {
        let api = async() => {
            let response = null;
            try{
            response = await  axios.get("https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire", {
                params: {
                  "serviceKey": "SBorfGC/qjy/4JpvkAp9zzfe3IOotUgAa5Y+TQTjIYVCp5ZYm1tYxWbSI8AffqLoNokqnimUXeLr2gLd5LmHIw==",
                  "Q0": req.query.Q0,
                  "Q1": req.query.Q1,
                  "QT": req.query.QT,
                  "QN": req.query.QN,
                  "ORD": req.query.ORD,
                  "pageNO": req.query.pageNo,
                  "numOfRows": req.query.numOfRows
    
                }
            })   
        }
        catch(e) {
            console.log(e);
        }
            return response;
        } 
        api().then((response) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json(response.data.response.body);
        });
});

// var fs = require('fs');
// var path = require('path');
// var mysql = require('mysql');
// //var express = require('express');
// var session = require('express-session');
// var bodyParser = require('body-parser');

// var connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'web2023',
// 	password : 'web2023',
// 	database : 'web'
// });

// //var app = express();
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

// app.use(express.static('public_html'));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// function restrict(req, res, next) {
//   if (req.session.loggedin) {
//     next();
//   } else {
//     req.session.error = 'Access denied!';
//     res.sendFile(path.join(__dirname + '/public_html/login/my/login.html'));
//   }
// }

// app.use('/', function(request, response, next) {
// 	if ( request.session.loggedin == true || request.url == "/public_html/login" || request.url == "/register" ) {
//     next();
// 	}
// 	else {
//     response.sendFile(path.join(__dirname + '/public_html/login/my/login.html'));
// 	}
// });

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/public_html/login/my/home.html'));
// });

// app.get('/login', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/public_html/login/my/login.html'));
// });

// app.post('/login', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (error) throw error;
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/public_html/index.html');
// 				response.end();
// 			} else {
// 				//response.send('Incorrect Username and/or Password!');
// 				response.sendFile(path.join(__dirname + '/public_html/login/my/loginerror.html'));
// 			}			
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('/register', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/public_html/login/my/register.html'));
// });

// app.post('/register', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	var password2 = request.body.password2;
// 	var email = request.body.email;
// 	console.log(username, password, email);
// 	if (username && password && email) {
// 		connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND email = ?', [username, password, email], function(error, results, fields) {
// 			if (error) throw error;
// 			if (results.length <= 0) {
//         connection.query('INSERT INTO user (username, password, email) VALUES(?,?,?)', [username, password, email],
//             function (error, data) {
//                 if (error)
//                   console.log(error);
//                 else
//                   console.log(data);
//         });
// 			  response.send(username + ' Registered Successfully!<br><a href="/home">Home</a>');
// 			} else {
// 				response.send(username + ' Already exists!<br><a href="/home">Home</a>');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter User Information!');
// 		response.end();
// 	}
// });

// app.get('/logout', function(request, response) {
//   request.session.loggedin = false;
// 	response.send('<center><H1>Logged Out.</H1><H1><a href="/">Goto Home</a></H1></center>');
// 	response.end();
// });

// app.get('/home', restrict, function(request, response) {
// 	if (request.session.loggedin) {
// 		response.sendFile(path.join(__dirname + '/public_html/index.html'));
// 	} else {
// 		response.send('Please login to view this page!');
// 		response.end();
// 	}
// });

// app.get('/test2', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.sendFile(path.join(__dirname + '/public_html/login/my/test2.html'));
// 	} else {
// 		response.send('Please login to view this page!');
// 		response.end();
// 	}
// });








// //app.use(express.static("public_html"));
// app.listen(80,function() {
//     console.log("html listening");
// });