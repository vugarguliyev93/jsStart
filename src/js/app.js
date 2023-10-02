let sliderImage = document.getElementById('slider-image')
let prevBtn = document.getElementById('prvbtn')
let nextBtn = document.getElementById('nextbtn')
let SliderArea = document.querySelector('.slider-area')

let images = [
    "https://media.istockphoto.com/id/1386643491/photo/binoculars-on-top-of-rock-mountain-at-beautiful-sunset-background.webp?b=1&s=170667a&w=0&k=20&c=yZqrJfWcUr73r2_T4b4OzYdS5mT2VQik5m2-FRm_Oqo=",
    "https://media.istockphoto.com/id/157180213/photo/explorer-in-the-field.jpg?s=612x612&w=0&k=20&c=86QswuLw6RlUoFQvXNJ5QE3Zlv59sdGHpaUCaTrQZ-A=",
    "https://media.gettyimages.com/id/104374885/photo/man-holding-crystal-ball-in-landscape.jpg?s=612x612&w=gi&k=20&c=cunvXaiMH_N3WtwDVzdwqdtOC0nw2K_2pCc83X9IgP8="
]


let currentIndex = 0

function Slider() {
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    } else if (currentIndex >= images.length) {
        currentIndex = 0
    }
    sliderImage.src = images[currentIndex]
}

prevBtn.addEventListener("click", function () {
    currentIndex--
    Slider();
})
nextBtn.addEventListener("click", function () {
    currentIndex++
    Slider();
})


let autoSlider = setInterval(function () {
    currentIndex++
    Slider()
}, 2000
)

SliderArea.addEventListener("mouseenter", function () {
    clearInterval(autoSlider)
})

SliderArea.addEventListener("mouseleave", function () {
    autoSlider = setInterval(function () {
        currentIndex++
        Slider()
    }, 2000
    )
})

let topMenuDivs = document.querySelectorAll(".top-menu div")
let subMenups = document.querySelectorAll(".sub-menu p")


for (let Divs of topMenuDivs) {
    Divs.addEventListener("click", function () {
        let activeDiv = document.querySelector(".active")
        activeDiv.classList.remove("active")
        Divs.classList.add("active")

        let index = this.getAttribute("data-num")
        for (let sub of subMenups) {
            if (index == sub.getAttribute("data-num")) {

                sub.classList.add('show')

            } else {
                sub.classList.remove("show")
            }
        }
    })
}

let inputBx = document.querySelector("#inputBx")
let list = document.querySelector("#list")
let deletelist = document.getElementsByClassName("lists")

// console.log(box)
inputBx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""

    }
})

let addItem = (value) => {

    let listItem = document.createElement("li")
    listItem.innerHTML = `${value}<i>`
    listItem.addEventListener('click', function () {
        listItem.classList.toggle('done')
    })

    listItem.querySelector("i").addEventListener('click', function () {
        listItem.remove()
    })

    list.appendChild(listItem)

}


