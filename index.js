const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const farmAnimalsArray = farmAnimals.split(' ')
console.log(farmAnimalsArray);
const [moo,neigh, baa, oink, cluck ] = farmAnimalsArray;
console.log(oink);

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

farmAnimalsArray.splice(1,1)
console.log(farmAnimalsArray)

const [bessie, dolly, babe, little] = farmAnimalsArray;
console.log(babe);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

farmAnimalsArray.pop()
console.log(farmAnimalsArray)

const [blackAndWhite, black, pink] = farmAnimalsArray;
console.log(blackAndWhite);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(blue)

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const removed = colors.splice(5,1);
console.log(colors)
const [r, o, y, g, b, v] = colors;
console.log(v)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

const indg = removed[0];
console.log(indg)

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

const {muppetName, song, color, job, partner} = muppet;

console.log(muppetName);


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const {album :{theMuppetMovie :{song2,song4}}, nestedJob, nestedPartner} = nestedMuppet;

console.log(song4);
console.log(nestedJob)