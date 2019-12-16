/* var PersonalInfo=function(name,lname,age){
    this.name=name;
    this.lname=lname;
    this.age=age
}
var EducationInfo=function(leve,field,institue){
    this.leve=leve;
    this.field=field;
    this.institue=institue
}
var WorkExp=function(companyName,startTime,endTime,jobTitle){
    this.companyName=companyName;
    this.startTime=startTime;
    this.endTime=endTime;
    this.jobTitle=jobTitle
}

var per=new PersonalInfo('lava','mahmoud',30);
var edu=new EducationInfo('master','artificial','damascus');
var work=new WorkExp('Mercy Corps','2018/8/19','2018/10/1','field Monitor');
var obj={...per}+{...edu}+{...work};
/* var obj={
    ...PersonalInfo,
    ...EducationInfo,
    ...WorkExp
} */
//console.log(obj); 


var canDrive=0;
function check(age){
    return canDrive=age>=18?true:false;
}
var checked=check(22);
console.log(checked)