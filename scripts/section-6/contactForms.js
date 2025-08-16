const form = document.querySelector("form");

// Handle form submission
async function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload

  const data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Email enviado com sucesso!");
      form.reset(); // Reset form fields
    } else {
      // If Formspree returns an error (e.g., validation)
      const errorData = await response.json();
      let errorMessage = "Ocorreu um erro ao enviar o email.";
      if (errorData.errors) {
        errorMessage = errorData.errors.map((error) => error.message).join(", ");
      }
      alert(errorMessage);
    }
  } catch (error) {
    alert("Erro de conexão. Tente novamente.");
  }
}

// Add event listener for form submission
form.addEventListener("submit", handleSubmit);