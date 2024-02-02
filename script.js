function adjustFontSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 600) {
        document.body.style.fontSize = '6px';
    } else if (screenWidth <= 700) {
        document.body.style.fontSize = '18px';
    } else if (screenWidth <= 800) {
        document.body.style.fontSize = '20px';
    } else {
        document.body.style.fontSize = '40px';
    }
}

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

function submitText() {
    var OffersInputID = document.getElementById("OffersInputID");
    var OffersChatBodyID = document.getElementById("OffersChatBodyID");

    var Offersmessage = OffersInputID.value.trim();

    if (Offersmessage !== "") {

        OffersChatBodyID.innerHTML += '<p><strong>NameUser:</strong>' + Offersmessage + '<button class="replyButton">reply</button></p>';

        OffersInputID.value = "";

        OffersChatBodyID.scrollTop = OffersChatBodyID.scrollHeight;
    }

}

function toggleChat() {
    var chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}

function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");


    var message = chatInput.value.trim();


    if (message !== "") {

        chatBody.innerHTML += "<p><strong>You:</strong> " + message + "</p>";


        chatInput.value = "";


        chatBody.scrollTop = chatBody.scrollHeight;
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