$(document).ready(function(){

  $('button').on('click', function() {

    var search = $('#search').val();
    searchReddit(search);

  });

  function searchReddit(subreddit) {

    $.get('http://www.reddit.com/r/' + subreddit + '.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title;
        var thumbnail = response.data.children[i].data.thumbnail;
        var author = response.data.children[i].data.author;
        var score = response.data.children[i].data.score;
        var date = response.data.children[i].data.created;

        $('body').append('<div><p>' + author + '</p><p>' + title + '<p>' + date + '</p></p><img src=' + thumbnail + '><p>' + score + '</p></div>');

      }

    });

  }


});
