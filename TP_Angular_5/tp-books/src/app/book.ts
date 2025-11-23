export class Book {
    //on peut ajouter ! pour ne pas initialiser les valeurs des champs
    id:number=0;
    title:String="";
    author:String="";
    publisherEmail:String="";
    publisherPhone:String="";
    releaseDate!:Date;
    category:String="";
    isAvailable:boolean=false;
    stock?:number=0;







}
