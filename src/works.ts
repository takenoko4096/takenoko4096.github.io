enum WorkType {
    Minecraft = "minecraft",
    Ts = "ts",
    Kt = "kt"
}

interface Work {
    readonly name: string;

    readonly type: WorkType;

    readonly description: string[];
    
    readonly additional_links?: Record<string, string>;
}

function workToElement(work: Work): HTMLDivElement {
    const div = document.createElement("div");
    div.classList.add("work");
    const h2 = document.createElement("h2");
    h2.classList.add("work-title");
    const img = document.createElement("img");
    img.src = "src/assets/" + work.type + ".png";
    img.classList.add("mini-icon");
    h2.appendChild(img);
    h2.append(work.name);
    div.appendChild(h2);
    for (const d of work.description) {
        const p = document.createElement("p");
        p.textContent = d;
        div.appendChild(p);
    }
    const ul = document.createElement("ul");
    const github = document.createElement("li");
    const a = document.createElement("a");
    a.href = "https://github.com/takenoko0496/" + work.name;
    a.textContent = "GitHub リポジトリ";
    a.classList.add("work-link");
    github.appendChild(a);
    ul.appendChild(github);
    if (work.additional_links !== undefined) for (const [k, v] of Object.entries(work.additional_links)) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("work-link");
        a.href = v;
        a.textContent = k;
        li.appendChild(a);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    return div;
}

async function getWorks(): Promise<Work[]> {
    const works = await fetch("data/works.json");
    const json = await works.json() as Work[];
    return json;
}

addEventListener("DOMContentLoaded", async () => {
    const works = await getWorks();
    const workList = document.getElementById("work-list")!;

    for (const work of works) {
        const div = workToElement(work);
        workList.appendChild(div);
    }
});
