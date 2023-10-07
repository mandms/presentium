type Item = {
  id: string
  width: number
  height: number
  x: number
  y: number
  Copy(): void
  Paste(): Item
  Change(): Item
  Delete(): void
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
  CreateItem(): Item
  ChangeBackground()
}

type Presentation = {
  name: string
  slides: Slide[]
  Create()
  Rename()
  Open()
  CreateSlide(): Slide
  Preview()
  GetCurrentSlide(id: number): Slide
  DeleteSlide(id: number): void
}

type Export = {
  presentation: Presentation
  toPDF()
}

type Action = {
  presentationCopy: Presentation
  actionNumber: number
}

type History = {
  presentation: Presentation
  actions: Action[]
  PrevAction(): Presentation
  NextAction(): Presentation
  CreateAction(): Action
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
