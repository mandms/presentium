type Item = {
  id: string
  width: number
  height: number
  x: number
  y: number
}

type Text = Item & {
  fontFamily: string
  fonSize: number
  color: string
  backgroundColor?: string
  bold: boolean
  italic: boolean
}

type Image = Item & {
  path: string
}

enum ShapeType {
  Triangle,
  Circle,
  Square,
}

type Shape = Item & {
  backgroundColor: string
  borderColor: string
  type: ShapeType
}

type Slide = {
  slideNumber: number
  background: Image | string
  items: Item[]
}

type Presentation = {
  name: string
  slides: Slide[]
}

type Export = {
  presentation: Presentation
}

type Action = {
  presentationCopy: Presentation
}

type History = {
  presentation: Presentation
  actions: Action[]
}

export {
  Item,
  Text,
  Image,
  ShapeType,
  Shape,
  Slide,
  Export,
  Action,
  History,
  Presentation,
}
