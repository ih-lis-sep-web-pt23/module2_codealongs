//import {useState} from 'react'

const student = {
  name: "André",
  age: 76,
  music: "Rock",
  address:  {
    street: "Javascript avenue",
    number: 123
  }
}

/* const favouriteMusic = student.music
const myName = student.name
const myAge = student.age
console.log(favouriteMusic)*/
// const name = student.name <- non destructuring way
const 
{
  name: firstName, 
  age, music,
} 
= student // with destructuring
//destructuring from an object inside an object
//we get the values, not the whole object
const {address: {street, number}} = student



/* console.log(firstName)
console.log(age)
console.log(music)
console.log(street)
console.log(number) */

const pokemon = {
  name: 'Skarmory',
  types: {
    main: 'Steel',
    secondary: 'Flying',
  },
  generation: 2,
  isCatchable: true,
};

// Skarmory is from generation 2 and is of Steel type
//name, main type, generation


const {name: pokemonName, types: {main}, generation} = pokemon

//console.log(pokemonName, main, generation)


const campuses = ["Lisbon", "Madrid", "Berlin", "Miami"]

//const [first, second, third] = campuses
//skipping entries
//const [, second, third] = campuses
//default values are only applied if the array doesn't contain that element
const [first,second , third, fourth = "Paris"] = campuses



/*
we used array destructuring in react
const [theme, setTheme] = useState("light") */

//console.log(first, second, third)
//console.log( first, third, fourth)
//console.log(campuses)

const pokedex = [
  ["Pikachu", "Bulbasaur"],
  ["Charmander", "Squirtle"],
  ["Geodude", "Metapod"]
]

//console.log(pokedex[1][0])

//const [[firstPokemon], [secondPokemon]] = pokedex

const [,,[, fourthPokemon]] = pokedex


//console.log(firstPokemon, secondPokemon)
//console.log(fourthPokemon)

const [a, b = 2, c, d = 1] = [3, 4]

//console.log(a, b, c, d)

//3, 4, undefined, 1
//3, 2, undefined, 1
//3, 2, 4, 1


//Spread operator

const reptiles = ["lizard", "crocodile", "gecko"]

const fish = ["sardine", "mackerel", "cod"]

//copying with slice
const reptilesCopy = reptiles.slice()

// copying with spread

const fishCopy = [...fish]

// joining arrays with concat
//const animals = reptiles.concat(fish)

//joining with spread

const animals = [...reptiles, ...fish, "rat"]


console.log(animals)

// rest operator

function sum(...numbers){
  return numbers.reduce((acc, val) => acc + val)
}

sum(1)
console.log(sum(1, 2, 3, 4, 5))

function printMovie(title, year, ...actors){
  console.log(`${title} was released in ${year} and features ${actors.join(', ')} `)

}

printMovie("Titanic", 1999, 2000, "Leo Dicaprio", "Kate Winslet", "Morgan Freeman")
