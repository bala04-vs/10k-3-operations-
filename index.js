// what is the result of 10 + `5`

let first_Number=10;
let second_Name="5";
let result_Value=first_Number + second_Name;
console.log(result_Value)

// output is 105 because of string concetination


// what is the value x after x=10; x+=5

let x=10;
   x+=5;
   console.log(x)

//    this the assignment operation +=means   it leads to x=x+5;


// what is the result of 10-null

let number_1=10;
let null_1=null;
let result_Value1= (number_1 - null_1 )

console.log(result_Value1)

// anythig - with same value is come


// what is the value of x after x=10; x*=2


let x_Value=10;
   x_Value=x_Value*2;
   console.log(x_Value);


//    what is the result 10/"2"

let division_Value = 10;
let division_String = "2";


let result_string= (division_Value / division_String);
console.log(typeof(result_string));



// what is the result 10 % 3 ?
let div_Value = 10;
let div_String = 2;


let res_String= (div_Value % div_String);
console.log(res_String);

// what is the value of x after x=10; x=x**2;?

let expon_Value = 10;
    expon_Value=expon_Value**2;
    console.log(expon_Value);


   //  it is the exponsial value

   // what is the result of 10>5&&5<10?


   let logical_1=10;
   let logical_2=5;
   let outPut=(10>5&&5<10);
   console.log(outPut);
   // output is true because 2 conditions are true


   // what is the result of 10==="10"



   let type=10;
   let type_1="10";
   let type_result=(10==='10')
   console.log(type_result)

   // output false because value is not equal and type also not equal


   // what is the result of null ?? 'default'?


   let null_Value=null;
   let default_Value="default";

   let final_Value=(null_Value ?? default_Value)
   console.log(final_Value)


   // output is default


   // what us the resukt of 10 || "default"


let oR=10;
let or_String='default';
let or_Result=(oR || or_String)
console.log(or_Result)


// what is the result of !true

let name_Bool=true;
    name_Bool=!true;
    console.log(name_Bool)




   //  what is the result of 10&5

   let bitWise=10;
   let bitWise_1=5;
   let bitWise_result=(bitWise & bitWise_1)
   console.log(bitWise_result)



   // output 0


   // what is the result of x=10; y=++x?


   let decrement_Value=10;
   
   console.log(`${ decrement_Value} is x value`)
   let decrement_y=++decrement_Value;
   console.log(`${decrement_y} is y value`)



// x=10  y=++x;


let decremen_Value=10;
   
console.log(`${ decremen_Value} is x value`)
let decremen_y=decremen_Value++;
console.log(`${decremen_y} is y value`)



// x=10 console.log(x++)

let incre=10;
console.log(incre++)



// x=10 console.log(x--)


let incr=10;
console.log(++incr)


//x=10 y=--x;

let dec_Value=10;
   
console.log(`${ dec_Value} is x value`)
let dec_y=--dec_Value;
console.log(`${dec_y} is y value`) 


// ternary operators

let venkat=10;
   let y=venkat;

   y=x>5?(console.log(`yes`)):(console.log(`no`));
   

