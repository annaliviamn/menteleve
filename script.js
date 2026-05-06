// ========= NAVBAR =========

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


// ===== Navbar scroll effect =====

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ===== Hamburger menu =====

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");

  const expanded =
    hamburger.getAttribute("aria-expanded") === "true";

  hamburger.setAttribute("aria-expanded", !expanded);

});


// ===== Fecha menu ao clicar =====

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");
    hamburger.classList.remove("open");

    hamburger.setAttribute("aria-expanded", "false");

  });

});




// ========= BOTÕES HERO =========

const heroBtn = document.getElementById("heroBtn");
const btnContato = document.getElementById("btnContato");


// ===== Scroll suave =====

function scrollContato() {

  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });

}


if (heroBtn) {
  heroBtn.addEventListener("click", scrollContato);
}

if (btnContato) {
  btnContato.addEventListener("click", scrollContato);
}




// ========= SCROLL REVEAL =========

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.15
  }

);


revealElements.forEach(element => {
  revealObserver.observe(element);
});




// ========= FORMULÁRIO =========

const form = document.getElementById("contatoForm");


// ===== Evita erro caso o form ainda não exista =====

if (form) {

  const sucesso = document.getElementById("formSucesso");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");


  // ===== Validação nome =====

  function validarNome() {

    if (!nome.value.trim()) {

      erroNome.textContent =
        "Por favor, informe seu nome.";

      nome.classList.add("erro");

      return false;
    }

    erroNome.textContent = "";
    nome.classList.remove("erro");

    return true;

  }


  // ===== Validação email =====

  function validarEmail() {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!email.value.trim()) {

      erroEmail.textContent =
        "Por favor, informe seu e-mail.";

      email.classList.add("erro");

      return false;

    }


    if (!regex.test(email.value)) {

      erroEmail.textContent =
        "Digite um e-mail válido.";

      email.classList.add("erro");

      return false;

    }

    erroEmail.textContent = "";
    email.classList.remove("erro");

    return true;

  }


  // ===== Remove erros ao digitar =====

  nome.addEventListener("input", () => {

    if (nome.value.trim()) {

      erroNome.textContent = "";
      nome.classList.remove("erro");

    }

  });


  email.addEventListener("input", () => {

    if (email.value.trim()) {

      erroEmail.textContent = "";
      email.classList.remove("erro");

    }

  });


  // ===== Submit =====

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nomeOk = validarNome();
    const emailOk = validarEmail();

    if (!nomeOk || !emailOk) return;


    const button =
      form.querySelector('button[type="submit"]');

    button.textContent = "Enviando...";
    button.disabled = true;


    // ===== Simulação envio =====

    setTimeout(() => {

      sucesso.textContent =
        "✓ Mensagem enviada com sucesso!";

      form.reset();

      button.textContent = "Enviar mensagem";
      button.disabled = false;


      // ===== Remove mensagem =====

      setTimeout(() => {

        sucesso.textContent = "";

      }, 5000);

    }, 1200);

  });

}




// ========= ACTIVE LINK =========

const sections =
  document.querySelectorAll("section[id], header[id]");

const navItems =
  document.querySelectorAll(".nav-links a");


const activeObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navItems.forEach(link => {

          link.classList.toggle(

            "active",

            link.getAttribute("href") ===
            `#${entry.target.id}`

          );

        });

      }

    });

  },

  {
    rootMargin: "-40% 0px -55% 0px"
  }

);


sections.forEach(section => {
  activeObserver.observe(section);
});