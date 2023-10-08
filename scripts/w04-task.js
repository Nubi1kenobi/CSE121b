/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Bryan Christopher Stauch",
    photo: "scripts/w02-task.js",
    favoriteFoods: [
        'sushi', 
        'my chicken cashew stir fry', 
        'rare filet mignon', 
        'smoked meats', 
        'chicken biriyani',
        'homemade sourdough waffles',
        'homemade sourdough pizza'
    ],
        
    hobbies: [
        'being a father',
        'Kajukenbo',
        'trying not to get fired from my job', 
        'electronics', 
        'card games', 
        'board games', 
        'smoking meats',
        'programming macros'
    ],

    placesLived: []

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Speedway, IN',
        length: '5 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name ;
/* Photo with attributes */
let profilePicture = ("images/i_farted.jpg"); 
document.querySelector("img").setAttribute('src',profilePicture);  
document.querySelector("img").setAttribute("alt",`Profile image of ${myProfile.name}`);  

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  
  
});

