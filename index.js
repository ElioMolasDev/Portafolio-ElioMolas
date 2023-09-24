//Oscuro/Claro
const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
  if(this.checked){
    document.body.classList.add('dark');
  }else{
    document.body.classList.remove('dark');
  }
});

// NAV
const nav = document.querySelector(".menu"),
  navList = nav.querySelectorAll("li"),
  allArticle = document.querySelectorAll("article")
  for(let i=0; i<navList.length; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
      for(let j=0; j<navList.length; j++){
        navList[j].querySelector("a").classList.remove("active");
        allArticle[j].classList.add("ocultar")
      }
      this.classList.add("active")
      allArticle[i].classList.remove("ocultar")
    }
    )
  }




  // formulario
  ((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/eliomolas.dev@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);

