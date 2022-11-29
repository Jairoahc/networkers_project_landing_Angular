export class User {

//Atributos y sus tipos
name: string
lastName: string
email: string
password: string
age: number 
city: string
country: string
occupation: string
confirmPassword: string

//Constructor para instanciar los atributos cuando tengan valor
constructor (name = "", lastName = "", email ="", password = "", age = 0 , city ="", country = "", occupation = "", confirmPassword = "",) {
    this.name = name
    this.lastName = lastName
    this.email = email
    this.password = password
    this.age = age
    this.city = city
    this.country = country
    this.occupation = occupation
    this.confirmPassword = confirmPassword


}


}