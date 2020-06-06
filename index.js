function palindrome(str) {
  var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  var ccount = 0
  if(cstr===""){
    return false;
  }
  if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	}
  else{
    if (cstr.length === 1) {
      console.log("Entry is a palindrome")
			return true;
  }
  else{
    ccount = (cstr.length - 1) / 2;
  }
}
for (var x = 0; x < ccount; x++) {
  if (cstr[x] != cstr.slice(-1-x)[0]) {
      console.log("Entry is not a palindrome")
			return false;
		}
	}
  console.log("Entry is a palindrome")
	return true;
}
palindrome("eye");