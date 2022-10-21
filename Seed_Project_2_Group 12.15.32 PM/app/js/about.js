const socket = io.connect(`http://localhost:3000`)

$(`body`).animate({
    opacity: 1
}, 1500)

let scrolling = false

$(document).on(`scroll`, e => {
    if (scrolling === false) {
        if (window.scrollY > 1) {
            scrolling = true
            $(`#l2`).removeClass(`max`, 1000, `easeInBack`, () => {
                scrolling = false
            })
            $(`#l1`).removeClass(`max`, 1000, `easeInBack`)
        } else if (window.scrollY === 0) {
            $(`#l2`).addClass(`max`, 500, () => {
                scrolling = false
            })
            $(`#l1`).addClass(`max`, 500)
        }
    }
})

function addThousandsSeparator(input) {
    var output = input
    if (parseFloat(input)) {
        input = new String(input); 
        var parts = input.split("."); 
        parts[0] = parts[0].split("").reverse().join("").replace(/(\d{3})(?!$)/g, "$1,").split("").reverse().join("");
        output = parts.join(".");
    }

    return output;
}

socket.on(`countUpdated`, (data) => {
    $(`.count`).replaceWith(`<h1 class="count text-center pb-5">${addThousandsSeparator(data)} Packages Delivered</h1>`)
})