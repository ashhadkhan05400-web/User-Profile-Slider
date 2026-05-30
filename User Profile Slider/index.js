let userArr = [
    {
        img: "https://i.pravatar.cc/150?img=12",
        name: "James Müller",
        location: "Berlin, DE",
        description: "Full stack engineer shipping open source devtools used by 40k developers. Runs on cold brew and mechanical keyboards. Believes great software should feel invisible. Arch Linux evangelist and reluctant TypeScript convert.",
    },
    {
        img: "https://i.pravatar.cc/150?img=5",
        name: "Sofia Reyes",
        location: "Madrid, ES",
        description: "Product designer crafting motion-rich interfaces for fintech startups. Obsessed with type systems and editorial layouts. Always searching for the perfect café with fast Wi-Fi. Currently redesigning how people think about money.",
    },
    {
        img: "https://i.pravatar.cc/150?img=33",
        name: "Lucas Bennett",
        location: "London, UK",
        description: "Cybersecurity engineer protecting Fortune 500 companies from sophisticated threats daily. CEH certified and ex-NATO consultant. Brews his own coffee, reads Dostoevsky and firmly believes privacy is a fundamental human right.",
    },
    {
        img: "https://i.pravatar.cc/150?img=44",
        name: "Lena Park",
        location: "Seoul, KR",
        description: "Brand strategist behind global campaigns for Nike, Glossier and Aesop. Shoots 35mm film on weekends. Believes the best brands whisper rather than shout. Currently writing a book on slow brand building.",
    },
    {
        img: "https://i.pravatar.cc/150?img=52",
        name: "Ryan Carter",
        location: "New York, US",
        description: "Venture capitalist backing early stage deeptech and climate startups. Former Google engineer turned investor. Obsessed with compounding returns, long walks, stoic philosophy and finding the next billion dollar idea.",
    },
    {
        img: "https://i.pravatar.cc/150?img=31",
        name: "Camille Dubois",
        location: "Paris, FR",
        description: "Fashion photographer shooting for Vogue and Elle across Paris and Milan. Obsessed with golden hour light, film grain and raw emotion. Believes every frame should feel like a memory worth keeping forever.",
    },
    {
        img: "https://i.pravatar.cc/150?img=68",
        name: "Omar Bakr",
        location: "Cairo, EG",
        description: "Fintech founder building payment infrastructure across the MENA region. Y Combinator W25 alumni. Previously scaled a logistics startup to six countries. Obsessed with solving financial access for the underbanked.",
    },

]

let currentindex = 0;

function showprofile() {
    let user = userArr[currentindex]
    document.getElementById("img1").src = user.img
    document.querySelector("#name p").textContent = user.name
    document.querySelector("#location p").textContent = user.location
    document.getElementById("bio").textContent = user.description
}

showprofile()

document.getElementById("nextbtn").addEventListener("click", function () {
    if (currentindex < userArr.length - 1) {
        currentindex++
    }
    else {
        currentindex = 0
    }
    showprofile()
})

document.getElementById("prevbtn").addEventListener("click", function () {
    if (currentindex > 0) {
        currentindex--
    }
    else {
        currentindex = 5
    }
    showprofile()
})