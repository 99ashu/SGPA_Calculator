var enterBtnVar = document.getElementById("enterBtn");
var calBtnVar = document.getElementById("calBtn");
var reBtnVar = document.getElementById("reBtn");
var parentDivVar = document.getElementById("parentDiv");

calBtnVar.classList.add("btnSwitch");
reBtnVar.classList.add("btnSwitch");

var totalSubVar = 0;
var subjects = [];
var points = [];
var credits = [];
var sumOne = 0;
var sumTwo = 0;

function addSubjects() 
{
    totalSubVar = parseInt(document.getElementById("inputText").value);

    if (totalSubVar > 0)
    {
        calBtnVar.classList.toggle("btnSwitch");
        reBtnVar.classList.toggle("btnSwitch");
    }

    if (isNaN(totalSubVar))
    {
        return;
    }

    for (var i = 0; i < totalSubVar; ++i) 
    {
        subjects[i] = document.createElement("div");
        subjects[i].appendChild(document.createTextNode(`Subject ${i+1}:`));
        parentDivVar.appendChild(subjects[i]);
        subjects[i].classList.add("subjectsClass")

        points[i] = document.createElement("input");
        parentDivVar.appendChild(points[i]);
        points[i].classList.add("textboxClass");
        points[i].placeholder = `Subject ${i+1} Points (5-10)`;
        points[i].type = "number";

        credits[i] = document.createElement("input");
        parentDivVar.appendChild(credits[i]);
        credits[i].classList.add("textboxClass");
        credits[i].classList.add("creditsClass");
        credits[i].placeholder = `Subject ${i+1} Credits`;
        credits[i].type = "number";
    }

    enterBtnVar.setAttribute("disabled","disabled");
}

function calculate()
{
    for (var i = 0; i < totalSubVar; ++i)
    {
        sumOne += parseInt(points[i].value) * parseInt(credits[i].value);
        sumTwo += parseInt(credits[i].value);
    }

    if(isNaN(sumOne/sumTwo))
    {
        alert("Please fill all the cells!");
        window.location.reload();
        return;
    }
    
    alert(`Your SGPA is: ${Math.round(sumOne/sumTwo * 100) / 100}`); 
    window.location.reload();
}

function refresh()
{
    window.location.reload();
}

enterBtnVar.addEventListener("click", addSubjects);
calBtnVar.addEventListener("click", calculate);
reBtnVar.addEventListener("click", refresh);
