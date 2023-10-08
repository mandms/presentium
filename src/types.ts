type Item = {
  id: string
  size: Size
  location: Location
}

type Location = {
  x: number
  y: number
}

type Size = {
  width: number
  height: number
}

type Char = {
  id: number
  fontFamily: string
  fonSize: number
  color: string
  backgroundColor?: string
  bold: boolean
  italic: boolean
  char: string
}

type Text = Item & {
  text: Char[]
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
  id: number
  background: Image | string
  items: Item[]
}

type Presentation = {
  name: string
  slides: Slide[]
}

type Action = {
  presentationCopy: Presentation
}

type History = {
  actions: Action[]
  actionNumber: number
}

type Editor = {
  history: History
  presentation: Presentation
}

export {
  Item,
  Text,
  Image,
  ShapeType,
  Shape,
  Slide,
  Action,
  History,
  Presentation,
  Char,
  Editor
};
