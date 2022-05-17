/*eslint node/no-missing-import: "error" */
import CardTag from "./CardTag"

export default {
    buttonTag: "Libros",
    component: CardTag
}

export const CardTagExample= () => <CardTag buttonTag="Libros"/>