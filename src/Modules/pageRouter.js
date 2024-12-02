const navigationLogo = document.querySelector('.navigationLogo');
const navigationHome = document.querySelector('.navigationHome');
const navigationAbout = document.querySelector('.navigationAbout');
const navigationContact = document.querySelector('.navigationContact');
const navigationOrderButton = document.querySelector('.navigationOrderButton');
const navigationmainMenuButton = document.querySelector('.mainMenuButton');
const navigationproceedToCartButton = document.querySelector('.proceedToCartButton');
const navigationdeliveryPaymentLabel = document.querySelector('.deliveryPaymentLabel');
export const pageRouting =()=>{
    document.addEventListener("DOMContentLoaded", () => {
        const navigationLinks = [
          { element: navigationLogo, targetId: "mainSectionContainer" },
          { element: navigationHome, targetId: "mainSectionContainer" },
          { element: navigationAbout, targetId: "aboutUsSection" },
          { element: navigationContact, targetId: "contactSection" },
          { element: navigationOrderButton, targetId: "orderSection" },
          { element: navigationmainMenuButton, targetId: "menuSection" },
          { element: navigationproceedToCartButton, targetId: "pizzaOrderSection" },
          { element: navigationdeliveryPaymentLabel, targetId: "paymentSection" },
        ];
      
        navigationLinks.forEach(({ element, targetId }) => {
          element?.addEventListener("click", (event) => {
            event.preventDefault();
      
            
            const targetSection = document.getElementById(targetId);
      
            if (targetSection) {
              
              targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      });

}
