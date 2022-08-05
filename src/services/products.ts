export const fetchProducts = async () =>{
    const req = await fetch('http://localhost:3004/hombre')
    const res = await req.json();

    return res
}

export const fetchProductID = async(id:number) =>{
    const req = await fetch(`http://localhost:3004/hombre/${id}`)
    const res = await req.json();

    return res
}