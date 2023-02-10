export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor ='poor'
}

//Enum => enumarar diferentes valores\propiedades que puede tener una estructura. 
//Cada key tiene un valor en concreto
export enum Weather{
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

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

export type newDiaryEntry = Omit<DiaryEntry, 'id'>