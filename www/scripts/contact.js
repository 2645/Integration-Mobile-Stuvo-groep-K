getContacts();

function getContacts() {
    $.post("http://dtprojecten.ehb.be/~stuvo/public_html/api/contact.php", function (data) {
        $('.events ul').html(generateEventsHtml(data));
    });
}

function generateContactsHtml(data){
    
}