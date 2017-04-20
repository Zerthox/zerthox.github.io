var core = {};
$(document).ready(function() {
    var s = window.location.search;
    if (s.length === 0) {
        core.alert("Error loading build data", "No build id specified")
    }
    else {
        $.each(s.slice(1).split("&"), function() {
            if (this.split("=")[0] === "id") {
                $.ajax({
                    url: "https://raw.githubusercontent.com/Zerthox/zerthox.github.io/master/division/builds/" + this.split("=")[1] + ".json",
                    success: function(result) {
                        var d = JSON.parse(result);
                        $(".build-header .title").text(d.title);
                        $(".build-header .author").text(d.author);
                        $(".build-header .date").text("Last updated: " + d.date);
                        $.each(d.build, function(key) {
                            var p = key;
                            $.each(this, function(key) {
                                var k = key;
                                $.each(this, function(key, value) {
                                    if (key.startsWith("talent")) {
                                        $(".build-content ." + p + " ." + k + " .talents .icon:eq(" + (key.slice(-1) - 1) + ")").addClass(value);
                                    }
                                    else if (key === "type") {
                                        $(".build-content ." + p + " ." + k + " .icon").addClass(value);
                                    }
                                    else {
                                        var e = $(".build-content ." + p + " ." + k + " ." + key);
                                        if (e.hasClass("icon"))
                                            e.addClass(value);
                                        else
                                            e.text(value);
                                    }
                                });
                            });
                        });
                    },
                    error: function(jqXHR, exception) {
                        var msg = '';
                        if (jqXHR.status === 0) {
                            msg = 'Not connect.\n Verify Network.';
                        }
                        else if (jqXHR.status == 404) {
                            msg = 'Requested page not found. [404]';
                        }
                        else if (jqXHR.status == 500) {
                            msg = 'Internal Server Error [500].';
                        }
                        else if (exception === 'parsererror') {
                            msg = 'Requested JSON parse failed.';
                        }
                        else if (exception === 'timeout') {
                            msg = 'Time out error.';
                        }
                        else if (exception === 'abort') {
                            msg = 'Ajax request aborted.';
                        }
                        else {
                            msg = 'Uncaught Error.\n' + jqXHR.responseText;
                        }
                        core.alert("Error loading build data", msg);
                    }
                });
            }
        });
        $(".tab-bar-item").each(function() {
            $(this).click(function() {
                core.showpage($(this).text());
            });
        });
        core.showpage(window.location.hash.slice(1).toLowerCase());
    }
});
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
core.showpage = function(page) {
    $(".selected").removeClass("selected");
    $(".build-content .visible").removeClass("visible");
    let e = $(".tab-bar-item:contains(" + page.capitalize() + ")");
    if (e.length === 1) {
        e.addClass("selected");
        $(".build-content ." + page.toLowerCase()).addClass("visible");
        window.location.hash = page.toLowerCase();
    }
    else {
        $(".tab-bar-item:contains(Weapons)").addClass("selected");
        $(".build-content .weapons").addClass("visible");
    }
};
core.alert = function(title, msg) {
    $(".main").html("<div class='error'><div class='error-title'></div><div class='error-content'></div></div>");
    $(".error-title").text(title);
    $(".error-content").text(msg);
};