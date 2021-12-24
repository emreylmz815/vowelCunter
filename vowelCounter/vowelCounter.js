function vowelCounter(str) {
    let vowelList ='aeioüuAEIOUÜ'
    let vowelCount =0;
    for (var i=0;i<str.length;i++){
        if (vowelList.indexOf(str[i])!==-1) {
            vowelCount+=1
        }
    }
    return vowelCount;
}
console.log(vowelCounter("hello word, this is vowel counter "))

