import {Presentation, ShapeType, Char, Workspace, Shape, Image} from "./types";

const shape: Shape = {
    backgroundColor: "#fff",
    type: ShapeType.Circle,
    width: 200,
    height: 300,
    id: "2"
}

const img: Image = {
    id: "3",
    path: "http://",
    width: 200,
    height: 300
}

const text: Char[] = [{
    id: "4",
    height: 10,
    width: 200,
    color: "#000",
    backgroundColor: "#fff",
    bold: false,
    fontFamily: "sans-serif",
    fontSize: 30,
    italic: false
}]

const presentation: Presentation = {
    name: "",
    slides: [
        {
            background: img,
            shapes: [
                shape,
            ],
            text
        }
    ]
}

const workspace: Workspace = {
    background: "#fff"
}
