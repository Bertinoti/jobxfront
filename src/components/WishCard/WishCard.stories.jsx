import WishCard from "./WishCard"


export default {
    title: "Wishcard",
    component: WishCard
}

export const WishCardExample = () => {
    < WishCard
        title="Family"
        description="Card description"
        tagbutton="Libros"
    />
}