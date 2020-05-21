
const hire= document.querySelector("#hire");
const get= document.querySelector("#get");
const about= document.querySelector("#abt");
const contact= document.querySelector("#contact");
const aboutme= document.querySelector("#txt");
const detail= document.querySelector(".detail");




// To add style when filling form
const text= document.querySelector("#text1");
const email= document.querySelector("#email");
const tel= document.querySelector("#tel");
const message= document.querySelector("#message");



text.addEventListener("click", totext)

function totext(e){
    e.preventDefault();
    text.classList.add("tofill")
    email.classList.remove("tofill")
    tel.classList.remove("tofill")
    message.classList.remove("tofill")
}




email.addEventListener("click", toemail)

function toemail(e){
    e.preventDefault();
    email.classList.add("tofill")
    text.classList.remove("tofill")
    tel.classList.remove("tofill")
    message.classList.remove("tofill")
}




tel.addEventListener("click", totel)

function totel(e){
    e.preventDefault();
    tel.classList.add("tofill")
    email.classList.remove("tofill")
    text.classList.remove("tofill")
    message.classList.remove("tofill")

}




message.addEventListener("click", tomsg)

function tomsg(e){
    e.preventDefault();

    message.classList.add("tofill")
    tel.classList.remove("tofill")
    email.classList.remove("tofill")
    text.classList.remove("tofill")
    }

// End of style to form


hire.addEventListener("mouseover", tohire)

function tohire(e){
    e.preventDefault();
    get.classList.add("error");

    setTimeout(remove,3000)
    function remove(){
        get.classList.remove("error");
    }
}



about.addEventListener("mouseover", toabout)

function toabout(e){
    e.preventDefault();
    aboutme.classList.add("abtme");

    setTimeout(toremove, 3000)
    function toremove(){
        aboutme.classList.remove("abtme");
    }

}

contact.addEventListener("mouseover", oncontact)

function oncontact(e){
    e.preventDefault();
    detail.classList.add("dtail")

    setTimeout(tremove, 3000)
    function tremove(){
        detail.classList.remove("dtail");
    }
}

const abt= document.querySelector("#abt2");
const cont= document.querySelector("#cont2");

abt.addEventListener("mouseover",abt2)

function abt2(e){
    e.preventDefault();
    aboutme.classList.add("abtme");

    setTimeout(rmv, 3000)
    function rmv(){
        aboutme.classList.remove("abtme");
    }
}

cont.addEventListener("mouseover", cont2)

function cont2(e){
    e.preventDefault();
    detail.classList.add("dtail")

    setTimeout(tremove, 3000)
    function tremove(){
        detail.classList.remove("dtail");
    }
}
