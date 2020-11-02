// We have an array and we want it to only have the tasks name. 

// - Use .forEach() to get this array.
// - Use .map() to get this array.

let tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];

tasks.forEach(object => console.log(object.name));
tasks.map(object => console.log(object.name));