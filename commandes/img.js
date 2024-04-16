//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                    //
//                                             W H A T S A P P _ U S E R _ BOT                                        //
//                                                                                                                    //
//                                                     V E R S I O N：１.0                                             //
//                                                                                                                    //
//            ███╗░░░███╗░░█████╗░░███████╗░█████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░        //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║═══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░        //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░        // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░        //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░        //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░        //
//                                                                                                                    //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                          //  
//                                                                                                                    //
//                                                                                                                    //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//


const {zokou} = require('../framework/zokou');
var gis = require('g-i-s');


zokou({
  nomCom: "img",
  categorie: "Search",
  reaction: "📷"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('which image ? !');
    return;
  }

  const searchTerm = arg.join(" ");
  //repondre("termes " +searchTerm);
  gis(searchTerm,envoiImage);

  function envoiImage(e,r)
   {
        if(e){repondre("oups une error ")}else{for(var a=0;a<5;a++){zk.sendMessage(dest,{image:{url:r[a].url}},{quoted:ms});}}
    
   }

 //gis(searchTerm,envoiImage);
      
});
