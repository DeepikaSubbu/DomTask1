let tag=document.createElement('form')
tag.setAttribute('id', 'form')
document.body.appendChild(tag)
var br=document.createElement('br')
let h1=document.createElement('h1')
h1.setAttribute('id', 'title')
h1.innerText="Form"
document.body.appendChild(tag).appendChild(h1)

let des=document.createElement('p')
des.setAttribute('id', 'description')
des.innerText="Description"
document.body.appendChild(tag).appendChild(des)



let FN = document.createElement("label");
let b = document.createElement("br");
FN.innerText="FirstName  ";
let FN1 =document.createElement("input")
FN1.setAttribute("id", "first-name");
FN1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(FN);
document.body.appendChild(tag).appendChild(FN1);
document.body.appendChild(tag).appendChild(b);
let e=document.createElement("br")
document.body.appendChild(tag).appendChild(e)

let LN = document.createElement("label");
let c = document.createElement("br");
LN.innerText="LastName  ";
let LN1 =document.createElement("input")
LN1.setAttribute("id", "last-name");
LN1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(LN);
document.body.appendChild(tag).appendChild(LN1);
document.body.appendChild(tag).appendChild(c);
let f=document.createElement("br")
document.body.appendChild(tag).appendChild(f)


let Gen = document.createElement("label");
let G1 = document.createElement("br");
Gen.innerText="Gender  ";
let Gen1 =document.createElement("input")
Gen1.setAttribute("id", "gender");
Gen1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(Gen);
document.body.appendChild(tag).appendChild(Gen1);
document.body.appendChild(tag).appendChild(G1);
let G2=document.createElement("br")
document.body.appendChild(tag).appendChild(G2)






let AD = document.createElement("label");
let d = document.createElement("br");
AD.innerText="Address  ";
let AD1 =document.createElement("input")
AD1.setAttribute("id", "address");
AD1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(AD);
document.body.appendChild(tag).appendChild(AD1);
document.body.appendChild(tag).appendChild(d);
let g=document.createElement("br");
document.body.appendChild(tag).appendChild(g);

let pc = document.createElement("label");
let b1 = document.createElement("br");
pc.innerText="Pincode  ";
let pc1 =document.createElement("input")
pc1.setAttribute("id", "pincode");
pc1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(pc);
document.body.appendChild(tag).appendChild(pc1);
document.body.appendChild(tag).appendChild(b1);
let b2=document.createElement("br")
document.body.appendChild(tag).appendChild(b2);

let st = document.createElement("label");
let b3 = document.createElement("br");
st.innerText="State  ";
let st1 =document.createElement("input")
st1.setAttribute("id", "state");
st1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(st);
document.body.appendChild(tag).appendChild(st1);
document.body.appendChild(tag).appendChild(b3);
let b4=document.createElement("br")
document.body.appendChild(tag).appendChild(b4);



let con = document.createElement("label");
let b5 = document.createElement("br");
con.innerText="Country  ";
let con1 =document.createElement("input")
con1.setAttribute("id", "country");
con1.setAttribute("type", "text");
document.body.appendChild(tag).appendChild(con);
document.body.appendChild(tag).appendChild(con1);
document.body.appendChild(tag).appendChild(b5);
let b6=document.createElement("br");
document.body.appendChild(tag).appendChild(b6);

let choice=document.createElement("label");
choice.innerText="Choice of Food  ";
document.body.appendChild(tag).appendChild(choice);
let select=document.createElement("select");
select.setAttribute("id", "food");
select.setAttribute("onchange", "myfunction()");
document.body.appendChild(form).appendChild(select)
let opts=document.createElement("option");
opts.innerText="select";
document.body.appendChild(form).appendChild(select).appendChild(opts);
let opt=document.createElement("option");
opt.innerText="Biriyani";
document.body.appendChild(form).appendChild(select).appendChild(opt);
let opt1=document.createElement("option");
opt1.innerText="ChickenFriedRice";
document.body.appendChild(form).appendChild(select).appendChild(opt1);
let opt2=document.createElement("option");
opt2.innerText="ChickenNoodles";
document.body.appendChild(form).appendChild(select).appendChild(opt2);
let opt3=document.createElement("option");
opt3.innerText="Poori";
document.body.appendChild(form).appendChild(select).appendChild(opt3);
let opt4=document.createElement("option");
opt4.innerText="Parrotta";
document.body.appendChild(form).appendChild(select).appendChild(opt4);





let b10=document.createElement("br")
document.body.appendChild(form).appendChild(b10);

let button = document.createElement("button");
button.setAttribute("id","submit");
button.innerText="SUBMIT";
document.body.appendChild(button)
button.addEventListener("click",check);


let b7=document.createElement("br");
document.body.appendChild(b7);
let b8=document.createElement("br");
document.body.appendChild(b8);

let button1 = document.createElement("button");
button1.setAttribute("id","clearform");
button1.setAttribute("type","reset");
button1.setAttribute("value","reset");
button1.innerText="Clear";
document.body.append(button1);
button1.addEventListener("click",clear);

function clear(){
    document.getElementById("first-name").value='';
    document.getElementById("last-name").value='';
    document.getElementById("gender").value='';
    document.getElementById("address").value='';
    document.getElementById("pincode").value='';
    document.getElementById("state").value='';
    document.getElementById("country").value='';
    document.getElementById("food").value='';


}



function check()
{
    debugger
    var tb1=document.getElementById("Datatable");
    var row=tb1.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();

   

    cell1.innerText=document.getElementById("first-name").value;
    cell2.innerText=document.getElementById("last-name").value;
    cell3.innerText=document.getElementById("gender").value;
    cell4.innerText=document.getElementById("address").value;
    cell5.innerText=document.getElementById("pincode").value;
    cell6.innerText=document.getElementById("state").value;
    cell7.innerText=document.getElementById("country").value;
    cell8.innerText=document.getElementById("food").value;
   
   



}

// function myfunction(){
//     var x=document.getElementById("food");
//     var y=x.selectedIndex;
//     document.getElementById("demo").innerHTML=x.options[y].text;
// }
function myfunction() {
    var x = document.getElementById("food").value;
   console.log(x);
}