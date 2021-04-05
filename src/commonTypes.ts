export type Pedal = {
  Brand: string
  Height: number
  Image: string
  Name: string
  Width: number
}

export type BoardDocument = {
  NO_ID_FIELD?: string
  name?: string
  pedals?: Pedal[]
}
