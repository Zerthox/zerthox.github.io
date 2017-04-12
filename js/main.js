$(document).ready(function() {
    if (window.location.pathname === "/info") {
        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
        $.ajax({
            url: "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=01A9EC52293BBAC648A4210DAFC85B7F&steamid=76561198088657844&format=json",
            success: function(result) {
                g = result.response.games;
                for (i = 0; i < g.length; i++) {
                    if (g[i].appid === 730) {
                        $(".csgo .ghost-text").text(Math.round(g[i].playtime_forever/60) + 'h');
                    }
                    else if (g[i].appid === 386360) {
                        $(".smite .ghost-text").text(Math.round(g[i].playtime_forever/60) + 'h');
                    } 
                    else if (g[i].appid === 365590) {
                        $(".division .ghost-text").text(Math.round(g[i].playtime_forever/60) + 'h');
                    }
                }
            }
        });
    }
});
