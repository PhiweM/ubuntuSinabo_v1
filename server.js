const http = require('http');
const fs = require('fs');
const port = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    //set http response status code to 200 to tell browser everything is okay
    if(!responseCode){
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function(err, data){
        if(err) { //if error tell browser there was an internal error
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('500 - Internal Server Error')
        } 
        //otherwise, 
        else {
            res.writeHead(responseCode, {'Content-Type': contentType})
            res.end(data)
        }
    })
}

http.createServer(function (req, res) {
    var path = req.url.replace(/\/(?:\?.*)?$/, '').toLowerCase();

    switch(path) {
        case '':
        case '/index':
        case '/home':
            serveStaticFile(res, '/public/index.html', 'text/html')
            break;

        case '/about':
            serveStaticFile(res, '/public/About.html', 'text/html')
            break;

        case '/projects':
            serveStaticFile(res, '/public/Projects.html', 'text/html')
            break;

        case '/login':
            serveStaticFile(res, '/public/login.html', 'text/html')
            break;
        
        // Serve the logo.png file
        case '/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;

        // Serve the css styles file
        case '/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;

         // Serve the js styles file
        case '/script.js':
            serveStaticFile(res, '/public/js/script.js', 'text/javascript');
            break;

         // Serve the signup.js styles file
        case '/signup.js':
            serveStaticFile(res, '/public/js/signup.js', 'text/javascript');
            break;

        default:
            if (path.startsWith('/images/')) {
                serveStaticFile(res, `/public${path}`, 'image/jpeg');
            } else if (path.startsWith('/images/projectsImg/')) {
                serveStaticFile(res, `/public${path}`, 'image/jpeg');
            } else {
                serveStaticFile(res, '/public/404.html', 'text/html', 404);
            }
            break;
    }
}).listen(port);

console.log(`Server running on: localhost:${port}`);

