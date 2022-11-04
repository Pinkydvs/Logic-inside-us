let favoriteBooks = {title: ["A Game of Thrones", "The Hunger Games"], author: ["George R.R. Martin", "Suzzane Collins"], 
                     year: [1996, 2008], isNewerThan2000: ["False", "True"], age: [26, 14], 
                     characters:["Eddard Stark", "Arya Stark", "Jon Snow", "Catelyn Tully", "Katniss Everdeen",
                     "Primrose Everdeen", "Peeta Mellark", "Haymitch Abernathy"]};
//Both book titles appear in the terminal by using a for...of loop and one console.log() inside of it.
for (let title of favoriteBooks){
 console.log(title);
}

//console.log(favoriteBooks.title)

//Both books' authors appear in the terminal by using a for loop and one console.log() inside of it.
for (let i=0; i<(favoriteBooks.author).length; i++)
{console.log(favoriteBooks.author[i]);
}


for (let i=0; i<(favoriteBooks.year).Length; i++) 
{ if (favoriteBooks.year[i]>=2000)
                {console.log(favoriteBooks.title[i]+"is newer than 2000");            
                }
 }               
