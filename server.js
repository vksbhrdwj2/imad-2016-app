var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-1':{
  title:'Article 1: Vikas Bhardawaj',
  heading:'Article 1',
  date:'10-10-2016',
  content:`<p>
            Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.
        </p>
        <p>
            Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.
        </p>
        <p>
            Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1.Content for article1. Content for article1. Content for article1. Content for article1.
            Content for article1.Content for article1
        </p>`
  },
    'article-2' : {
  title:'Article 2: Vikas Bhardawaj',
  heading:'Article 2',
  date:'10-10-2016',
  content:'Conetnt for article2'
},
    'article-3' :{
  title:'Article 3: Vikas Bhardawaj',
  heading:'Article 3',
  date:'10-10-2016',
  content:'content for the 3rd article'
  }
};
  function createTemplate(data){
      var title=data.title;
      var heading=data.heading;
      var date=data.date;
      var content=data.content;
  var htmlTemplate =
      `
      <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="ui/style.css" rel="stylesheet" />

    </head>
    
    <body>
        <div class="some">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
    <div>
        ${date}
    </div>
     <div>
        ${content}
    </div>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName', function (req,res) {
res.send(createTemplate(articles(articleName)));
var articleName=req.params.articleName;
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/image1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image1.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
