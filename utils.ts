import { newDiaryEntry } from "./src/types";

const isString = (comentario : string) : boolean =>{
    return typeof comentario === 'string'
}

const parseComment = (comment : any) : string =>{
    if(!isString(comment)){
        throw new Error('The comment isn\'t a string')
    }

    return comment
}
export default function toNewEntry(entry : any) : newDiaryEntry{
    const newEntry : newDiaryEntry = {
        comment: parseComment(entry.comment)
    }

    return newEntry;
}