let next = document.querySelector('#btn');
let quote = document.querySelector('#quote');
let main = document.querySelector('#main-section');

let nextQuote = [
{quote: "Success usually comes to those who are too busy to be looking for it."
,author: "Henry David Thoreau"},
{quote: "The secret of getting ahead is getting started." 
, author: "Mark Twain" },

{quote: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them." 
,author: "Vaibhav Shah"},

{quote: "The harder the battle, the sweeter the victory." 
,author: "Les Brown"},

{quote: "You only have to do a very few things right in your life so long as you don't do too many things wrong." 
,author: "Warren Buffett"},

{quote: "Don't let the fear of losing be greater than the excitement of winning." 
,author: "Robert Kiyosaki"},

{quote: "Take up one idea. Make that one idea your life—think of it, dream of it, live on that idea." 
,author: "Swami Vivekananda"},

{quote: "The distance between insanity and genius is measured only by success."
,author: "Bruce Feirstein"},

{quote: "Be yourself; everyone else is already taken."
,author: "Oscar Wilde" },

{quote: "Do your thing and don't care if they like it.", author: "Tina Fey"},

{quote: "Nothing is impossible, the word itself says \‘I\’m possible.\’"
,author: "unknown"},

{quote: "We accept the love we think we deserve."
,author: "Stephen Chbosky"},

{quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
,author: "Mahatma Gandhi" },

{quote: "The best way to predict the future is to create it."
,author: "Abraham Lincoln"}
];

next.addEventListener('click', function() {
    
    let rand = Math.floor(Math.random() * nextQuote.length)

    quote.innerText = nextQuote[rand].quote;
    author.innerText = nextQuote[rand].author;

});
