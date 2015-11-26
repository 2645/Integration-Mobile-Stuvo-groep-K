<!doctype html>
<html lang="nl">

<head>
    <meta charset="utf-8">
    <title>Resto</title>
    <meta name="auteurs" content="Jan Desmet, Bart Sevenois, Gabriel Deschamps, Lieven Luycks, Cédric Brichau">
    <meta name="jaar" content="2015">
    <meta name="afdeling" content="Multec">
    <meta name="bachelorjaar" content="1ste jaar">
    <meta name="viewport" content="width=device-width; initial-scale = 1.0; maximum-scale=1.0; user-scalable=no">
    <link rel="stylesheet" href="CSS/jquery.mobile-1.0.min.css" />
    <link rel="stylesheet" href="CSS/resto.css" />
    <link rel="stylesheet" href="CSS/style_nav.css" />
    <script type="text/javascript" src="phonegap.js"></script>
    <script type="text/javascript" src="scripts/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="scripts/jquery.mobile.custom.js"></script>
</head>

<body>

    <header>

        <nav class="hoofdNav">
            <div id="hamburger"><img src="img/hamburger.png" alt="menu">
            </div>
            <div id="pageTitle">Contact</div>
            <div id="tandwiel"><img src="img/settings.png"  alt="settings">
            </div>
        </nav>

    </header>
    <div class="navWrapper">
        <div id="navigatie">
            <ul>
                    <a href="search.html">
                       <div class="searchButton"><img src="img/search_red.png" alt="search">Zoek
                        </div>
                    </a>
            </ul>
            <nav class="navigatieNav">
                <ul>
                    <a href="home.html"><li><img src="img/home_red.png"  alt="home">Home
                    </li></a>
                    <a href="diensten.html"><li><img src="img/diensten_red.png" alt="diensten">Diensten
                    </li></a>
                    <a href="events.html"><li><img src="img/agenda_red.png" alt="agenda">Agenda
                    </li></a>
                    <a href="nieuws.html"><li><img src="img/nieuws_red.png" alt="nieuws">Nieuws
                    </li></a>
                    <a href="resto.html"><li class="current"><img src="img/resto_red.png" alt="resto">Resto
                    </li></a>
                    <a href="contact.html"><li><img src="img/contact_red.png" alt="contact">Contact
                    </li></a>
                    <a href="sponsers.html"><li><img src="img/sponsors_red.png" alt="sponsors">Sponsors
                    </li></a>
                </ul>
            </nav>
            <div id="social">
                 <ul>
            <li>
                <a href="https://www.facebook.com/pages/Stuvo-EhB/149428375138173" target="_blank"><img class="fb" src="img/fb.png" alt="facebook" /><p>Stuvo EhB</p></a>
            </li>
            <li>
                <a href="https://twitter.com/ehbrussel" target="_blank"><img class="twitter" src="img/twitter.png" alt="twitter" /><p>@ehbrussel</p></a>
            </li>
        </ul>
            </div>
        </div>

        <div id="settings">

            <nav class="settingsNav">
                <ul>
                    <li>
                        <p>Pushberichten toestaan?</p>

                        <div class="switch">
                            <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                            <label for="cmn-toggle-7" data-on="Ja" data-off="Nee"></label>
                        </div>
                    </li>

                    <li>
                        <p>Campusselectie:</p>
                        <label class="label">
                            <select name="campus">
                                <option value="0">Dansaert</option>
                                <option value="1">Kaai</option>
                                <option value="2">Jette</option>
                                <option value="3">RITS</option>
                                <option value="4">Conservatorium</option>
                                <option value="5">Bloemenhof</option>
                            </select>
                        </label>
                    </li>


                </ul>
            </nav>
        </div>
        <div id="black"></div>
    </div>
<?php
    mail('cedric.brichau@outlook.com', $_POST['mail'], $_POST['message']);
?>
<p>Your email has been sent.</p>
    <script type="text/javascript" src="scripts/nav.js"></script>

</body>
</html>