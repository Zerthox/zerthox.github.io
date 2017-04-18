$(document).ready(function() {
    if (window.location.pathname === "/info") {
		$.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
        $.ajax({
            url: "http://steamcommunity.com/id/zerthox/games?xml=1",
            success: function(r) {
                $(r).find("appID").each(function() {
                	if ($(this).text() === "730") {
                        $(".csgo .ghost-text").text(Math.round($(this).parent().find("hoursOnRecord").text()) + 'h');
                    }
                    else if ($(this).text() === "386360") {
                        $(".smite .ghost-text").text(Math.round($(this).parent().find("hoursOnRecord").text()) + 'h');
                    } 
                    else if ($(this).text() === "365590") {
                        $(".division .ghost-text").text(Math.round($(this).parent().find("hoursOnRecord").text()) + 'h');
                    }
                });
            }
        });
    }
});
