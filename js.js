let text1='BOOK WITH CONFIDENCE on our official website for our Best Rate Guarantee, fleible policies, and elevated cleaning standards';
let text2='Download our app and discover the easiest way to book and go with Road Trip Planner LEARN MORE'
$('#text').html(text1);
$('#right_btn').on('click', function(){
    if($('#text').html()==text1)
    {
        $('#text').toggle('slide',{direction: 'right'},500);
        setTimeout(function(){
            $('#text').html(text2);
            $('#text').toggle('slide',{direction: 'left'},500);
        },550)
    }
    else{
        $('#text').toggle('slide',{direction: 'right'},500);
        setTimeout(function(){
            $('#text').html(text1);
            $('#text').toggle('slide',{direction: 'left'},500);
        },550)
    }
})

$('#left_btn').on('click', function(){
    if($('#text').html()==text1)
    {
        $('#text').toggle('slide',{direction: 'left'},500);
        setTimeout(function(){
            $('#text').html(text2);
            $('#text').toggle('slide',{direction: 'right'},500);
        },550)
    }
    else{
        $('#text').toggle('slide',{direction: 'left'},500);
        setTimeout(function(){
            $('#text').html(text1);
            $('#text').toggle('slide',{direction: 'right'},500);
        },550)
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slajdy1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "flex";

}


var obiekt={
    menu:function(){
        jQuery('#site-menu1')
        $('ul.menu2').slideToggle(300)
}
}

let Infoindex = 1;
showSlides1(Infoindex)

function plusSlides1(n) {
    showSlides1(Infoindex += n);
  }

function showSlides1(n) {
    let i1;
    let slides1 = document.getElementsByClassName("info1");
    if (n > slides1.length) {Infoindex = 1}
    if (n < 1) {Infoindex = slides1.length}
    for (i1 = 0; i1 < slides1.length; i1++) {
      slides1[i1].style.display = "none";
    }
   
    slides1[Infoindex-1].style.display = "flex";
  
  }

function currentSlide1(n) {
  showSlides1(Infoindex = n);
}

  document.querySelector('.wysun').addEventListener('focus',function()
  {
    document.querySelector('.rozwijany').style.display='block'
  })
window.addEventListener('click',function(e){
  if(document.querySelector('.hotelm').contains(e.target)){
    console.log("uu");
  }
  else if(document.querySelector('.hotelm').contains(e.target)){
    document.querySelector('.rozwijany').style.display="none";
  }
  else{
    document.querySelector('.rozwijany').style.display="none";
    document.querySelector('.rozwijany').style.display="none";
  }
})


document.querySelector('.wysun2').addEventListener('focus',function()
{
  document.querySelector('.rozwijany2').style.display='block'
})
window.addEventListener('click',function(a){
if(document.querySelector('#hotelm').contains(a.target)){
  console.log("uu");
}
else if(document.querySelector('#hotelm').contains(a.target)){
  document.querySelector('.rozwijany2').style.display="none";
}
else{
  document.querySelector('.rozwijany2').style.display="none";
  document.querySelector('.rozwijany2').style.display="none";
}
})





document.getElementById('pokoje').innerHTML = "1";
document.getElementById('dorosli').innerHTML = "1";
document.getElementById('dzieci').innerHTML = "0";

let pokoje = document.getElementById('pokoje').innerHTML;
let dorosli = document.getElementById('dorosli').innerHTML;
let dzieci = document.getElementById('dzieci').innerHTML;

function dodajp(a)
{
    pokoje = Number(pokoje) + a;
    console.log(pokoje)
    if(pokoje < 1)
    {
      pokoje = 1;
      document.getElementById('pokoje').innerHTML = pokoje;
    }
    else
    {
      if(pokoje > 9)
      {
        pokoje = 9;
        document.getElementById('pokoje').innerHTML = pokoje;
      }
      else
      {
    document.getElementById('pokoje').innerHTML = pokoje;
    }
  }
}
function dodajd(a)
{
  dorosli = Number(dorosli) + a;
  console.log(dorosli)
  if(dorosli < 1)
  {
    dorosli = 1;
    document.getElementById('dorosli').innerHTML = dorosli;
  }
  else
  {
    if(dorosli < 4)
    {
    document.getElementById('dorosli').innerHTML = dorosli;
    }
    else
    {
      dorosli = 4;
      document.getElementById('dorosli').innerHTML = dorosli;
    }
  }
}
function dodajc(g)
{
  if(g == 1)
  {
  dzieci = Number(dzieci) + g;
  console.log(dzieci)
  if(dzieci < 0)
  {
    dzieci = 0;
    document.getElementById('dzieci').innerHTML = dzieci;
  }
  else
  {
    if(dzieci < 8)
    {
    document.getElementById('dzieci').innerHTML = dzieci;
    }
    else
    {
      dzieci = 8;
      document.getElementById('dzieci').innerHTML = dzieci;
    }
  }
  odkrywanie()
}
else
{
  dzieci = Number(dzieci) + g;
  console.log(dzieci)
  if(dzieci < 0)
  {
    dzieci = 0;
    document.getElementById('dzieci').innerHTML = dzieci;
  }
  else
  {
    if(dzieci < 8)
    {
    document.getElementById('dzieci').innerHTML = dzieci;
    
    }
    else
    {
      dzieci = 8;
      document.getElementById('dzieci').innerHTML = dzieci;
    }
  }
  zakrywanie()
}

}

let div = document.querySelectorAll('.wiek')

function odkrywanie()
{
div[dzieci-1].style.display = 'block';
let divrozwijany = document.querySelector('.rozwijany')
let wysokosc = divrozwijany.clientHeight;
if(divrozwijany.clientHeight == 490)
{
}
else
{
wysokosc += 40
console.log(wysokosc)
divrozwijany.style.height = wysokosc+'px';
}
}
function zakrywanie()
{
div[dzieci].style.display = 'none';
let divrozwijany = document.querySelector('.rozwijany')
let wysokosc = divrozwijany.clientHeight;
if(divrozwijany.clientHeight == 170)
{

}
else
{
wysokosc -= 40
console.log(wysokosc)
divrozwijany.style.height = wysokosc+'px';
}
}








