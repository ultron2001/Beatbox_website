function adjustFontSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var fontSizeHeader = document.getElementById("fontSizeHeader");

    if (screenWidth <= 600) {
        fontSizeHeader.style.fontSize = '18px';
    } else if (screenWidth <= 700) {
        fontSizeHeader.style.fontSize = '30px';
    } else if (screenWidth <= 800) {
        fontSizeHeader.style.fontSize = '35px';
    } else {
        fontSizeHeader.style.fontSize = '70px';
    }
}

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

function toggleChat() {
    var chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}

function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");


    var message = chatInput.value.trim();


    if (message !== "") {

        chatBody.innerHTML += "<h3><strong>You:</strong> " + message + "</h3>";


        chatInput.value = "";


        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function submitText() {
    var OffersInputID = document.getElementById("OffersInputID");
    var OffersChatBodyID = document.getElementById("OffersChatBodyID");

    var Offersmessage = OffersInputID.value.trim();

    if (Offersmessage !== "") {

        OffersChatBodyID.innerHTML += "<div class='boxcommend'><p><strong>NameUser:</strong>" + Offersmessage + "<button class='replyButton'>reply</button></p></div>";

        OffersInputID.value = "";

        OffersChatBodyID.scrollTop = OffersChatBodyID.scrollHeight;
    }

}

function filterSongs() {

    var filter = document.getElementById("searchInput").value.toUpperCase();

    var songs = document.getElementById("songList");

    var songItems = songs.getElementsByTagName("li");


    for (var i = 0; i < songItems.length; i++) {
        var songName = songItems[i].textContent || songItems[i].innerText;
        if (songName.toUpperCase().indexOf(filter) > -1) {
            songItems[i].style.display = "";
        } else {
            songItems[i].style.display = "none";
        }
    }
}

let isExpanded = true;
const showAndHideSiteowners = document.getElementById("showAndHideSiteowners");
const contentContainer = document.getElementById("contentContainer");


function Siteowners() {
    isExpanded = !isExpanded
    showAndHideSiteowners.style.height = isExpanded ? '60px' : '0px';


    if (isExpanded) {
        contentContainer.innerHTML = `
          <h2>
            <div class="AboutShayan">
              <a href="shayanMohamadiInfo.html">Shayan Mohammadi</a>
            </div>
            <div class="AboutHadi">
              <a href="Hadi AziziInfo.html">Hadi Azizi</a>
            </div>
          </h2>`;
    } else {
        contentContainer.innerHTML = ''; // Clear content when height is 0px
    }

}