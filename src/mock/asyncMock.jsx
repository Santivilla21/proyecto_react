export const data = [

    {

        name: 'Presurizador Fucsia',
        description: ' mantiene la presion de las pelotas , para extender la duracion de uso , tapa cpn tornillos',
        price: 24000,
        stock: 20,
        category: 'presurizadores',
        img: '../presurizador_fucsia.jpeg'
    },
    {

        name: 'Inflador',
        description: 'Inflador pico de auto',
        price: 6000,
        stock: 12,
        category: 'infladores',
        img: '../inflador.jpeg'
    },
    {

        name: 'Pelotas Wilson',
        description: 'tuvo de 3 pelotas wilson',
        price: 12000,
        stock: 15,
        category: 'pelotas',
        img: '../pelotas_wilson.jpeg'
    },
    {

        name: 'Pelotas Head',
        description: 'tuvo de 3 pelotas Head',
        price: 11000,
        stock: 15,
        category: 'pelotas',
        img: '../pelotas_head.jpeg'
    },
    {

        name: 'Presurizador Generacion 2',
        description: ' mantiene la presion de las pelotas , para extender la duracion de uso ,tapa cierre facil',
        price: 30000,
        stock: 30,
        category: 'presurizadores',
        img: '../presurizador_gen_dos.jpeg'
    },
]



export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(data)
            } else {
                reject('Hubo un error, intente mas tarde')
            }
        }, 2000)
    })
}



export const getItem = (id) => {

    return new Promise((resolve) => {
        setTimeout(() => {

            let product = data.find((item) => item.id === id)
            resolve(product)
        }, 2000)
    })
}