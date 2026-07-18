import br1 from '../../assets/br1.jpg'
import br2 from '../../assets/br2.jpg'
import br3 from '../../assets/br3.jpg'
import br4 from '../../assets/br4.jpg'
import br5 from '../../assets/br5.jpg'
import br6 from '../../assets/br6.jpg'
import br7 from '../../assets/br7.jpg'
import br8 from '../../assets/br8.jpg'
import br9 from '../../assets/br9.png'
import br10 from '../../assets/br10.jpg'
import br11 from '../../assets/br11.png'
import br12 from '../../assets/br12.jpg'
import br13 from '../../assets/br13.jpg'
import br14 from '../../assets/br14.jpg'
import br15 from '../../assets/br15.jpg'
import br16 from '../../assets/br16.jpg'
import br17 from '../../assets/br17.jpg'
import br18 from '../../assets/br18.jpg'
import gghipic from '../../assets/gghipic.jpg'
import mp1 from '../../assets/mp1.png'
import mp2 from '../../assets/mp2.jpg'
import mp3 from '../../assets/mp3.png'
import mp4 from '../../assets/mp4.png'



const branch = [
  {
    img: br1,
    name:'Main Branch',
    address:'Corner Luna and Quezon St. Gubat, Sorsogon​​​​​',
    bm:'Stella F. Hubilla',
    email: 'gubat@gsac.coop',
    contact:'0916 4586 648'
  },
  {
    img: br2,
    name:'Sorsogon Branch',
    address:'Garcia St. Brgy Sulucan, Sorsogon City​​',
    bm:'Novalyn C. Enconado',
    email: 'sorsogon@gsac.coop',
    contact:'0927 9427 670'
  },
  {
    img: br3,
    name:'Bulan Branch',
    address:'Cor. Roque and Gerona Sts., Zone 3, Bulan, Sorsogon​​',
    bm:'Thea Estrellado',
    email: 'bulan@gsac.coop',
    contact:'0975 3481 375'
  },
  {
    img: br4,
    name:'Irosin Branch',
    address:'CM Recto St, Irosin, Sorsogon​',
    bm:'Ray Gotis',
    email: 'irosin@gsac.coop',
    contact:'+63(917) 118 4202'
  },
  {
    img: br5,
    name:'Legazpi Branch',
    address:'Purok 1, Brgy. 3 EMs Bo. East, Legazpi City, Albay​​​​​​',
    bm:'Percival C. Balbueno',
    email: 'legazpi@gsac.coop',
    contact:'0970 8357 513'
  },
  {
    img: br6,
    name:'Tabaco Branch',
    address:'Brgy. Panal Tabaco City​​​​​​',
    bm:'Reymond Dicen',
    email: 'tabaco@gsac.coop',
    contact:'+63(993) 057 4270'
  },
  {
    img: br7,
    name:'Ligao Branch',
    address:'McKinley Street, Brgy. Bagum Bayan, Ligao City​​​​​​​',
    bm:'Lerma E. Figueras',
    email: 'ligao@gsac.coop',
    contact:'0910 5689 422'
  },
  {
    img: br8,
    name:'Naga Branch',
    address:'Unit 4 ANR Building, Concepcion Grade, Naga City​​',
    bm:'Roel Briones',
    email: 'naga@gsac.coop',
    contact:'0998 1942 914'
  },
  {
    img: br9,
    name:'Catarman Branch',
    address:'F. Marcos St. Brgy. Lapu-Lapu, Catarman N. Samar​',
    bm:'Daniel Estargo',
    email: 'catarman@gsac.coop',
    contact:'0975 9848 513'
  },
  {
    img: br10,
    name:'Pilar Branch',
    address:'Smith Street, Banuyo, Pilar Sorsogon​​​​',
    bm:'Ruling Jamisola​',
    email: 'pilar@gsac.coop',
    contact:'0912 9600 952'
  },
  {
    img: br11,
    name:'Magallanes Branch',
    address:'Corner Buitizon & Ortega Streets, Brgy Central, Magallanes​​​​',
    bm:'Dante Deinla​',
    email: 'magallanes@gsac.coop',
    contact:'0951 5994 328'
  },
  {
    img: br12,
    name:'Bulusan Branch',
    address:'V. Guysayko St., Brgy. Central, Bulusan​',
    bm:'Aries E. Flestado​',
    email: 'bulusan@gsac.coop',
    contact:'0985 1050 973 / 0951 5998 227'
  },
  {
    img: br13,
    name:'Donsol Branch',
    address:'347 J.Toledo St. Corner Clemente, Punta Waling-Waling Dalisay, Donsol',
    bm:'Jose L. Esperanzate​',
    email: 'donsol@gsac.coop',
    contact:'0952 5578 483'
  },
  {
    img: br14,
    name:'Allen Branch',
    address:'Corner No. 75 Magallanes Street, Brgy. Kinabranan, Allen​',
    bm:'Michael Antuerpia​​​',
    email: 'allen@gsac.coop',
    contact:'0931 7155 689'
  },
  {
    img: br15,
    name:'Castilla Branch',
    address:'Maharlika Highway, Cumadcad, Castilla​',
    bm:'Roldan Balbuena​',
    email: 'castilla@gsac.coop',
    contact:'0950 9281 397'
  },
  {
    img: br16,
    name:'Juban Branch',
    address:'South Poblacion, Juban, Sorsogon​',
    bm:'Roldan Balbuena​',
    email: 'juban@gsac.coop',
    contact:'0953 9229 347'
  },
  {
    img: br17,
    name:'Iriga Branch',
    address:'229 Iriga - Baao Rd, Iriga City, Camarines Sur​',
    bm:'Darwin Perol​',
    email: 'iriga@gsac.coop',
    contact:'0970 5801 212'
  },
  {
    img: br18,
    name:'Bacacay Branch',
    address:'Bañez St., Barangay 10, Bacacay, Albay​',
    bm:'Richard Jerusalem​',
    email: 'bacacay@gsac.coop',
    contact:'0950 9299 337'
  },
  
];

const gghi = [
  {
    img: gghipic,
    name: 'GSAC General Hospital, Inc',
    address: 'Purok 5 Brgy. Road Balogo Sorsogon',
    contact: '0970 311 7306'
  },
  {
    img: mp1,
    name: 'GSAC Mart Gubat',
    address: 'Cor. Luna & Quezon St. Gubat, Sorsogon',
    contact: '0970 311 7306'
  },
  {
    img: mp1,
    name: 'GSAC Pharmacy Gubat',
    address: 'Cor. Luna & Quezon St. Gubat, Sorsogon',
    contact: '0970 311 7306'
  },
  {
    img: mp2,
    name: 'GSAC Mart & Pharmacy Sorsogon',
    address: 'Magsaysay and Rizal Streets, Brgy. Sulucan, East District, Sorsogon City (Beside Savemore)',
    contact: '0970 311 7306'
  },
  {
    img: mp3,
    name: 'GSAC Mart & Pharmacy (Formerly Bayanihan)',
    address: 'Magsaysay St. Sorsogon City',
    contact: '0970 311 7306'
  },
  {
    img: mp4,
    name: 'GSAC Mart & Pharmacy Irosin',
    address: 'CM Recto St, Irosin, Sorsogon',
    contact: '0929 504 2754'
  },
]

export { branch , gghi };