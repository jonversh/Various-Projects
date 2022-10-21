let user = localStorage.getItem(`user`) ? JSON.parse(localStorage.getItem(`user`)) : null

if (user) {
    $(`#middleNav`).replaceWith(`
        <h3 class="m-3">Welcome, ${user.name}</h3>
    `)
    $(`#buttonSignUp`).replaceWith(`
        <div class="container height100" id="cart">
            <h1 class="text-center m-4">Cart :</h1>
        </div>
    `)
    $.post(`/cart`, user)
        .then(result => {
            console.log(result)
            if (result.length === 0) {
                $(`#cart`).append(`
                    <h3 class="text-center">There is nothing in your cart. Add Items</h1>
                `)
            } else {
                console.log(`here`)
            }
        })
} else {
    console.log(`no one is siged in`)
}