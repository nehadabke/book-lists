export const nytCards = [];
const nytCoverUrls = [
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493655783i/35036409.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433354252i/8171378.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627203575i/6101138.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1538134660i/67.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355011305i/3805.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355352105i/16481836.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493178362i/30555488.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516499623i/88442.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353048590i/6334.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1558681761i/68210.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391409748i/297673.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703310133i/7815.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403832251i/21400742.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529845599i/34051011.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1503806495i/3985.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403430899i/22237161.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/b5/Lincoln_in_the_Bardo_by_George_Saunders_first_edition.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/0d/Say_Nothing_%28Patrick_Radden_Keefe%29.png',
  'https://upload.wikimedia.org/wikipedia/en/d/d9/Erasure_%28novel%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1c/Evicted_%28Matthew_Desmond%29.png',
  'https://upload.wikimedia.org/wikipedia/en/3/3f/Behind_the_Beautiful_Forevers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1e/HateshipFriendshipCourtshipLoveshipMarriage.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3a/The_Overstory_%28Powers_novel%29.png',
  'https://upload.wikimedia.org/wikipedia/en/0/0a/Random_Family_%28LeBlanc%29_book_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6d/Atonement_%28novel%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/68/Americanah_book_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/38/Cloud_atlas.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/89/HelenDeWitt_TheLastSamurai.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4c/Cover_of_the_book_sing%2C_unburied%2C_sing.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1f/WhiteTeeth.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/48/LineOfBeauty.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/ba/Salvage_the_Bones_%282011_book_cover%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/21/Citizen_-_An_American_Lyric.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/8c/Funhomecover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d2/Between_the_World_and_Me.jpeg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Les_ann%C3%A9es_%28Annie_Ernaux%29.jpg/433px-Les_ann%C3%A9es_%28Annie_Ernaux%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3a/LosDetectivesSalvajes.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/30/A_Visit_From_the_Goon_Squad.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a3/H_is_for_Hawk_%28Macdonald_novel%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/2a/Small_Things_Like_These.jpeg',
  'https://upload.wikimedia.org/wikipedia/en/f/ff/A_Brief_History_of_Seven_Killings%2C_Cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/98/Postwar_book_tony_judt.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/01/The_Fifth_Season_%28novel%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/b8/The_Argonauts_Nelson.jpeg',
  'https://upload.wikimedia.org/wikipedia/en/e/eb/The_goldfinch_by_donna_tart.png',
  'https://upload.wikimedia.org/wikipedia/en/3/3e/A_mercy_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/10/Persepolis-books1and2-covers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/5a/The_vegetarian_-_han_kang.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/75/Trust_novel.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/66/Life_After_Life_%28novel%29_cover_image.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/14/Train_Dreams_%28Johnson_novella%29.png',
  'https://upload.wikimedia.org/wikipedia/en/c/c5/Runawaycover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/83/Tenth_of_December.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/7b/LoomingTower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/af/TheFlamethrowersKushner.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a2/Nickel_and_Dimed_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/ed/Stay_True.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a3/Middlesex_novel.jpg',
  'https://upload.wikimedia.org/wikipedia/en/c/c3/HeavyMemoir.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6e/Demon_Copperhead_%28Barbara_Kingsolver%29.png',
  'https://upload.wikimedia.org/wikipedia/en/0/00/4_minutes_after_10.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/23/Veronica_%28Novel%29_Book_Cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/5e/The_Great_Believers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/73/Plot_against_usa.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e2/We_the_AnimalsNovel.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/90/Far_from_the_Tree_%28book%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/24/The_Friend_%28Sigrid_Nunez%29.png',
  'https://upload.wikimedia.org/wikipedia/en/5/56/The_New_Jim_Crow_cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/34/AllAuntHagarsChildren.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593377780i/53317528.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/ac/Secondhand_Time_The_Last_of_the_Soviets.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565686865i/13049569.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/5c/Olive-kitteridge_l.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3d/Exit_West.png',
  'https://upload.wikimedia.org/wikipedia/en/7/7c/An_American_Marriage_%28Tayari_Jones%29.png',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663349377i/60246552.jpg',
  'https://upload.wikimedia.org/wikipedia/en/c/c4/Tomorrow%2C_and_Tomorrow%2C_and_Tomorrow.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1437827518i/22929586.jpg',
  'https://upload.wikimedia.org/wikipedia/en/c/c2/Storia_della_bambina_perduta_Elena_Ferrante_book_cover.png',
  'https://upload.wikimedia.org/wikipedia/en/d/d5/Pulphead.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/1c/Temporada_de_huracanes_%28Fernanda_Melchor%29.png',
  'https://upload.wikimedia.org/wikipedia/en/8/84/Book_cover_of_When_We_Cease_to_Understand_the_World.jpeg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1280771091i/7170627.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/20/Pastoralia.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/91/Frederick_Douglass_%28David_W._Blight%29.png',
  'https://upload.wikimedia.org/wikipedia/en/2/24/Detransition_Baby%2C_Rachel_Ake_Kuech_Cover%2C_2021.png',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1316729925i/6670287.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/70/Cover_of_The_Return%2C_memoir_by_Hisham_Matar.jpg',
  'https://upload.wikimedia.org/wikipedia/en/1/10/The_Sympathizer_%28Viet_Thanh_Nguyen%29.png',
  'https://upload.wikimedia.org/wikipedia/en/c/c7/Human_stain.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/da/The_Days_of_Abandonment.jpg',
  'https://upload.wikimedia.org/wikipedia/en/2/22/Station_Eleven_Cover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/34/OnBeautybookcover.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/b5/BringUpTheBodies.jpg',
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1572261510i/45894050.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/be/Cover_of_the_book_Men_We_Reaped.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/57/Bel_canto.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4f/HowToBeBoth.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/71/TreeOfSmoke.jpg'

]

for (let i = 0; i < nytCoverUrls.length; i++) {
  nytCards[i] =  { imageSrc: nytCoverUrls[i], number: i+1 };
}