export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

//La interfaz esta pensada para ser extendida, en sentido de que se le pueden agregar
//mas propiedas sumadas a las que ya tiene
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibily: Visibility,
    comment: string
}