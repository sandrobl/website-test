// Zeigt eine Messagebox an mit dem Text "hallo" drin. 
alert("hallo");


// Alle 2000ms wechsle die Hintergrundfarbe des Elements "Body" in eine zufällige R(Rot), G(Grün), B(Blau) Farbe. 
// RGB Werte gehen von 0 - 255
setInterval(() => {
    document.body.style.background = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
}, 2000);