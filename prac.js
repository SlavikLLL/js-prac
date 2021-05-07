let str ='\n';
for(let row =1;row<=8;row++){
    for (let cell=1;cell<=8;cell++){
        str +=(row % 2 == cell % 2) ? "#" : " ";
    }
    str += "\n";
}
console.log(str);


for(let i=1;i<=100;i++){
    let str1="";
    if(i % 3 == 0){
        str1 += "Fuzz";
    }
    else if(i % 5 == 0 ){
        str1 +="Buzz";
    }
    console.log(str1 || i);
}