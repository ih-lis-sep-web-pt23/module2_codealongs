// Callback

const func1 = (callback) => {
  setTimeout(() => {
    console.log("Hello")
    callback()
  }, 1000)
}

//setTimeout(func2, 1000)

const func2 = () => {
  console.log("Goodbye")
}

//func1(func2)

const directions = [
  "Starting point: Ironhack Lisbon",
  "↑ Head east on Javascript Avenue",
  "➔ Turn right onto Promise Street",
  "* Arrive at Cofre Restaurant & Bar"
];

const getDirections = (step, callback, errorCallback) => {

  if(!directions[step]) errorCallback("Instructions not found")
  else {
    console.log(directions[step])
    callback()
}
}

//Callback hell

/* getDirections(0, () => {
   getDirections(1, () => {
    getDirections(2, () => {
      getDirections(3, () => {
          //good for now
      }, (error) => console.log(error))
    }, (error) => console.log(error))
   }, (error) => console.log(error) )
  }, (error) => console.log(error) ) */

/*   function sum(a, b){
    return a +b;
  }

  getDirections(0, () => {getDirections(1)}, err => console.log(err)) */

//Promises

/* const myPromise = new Promise((resolve, reject) => {
  if(/* condition is true ){
    resolve(/* value for a successfull promise )
  } else{
    reject(/* error or reason for failing )
  }
}) */

// Promises have 3 different states

//Pending

const promisePending = new Promise(() => {})
//console.log(promisePending)

// Resolved
const resolvedPromise = Promise.resolve("I finished what I had to do")
//console.log(resolvedPromise)

// Rejected
//const rejectedPromise = Promise.reject("Error logging in")
//console.log(rejectedPromise)

const obtainPromiseDirections = (step) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!directions[step]) reject("Directions not found")
      else {
        console.log(directions[step])
        resolve()
      }
    }, 1000)
  })
}

//.then method
//the .then runs code if the promise was successfull
//we can only use it with promises

// .catch()

//Promise chaining
/* obtainPromiseDirections(0)
.then(() => obtainPromiseDirections(1))
.then(() => obtainPromiseDirections(2))
.then(() => obtainPromiseDirections(3))
.then(() => obtainPromiseDirections(4))
.catch((error) => console.log(error)) */


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 1000)
})


/* promise2
.then((value) => {
  //Inside .then we have access to the resolved value
  console.log(value)
  //throw new Error("First error")
  return "B"
}).then((secondValue) => {
  console.log(secondValue)
}).catch((err) => console.log(err))
.finally(() => {
  console.log("I will always run")
})
 */

// Promise.all()

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 1000)
})
/* const promise4 = new Promise((resolve, reject) => {
  throw new Error("Nope")
  //setTimeout(() => resolve(200), 5000)
}) */
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({name: "Bob"}), 2000)
})
/* 
Promise.all([promise3, promise4, promise5])
.then((allValues) => { console.log(allValues)})
.catch((err) => console.log(err)) */
//Promise.all returns a promise with all the values from the promises it waited for
// It waits for all the promises to finish


// Async / await - Syntatic sugar

async function myFunction(){}

const myAsyncExpression = async () => {
  return true
}

myAsyncExpression()
.then((value) => console.log(value))

//await 

const finalDirections = async () => {
  try {
    //call the functions to get the directions
    //
   await obtainPromiseDirections(0)
  
   await obtainPromiseDirections(1)
   await obtainPromiseDirections(2)
   await obtainPromiseDirections(3)
   //we can store the resolved value of promises in variables
   const value = await promise5
   console.log(value)
    console.log("Finished")
    
  } catch (error) {
    //handle the error
    console.log(error)
  }

}

finalDirections()



