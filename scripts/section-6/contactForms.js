const form = document.querySelector("form");

// Function to send the email 
function sendEmail(firstName, lastName, email, phone, message) {
  if (firstName === "" || lastName === "" || email === "" || message === "") {
    alert("Preencha todos os campos.");
    return;
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Email inválido.");
    return;
  } else if (phone.length < 10 || phone.length > 16) {
    alert("Telefone inválido.");
    return;
  } else if (message.length < 10) {
    alert("Mensagem muito curta.");
    return;
  } else if (firstName.length < 2 || lastName.length < 2) {
    alert("Nome e sobrenome devem ter pelo menos 2 caracteres.");
    return;
  } else if (firstName.length > 20 || lastName.length > 20) {
    alert("Nome e sobrenome devem ter no máximo 20 caracteres.");
    return;
  } else {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "leonardoaoundev@gmail.com",
      Password: "3B93E897600C703D3ABAE79C279028769AB6",
      To: "leonardoaoundev@gmail.com",
      From: "leonardoaoun@gmail.com",
      Subject: "CONTACT FORM - PORTFOLIO",
      Body: `${firstName} ${lastName} enviou uma mensagem: ${message}. Responder para ${email} e número de telefone: ${phone}.`,
    })
      .then((message) => {
        if (message === "OK") {
          alert("Email enviado com sucesso!");
          document.getElementById("firstname-input").value = "";
          document.getElementById("lastname-input").value = "";
          document.getElementById("email-input").value = "";
          document.getElementById("phone-input").value = "";
          document.getElementById("message-input").value = "";
        } else alert("Erro ao enviar email.");
      })
      .catch((err) => console.log(err));
  }
}

// Event listener to submit the form and send the email 
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstname-input").value;
  const lastName = document.getElementById("lastname-input").value;
  const email = document.getElementById("email-input").value;
  const phone = document.getElementById("phone-input").value;
  const message = document.getElementById("message-input").value;

  sendEmail(firstName, lastName, email, phone, message);
});
