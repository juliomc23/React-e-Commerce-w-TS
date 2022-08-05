export interface products {
    id: number
    img: {
        front: string
        up: string
        down: string
        aside: string
    }
    title: string
    price: number
    type: string
    available_colors: number
    sizes: Array<number>
}