getContacts();

function getContacts() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/contacts.php", function (data) {
        $('.dienst').html(generateContactsHtml(data));
    });
}

function generateContactsHtml(data){
    var contacts = JSON.parse(data).contact;
    var htmlString ="";
    for(var dienst in contacts){
        var dienst = contacts[dienst];
        htmlString +=generateContactHtml(dienst);
    }
    return htmlString;
}

function generateContactHtml(dienst){
    var htmlString ="";
    var dienst = dienst.departement;
    var voornaam = dienst.voornaam;
    var achternaam = dienst.achternaam;
}