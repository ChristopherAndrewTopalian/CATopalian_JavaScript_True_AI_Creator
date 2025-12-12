// updateGates.js

function updateGates()
{
    ge('jane_tautology').textContent = 'tautology: ' + jane.tautology(A, B);

    ge('jane_contradiction').textContent = 'contradiction: ' + jane.contradiction(A, B);

    //-//

    ge('jane_xor').textContent = 'xor: ' + jane.xor(A, B);

    ge('jane_xnor').textContent = 'xnor: ' + jane.xnor(A, B);

    //-//

    ge('jane_and').textContent = 'and: ' + jane.and(A, B);

    ge('jane_nand').textContent = 'nand: ' + jane.nand(A, B);

    //-//

    ge('jane_or').textContent = 'or: ' + jane.or(A, B);

    ge('jane_nor').textContent = 'nor: ' + jane.nor(A, B);

    //-//

    ge('jane_mi').textContent = 'mi: ' + jane.mi(A, B);

    ge('jane_mni').textContent = 'mni: ' + jane.mni(A, B);

    //-//

    ge('jane_ci').textContent = 'ci: ' + jane.ci(A, B);

    ge('jane_cni').textContent = 'cni: ' + jane.cni(A, B);

    //-//

    ge('jane_lp').textContent = 'lp: ' + jane.lp(A, B);

    ge('jane_lc').textContent = 'lc: ' + jane.lc(A, B);

    //-//

    ge('jane_rp').textContent = 'rp: ' + jane.rp(A, B);

    ge('jane_rc').textContent = 'rc: ' + jane.rc(A, B);

    //-//

    cl(jane.tautology(A, B));
    cl(jane.contradiction(A, B));

    cl(jane.xor(A, B));
    cl(jane.xnor(A, B));

    //-//

    cl(jane.and(A, B));
    cl(jane.nand(A, B));

    cl(jane.or(A, B));
    cl(jane.nor(A, B));

    //-//

    cl(jane.mi(A, B));
    cl(jane.mni(A, B));

    cl(jane.ci(A, B));
    cl(jane.cni(A, B));

    //-//

    cl(jane.lp(A, B));
    cl(jane.lc(A, B));

    cl(jane.rp(A, B));
    cl(jane.rc(A, B));

    //-//

    // show the properties of jane
    cl(jane.name);
    cl(jane.power);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

