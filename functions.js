function generateNotify(text, type){
    elm = document.createElement("div");
    elm.setAttribute('class', `notification ${type} show`);
    elm.innerHTML = "<span>" + text + "</span>";
    document.body.append(elm);
    setTimeout(function(){
        elm.setAttribute('class', `notification ${type} hide`);
    }, 3800)
    setTimeout(function(){elm.remove()}, 4600);
}

function scrollTo(id){
    elm = document.getElementById(id)
    y = elm.getBoundingClientRect().top + window.scrollY + 200
    elm.scrollIntoView({block: "start", behavior: 'smooth'}, true);
}

function page(url){
    window.open(url)
}

/* Bind Buttons */
const try_btn = document.getElementById("menu-try");
try_btn.addEventListener("click", function(){scrollTo("download-os")})

const rd_menu = document.getElementById("reddit");
const dc_menu = document.getElementById("discord");
const gt_menu = document.getElementById("github");
rd_menu.addEventListener("click", function(){page("https://reddit.com/r/OnerOS")})
dc_menu.addEventListener("click", function(){page("https://discord.gg/meKqTdUDDm")})
gt_menu.addEventListener("click", function(){page("https://github.com/OnerOS-project")})
const down_btn = document.getElementById("download")
const web_btn = document.getElementById("web-try");
down_btn.addEventListener("click", function(){generateNotify("ISO image not available, try Web Preview", "error")});
web_btn.addEventListener("click", function(){page("https://web-oneros.netlify.app")})

const pr_btn = document.getElementById("btn-pr")
const pt_btn = document.getElementById("btn-pt")
const pp_btn = document.getElementById("btn-pp")
pr_btn.addEventListener("click", function(){page("https://github.com/OnerOS-Project/Web-Preview/pulls")})
pt_btn.addEventListener("click", function(){page("https://patreon.com/klubuntu")})
pp_btn.addEventListener("click", function(){page("https://paypal.me/OnerOSTeam")})