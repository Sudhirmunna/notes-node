const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } 
    catch(e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicatesNotes = notes.filter( (note) => note.title === title );
    if(duplicatesNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
let getAll = () => {
    return fetchNotes();
};
let getNote = (title) => {
    let notes = fetchNotes();
    var filteredNote = notes.filter( (note) => note.title === title);

    return filteredNote[0];
};
let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter( (note) => note.title !== title );
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};
let logNote = (note) => {
    console.log(`note : ${note.title}`);
    console.log(`body : ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};