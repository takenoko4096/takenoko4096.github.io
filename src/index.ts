enum ContactType {
    X = "x",
    GitHub = "github",
    Discord = "discord"
}

interface Contact {
    readonly type: ContactType;

    readonly text: string;

    readonly link?: string;
}

async function getContacts(): Promise<Contact[]> {
    const contact = await fetch("data/contact.json");
    const json = await contact.json() as Contact[];
    return json;
}

function contactToElement(contact: Contact): HTMLLIElement {
    const li = document.createElement("li");
    li.classList.add("contact-item");

    const img = document.createElement("img");
    img.classList.add("mini-icon");
    img.src = "src/assets/" + contact.type + ".png";
    li.appendChild(img);

    const strong = document.createElement("strong");

    if (contact.link === undefined) {
        const span = document.createElement("span");
        span.classList.add("contact-link");
        span.textContent = contact.text;
        strong.appendChild(span);
    }
    else {
        const a = document.createElement("a");
        a.classList.add("contact-link");
        a.href = contact.link;
        a.textContent = contact.text;
        strong.appendChild(a);
    }

    li.appendChild(strong);

    return li;
}

addEventListener("DOMContentLoaded", async () => {
    const contacts = await getContacts();
    const ul = document.getElementById("contact-list")!;

    for (const contact of contacts) {
        const li = contactToElement(contact);
        ul.appendChild(li);
    }
});
