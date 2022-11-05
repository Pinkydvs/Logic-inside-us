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

//The title of the first book appears in the terminal if and only if the isNewerThan2000 key's value is true
if (favoriteBooks.isNewerThan2000[0]==="True")
    {console.log(favoriteBooks.title[0]);
    }
if (favoriteBooks.isNewerThan2000[1]==="True")
    {console.log(favoriteBooks.title[1]);
    } 

//newer/older
for (let j=0; j<(favoriteBooks.isNewerThan2000).length; j++)
    {if (favoriteBooks.isNewerTham2000[j]==="True")
          {console.log("This book is newer than 2000"+favoriteBooks.title);
     else  
          {console.log("This book is older than 2000"+favortieBooks.title);
          }
     }     
