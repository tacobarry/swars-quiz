import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private imagesByName: any) { }

  getImageByName(name) {
    if (this.imagesByName === undefined) {
      this.imagesByName = this.getImagesObj;
    }
    let el = this.imagesByName
      .filter((elem) => {
        if(elem.name === name) {
          return elem;
        }
      }) || { imgSrc: '' }
    return el.imgSrc;
  }

  getImagesObj() {
    return [
      { 
        name: 'Luke Skywalker',
        imgName: 'avatar_4949a183f701_128.jpg'
      },
      { 
        name: 'C-3PO',
        imgName: 'avatar_73108d00bf7a_128.jpg'
      },
      { 
        name: 'R2-D2',
        imgName: 'avatar_12345.jpg'
      },
      { 
        name: 'Darth Vader',
        imgName: 'c5068037dfbd4c4f51cb611a8b8d86d1c0d4c2ad_128.jpg'
      },
      { 
        name: 'Leia Organa',
        imgName: '63d1bdd8ad1fcc8a709972793e509c09b9962385r1-463-431v2_128.jpg'
      },
      { 
        name: 'Owen Lars',
        imgName: '418fb8c1f27895870a25cbbbbfdd1f9ed2e5b633_128.jpg'
      },
      { 
        name: 'Beru Whitesun lars',
        imgName: '572110ad965d4ae008e9474aab3739605c55e551_128.jpg'
      },
      { 
        name: 'R5-D4',
        imgName: '6269b0b4b1a9dc80ba4d61f58b5d3291d84218f3v2_128.jpg'
      },
      { 
        name: 'Biggs Darklighter',
        imgName: '32ca6c1b207563fd9de08b23068a20ed4084f5ad_128.jpg'
      },
      { 
        name: 'Obi-Wan Kenobi',
        imgName: 'avatar_07efa6ff63d9_128.jpg'
      },
      { 
        name: 'Anakin Skywalker',
        imgName: 'cfe807178dd89099100c99c8db20a722492d2af6_128.jpg'
      },
      { 
        name: 'Wilhuff Tarkin',
        imgName: '90ffd0ccf88bdc3ab3144d1ba9e64e1c4ae22947_128.jpg'
      },
      { 
        name: 'Chewbacca',
        imgName: 'c9cb48b774854b6200b373c020273e08b91ff98d_128.jpg'
      },
      { 
        name: 'Han Solo',
        imgName: '323ee3ee7ebd056db83a94c57b52d6627f109541_128.jpg'
      },
      { 
        name: 'Greedo',
        imgName: '4691dc251707a2a357f1f8962175a069e41bfa0a_128.jpg'
      },
      { 
        name: 'Jabba Desilijic Tiure',
        imgName: '03e1453b24355e8c7fb55feb1330ff2fffa7cca6_128.jpg'
      },
      { 
        name: 'Wedge Antilles',
        imgName: '31f4d9a7d46ff5dc5bc23579aa26883bb0b27881_128.jpg'
      },
      { 
        name: 'Jek Tono Porkins',
        imgName: '1167499f4b7425f8cf7d596cc6c84ee3d3aae7dd_128.jpg'
      },
      { 
        name: 'Yoda',
        imgName: 'avatar_6fe43798c7ce_128.jpg'
      },
      { 
        name: 'Palpatine',
        imgName: '51e3e00acfac9a710312b3fc1950378b4746371e_128.jpg'
      },
      { 
        name: 'Eeth Koth',
        imgName: '21482c0651df918ef49dd31f240c2ab394174721_128.jpg'
      },
      { 
        name: 'Adi Gallia',
        imgName: 'e0a197f234ad84a34dcd9573aabf97f293f56ef6_128.jpg'
      },
      { 
        name: 'Saesee Tiin',
        imgName: '54ca381174a21e4c5952c454ba50a22d9f7896ae_128.jpg'
      },
      { 
        name: 'Yarael Poof',
        imgName: '7c7f398e9009398c840e58ed14f1e6271b695da7_128.jpg'
      },
      { 
        name: 'Plo Koon',
        imgName: '702a56010606ba1e71bc6f5b639bc83755776d8b_128.jpg'
      },
      { 
        name: 'Mas Amedda',
        imgName: 'c74881c3018bc4b370e7e9a5b6f4ca33576e1452_128.jpg'
      },
      { 
        name: 'Gregar Typho',
        imgName: '44f6f4593bcbe8c6d95a156e6c2aabbb2955ef45oto_128.jpg'
      },
      { 
        name: 'Cordé',
        imgName: 'avatar_6fe437ce_128.jpg'
      },
      { 
        name: 'Cliegg Lars',
        imgName: '0977ef0d14629fea179a61ba14bea9d68ee7e3f0_128.jpg'
      },
      { 
        name: 'Poggle the Lesser',
        imgName: '91a9bb99bff0ccdb4b4486773c89d20c5d5b8ec4_128.jpg'
      },
      { 
        name: 'Shmi Skywalker',
        imgName: 'avatar_58290c850df7_128.jpg'
      },
      { 
        name: 'Darth Maul',
        imgName: 'd8669a399f4b4de5b4432103f00f5afcf4ef86c3_128.jpg'
      },
      { 
        name: 'Bib Fortuna',
        imgName: '72abe1f405c2edf4d0ea1ddd6961b41facc5a1c5_128.jpg'
      },
      { 
        name: 'Ayla Secura',
        imgName: '344fe78cddd86010e5f0b937694c6a5e8145ac78_128.jpg'
      },
      { 
        name: 'Dud Bolt',
        imgName: 'espece-vulptereen-7833.jpg'
      },
      { 
        name: 'Gasgano',
        imgName: 'dc770f23a2cab10dd1a8973ebd7a89726047d324v2_128.jpg'
      },
      { 
        name: 'Ben Quadinaros',
        imgName: '7c7f398e9009398c840e58ed14f1e6271b69qd147072_128.jpg'
      },
      { 
        name: 'Mace Windu',
        imgName: 'a268a36aa6a4c7e45aec6b391db18a786b7ab552_128.jpg'
      },
      { 
        name: 'Ki-Adi-Mundi',
        imgName: '7388368f0a358f05fb0a3ae4e088d370130bd441_128.jpg'
      },
      { 
        name: 'Kit Fisto',
        imgName: '02ccad8d81cdc94971fcbc846753f07f582661ae_128.jpg'
      },
      { 
        name: 'Qui-Gon Jinn',
        imgName: 'b5c9facb7c579366c8b47312223f191eee00922a_128.jpg'
      },
      { 
        name: 'Nute Gunray',
        imgName: '5398da0ecee732404e276da3a446b15c54c8c957_128.jpg'
      },
      { 
        name: 'Finis Valorum',
        imgName: '7f1b932da9f0cb171bd619dc477739ef567f6a74_128.jpg'
      },
      { 
        name: 'Jar Jar Binks',
        imgName: 'avatar_1cb2da506ca1_128.jpg'
      },
      { 
        name: 'Roos Tarpals',
        imgName: '90ffd0ccf88bdc3ab3144d1ba9e64e1c4ae90023_128.jpg'
      },
      { 
        name: 'Rugor Nass',
        imgName: 'c69995a878854b97ff41f416c4400e78b2eb8beb_128.jpg'
      },
      { 
        name: 'Ric Olié',
        imgName: '03e1453b24355e8c7fb55feb1330ff2fffa7cr013.jpg'
      },
      { 
        name: 'Watto',
        imgName: '565d77c683183e7ab3f77ad07639fa94555312ff_128.jpg'
      },
      { 
        name: 'Sebulba',
        imgName: '7c7f398e9009398c840e58ed14f1e6271b695da238u184_128.jpg'
      },
      { 
        name: 'Quarsh Panaka',
        imgName: '44f6f4593bcbe8c6d95a156e6c2aabbb2955ef45_128.jpg'
      },
      { 
        name: 'Jocasta Nu',
        imgName: 'd85ea1e73df7055c50dbc42413700364b0951bd6_128.jpg'
      },
      { 
        name: 'Ratts Tyerell',
        imgName: 'espece-aleena-14020.jpg'
      },
      { 
        name: 'R4-P17',
        imgName: '3194d90f9a016ad6b2fd937a6adb1da20d0cd323_128.jpg'
      },
      { 
        name: 'Wat Tambor',
        imgName: '8aa7294d89d10cce1be794bd2768f4ba3481ca9b_128.jpg'
      },
      { 
        name: 'San Hill',
        imgName: 'b72b22d5b380d8d04378330f4822b2157ca1e6d2v2_128.jpg'
      },
      { 
        name: 'Shaak Ti',
        imgName: 'dea59b64b2434557fb763c464eafeef4c6719d94_128.jpg'
      },
      { 
        name: 'Grievous',
        imgName: '88493746f7078a2e19c3f1660bf47687088d3e0a_128.jpg'
      },
      { 
        name: 'Tarfful',
        imgName: 'fd8be349862385e739df52c02148654d08500c7b_128.jpg'
      },
      { 
        name: 'Raymus Antilles',
        imgName: '6df959c5c8f76435de54f734b49dfcad906cf2ba_128.jpg'
      },
      { 
        name: 'Sly Moore',
        imgName: '03e1453b24355e8c7fb55feb1330ff2fffslya7cr01m733.jpg'
      },
      { 
        name: 'Boba Fett',
        imgName: 'b9992636c49e845ca8694b9ea6ea74771db41481v2_128.jpg'
      },
      { 
        name: 'IG-88',
        imgName: 'e83b2a338f576c1861cab245de11a051bba3f730_128.jpg'
      },
      { 
        name: 'Bossk',
        imgName: '32a2d2892df7d5d2a24b0438870af82d65d9c7d4v2_128.jpg'
      },
      { 
        name: 'Lando Calrissian',
        imgName: '9adce80a1bce151df0db2aa3b4b199bcda3e624e_128.jpg'
      },
      { 
        name: 'Lobot',
        imgName: '03e1453b24355e8c7fb55feb1330ff2fffslya710807m733.jpg'
      },
      { 
        name: 'Ackbar',
        imgName: '43a192ad6dd0b492d3e97a1556c52ba10ee9748f_128.jpg'
      },
      { 
        name: 'Mon Mothma',
        imgName: '7f1b932da9f0cb171bd619dc477m0n7m47f6a74_128.jpg'
      },
      { 
        name: 'Arvel Crynyd',
        imgName: '6df959c5c8f76435de54f734s1n71ad906cf2ba_128.jpg'
      },
      { 
        name: 'Wicket Systri Warrick',
        imgName: '483ba293193fdaa14b474fdd182720ed235197d3_128.jpg'
      },
      { 
        name: 'Nien Nunb',
        imgName: '18f0b747c71df6c00348966ca4209a64ce8e8837_128.jpg'
      },
      { 
        name: 'Luminara Unduli',
        imgName: '5812ac167e035e3dcbe1c51b75ef6f9c67751830_128.jpg'
      },
      { 
        name: 'Barriss Offee',
        imgName: 'a4a9d0feb8d15edf4bbaacccc66d082c80c27c42_128.jpg'
      },
      { 
        name: 'Dormé',
        imgName: 'avatar_fe1f94e18952_128.jpg'
      },
      { 
        name: 'Dooku',
        imgName: 'c90a607faac3549a63411deaf7569643ad2bf1a3_128.jpg'
      },
      { 
        name: 'Bail Prestor Organa',
        imgName: '1362ed3141764b91f6d5ae5b820e7b106bb8ebc8_128.jpg'
      },
      { 
        name: 'Jango Fett',
        imgName: '4de3de716127b3cc4dee52acfedd4d1255e69550_128.jpg'
      },
      { 
        name: 'Zam Wesell',
        imgName: 'eaf3e6a23a1cdd8b462d2aabf58a6c2b11f30892_128.jpg'
      },
      { 
        name: 'Dexter Jettster',
        imgName: '1a59ea4749a8413ef38bb686e3a17aa048ad8988_128.jpg'
      },
      { 
        name: 'Lama Su',
        imgName: '4ba6d59c2e4b5219ed6d6ef8771a737b11693473v2_128.jpg'
      },
      { 
        name: 'Taun We',
        imgName: '330821-5818-taun-we.jpg'
      },
      { 
        name: 'Tion Medon',
        imgName: '03e1453b24355e8c7fb55febmedon2fffa7cr013.jpg'
      },
      { 
        name: 'Finn',
        imgName: '4c097504fbc21b26dfea8b5351000cff7d40734e_128.jpg'
      },
      { 
        name: 'Rey',
        imgName: '141782_be.jpg'
      },
      { 
        name: 'Poe Dameron',
        imgName: 'd788bcb97eb8805d804a521c3aec30eefb099f51_128.jpg'
      },
      { 
        name: 'BB8',
        imgName: 'b0fff6a7156b6688eee03356994ebf5bb11b4fa1_128.jpg'
      },
      { 
        name: 'Captain Phasma',
        imgName: 'images.jpg'
      },
      { 
        name: 'Padmé Amidala',
        imgName: '27974a3e8d95f499abd061cea6d127180f98c677v2_128.jpg'
      }
    ];
  }

}
