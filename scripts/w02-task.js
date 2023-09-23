/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
// I am not sure what this is asking me to do.

/* Step 2 - Variables */
    // 1. Declare and instantiate a variable to hold your name. Identify the variable as "fullName"
    const fullName = "Bryan Christopher Stauch";
    // 2. Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
    let currentYear = "2023";
    /* 3. Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images
          folder as a string. Identify the variable as "profilePicture". */
    let profilePicture = ("images/i_farted.jpg");
    
/* Step 3 - Element Variables */
    // 1. Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement".
        let nameElement = document.getElementById("name");  
    // 2. Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement".
        let foodElement = document.getElementById("food");
    // 3. Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".
        let yearElement = document.getElementById("year");
    // 4. Use any viable method to get the profile image element stored into a variable named "imageElement".
        let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
    // 1. Assign the nameElement's innerHTML property the fullName variable value.
        nameElement.innerHTML = fullName;
    // 2. Surround the fullName value with <strong> tags.
        nameElement.innerHTML = `<strong> ${fullName} <strong>`;
    // 3. Use the textContent property to set the value of the element to the value of the variable currentYear.
        yearElement.textContent = currentYear;
    // 4. Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
        document.querySelector("img").setAttribute('src',profilePicture);    
    /* 5. Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' 
        where the name variable comes from Step 2. Always use a template literal to create the string. */
        document.querySelector("img").setAttribute("alt",`Profile image of ${fullName}`);  //WHY ARE MAY TEMPLATE LITERALS NOT WORKING?!?!?!

/* Step 5 - Array */
    // 1. Declare an array variable to hold your favorite foods.
        let favFood = [" Beans ", " My Stir Fry", " Filet Mignon (Blue Rare)", " Smoked Meats (most types)", " Homemade Sourdough Pizza"," Homemade Sourdough Waffles"]
    /* 2. Modify the HTML element with the id of food to display your favorite foods array. 
        💡Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food. */
        foodElement.textContent = favFood;
    // 3. Declare and instantiate a variable to hold another single favorite food item.
        let anotherFavFood = " Sushi";  
    // 4. Add the value stored in this new variable to your favorite food array.
        favFood.push(anotherFavFood);
    /* 5. Append the new array values onto the displayed content of the HTML element with the id of food using a += operator
        and a <br> (line break character) to provide a line break as shown in Figure 2. */
        foodElement.innerHTML += `<br> ${favFood}`;   
    // 6. Remove the first element in the favorite food array.
        favFood.splice(0,1);
    // 7. Again, append the array output showing the modified array, using a line break as shown in step 5.5.
        foodElement.innerHTML += `<br> ${favFood}`;   
    // 8. Remove the last element in the favorite food array.
        favFood.pop();
    // 9. Append the array output with this final modified favorite foods array. Hint: Step 5.5.
        foodElement.innerHTML += `<br> ${favFood}`;






