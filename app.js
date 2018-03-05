const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

// let user = os.userInfo();
// fs.appendFileSync('greetings.txt',`Hello ${user.username} ! you are ${notes.age}`);

// let filterArray = _.uniq([1,2,3,1,2,4,5,3,2]);
// console.log(filterArray);

let argv = yargs.argv;
let command = argv._[0];
// process.argv
if(command === 'add') {
    let note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log('Note Created');
        notes.logNote(note);                
    } else {
        console.log('Note title taken');
    }
} else if( command === 'list') {
    let allNotes = notes.getAll();
    console.log('Print all notes');
    allNotes.forEach( (note) => {
        notes.logNote(note);
    });
} else if( command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        console.log('Reading note');
        notes.logNote(note);
    } else {
        consolee.log('Note not found');
    }
} else if( command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note is Removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not recognized');
}
