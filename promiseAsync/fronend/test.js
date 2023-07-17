async function getData() {
    const response = await fetch('http://127.0.0.1:3000')
    const data = await response.json()
    console.log(data)
}

getData()

async function clicked() {

    let book = { title: "java ", description: "book description 1" }

    let promise = await fetch('', {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
            "Content-type": "application/json"
        }
    })
    let rest = await promise.json()
    console.log(rest)
}

window.onload(){
    let btn = document.getElementById('post-button')
    btn.onclick = clicked;
}