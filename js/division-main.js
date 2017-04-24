$(document).ready(function() {
	$.ajax({
		url: "https://api.github.com/repos/Zerthox/zerthox.github.io/contents/division/builds",
		success: function(result) {
			for (i = 0; i < result.length; i++) {
                    var n = result[i].name;
				if (n.slice(-5) === ".json") {
     				$.ajax({
                         url: "https://raw.githubusercontent.com/Zerthox/zerthox.github.io/master/division/builds/" + n,
                         success: function(result) {
                              var u = this.url.split("/");
                              $(".build-list").append('<a href="build?id=' + u[u.length - 1] + '"></a>');
                         	var r = JSON.parse(result);
                              var s = '<div class="list-item"><div class="title">' + r.title + '</div><div class="info">';
                         	if (r.hasOwnProperty("author"))
                         		s += 'Author: <a href="' + r.link + '" target="_blank"><span class="author">' + r.author + '</span></a>';
                         	else
                         		s += 'Author: <i>Unknown</i>';
                         	if (r.hasOwnProperty("date"))
                         		s += '<span class="date">Last updated: ' + r.date + '</span>';
                         	s += '</div></div>';
                         	$(".build-list > a:last").html(s);
     					}
     				});
                    }
			}
		}
	});
});
