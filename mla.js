var mlaLists = new Array(2);
mlaLists["empty"]=["Select an MP"];
mlaLists["North Goa"]=["Select an MP", "Shripad Yesso Naik (BJP)", "Girish Raya Chodankar (INC)", "Dattatraya Padgaonkar (AAP)", "Amit Atmaram Korgaonkar (RPI)", "Bhagawant Sadanand Kamat (independent)", "Aishwarya Arjun Salgaonkar (independent)"];
mlaLists["South Goa"]=["Select an MP", "Cosme Francisco Caitano Sardinha (INC)", "Adv. Narendra Sawaikar (BJP)", "Elvis Gomes (AAP)", "Rakhi Amit Naik (Shivsena)", "Mayur Khanconkar (independent)", "Dr. Kalidas Prakash Vaingankar (independent)"];

function mlaChange(selectObj) {
  var id = selectObj.selectedIndex;
  var which = selectObj.options[id].value;
  cList = mlaLists[which];
  var cSelect = document.getElementById("mla");
  while (cSelect.options.length > 0) {
    cSelect.remove(0);
  }
  var newOption;
  for (var i=0; i<cList.length; i++) {
    newOption = document.createElement("option");
    newOption.value = cList[i];
    newOption.text=cList[i];
    try {
      cSelect.add(newOption);
    } catch (e) {
      cSelect.appendChild(newOption);
    }
  }
}