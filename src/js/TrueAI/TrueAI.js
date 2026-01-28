// TrueAI.js

class TrueAI
{
    constructor(name, power)
    {
        // base properties that we must define later
        this.name = name;
        this.power = power;

        // these are the properties that start new every time
        this.memory = [];
        this.thoughts = [];

        // memory
        this.currentThought = {
            inputA: null,
            inputB: null,
            result: null,
            context: null // Description of what this thought represents
        };
    }

    tautology(a, b)
    {
        if ((a == 0 && b == 0) ||
            (a == 0 && b == 1) ||
            (a == 1 && b == 0) ||
            (a == 1 && b == 1))
        {
            return 1;
        }
        else
        {
            return 1;
        }
    }

    /*
    TAUTOLOGY
    1111
    One or Both False or True

    A  B
    0  0  =  1
    0  1  =  1
    1  0  =  1
    1  1  =  1

    Opposite: CONTRADICTION
    */

    //----//

    contradiction(a, b)
    {
        if ((a == 0 && b == 0) ||
            (a == 0 && b == 1) ||
            (a == 1 && b == 0) ||
            (a == 1 && b == 1))
        {
            return 0;
        }
        else
        {
            return 0;
        }
    }

    /*
    CONTRADICTION
    0000
    One or Both False or True.

    A B
    0  0  =  0
    0  1  =  0
    1  0  =  0
    1  1  =  0

    Opposite: TAUTOLOGY
    */

    xor(a, b)
    {
        if ((a == 1 && b == 0) ||
            (a == 0 && b == 1))
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    XOR
    0110
    A True or B True

    A B
    0  0  =  0
    0  1  =  1
    1  0  =  1
    1  1  =  0

    Opposite: XNOR
    */

    //----//

    xnor(a, b)
    {
        if ((a == 0 && b == 0) ||
            (a == 1 && b == 1))
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    XNOR
    1001
    Both False or Both True

    A  B
    0  0  =  1
    0  1  =  0
    1  0  =  0
    1  1  =  1

    Opposite: XOR
    */

    //----//

    and(a, b)
    {
        if (a == 1 && b == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    AND
    0001
    Both True

    A  B
    0  0  =  0
    0  1  =  0
    1  0  =  0
    1  1  =  1

    Opposite: NAND
    */

    //----//

    nand(a, b)
    {
        if (a == 0 || b == 0)
        {
            return 1
        }
        else
        {
            return 0;
        }
    }

    /*
    NAND
    1110
    Both False or A True or B True

    A  B
    0  0  =  1
    0  1  =  1
    1  0  =  1
    1  1  =  0

    Opposite: AND
    */

    //----//

    or(a, b)
    {
        if (a == 1 || b == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    OR
    0111
    One or Both True

    A B
    0  0  =  0
    0  1  =  1
    1  0  =  1
    1  1  =  1

    Opposite: NOR
    */

    //----//

    nor(a, b)
    {
        if (a == 0 && b == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    NOR
    1000
    Both False

    A B
    0  0  =  1
    0  1  =  0
    1  0  =  0
    1  1  =  0

    Opposite: OR
    */

    //----//

    mi(a, b)
    {
        if (a == 0 || b == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    MI
    1101
    Both False or B True or Both True

    A  B
    0  0  =  1
    0  1  =  1
    1  0  =  0
    1  1  =  1

    Opposite: MNI
    */

    //----//

    mni(a, b)
    {
        if (a == 1 && b == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    MNI
    0010
    A True

    A B
    0  0  =  0
    0  1  =  0
    1  0  =  1
    1  1  =  0

    Opposite: MI
    */

    //----//

    ci(a, b)
    {
        if (a == 1 || b == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    CI
    1011
    Both False or A True or Both True

    A B
    0  0  =  1
    0  1  =  0
    1  0  =  1
    1  1  =  1

    Opposite: CNI
    */

    //----//

    cni(a, b)
    {
        if (a == 0 && b == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    CNI
    0100
    B True

    A B
    0  0  =  0
    0  1  =  1
    1  0  =  0
    1  1  =  0

    Opposite: CI
    */

    //----//

    lp(a, b)
    {
        if (a == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    LP
    0011
    A True or Both True

    A  B
    0  0  =  0
    0  1  =  0
    1  0  =  1
    1  1  =  1

    Opposite: LC
    */

    //----//

    lc(a, b)
    {
        if (a == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    LC
    1100
    Both False or B True

    A B
    0  0  =  1
    0  1  =  1
    1  0  =  0
    1  1  =  0

    Opposite: LP
    */

    //----//

    rp(a, b)
    {
        if (b == 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    RP
    0101
    B True or Both True

    A  B
    0  0  =  0
    0  1  =  1
    1  0  =  0
    1  1  =  1

    Opposite: RC
    */

    //----//

    rc(a, b)
    {
        if (b == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }

    /*
    RC
    1010
    Both False or A True

    A B
    0  0  =  1
    0  1  =  0
    1  0  =  1
    1  1  =  0

    Opposite: RP
    */

    //----//

    think()
    {
        // current date and time with seconds
        let dateTime = new Date().toLocaleString();

        //-//

        // THOUGHT

        let currentThought = 
        {
            a: A,
            b: B,
            timeCode: dateTime
        };

        // add currentThought to thought array
        this.thoughts.unshift(currentThought);

        // show current thought
        ge('thoughtOutput').textContent = JSON.stringify(this.thoughts[0]);

        //-//

        // MEMORY

        // add current thought to memory
        this.memory.unshift(this.thoughts[0]);

        // show all memories
        ge('memoryOutput').textContent = JSON.stringify(this.memory);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

