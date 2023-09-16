type Block = {
    id: string
    width: number
    height: number
    x: number
    y: number
}

type Presentation = {
    name: string
    slides: Slide[]
}

type Slide = {
    background: Image | string
    text: Char[]
    shapes: Shape[]
}

type Char = Block & {
    fontFamily: string
    fontSize: number
    color: string
    backgroundColor: string
    bold: boolean
    italic: boolean
}

enum ShapeType {
    Circle,
    Square,
    Triangle
}

type Shape = Block & {
    backgroundColor: string
    borderColor?: string
    type: ShapeType
}

type Image = Block & {
    path: string
}

type Workspace = {
    background: Image | string
}

export {
    Workspace,
    Image,
    Slide,
    Shape,
    Char,
    Presentation,
    Block,
    ShapeType
}
