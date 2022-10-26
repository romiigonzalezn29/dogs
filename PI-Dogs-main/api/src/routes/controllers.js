
const axios = require('axios')

const {Dog, Temperament} = require("../db.js")

const dogsInApi = async() => {
    const getApi = await axios.get('https://api.thedogapi.com/v1/breeds');
    const info = await getApi.data.map( dog => {
        return {
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament,
            

        }
    })
return info

}

const dogsInDb = async() => {
    const getDb = await Dog.findAll({
            include:{
                model: Temperament,
                atributes:['name'],
                through: {
                    atributes: [],
                }
            }
        })
        return getDb
    }


const getAllDogs = async() => {
const apiDogs = await dogsInApi();
const dBDogs = await dogsInDb();
const allDogs = apiDogs.concat(dBDogs)

return allDogs;
}




const allDoggi = async (req,res) => {
    const { name } = req.query;
    let doggi = await getAllDogs();
    if (name) {
        let doggiName = doggi.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        doggi ?
        res.status(200).send(doggiName) :
        res.status(400).send('No se encuentra el personaje')
    }
    else {
        res.status(200).send(doggi)
    }
}

const searchById = async(req,res) => {
    const { id } = req.params;
    console.log(id, 'id')
    if(Number(id) === NaN) {
        const dbId = await Dog.findByPk(id);
        res.status(200).send(dbId);

    } else {
        const dogsApi = await getAllDogs()
        const idInApi = dogsApi.find(e => e.id == id )
        res.status(200).send(idInApi)
    }
 
}



const getAllTemperaments = async(req, res) => { 
    const temperamentsInApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_WpzGlHVy9SHVn6LyK0g6wzje20WOPxOfWjGGxZgZGDagUtV7lY70gpUx4W7bpmoT');
    const temperaments = temperamentsInApi.data.map(t => t.temperament)
    
    const joinTemperaments = temperaments.join(', ')
    const splitTemperaments = joinTemperaments.split(', ')
    const mapTemperaments = splitTemperaments.map(t => {
     
       
        return t
        
    }) 
    
    mapTemperaments.forEach(t => {
     Temperament.findOrCreate({
         where: {name: t}
     })
    })
    const sendTemperaments = await Temperament.findAll()
     res.send(sendTemperaments)
    
     };

     
     const postDogs = async (req, res) =>  {
        let {
    
            name,
            height,
            weight,
            life_span,
            temperament,
            image,
           
    
       } = req.body
    
    
       let dogCreated = await Dog.create ({
        name,
        height,
        weight,
        life_span,
       
        image,
       })
       console.log("name" ,dogCreated.name)
    
       let findTemperaments = await Temperament.findAll ({
           where: {name : temperament}
       })
       dogCreated.addTemperament(findTemperaments)
    
       res.send('perro creado con exito')
    }
    

module.exports = {getAllTemperaments, searchById, postDogs, allDoggi }