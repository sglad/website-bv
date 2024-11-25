function decodeEmail(encodedString) {
    let email = "", i = 0, n = 0;
    for (i = 0; i < encodedString.length; i++) {
        if (encodedString.charAt(i) == "Z"){
            continue;
        }
        email += encodedString.charAt(i);
    }
    return email;
}