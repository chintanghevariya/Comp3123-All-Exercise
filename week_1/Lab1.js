// task 1
let str = "the quick brown fox"
let arr = str.split(" ")
let answer=''

for (let i of arr){
    answer += i[0].toUpperCase() + i.substring(1,i.length) + " "
}

console.log(answer)


//task 2

function max(a,b,c){
    if (a > b) {
        if(a >= c) 
        {
             console.log("\nA (" + a + ") is larger\n")
        }else{
            console.log("C (" + c +") is larger\n")
        }
    }else if(b > c) 
    {
        console.log("B (" + b + ") is larger\n")
    }
    else{
            console.log("C (" + c +") is larger\n")
    }
}

max(1,0,1)
max(0,10,-20)
max(00,10,4)


// task 3

function Reverse(str){
    if(str.length >= 3){
        let temp = str.substring(str.length-3,str.length)
        let temp2 = str.substring(0,str.length-3)
        console.log(temp+temp2)
    }else{
        console.log(str)
    }
}

Reverse("\npython")
Reverse("javascript")
Reverse("hi")

// task 4

function angle_Type(ang){
    if (ang < 90){
        console.log("Acute angle")
    }else if(ang == 90){
        console.log("Right angle")
    }else if(ang > 90 && ang < 180){
        console.log("Obtuse angle")
    }else if(ang == 180){
        console.log("Straight angle")
    }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

// task 5

function array_max_sum(arr, digit){
    let t_sum = 0;
    let result = 0;
    for (var i = 0; i < digit - 1; i++) {
        t_sum += arr[i];
    }
    for (var i = digit - 1; i < arr.length; i++) {
        t_sum += arr[i];
        if (t_sum > result) {
            result = t_sum;
        }
        t_sum -= arr[i - digit + 1];
    }
  return result;                         
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
