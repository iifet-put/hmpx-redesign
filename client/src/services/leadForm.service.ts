type LeadData = {
    nome: string;
    email: string;
    telefone: string;
    empresa: string;
    faturamento: string;
};

export const enviarLead = async (dados: LeadData) => {
    const action = "https://script.google.com/macros/s/AKfycbwUE8LoJlLci9MAqYQ1JgSBQPkid98Z8VHzfuNprkzGGn8NRcD6h2J4si43VZOaBvOf/exec";
    const iframeName = "lead-submit-frame";

    let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${iframeName}"]`);

    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.name = iframeName;
        iframe.title = "lead-submit-frame";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = action;
    form.target = iframeName;
    form.style.display = "none";

    Object.entries(dados).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    window.setTimeout(() => {
        form.remove();
    }, 1500);
};