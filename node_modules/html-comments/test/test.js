'use strict';
/* globals exports, require */

var htmlcomments, file, keyword, comments;

exports.htmlcomments = {

  setUp: function(done) {
    htmlcomments = require('../main');
    file = 'test/fixtures/index.html';

    done();
  },

  /**
   * Collect all comments
   */

  collect_all_comments: function(test) {
    test.expect(1);
    
    var comments = htmlcomments.loadFile(file);
    test.equal(comments.length, 3, 'should return all html comments.');
    test.done();
  },


  /**
   * Filter comments with keyword 'yep'
   */

  filter_comments: function(test) {
    test.expect(1);

    var options = {
      keyword: 'yep'
    };

    var comments = htmlcomments.loadFile(file, options);
    test.equal(comments.length, 1, 'should return filtered html comments.');
    test.done();
  },


  /**
   * Remove keyword 'yep' from comments
   */

  remove_keyword_from_comments: function(test) {
    test.expect(1);

    var options = {
      keyword: 'yep',
      removeKeyword: true
    };

    var comments = htmlcomments.loadFile(file, options);
    test.equal(comments[0], '\n        ima be collected', 'should return filtered html comments, remove the keyword');

    test.done();
  }
};


exports.snippet = {
  multiple_root_nodes: function(test) {
    test.expect(1);
    
    htmlcomments = require('../main');
    file = 'test/fixtures/multiple-root-nodes.html';
    var comments = htmlcomments.loadFile(file);
    test.deepEqual(comments, ['comment1', 'comment2', 'comment3'], 'should return all html comments.');
    test.done();
  },

  standalone_comment: function(test) {
    test.expect(1);
    
    htmlcomments = require('../main');
    file = 'test/fixtures/standalone-comment.html';
    var comments = htmlcomments.loadFile(file);
    test.deepEqual(comments, ['comment'], 'should return all html comments.');
    test.done();
  },

  non_html_root: function(test) {
    test.expect(1);
    
    htmlcomments = require('../main');
    file = 'test/fixtures/non-html-root.html';
    var comments = htmlcomments.loadFile(file);
    test.deepEqual(comments, ['comment1', 'comment2', 'comment3'], 'should return all html comments.');
    test.done();
  },

  html_with_comment: function(test) {
    test.expect(1);
    
    htmlcomments = require('../main');
    file = 'test/fixtures/html-with-comment.html';
    var comments = htmlcomments.loadFile(file);
    test.deepEqual(comments, ['comment'], 'should return all html comments.');
    test.done();
  },

  html_with_multiple_roots: function(test) {
    test.expect(1);
    
    htmlcomments = require('../main');
    file = 'test/fixtures/html-with-multiple-roots.html';
    var comments = htmlcomments.loadFile(file);
    test.deepEqual(comments, ['comment'], 'should return all html comments.');
    test.done();
  }
};

exports.url = {
  loadURL: function(test) {
    test.expect(1);
    htmlcomments = require('../main');

    htmlcomments.loadURL('http://rawgit.com/Aratramba/html-comments/master/test/fixtures/index.html', { keyword: 'yep' }, function(err, comments) {
      test.equal(comments.length, 1, 'should return all html comments.');
      test.done();
    });
  }
};
