
const numberelement1=document.getElementById('number1') as HTMLInputElement;
const numberelement2=document.getElementById('number2') as HTMLInputElement;

const buttnumber=document.querySelector('#buttonnumber')!
type Nostring=number|string
function add(num1:Nostring,num2:Nostring){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2
    }
    if(typeof num1==='string' && typeof num2==='string'){
        return num1+":->"+num2
    }
   
}
// const numberResult:number[]=[]
// const stringResult:string[]=[]
const numberResult:Array<number>=[]
const stringResult:Array<string>=[]
type resultobj={val:number;timespan:Date}
//or
interface resultObj{
    val:number;
    timespan:Date;
}
function printnumber(obj:resultobj){
    console.log(obj.val)
}
buttnumber.addEventListener('click',()=>{
    const num1=numberelement1.value;
    const num2=numberelement2.value;
    const result=add(+num1,+num2)
    const rstring=add(num1,num2)
    numberResult.push(result as number)
    stringResult.push(rstring as string)
    printnumber({val:result as number,timespan:new Date()})
    console.log(numberResult,'number array')
    console.log(stringResult,'this is string array')
})
const mypromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it is working now')
    },1000)
})
mypromise.then(result=>console.log(result.split(' ')))