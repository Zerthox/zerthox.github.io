$(document).ready(function() {
    $.ajax({
        url: "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=01A9EC52293BBAC648A4210DAFC85B7F&steamid=76561198088657844&format=json",
        success: function(result) {
            console.log(JSON.parse(result));
        }
    });
});
