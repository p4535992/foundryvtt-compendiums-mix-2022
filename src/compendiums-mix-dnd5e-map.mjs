const COMPENDIUM_MIX_DND5e_MAP_MODULE_NAME = 'compendiums-mix-dnd5e-map';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.on('init', () => {
  // DO NOTHING
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
  // Do anything after initialization but before ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', () => {
  
});

//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on('renderSidebarTab', function () {
  //if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
  compendiumColor();
  //}
  // if (game.settings.get(COMPENDIUM_MIX_DND5E_MODULE_NAME, 'HDhideDD5Compendium')) {
  //     hideDD5Compendium();
  // }
});
//---------------------compendium color---visibité des compendium H&D
function compendiumColor() {
  var comps = document.getElementsByClassName('pack-title');
  for (let comp of comps) {
    let indexStormsteel = comp.innerText.indexOf('MDND5EP');
    if (indexStormsteel !== -1) {
      comp.style.color = 'DarkYellow';
    }
  }
}

// function hideDD5Compendium() {

//     var comps = document.getElementsByClassName("pack-title");
//     for (let comp of comps) {
//         let indexDND = comp.innerText.indexOf("SRD");

//         if (indexDND !== -1) {
//             comp.parentElement.style.display = "none";
//         }
//     }
// }
