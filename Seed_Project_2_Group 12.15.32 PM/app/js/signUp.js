$('body').animate({
    opacity: 1
})

$(`#signUp`).on(`submit`, e => {
    e.preventDefault()
    let user = {
        name: $(`#nameSignUp`).val(),
        username: $(`#usernameSignUp`).val(),
        password: $(`#passwordSignUp`).val(),
        cPassword: $(`#cPasswordSignUp`).val(),
        email: $(`#emailSignUp`).val()
    }

    $.post(`/newUser`, user)
        .done(result => {
            console.log(result)
            localStorage.setItem(`user`, JSON.stringify(result))
            window.location.href = `store.html`
        })
        .fail(result => {
            if ($(`.signUpAlert`).length < 0) {
            } else {
                $(`.signUpAlert`).remove()
            }
            if (result.responseText === `acccountExists`) {
                $(`#signUp`).before(`
                            <div class="alert alert-danger alert-dismissible fade show signUpAlert">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Account Already Exists!</strong> We checked our database and it looks like this account already exists. Try loging in.
                            </div>
                        `)
            } else if (result.responseText === `passMissMatch`) {
                $(`#signUp`).before(`
                            <div class="alert alert-danger alert-dismissible fade show signUpAlert">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Passwords Dont Match!</strong> We checked to see if the passwords matched. It doesn't look like they did. Please fix and resubmit.
                            </div>
                        `)
                $(`#passwordSignUp`).val(``)
                $(`#cPasswordSignUp`).val(``)
            }
        })
})

$(`#login`).on(`submit`, (e) => {
    e.preventDefault()
    let user = {
        email: $(`#emailLogin`).val(),
        password: $(`#passwordLogin`).val()
    }

    $.post(`/login`, user)
        .done(result => {
            localStorage.setItem(`user`, JSON.stringify(result))
            window.location.href = `store.html`
        })
        .fail(result => {
            if ($(`.loginAlert`).length < 0) {
            } else {
                $(`.loginAlert`).remove()
            }
            $(`#login`).before(`
                            <div class="alert alert-danger alert-dismissible fade show loginAlert">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Wrong Email or Password!</strong> We checked our database and we couldn't find your account. Please try again.
                            </div>
                        `)
        })
})