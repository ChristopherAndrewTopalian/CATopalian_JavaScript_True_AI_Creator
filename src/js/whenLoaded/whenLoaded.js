// whenLoaded.js

function whenLoaded()
{
    makeInterface();
    makeTitleOfApp();

    /*
    if we have each person object in an Array, we can use the find function
    to choose which person object we will create from.
    */

    /*
    // es6 (find jane data)
    let janeFind = people.find(p => p.name === 'Jane');
    */

    // es5 (find jane data)
    let janeFind = people.find(function(p)
    {
        return p.name === 'Jane';
    });

    //----//

    // create jane
    jane = new TrueAI(janeFind);

    // if our object is not in an array
    // we can use the object data directly like this
    // let jane = new TrueAI(janeData);

    updateGates();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

