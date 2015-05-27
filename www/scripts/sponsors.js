/**Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau**/
$(document).ready(function () {
    getSponsors();
});

function getSponsors() {
    $.post('http://dtprojecten.ehb.be/~stuvo/public_html/api/sponsor.php', function (data) {
        $('.sponsers ul').html(generateSponsorHtml(data));
    });
}

function generateSponsorHtml(data) {
    var sponsors = JSON.parse(data).sponser,
        htmlString = "";
    for (var sponsor in sponsors) {
        htmlString += "<a href='" + sponsors[sponsor].link + "'><li><img src='" + sponsors[sponsor].image + "' alt='" + sponsors[sponsor].naam + "'></li></a>";
    }
    return htmlString;
}