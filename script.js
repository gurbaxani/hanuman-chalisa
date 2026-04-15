import fs from 'node:fs';

const versesText = [
    ['Jai Hanuman gyan gun sagar,', 'Jai Kapis tihun lok ujagar |'],
    ['Ram doot atulit bal dhama,', 'Anjani-putra Pavan sut nama |'],
    ['Mahavir Vikram Bajrangi,', 'Kumati nivar sumati Ke sangi |'],
    ['Kanchan varan viraj subesa,', 'Kanan Kundal Kunchit Kesa |'],
    ['Hath Vajra Aur Dhuvaje Viraje,', 'Kandhe moonj janehu sajai |'],
    ['Sankar suvan kesri Nandan,', 'Tej pratap maha jag vandan |'],
    ['Vidyavan guni ati chatur,', 'Ram kaj karibe ko aatur |'],
    ['Prabu charitra sunibe ko rasiya,', 'Ram Lakhan Sita man Basiya |'],
    ['Sukshma roop dhari Siyahi dikhava,', 'Vikat roop dhari lanka jarava |'],
    ['Bhima roop dhari asur sanghare,', 'Ramachandra ke kaj sanvare |'],
    ['Laye Sanjivan Lakhan Jiyaye,', 'Shri Raghuvir Harashi ur laye |'],
    ['Raghupati Kinhi bahut badai,', 'Tum mam priye Bharat-hi sam bhai |'],
    ['Sahas badan tumharo yash gaave,', 'Us kahi Shripati kanth lagaave |'],
    ['Sankadik Brahmadi Muneesa,', 'Narad Sarad sahit Aheesa |'],
    ['Yam Kuber Digpal Jahan te,', 'Kavi kovid kahi sake kahan te |'],
    ['Tum upkar Sugreevahin keenha,', 'Ram milaye rajpad deenha |'],
    ['Tumharo mantra Vibheeshan mana,', 'Lankeshwar Bhaye Sub jag jana |'],
    ['Yug sahastra jojan par Bhanu,', 'Leelyo tahi madhur phal janu |'],
    ['Prabhu mudrika meli mukh mahee,', 'Jaladhi langhi gaye achraj nahee |'],
    ['Durgaam kaj jagat ke jete,', 'Sugam anugraha tumhre tete |'],
    ['Ram dware tum rakhvare,', 'Hoat na agya binu paisare |'],
    ['Sub sukh lahai tumhari sarna,', 'Tum rakshak kahu ko dar na |'],
    ['Aapan tej samharo aapai,', 'Teenhon lok hank te kanpai |'],
    ['Bhoot pisach Nikat nahin aavai,', 'Mahavir jab naam sunavai |'],
    ['Nase rog harai sab peera,', 'Japat nirantar Hanumant beera |'],
    ['Sankat se Hanuman chudavai,', 'Man Karam Vachan dyan jo lavai |'],
    ['Sub par Ram tapasvee raja,', 'Tin ke kaj sakal Tum saja |'],
    ['Aur manorath jo koi lavai,', 'Sohi amit jeevan phal pavai |'],
    ['Charon Yug partap tumhara,', 'Hai persidh jagat ujiyara |'],
    ['Sadhu Sant ke tum Rakhware,', 'Asur nikandan Ram dulhare |'],
    ['Ashta sidhi nav nidhi ke dhata,', 'Us var deen Janki mata |'],
    ['Ram rasayan tumhare pasa,', 'Sada raho Raghupati ke dasa |'],
    ['Tumhare bhajan Ram ko pavai,', 'Janam janam ke dukh bisravai |'],
    ['Anth kaal Raghuvir pur jayee,', 'Jahan janam Hari-Bakht Kahayee |'],
    ['Aur Devta Chit na dharehi,', 'Hanumanth se hi sarve sukh karehi |'],
    ['Sankat kate mite sab peera,', 'Jo sumirai Hanumat Balbeera |'],
    ['Jai Jai Jai Hanuman Gosahin,', 'Kripa Karahu Gurudev ki nyahin |'],
    ['Jo sat bar path kare kohi,', 'Chutehi bandhi maha sukh hohi |'],
    ['Jo yah padhe Hanuman Chalisa,', 'Hoye siddhi sakhi Gaureesa |'],
    ['Tulsidas sada hari chera,', 'Keejai Das Hrdaye mein dera |']
];

const messages = {
    "$schema": "https://inlang.com/schema/inlang-message-format",
    "shree": "Shree",
    "title": "Hanuman Chalisa",
    "opening_doha_title": "Opening Doha",
    "opening_doha_1": "Shri Guru Charan Saroj Raj,",
    "opening_doha_2": "Nij mane mukure sudhar |",
    "opening_doha_3": "Varnao Raghuvar Vimal Jasu,",
    "opening_doha_4": "Jo dayaku phal char ||",
    "opening_doha_5": "Budhi Hin Tanu Janike,",
    "opening_doha_6": "Sumirau Pavan Kumar |",
    "opening_doha_7": "Bal budhi Vidya dehu mohe,",
    "opening_doha_8": "Harahu Kalesa Vikar ||",
    "concluding_doha_title": "Concluding Doha",
    "concluding_doha_1": "Pavantnai sankat haran,",
    "concluding_doha_2": "Mangal murti roop |",
    "concluding_doha_3": "Ram Lakhan Sita sahit,",
    "concluding_doha_4": "Hrdaye basahu sur bhoop ||",
    "jai_shri_ram": "Jai Shri Ram",
};

for (let i = 0; i < versesText.length; i++) {
    messages[`verse_${i + 1}_1`] = versesText[i][0];
    messages[`verse_${i + 1}_2`] = versesText[i][1];
}

const langs = ['bho', 'bn', 'en', 'gu', 'hi', 'kn', 'mr', 'ta', 'te'];
const basePath = '/home/ashwini/code/givepplwhattheywant/hanuman-chalisa/messages';

for (const lang of langs) {
    fs.writeFileSync(`${basePath}/${lang}.json`, JSON.stringify(messages, null, '\t') + '\n');
}

console.log('Messages written successfully.');

const versesArrayCodes = versesText.map((_, i) => {
    return `        [m.verse_${i + 1}_1(), m.verse_${i + 1}_2()],`;
}).join('\n');

console.log('Verses array code:\n');
console.log(versesArrayCodes);
