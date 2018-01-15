function mutateMyStrings(s1, s2){
    var st = s1,
           s1 = s1.split(""),
           s2 = s2.split(""),
           lastX = s1;
    for (i = 0; i < s1.length; i++) {
      let x = s2.slice(0 , i+1).concat(s1.slice(i+1 , s2.length)).join("");
      if (x !== lastX) {
        st = st.concat('\n', x);
      }
      lastX = x;
    }
    st = st.concat('\n');
    return st;
   };