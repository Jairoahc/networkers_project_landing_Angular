export class Services {

    //Atributos y sus tipos
    title: string
    price: string
    description: string
    image: string
    keywords: string //como cambiar de string a number y que funcione en el constructor al instanciar
    phoneNumber: number
    
    //Constructor para instanciar los atributos cuando tengan valor
    constructor (title = "", price = "", description ="", image = "", keywords = "" , phoneNumber =0,) {
        this.title = title
        this.price = price
        this.description = description
        this.image = image
        this.keywords = keywords
        this.phoneNumber = phoneNumber
    
    
    }
    
    
    }
