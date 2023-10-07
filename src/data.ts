import {
  Action,
  Export,
  History,
  Image,
  Item,
  Presentation,
  Shape,
  ShapeType,
  Slide,
  Text,
} from './types'

const shape: Shape = {
  Change() {
    return undefined
  },
  Copy() {
    return undefined
  },
  Delete() {
    return undefined
  },
  Paste() {
    return undefined
  },
  backgroundColor: '#000',
  borderColor: '#000',
  height: 0,
  id: '2',
  type: ShapeType.Circle,
  width: 0,
  x: 0,
  y: 0,
}

const img: Image = {
  Change() {
    return undefined
  },
  Copy() {
    return undefined
  },
  Delete() {
    return undefined
  },
  Paste() {
    return undefined
  },
  height: 0,
  id: '1',
  path: '/sasd/asd.jpg',
  width: 0,
  x: 0,
  y: 0,
}

const text: Text = {
  Change(): Item {
    return undefined
  },
  Copy(): void {},
  Delete(): void {},
  Paste(): Item {
    return undefined
  },
  backgroundColor: '#000',
  bold: false,
  color: '#fff',
  fonSize: 0,
  fontFamily: 'sans-serif',
  height: 0,
  id: '1',
  italic: false,
  width: 0,
  x: 0,
  y: 0,
}

const slide: Slide = {
  background: '#fff',
  items: [text, shape, img],
  slideNumber: 1,
  ChangeBackground() {},
  CreateItem(): Item {
    return undefined
  },
}

const presentation: Presentation = {
  name: '',
  slides: [slide],
  Create() {},
  CreateSlide(): Slide {
    return undefined
  },
  DeleteSlide(id: number): void {},
  GetCurrentSlide(id: number): Slide {
    return undefined
  },
  Open() {},
  Preview() {},
  Rename() {},
}

const action: Action = {
  actionNumber: 1,
  presentationCopy: presentation,
}

const history: History = {
  presentation: presentation,
  actions: [action],
  CreateAction(): Action {
    return undefined
  },
  NextAction(): Presentation {
    return undefined
  },
  PrevAction(): Presentation {
    return undefined
  },
}

const exportPresentation: Export = {
  presentation: presentation,
  toPDF() {},
}
