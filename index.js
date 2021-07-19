document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn");
    let paragraph = document.getElementById("results");
    let input = document.getElementById("input");

    btn.addEventListener("click", async () => {
        let data = await fetch(`https://api.websitecarbon.com/site?url=${input.value}`);
        let parse = await data.json();

        console.log(parse);
    });
});
