// ^ HTML Elemnt
var buttonEl=document.getElementById("button");
var quoteEL=document.getElementById("textqoute");
var whoEL=document.getElementById("who");
// ^ variables
// ^ function
function generateQuoutes(){
    var MyQuotes=[{
        "title": "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "body": "― Albert Einstein"
      },
      {
        "title": "Be yourself; everyone else is already taken.",
        "body": "― Oscar Wilde"
      },{
        "title": "“A room without books is like a body without a soul.”",
        "body": "― Marcus Tullius Cicero"
      },
      {
        "title": "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "body": "― Bernard M. Baruch"
      },
      {
        "title": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "body": "― Dr. Seuss"
      },{
        "title": "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
        "body": "― Mark Twain"
      },
      {
        "title": "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
        "body": "― Jane Austen, Northanger Abbey"
      },
      {
        "title": "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
        "body": "― J.K. Rowling, "
      },
    
    ]
    var c=Math.trunc(Math.random()*MyQuotes.length);
   
     quoteEL.innerHTML=MyQuotes[c].title;
     whoEL.innerHTML=MyQuotes[c].body;
}
 generateQuoutes()
// ^ events
