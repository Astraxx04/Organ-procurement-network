const SignInBtn = document.querySelector("#sign-in-button");
const SignUpBtn = document.querySelector("#sign-up-button");
const Container = document.querySelector(".container")

SignUpBtn.addEventListener("click", () =>
    {
        Container.classList.add("SignUpMode");
    }
);
SignInBtn.addEventListener("click", () =>
    {
        Container.classList.remove("SignUpMode");
    }
);