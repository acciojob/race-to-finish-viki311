let promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise1");
	},1000)
})
let promise2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise2");
	},1000)
})
let promise3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise3");
	},1000)
})
let promise4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise4");
	},1000)
})
let promise5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise5");
	},1000)
})

let ans=window.promises = [promise1,promise2,promise3,promise4,promise5]
Promise.any().then((res)=>console.lo(res));
// Do not change the code above this
// add your promises to the array `promises`
