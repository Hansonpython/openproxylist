const config = {
    "internet_server": "https://raw.githubusercontent.com/roosterkid/openproxylist/refs/heads/main/V2RAY_RAW.txt"
}

async function asyncFetch(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text.split("\n").filter(line => line.trim() !== "");
}

async function main() {
    const internetServerData = await asyncFetch(config.internet_server);
    const allData = internetServerData.filter(line => line.includes("-US"));
    require("fs").writeFileSync("sublink.txt", allData.join("\n"), "utf-8");
}

main();
