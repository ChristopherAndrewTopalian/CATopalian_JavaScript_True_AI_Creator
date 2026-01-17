// makeInterface.js

function makeInterface()
{
    let diagram = ce('img');
    diagram.src = 'src/media/textures/diagrams/CATopalian_True_AI_Centered_with_Conditional_Labels.png';
    diagram.style.position = 'fixed';
    diagram.style.top = '0';
    diagram.style.left = '0';
    diagram.style.width = '100vw'; // 100% of viewport width
    diagram.style.height = '100vh'; // 100% of viewport height
    
    // 'contain' shows whole image, might have black/white bars on sides
    // 'cover' fills entire screen, parts of image will be cropped/cut off
    diagram.style.objectFit = 'contain'; 
    // center the content if using 'contain'
    diagram.style.backgroundColor = 'black'; // or 'white' depending on diagram background
    ba(diagram);

    //-//

    let menuContainer = ce('div');
    menuContainer.style.display = 'flex';menuContainer.style.flexDirection = 'row';
    menuContainer.style.position = 'fixed';
    menuContainer.style.left = '0px';
    menuContainer.style.top = '0px';
    ba(menuContainer);

    let gatesContainer = ce('div');
    gatesContainer.id = 'gatesContainer';
    gatesContainer.style.display = 'flex';
    gatesContainer.style.flexDirection = 'column';
    gatesContainer.style.gap = '0px';
    gatesContainer.style.overflowY = 'scroll'
    gatesContainer.style.height = '375px';
    gatesContainer.style.padding = '2px 6px';
    gatesContainer.style.fontWeight = 'bold';
    menuContainer.append(gatesContainer);

    //-//

    let inputsContainer = ce('div');
    inputsContainer.style.gap = '1px';
    inputsContainer.style.margin = '8px 2px';
    menuContainer.append(inputsContainer);

    //-//

    let ALabel = ce('div');
    ALabel.textContent = 'A';
    inputsContainer.append(ALabel);

    let Ainput = ce('input');
    Ainput.type = 'number';
    Ainput.id = 'Ainput';
    Ainput.min = 0;
    Ainput.max = 1;
    Ainput.step = 1;
    Ainput.value = A;
    Ainput.style.width = '50px';
    Ainput.oninput = function()
    {
        inputSound();
        A = Ainput.value;
        updateGates();
    };
    inputsContainer.append(Ainput);

    //-//

    let BLabel = ce('div');
    BLabel.textContent = 'B';
    inputsContainer.append(BLabel);

    let Binput = ce('input');
    Binput.type = 'number';
    Binput.min = 0;
    Binput.max = 1;
    Binput.step = 1;
    Binput.id = 'Binput';
    Binput.value = B;
    Binput.style.width = '50px';
    Binput.oninput = function()
    {
        inputSound();
        B = Binput.value;
        updateGates();
    };
    inputsContainer.append(Binput);

    //-//

    let jane_tautology = ce('div');
    jane_tautology.id = 'jane_tautology';
    jane_tautology.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(jane_tautology);

    //-//

    let jane_contradiction = ce('div');
    jane_contradiction.id = 'jane_contradiction';
    jane_contradiction.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(jane_contradiction);

    //-//

    let jane_xor = ce('div');
    jane_xor.id = 'jane_xor';
    jane_xor.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(jane_xor);

    //-//

    let jane_xnor = ce('div');
    jane_xnor.id = 'jane_xnor';
    jane_xnor.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(jane_xnor);

    let jane_and = ce('div');
    jane_and.id = 'jane_and';
    jane_and.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(jane_and);

    //-//

    let jane_nand = ce('div');
    jane_nand.id = 'jane_nand';
    jane_nand.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(jane_nand);

    //-//

    let jane_or = ce('div');
    jane_or.id = 'jane_or';
    jane_or.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(jane_or);

    //-//

    let jane_nor = ce('div');
    jane_nor.id = 'jane_nor';
    jane_nor.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(jane_nor);

    //-//

    let jane_mi = ce('div');
    jane_mi.id = 'jane_mi';
    jane_mi.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(jane_mi);

    //-//

    let jane_mni = ce('div');
    jane_mni.id = 'jane_mni';
    jane_mni.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(jane_mni);

    //-//

    let jane_ci = ce('div');
    jane_ci.id = 'jane_ci';
    jane_ci.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(jane_ci);

    //-//

    let jane_cni = ce('div');
    jane_cni.id = 'jane_cni';
    jane_cni.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(jane_cni);

    //-//

    let jane_lp = ce('div');
    jane_lp.id = 'jane_lp';
    jane_lp.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(jane_lp);

    //-//

    let jane_lc = ce('div');
    jane_lc.id = 'jane_lc';
    jane_lc.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(jane_lc);

    //-//

    let jane_rp = ce('div');
    jane_rp.id = 'jane_rp';
    jane_rp.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(jane_rp);

    //-//

    let jane_rc = ce('div');
    jane_rc.id = 'jane_rc';
    jane_rc.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(jane_rc);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

