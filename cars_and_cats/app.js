const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/NewCar.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
    else if(request.url === '/images/img1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/img1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/img2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/img2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/img3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/img3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    
    
      else if(request.url === '/images/cat1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    

    else {
        response.end('File not found!!!');
    }

});
server.listen(7077);
console.log("listening on port 7077");
