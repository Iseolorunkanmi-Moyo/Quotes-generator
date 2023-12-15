document.getElementById("copy").addEventListener("click", copy);

function copy(){
   
    const element = document.querySelector('#quotes');
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement('textarea');
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);

}

//Quotes

const generateQuote = function() {

    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all",
        author:"Oscar Wilde"
    },
    {
        quote:"Pain is inevitable. Suffering is optional",
        author:"Haruki Murakami"
    },
    {
        quote:"If you don't know where you are going, any road will get you there",
        author:"lewis Carroll"
    },
    {
        quote:"Words do not express thoughts very well. They always become a little different immediately after they are expressed, a little distorted, a little foolish",
        author:"Hermann Hesse"
    },
    {
        quote:"The only source of knowledge is experience",
        author:"Albert Einstein"
    },
    {
        quote:"The universe is under no obligation to make sense to you",
        author:"Neil deGrasse Tyson"
    },
    {
        quote:"The important thing is to never stop questioning",
        author:"Curie Skłodowska"
    },
    {
        quote:"Know something about everything and evevrything about something",
        author:"MJ"
    },
    {
        quote:"The more I learn, the more I realize how much I don't know.",
        author:" Isaac Newton"
    },

];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}

document.getElementById("gen").addEventListener("click", generateQuote)


window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}


