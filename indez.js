// Animação ao rolar a página
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // ativa ao carregar
const menu=document.getElementById("menu");
window.addEventListener("scroll", () =>{
    if (window.scrollY >50){
        menu.classList.add("scrolled");
    } else{
        menu.classList.remove("scrolled");
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logos-track");
  const btnLeft = document.querySelector(".arrow-left");
  const btnRight = document.querySelector(".arrow-right");

  let position = 0;
  const step = 200;

  btnRight.addEventListener("click", () => {
    position -= step;
    track.style.transform = `translateX(${position}px)`;
  });

  btnLeft.addEventListener("click", () => {
    position += step;
    if (position > 0) position = 0;
    track.style.transform = `translateX(${position}px)`;
  });
});

const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const logosTrack = document.querySelector('.logos-track');
  const totalLogos = document.querySelectorAll('.logos-track img').length;
  let currentIndex = 0;

  // Função para ir para a próxima logo
  function nextLogo() {
    if (currentIndex < totalLogos - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volta para a primeira logo
    }
    updateCarousel();
  }

  // Função para ir para a logo anterior
  function prevLogo() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalLogos - 1; // Vai para a última logo
    }
    updateCarousel();
  }

  // Atualiza a posição do carrossel
  function updateCarousel() {
    const offset = -currentIndex * 140; // Ajuste para o tamanho da logo
    logosTrack.style.transform = `translateX(${offset}px)`;
  }

  // Evento para o botão "Próximo"
  rightArrow.addEventListener('click', nextLogo);

  // Evento para o botão "Anterior"
  leftArrow.addEventListener('click', prevLogo);

  // Função para rolar automaticamente a cada 3 segundos
  setInterval(nextLogo, 3000);

  const aside = document.querySelector('.aside-galeria');

window.addEventListener('scroll', () => {
  const posicao = aside.getBoundingClientRect().top;
  const tela = window.innerHeight;

  if (posicao < tela - 100) {
    aside.classList.add('ativo');
  }
});
const elementos = document.querySelectorAll('.reveal');

function animarScroll() {
  const alturaTela = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela) {
      el.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animarScroll);
animarScroll();
// Garante que o conteúdo de manutenção seja visível
    document.addEventListener("DOMContentLoaded", function() {
      const container = document.getElementById("manutencao");
      if (container) {
        container.style.display = "flex";
      }
    });
document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('form-contato');
      const status = document.getElementById('status');

      const campos = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        mensagem: document.getElementById('mensagem')
      };

      const erros = {
        nome: document.getElementById('erro-nome'),
        email: document.getElementById('erro-email'),
        telefone: document.getElementById('erro-telefone'),
        mensagem: document.getElementById('erro-mensagem')
      };

      // Função para validar campo em tempo real
      function validarCampo(campo, condicao, mensagemErro) {
        const erroElement = erros[campo.id] || null;
        if (condicao) {
          campo.classList.add('field-valid');
          campo.classList.remove('field-error');
          if (erroElement) erroElement.style.display = 'none';
          return true;
        } else {
          campo.classList.add('field-error');
          campo.classList.remove('field-valid');
          if (erroElement) erroElement.style.display = 'block';
          return false;
        }
      }

      // Validações individuais
      campos.nome.addEventListener('blur', () => {
        validarCampo(campos.nome, campos.nome.value.trim().length >= 2, 'Nome muito curto');
      });

      campos.email.addEventListener('blur', () => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validarCampo(campos.email, regexEmail.test(campos.email.value.trim()), 'E-mail inválido');
      });

      campos.telefone.addEventListener('blur', () => {
        const valor = campos.telefone.value.replace(/\D/g, '');
        if (valor === '') {
          validarCampo(campos.telefone, true); // opcional
        } else {
          validarCampo(campos.telefone, valor.length >= 10 && valor.length <= 11, 'Telefone inválido');
        }
      });

      campos.mensagem.addEventListener('blur', () => {
        validarCampo(campos.mensagem, campos.mensagem.value.trim().length >= 10, 'Mensagem muito curta');
      });

      // Validação final ao enviar
      form.addEventListener('submit', function (e) {
        let valido = true;

        if (campos.nome.value.trim().length < 2) valido = false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.value.trim())) valido = false;
        if (campos.mensagem.value.trim().length < 10) valido = false;

        if (!valido) {
          e.preventDefault();
          status.textContent = 'Por favor, corrija os campos destacados.';
          status.className = 'error';
          return;
        }

        // Simula sucesso (Formspree envia de verdade)
        status.textContent = 'Enviando mensagem...';
        status.className = '';
        
        // Opcional: simular sucesso após 2s (remova se quiser só o envio real)
        setTimeout(() => {
          status.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve. ♻️';
          status.className = 'success';
          form.reset();
          Object.values(campos).forEach(c => c.classList.remove('field-valid', 'field-error'));
        }, 1500);
      });
    });
window.addEventListener('scroll', function() {
  rolando = true;
});

setInterval(function() {
  if (rolando) {
    verificarScroll();
    rolando = false;
  }
}, 100);

function verificarScroll() {
  let posicaoAtual = window.pageYOffset || document.documentElement.scrollTop;

  // Só aplica no celular (largura ≤ 768px)
  if (window.innerWidth <= 768) {
    if (posicaoAtual > ultimaPosicao && posicaoAtual > 100) {
      // Rolando para baixo → esconde
      document.querySelector('header').classList.add('hide-on-scroll-down');
    } else if (posicaoAtual < ultimaPosicao) {
      // Rolando para cima → mostra
      document.querySelector('header').classList.remove('hide-on-scroll-down');
    }
  }

  ultimaPosicao = posicaoAtual;
}

