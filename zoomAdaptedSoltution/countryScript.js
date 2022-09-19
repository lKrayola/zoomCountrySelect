/* Countries made by Kendall */
var countries =
  '<option value="AE">United Arab Emirates</option><option value="AD">Andorra</option><option value="AF">Afghanistan</option><option value="AG">Antigua and Barbuda</option><option value="AI">Anguilla</option><option value="AL">Albania</option><option value="AM">Armenia</option><option value="AN">Netherlands Antilles</option><option value="AO">Angola</option><option value="AQ">Antarctica</option><option value="AR">Argentina</option><option value="AS">American Samoa</option><option value="AT">Austria</option><option value="AU">Australia</option><option value="AW">Aruba</option><option value="AX">Aland Islands</option><option value="AZ">Azerbaijan</option><option value="BA">Bosnia and Herzegovina</option><option value="BB">Barbados</option><option value="BD">Bangladesh</option><option value="BE">Belgium</option><option value="BF">Burkina Faso</option><option value="BG">Bulgaria</option><option value="BH">Bahrain</option><option value="BI">Burundi</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BN">Brunei Darussalam</option><option value="BO">Bolivia</option><option value="BR">Brazil</option><option value="BS">Bahamas</option><option value="BT">Bhutan</option><option value="BV">Bouvet Island</option><option value="BW">Botswana</option><option value="BY">Belarus</option><option value="BZ">Belize</option><option value="CA">Canada</option><option value="CD">The Democratic Republic of The Congo</option><option value="CF">Central African Republic</option><option value="CG">Congo</option><option value="CH">Switzerland</option><option value="CI">Cote D Ivoire</option><option value="CK">Cook Islands</option><option value="CL">Chile</option><option value="CM">Cameroon</option><option value="CN">China</option><option value="CO">Colombia</option><option value="CR">Costa Rica</option><option value="CS">Serbia and Montenegro</option><option value="CV">Cape Verde</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DE">Germany</option><option value="DJ">Djibouti</option><option value="DK">Denmark</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="DZ">Algeria</option><option value="EC">Ecuador</option><option value="EE">Estonia</option><option value="EG">Egypt</option><option value="ER">Eritrea</option><option value="ES">Spain</option><option value="ET">Ethiopia</option><option value="FI">Finland</option><option value="FJ">Fiji</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FM">Federated States of Micronesia</option><option value="FO">Faroe Islands</option><option value="FR">France</option><option value="GA">Gabon</option><option value="GB">United Kingdom of Great Britain and Northern Ireland</option><option value="GD">Grenada</option><option value="GE">Georgia</option><option value="GF">French Guiana</option><option value="GG">Guernsey</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GL">Greenland</option><option value="GM">Gambia</option><option value="GN">Guinea</option><option value="GP">Guadeloupe</option><option value="GQ">Equatorial Guinea</option><option value="GR">Greece</option><option value="GS">South Georgia and The South Sandwich Islands</option><option value="GT">Guatemala</option><option value="GU">Guam</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HK">Hong Kong</option><option value="HN">Honduras</option><option value="HR">Croatia</option><option value="HT">Haiti</option><option value="HU">Hungary</option><option value="ID">Indonesia</option><option value="IE">Ireland</option><option value="IL">Israel</option><option value="IM">Isle of Man</option><option value="IN">India</option><option value="IO">British Indian Ocean Territory</option><option value="IQ">Iraq</option><option value="IS">Iceland</option><option value="IT">Italy</option><option value="JE">Jersey</option><option value="JM">Jamaica</option><option value="JO">Jordan</option><option value="JP">Japan</option><option value="KE">Kenya</option><option value="KG">Kyrgyzstan</option><option value="KH">Cambodia</option><option value="KI">Kiribati</option><option value="KM">Comoros</option><option value="KN">Saint Kitts and Nevis</option><option value="KR">Republic of Korea</option><option value="KW">Kuwait</option><option value="KY">Cayman Islands</option><option value="KZ">Kazakhstan</option><option value="LA">Lao People s Democratic Republic</option><option value="LB">Lebanon</option><option value="LC">Saint Lucia</option><option value="LI">Liechtenstein</option><option value="LK">Sri Lanka</option><option value="LR">Liberia</option><option value="LS">Lesotho</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="LV">Latvia</option><option value="LY">Libyan Arab Jamahiriya</option><option value="MA">Morocco</option><option value="MC">Monaco</option><option value="MD">Republic of Moldova</option><option value="ME">Montenegro</option><option value="MF">Saint Martin</option><option value="MG">Madagascar</option><option value="MH">Marshall Islands</option><option value="MK">The Former Yugoslav Republic of Macedonia</option><option value="ML">Mali</option><option value="MM">Myanmar</option><option value="MN">Mongolia</option><option value="MO">Macau SAR/ Macao</option><option value="MP">Northern Mariana Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MS">Montserrat</option><option value="MT">Malta</option><option value="MU">Mauritius</option><option value="MV">Maldives</option><option value="MW">Malawi</option><option value="MX">Mexico</option><option value="MY">Malaysia</option><option value="MZ">Mozambique</option><option value="NA">Namibia</option><option value="NC">New Caledonia</option><option value="NE">Niger</option><option value="NF">Norfolk Island</option><option value="NG">Nigeria</option><option value="NI">Nicaragua</option><option value="NL">Netherlands</option><option value="NO">Norway</option><option value="NP">Nepal</option><option value="NR">Nauru</option><option value="NU">Niue</option><option value="NZ">New Zealand</option><option value="OM">Oman</option><option value="PA">Panama</option><option value="PE">Peru</option><option value="PF">French Polynesia</option><option value="PG">Papua New Guinea</option><option value="PH">Philippines</option><option value="PK">Pakistan</option><option value="PL">Poland</option><option value="PM">Saint Pierre and Miquelon</option><option value="PR">Puerto Rico</option><option value="PS">Palestinian Territory, </option><option value="PT">Portugal</option><option value="PW">Palau</option><option value="PY">Paraguay</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RS">Serbia</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="SA">Saudi Arabia</option><option value="SB">Solomon Islands</option><option value="SC">Seychelles</option><option value="SE">Sweden</option><option value="SG">Singapore</option><option value="SI">Slovenia</option><option value="SK">Slovakia</option><option value="SL">Sierra Leone</option><option value="SM">San Marino</option><option value="SN">Senegal</option><option value="SO">Somalia</option><option value="SR">Suriname</option><option value="SS">South Sudan</option><option value="ST">Sao Tome and Principe</option><option value="SV">El Salvador</option><option value="SZ">Swaziland</option><option value="TC">Turks and Caicos Islands</option><option value="TD">Chad</option><option value="TF">French Southern Territories</option><option value="TG">Togo</option><option value="TH">Thailand</option><option value="TJ">Tajikistan</option><option value="TK">Tokelau</option><option value="TL">Timor-Leste</option><option value="TM">Turkmenistan</option><option value="TN">Tunisia</option><option value="TO">Tonga</option><option value="TR">Turkey</option><option value="TT">Trinidad and Tobago</option><option value="TV">Tuvalu</option><option value="TW">Taiwan</option><option value="TZ">United Republic of Tanzania</option><option value="UA">Ukraine</option><option value="UG">Uganda</option><option value="UK">(See "GB")</option><option value="UM">United States Minor Outlying Islands</option><option value="US">United States of America</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VA">Holy See (Vatican City State)</option><option value="VC">Saint Vincent and The Grenadines</option><option value="VE">Venezuela</option><option value="VG">Virgin Islands (Brit)</option><option value="VI">Virgin Islands (USA)</option><option value="VN">Vietnam</option><option value="VU">Vanuatu</option><option value="WF">Wallis and Futuna</option><option value="WS">Samoa</option><option value="YE">Yemen</option><option value="YT">Mayotte</option><option value="ZA">South Africa</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>';

// var min = 0,
//   max = 10,
//   select = document.getElementById("#allcountries");

// var o = new Option("option text", "value");
// /// jquerify the DOM object 'o' so we can use the html method
// $(o).html("option text");
// $("#selectList").append(o);

// for (var i = 0; i <= zoomCountriesCode.length; i++) {
//   var opt = document.createElement("option");
//   opt.value = zoomCountriesCode[i];
//   opt.innerHTML = i;
//   select.appendChild(opt);
// }
var zoomCountriesCode = {
  AE: "United Arab Emirates",
  AD: "Andorra",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AN: "Netherlands Antilles",
  AO: "Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AS: "American Samoa",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AX: "Aland Islands",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BM: "Bermuda",
  BN: "Brunei Darussalam",
  BO: "Bolivia",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CD: "The Democratic Republic of The Congo",
  CF: "Central African Republic",
  CG: "Congo",
  CH: "Switzerland",
  CI: "Cote D Ivoire",
  CK: "Cook Islands",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CS: "Serbia and Montenegro",
  CV: "Cape Verde",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands (Malvinas)",
  FM: "Federated States of Micronesia",
  FO: "Faroe Islands",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom of Great Britain and Northern Ireland",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GS: "South Georgia and The South Sandwich Islands",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "India",
  IO: "British Indian Ocean Territory",
  IQ: "Iraq",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KI: "Kiribati",
  KM: "Comoros",
  KN: "Saint Kitts and Nevis",
  KR: "Republic of Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Lao People s Democratic Republic",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libyan Arab Jamahiriya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Republic of Moldova",
  ME: "Montenegro",
  MF: "Saint Martin",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MK: "The Former Yugoslav Republic of Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macau SAR/ Macao",
  MP: "Northern Mariana Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PM: "Saint Pierre and Miquelon",
  PR: "Puerto Rico",
  PS: "Palestinian Territory, ",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russian Federation",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SE: "Sweden",
  SG: "Singapore",
  SI: "Slovenia",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "Sao Tome and Principe",
  SV: "El Salvador",
  SZ: "Swaziland",
  TC: "Turks and Caicos Islands",
  TD: "Chad",
  TF: "French Southern Territories",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "United Republic of Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  UK: '(See "GB")',
  UM: "United States Minor Outlying Islands",
  US: "United States of America",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Holy See (Vatican City State)",
  VC: "Saint Vincent and The Grenadines",
  VE: "Venezuela",
  VG: "Virgin Islands (Brit)",
  VI: "Virgin Islands (USA)",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

const select = document.getElementById("#allcountries");
for (const key in zoomCountriesCode) {
  console.log(`${key}: ${zoomCountriesCode[key]}`);
  const opt = document.createElement("option");
  opt.value = key;
  opt.innerHTML = zoomCountriesCode[key];
  select.appendChild(opt);
}
