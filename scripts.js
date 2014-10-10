$(document).ready(function() {
  $.ajax({
    url: "http://api.tumblr.com/v2/blog/houseofsoundpdx.tumblr.com/posts?api_key=9frXJqNnGR8kmAYBRuZ34b9GYMS2NToviaBszsIYU3qu0A6omS&limit=20",
    "dataType": "jsonp",
    "jsonp": "jsonp",
    "success":function(data) {
      var postings = data.response.posts;
      var text = ';'
      for (var i in postings) {
        var p= postings[i]
        if (p.photos) {
          photoLength = p.photos.length
          console.log("photos length:" + photoLength)
          for (var z = 0; z < photoLength; z++) {
            console.log("photo loop at: " + z)
            text += '<div><img class="img img-responsive img-thumbnail" src=' + p.photos[z].original_size.url +'>' +
            '<a href='+ p.post_url +'>'+ p.source_title +'</a></div>';
          }

        } else {
          text += '<div><a href='+ p.post_url +'>'+ p.source_title +'</a></div>';
        }
      }

      $(".headings").html("Blog Name: " + data.response.blog.title);
      $(".headings").append("Description: " + data.response.blog.description);
      $('.postings').append(text);
      // $(".bam").text(JSON.stringify(data));
      }
  });

  $.ajax({
    url: "http://api.tumblr.com/v2/blog/houseofsoundpdx.tumblr.com/avatar/128?api_key=9frXJqNnGR8kmAYBRuZ34b9GYMS2NToviaBszsIYU3qu0A6omS&limit=20",
    dataType: 'jsonp',
    success: function(avatar){
      $("<img/>").attr("src", avatar.response.avatar_url).appendTo(".avatar");
    }
  });

});
