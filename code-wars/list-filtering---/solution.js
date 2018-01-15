function filter_list(l) {
    var arr = l.filter(item => parseInt(item) || item == 0)
    return arr;
}

filter_list([1,2,'a','b'])
//returns [1,2]
filter_list([1,'a','b',0,15])
//returns [1,0,1,5] instead of [1,0,15]
filter_list([1,2,'aasf','1','123',123])
//returns [1,2,1,2,3]