# html-comments
Simple nodejs module that collects all comments from input HTML. Optionally filter out everything that starts with a given keyword.

# Example
```js
var htmlcomments = require('html-comments');

var options = {
  keyword: 'yep', // keyword to filter comments with
  removeKeyword: true // returns just the comment body without the keyword
};

var comments = htmlcomments.load('div></div>', options);

var comments = htmlcomments.loadFile('file.html', options);

htmlcomments.loadURL('http://www.example.com/index.html', options, function(err, comments) {});
```

```html
<div>
  <!-- yep
  ima be collected
  -->

  <!-- nope
  aint gonna be collected
  -->

  <!--
  me either
  -->
</div>
```

# API
`loadFile(path, options)`

Load an html file at the given path. Returns all comments from that html file.

`loadURL(url, options, cb)`

Load an html page at the given url. Returns all comments from that html page.

`load(src, options)`

Load html source string. Returns all comments.