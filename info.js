function infoChange(selectObj) {
  var id = selectObj.selectedIndex;
  var which = selectObj.options[id].value;
  console.log(which);
  switch (which) {
    case 'Shripad Yesso Naik (BJP)':
      window.open("mla-pages/shripad-yesso-naik.html",'_self');
      break;
    case 'Girish Raya Chodankar (INC)':
      window.open("mla-pages/girish-raya-chodankar.html",'_self');
      break;
  }
}