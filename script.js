
async function sendMessage() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let mail = document.getElementById("mail").value;
    let service = document.getElementById("service").value;
    let token = document.getElementById("token").value;

    if (!service) {
        alert("Por favor, seleccione un tipo de servicio.");
        return;
    }

    const webhook = token;

    const embed = {
        title: `Nuevo Mensaje de ${name}`,
        description: `**Correo Electrónico:** ${mail}\n**Servicio Solicitado:** ${service}\n\n**Mensaje:**\n${message}`,
        color: 3447003,
        timestamp: new Date(),
        footer: {
            text: "Nuevo mensaje recibido"
        }
    };

    const payload = {
        embeds: [embed]
    };

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("¡Mensaje enviado con éxito!");
        } else {
            alert("No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Ocurrió un error. Por favor, inténtelo de nuevo.");
    }
}
