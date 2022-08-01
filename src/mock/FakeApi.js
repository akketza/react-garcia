    
    const productos = [
        {id:'01',
        name:'GO:OD AM',
        description:"Mac Miller", price:'125', img:'https://m.media-amazon.com/images/I/610MeYrXiHL._SX522_.jpg',},
        {id:'02', name:'BOCANADA', description:"Bocanada es el segundo álbum de estudio solista del músico argentino Gustavo Cerati, el primero luego de la disolución del grupo Soda Stereo. Recibió excelentes críticas, tanto de los especialistas como de los fanáticos. Fue certificado como disco de platino por vender más de 60 mil copias en los primeros meses.", price:'125', img:'https://e.snmc.io/i/1200/s/0d8d7aea7911763109e57b9d4453c4d8/7390035',},
        {id:'03', name:'MUCHO', description:"Mucho es el noveno álbum de estudio del grupo argentino Babasónicos. Este es el último disco en el que participó el bajista Gabriel Mannelli, quién falleció víctima a causa de enfermedad de Hodgkin, contra la cual luchaba hace tiempo.", price:'125', img:'https://i.discogs.com/N6KNG0iun6bGhZN1yxg5v2tLUHTJc0vTy0R5No1dAz4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTI3/MTk3LTE1NTM3MzMz/MjAtMjU0OS5qcGVn.jpeg',},
        {id:'04', name:'JESSICO', description:"Babasonicos", price:'125', img:'https://http2.mlstatic.com/D_NQ_NP_848643-MLA49493217434_032022-W.jpg',},
        {id:'05', name:'CALIFORNICATION', description:"Red Hot Chili Peppers", price:'125', img:'https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595',},
        {id:'06', name:'AN EVENING WITH SILK SONIC', description:"Silk Sonic", price:'125', img:'https://http2.mlstatic.com/D_NQ_NP_852645-MLA48503463381_122021-O.jpg',},
        ]

        export const data = new Promise((resolve, reject) =>{
            let condition = true
            setTimeout(()=> {
               if(condition){
                resolve(productos)
               }else(
                reject('malio sal no hay asado')
               )
                
            },2500)
        
        })