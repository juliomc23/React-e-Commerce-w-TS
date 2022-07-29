export const fetchProducts = async () =>{
    const req = await fetch('http://localhost:3004/hombre')
    const res = await req.json();

    return res
}