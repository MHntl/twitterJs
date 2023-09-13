const editableInput = document.querySelector(".editable")
const placeholder = document.querySelector(".placeholder")
const counter = document.querySelector(".counter")
const tweetButton = document.querySelector(".button")
const readOnly = document.querySelector(".readonly")





editableInput.addEventListener("focus", () => {
    placeholder.style.color = "#c5ccd3"
})
editableInput.addEventListener("blur", () => {
    placeholder.style.color = "#98a5b1"
})
editableInput.addEventListener("keypress", (e) => {
    placeholder.style.display = "none"
    validateTweet(e.target)
})
editableInput.addEventListener("keyup", (e) => {
    validateTweet(e.target)

    //!Second-Method
    // if (editableInput.textContent.length <= 0) {
    //     placeholder.style.display = "block"
    // }
})

const validateTweet = (element) => {
    let text;
    //!let tweetLimit = 100;
    let tweetLimit = 6;
    let tweetLength = element.innerText.length

    if (tweetLength <= 0) {
        placeholder.style.display = "block"
        counter.style.display = "none"
        tweetButton.classList.remove("active")
    } else {
        placeholder.style.display = "none"
        counter.style.display = "block"
        tweetButton.classList.add("active")
    }

    if (tweetLength > tweetLimit) {
        counter.style.color = "red"
        tweetButton.classList.remove("active")

        let overText = element.innerText.substr(tweetLimit, tweetLength)
        overText = `<span class='overSpan'> ${overText} </span>`
        text = element.innerText.substr(0, tweetLimit) + overText
        readOnly.style.zIndex = "1"

    } else {
        counter.style.color = "black"
    }
    counter.textContent = tweetLimit - tweetLength;
    readOnly.innerHTML = text
}

