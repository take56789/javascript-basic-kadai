let num =15;

console.log(num);

//変数numが3と5の倍数の場合
if (num % 5 ==0 && num % 3 ==0) {
    console.log('3と5の倍数です');
}

// 変数numが3の倍数の場合
else if(num % 3 ==0 ) {
    console.log('3の倍数です');
}

//　変数numが5の倍数の場合
else if (num % 5 ==0) {
    console.log('5の倍数です');
}

else {
    console.log(num);
}