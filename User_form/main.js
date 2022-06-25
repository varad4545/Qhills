const name=document.querySelector("#name")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const form=document.querySelector("#form1")

var table=document.querySelector(".table")
form.addEventListener('submit',onSubmit)

function onSubmit(e)
{
    if(name.value!="" && email.value!="" && password!="")
    {
        console.log("fu3hfp3")
        e.preventDefault()
        var row=document.createElement('tr')
        var nameEntry=document.createElement("td")
        nameEntry.innerHTML=name.value
        row.appendChild(nameEntry)

        var emailEntry=document.createElement("td")
        emailEntry.innerHTML=email.value
        row.appendChild(emailEntry)

        var passwordEntry=document.createElement("td")
        passwordEntry.innerHTML=password.value
        row.appendChild(passwordEntry)

        table.appendChild(row)
    
    }

}
