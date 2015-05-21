getContacts();

function getContacts() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/contacts.php", function (data) {
        $('.dienst').html(generateContactsHtml(data));
    });
}

function generateContactsHtml(data) {
    var contacts = JSON.parse(data).contact;
    var htmlString = "";
    for (var dienst in contacts) {
        var dienst = contacts[dienst];
        htmlString += generateContactHtml(dienst);
    }
    return htmlString;
}

function generateContactHtml(dienst) {
    var htmlString = "";
    var dep = dienst.departement;
    var voornaam = dienst.voornaam;
    var achternaam = dienst.achternaam;

    var tel = dienst.telefoonnummer;
    var email = dienst.email;
    htmlString += "<div class='dienst'><h1 class='titelContact'>" + dep + "</h1>";
    htmlString += "<img class='icoon' src='Img/iconen_psd.png'>";
    htmlString += "<div class='info'><ul>";

    if (typeof voornaam === 'string') {
        htmlString += singleContact(voornaam, achternaam, tel);
        htmlString += "</ul></div>";
        htmlString += "<div class='clearfix'></div>";
        htmlString += "<div class='emailAdres'><img class='icoonEmail' src='Img/enveloppe_grey.png'><p>" + email + "</p></div>";
    } else if (typeof voornaam === 'undefined') {
        htmlString += "<li><p><span class='telefoonNummer'>" + tel + "</span></p></li><br></ul></div><div class='clearfix'></div>"
    } else {
        for (var i in voornaam) {
            htmlString += singleContact(voornaam[i],achternaam[i],tel[i]);
        }

        htmlString += "</ul></div>";
        htmlString += "<div class='clearfix'></div>";

        for (var i in email) {
            htmlString += "<div class='emailAdres'><img class='icoonEmail' src='Img/enveloppe_grey.png'><p>" + email[i] + "</p></div>";
        }
    }

    htmlString += "</div>"
    return htmlString;

}

function singleContact(voornaam, naam, tel) {
    var htmlString = "<li><p><span class='naam'>" + voornaam + " " + naam + "</span><span class='telefoonNummer'>" + tel + "</span>";
    htmlString += "</p></li>";
    htmlString += "<br>";
    return htmlString;
}