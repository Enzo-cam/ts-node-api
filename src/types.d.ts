export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

//La interfaz esta pensada para ser extendida, en sentido de que se le pueden agregar
//mas propiedas sumadas a las que ya tiene.
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

//Cualquiera de las dos es valida
//export type NoCommentsEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NoCommentsEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Ommit<DiaryEntry, 'id'>