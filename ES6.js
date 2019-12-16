/* class comon{
    constructor (name,bildDate)
    {
        this.name=name;
        this.bildDate=bildDate;
    }
     calculateAge() {
        return new Date().getFullYear()-this.bildDate;
    
        
    }

}
/* let com=new comon('green Park',1990);
console.log(com.calculateAge()); */
    /*
class park extends comon {
    constructor (name,bildDate,numOfTrees,area){
        super(name,bildDate);
        this.numOfTrees=numOfTrees;
        this.area=area;
    }
    static avgAge(parks){
        var sum=0;//debugger;

        console.log(parks.size);
        console.log(parks)
/*         for (var i=0;i<parks.size;i++){
            console.log(parks.get(i).numOfTrees);
              sum+=parks.get(i).numOfTrees;
          } */
/*         parks.forEach((value,key) => {
            sum+=value.numOfTrees;
        });   */
        /*
            
        parks.forEach(value => {
            //debugger;
            sum+=value.calculateAge();
        });  
          return sum/parks.size;
   
    }

    treeDensity(){
        return this.numOfTrees/this.area;
    }


    static findBigest(parks){
        var arr=[]
        parks.forEach(value => {
            //debugger;
            if(value.numOfTrees>1000)
                 arr.push(value.name);

        });  
        return arr;
    }

}
//debugger;
let parks=new Map();
parks.set(0,new park('Green Park',1990,1300,7000));
parks.set(1,new park('Red Park',1670,700,60000));
parks.set(2,new park('Pink Park',1984,200,60000));
console.log(parks);
//debugger;
console.log(park.avgAge(parks));
console.log(parks.get(0).treeDensity())

console.log(park.findBigest(parks));













class street extends comon{
    constructor(name,bildDate,length){
        super(name,bildDate);
        this.length=length;
    }
    static totalLength(streets){
            let total=0;
            streets.forEach(value=>
              total+=value.length);
            return total;    
    }
    static avgLength(streets){
        return this.totalLength(streets)/streets.size;
    }

}
let streets=new Map();
streets.set(0,new street('mazza',1500,2500));
streets.set(1,new street('hamra',1760,2000));
streets.set(2,new street('shalan',1860,1500));
streets.set(3,new street('taballe',1760,3000));
console.log(streets);

console.log(street.totalLength(streets));
console.log(street.avgLength(streets)); */










/* 
var image = document.images[0];
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "http://an.image/to/aynchrounously/download.jpg"; */




function ImageProcessing(Image,cb){
    console.log(`hallo from inside`);
}

function callback(){console.log(`hallo from image`);}
function first (){
    
    console.log(`HAllo `);
    ImageProcessing(Image,callback());
    console.log(`hallo again`);
}

first();