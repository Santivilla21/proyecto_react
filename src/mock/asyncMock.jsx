const data = [
    {
        id:'01',
        name:'Presurizador Plateado',
        description:'mantiene la presion de las pelotas , para extender la duracion de uso',
        price:24000,
        stock:20,
        category:'presurizadores',
        img:'../presurizador_plateado.jpeg'
    },
    {
        id:'02',
        name:'Presurizador Fucsia',
        description:' mantiene la presion de las pelotas , para extender la duracion de uso..',
        price:24000,
        stock:20,
        category:'presurizadores',
        img:'../presurizador_fucsia.jpeg'
    },
    {
        id:'03',
        name:'Inflador',
        description:'Inflador pico de auto',
        price:6000,
        stock:12,
        category:'infladores',
        img:'../inflador.jpeg'
    },
    {
        id:'04',
        name:'Pelotas Wilson',
        description:'tuvo de 3 pelotas wilson',
        price:12000,
        stock:15,
        category:'pelotas',
        img:'../pelotas_wilson.jpeg'
    },
    
]



export const getProducts= ()=> {
    let error= false
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(!error){
                resolve(data)
            }else{
                reject('Hubo un error, intente mas tarde')
            }
        },3000)
    })
}



export const getItem =(id)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
           
            let product = data.find((item)=> item.id === id)
            resolve(product)
        },2000)
    })
}