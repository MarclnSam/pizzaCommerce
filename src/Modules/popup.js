export const popupFunctions = () => {
    const popupContainer = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const submitPayment = document.querySelector('.submitPayment');
    const buttons = document.querySelectorAll('.orderingPlaceButtons');
    const inputs = Array.from(document.querySelectorAll('.orderPaymentContainer input'));
    let isButtonClicked = false;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((btn) => btn.classList.remove('orderingPlaceButtonsActivated'));
            button.classList.add('orderingPlaceButtonsActivated');
            isButtonClicked = true;
        });
    });

    const clearInputs = () => {
        inputs.forEach((element) => {
            element.value = '';
        });
    };
    const openPopup = () => {
        popup.classList.add('show');
    };

    const closePopup = () => {
        popup.classList.remove('show');
    };

    popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) {
            closePopup();
        }
    });
    closePopupButton.addEventListener('click', closePopup);
    submitPayment.addEventListener('click', (ev) => {
        ev.preventDefault();
       
        const hasEmptyFields = inputs.some((input) => input.value.trim() === '');
        if (hasEmptyFields || !isButtonClicked) {
            if (isButtonClicked) {
                alert('Pole muszą być wypełnione');
            } else {
                alert('Wybierz sposób dostawy');
            }
        } else {
            openPopup();
            clearInputs();
        }
    });
};
