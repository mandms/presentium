import { Action, Char, Editor, History, Image, Presentation, Shape, ShapeType, Slide, Text } from "./types";


const shapeCircle: Shape = {
  backgroundColor: "#fff",
  borderColor: "#000",
  id: "1",
  location: {
    x: 450,
    y: 500
  },
  size: {
    width: 30,
    height: 40
  },
  type: ShapeType.Circle
};

const shapeTriangle: Shape = {
  backgroundColor: "#fff",
  borderColor: "#000",
  id: "2",
  location: {
    x: 480,
    y: 500
  },
  size: {
    width: 30,
    height: 40
  },
  type: ShapeType.Triangle
};

const shapeSquare: Shape = {
  backgroundColor: "#fff",
  borderColor: "#000",
  id: "3",
  location: {
    x: 510,
    y: 500
  },
  size: {
    width: 30,
    height: 40
  },
  type: ShapeType.Square
};

const img: Image = {
  id: "2",
  location: undefined,
  path: "http://...",
  size: {
    width: 20,
    height: 20
  }
};

const charA: Char = {
  id: 1,
  bold: false,
  char: "A",
  color: "#000",
  fonSize: 0,
  fontFamily: "sans-serif",
  italic: false
};

const charB: Char = {
  id: 2,
  bold: false,
  char: "B",
  color: "#000",
  fonSize: 0,
  fontFamily: "sans-serif",
  italic: false
};

const text: Text = {
  id: "2",
  text: [charA, charB],
  location: {
    x: 200,
    y: 500
  },
  size: {
    width: 400,
    height: 500
  }
};

const slide: Slide = {
  background: "#fff",
  id: 0,
  items: [
    text,
    img,
    shapeCircle,
    shapeSquare,
    shapeTriangle
  ]
};

const presentation: Presentation = {
  name: "",
  slides: [
    slide
  ]
};

const action: Action = {
  presentationCopy: presentation
};

const history: History = {
  actionNumber: 0,
  actions: [
    action
  ]
};

const editor: Editor = {
  history: history,
  presentation: presentation
};
