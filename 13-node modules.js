//npm - global command comes with node
//npm --version

// local dependency -use it in only this particular project project
//npm i <packageName>

// global dependencies - use it in any projects
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

const loadash=require('lodash')

const items=[1,[2,[3,[4,[5]]]]]

const newItems=loadash.flattenDeep(items)

console.log(newItems)

