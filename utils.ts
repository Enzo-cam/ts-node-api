import { newDiaryEntry, Weather, Visibility } from "./src/types";
//Funciones para chequear los datos recibidos
const isString = (comentario : string) : boolean =>{
    return typeof comentario === 'string'
}

const isDate = (fecha : string) : boolean =>{
    return Boolean(Date.parse(fecha))
}

const isWeather = (clima : any) : boolean =>{
    return Object.values(Weather).includes(clima)
}
const isVisib = (visbilidad : any) : boolean =>{
    return Object.values(Visibility).includes(visbilidad)
}

//Convirtiendo la data recibida a lo que precisamos.
const parseComment = (comment : any) : string =>{
    if(!isString(comment)){
        throw new Error('The comment isn\'t a string')
    }
    return comment
}

const parseDate = (dateReq : any) : string =>{
    if(!isString(dateReq) || !isDate(dateReq)){
        throw new Error('Incorrect date.')
    }
    return dateReq;
}

const parseWeather =(weatherReq : any) : Weather =>{
    if(!isWeather(weatherReq) || !isString(weatherReq)){
        throw new Error('Weather is not what expect')
    }
    return weatherReq
}
const parseVisib =(visibilityReq : any) : Visibility =>{
    if(!isVisib(visibilityReq) || !isString(visibilityReq)){
        throw new Error('Visibility is not what expect')
    }
    return visibilityReq
}

//Validando y parseando todos los datos en RUNTIME.
//Asegurandonos que el usuario no va a ingresar data no esperada.
export default function toNewEntry(entry : any) : newDiaryEntry{
    const newEntry : newDiaryEntry = {
        comment: parseComment(entry.comment),
        date: parseDate(entry.date),
        weather: parseWeather(entry.weather),
        visibility: parseVisib(entry.visibility)
    }
    return newEntry;
}