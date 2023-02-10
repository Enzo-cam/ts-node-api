import diaryData from './diaries.json'
import { DiaryEntry, newDiaryEntry, NoCommentsEntry } from '../types'

//Aclaramos que el JSON lo debe tratar como el tipo que le pasamos.
const diaries: DiaryEntry[] = diaryData as DiaryEntry[] 

export const getEntries = () : DiaryEntry[] => diaries

export const findById = (id:number) : NoCommentsEntry | undefined =>{
    const entry = diaries.find(diary => diary.id === id)
    return entry
}

export const getEntriesWithoutComments = () : NoCommentsEntry[] => {
    return diaries.map(({id, date, weather, visibility}) =>{
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}


//El nuevo diary retorna un objeto de tipo NDE q termina siendo DiaryEntry debido a que se le suma la ID.
export const addDiary = (newDiaryEntry : newDiaryEntry) : DiaryEntry => {
    const newDiary = {
        id: diaries.length + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}