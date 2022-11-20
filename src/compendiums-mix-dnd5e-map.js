const COMPENDIUM_WORLD_STORMSTEEL_MODULE_NAME = 'compendiums-world-stormsteel';

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
  /* Check for our DM Screen when Journals are opened, so we can resize it */

  Hooks.on('renderJournalSheet', (app, html, data) => {
    const title = app.title;
    if (title !== 'Forgotten Adventures Extensive DM Screen') {
      return;
    }

    app.setPosition({
      height: 890,
      width: 800,
    });
  });
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
    let indexStormsteel = comp.innerText.indexOf('STST');
    if (indexStormsteel !== -1) {
      comp.style.color = 'DarkBlue';
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
