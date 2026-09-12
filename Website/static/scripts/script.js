// ==========================================
// F&F SAMUI MORE LIFE
// MAIN JAVASCRIPT
// ==========================================


// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

const EMAILJS_PUBLIC_KEY = "QR2y3BhgdajUPWwPd";
const EMAILJS_SERVICE_ID = "service_eluk0zp";
const EMAILJS_TEMPLATE_ID = "template_t8qm07l";


// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {

    // ======================================
    // ENGLISH
    // ======================================

    en: {

        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-product": "Products",
        "nav-lang-title": "Language",
        "nav-dark-mode": "Dark Mode",

        "about-title": "About Us",

        "about-desc":
            "F&F Samui More Life Co., Ltd. provides property, villa, cleaning, maintenance, renovation, travel, transportation, and business support services in Koh Samui. We help homeowners, investors, residents, and visitors with reliable local services.",

        "contact-title": "Contact Us",
        "contact-phone": "Phone:",
        "contact-email": "Email:",
        "contact-social": "Social Media",

        
        "form-email": "Email:",
        "form-phone": "Phone:",
        "form-message": "Message:",
        "form-submit": "Send Message",

        "product-title": "Our Products",

        "product-desc":
            "Explore our property and local service solutions in Koh Samui.",

        "placeholder-email": "Your Email",
        "placeholder-phone": "Your Phone Number",
        "placeholder-message": "Your Message",

        "sending": "Sending...",

        "validation-error":
            "Please fill in all fields.",

    

        "email-error":
            "Please enter a valid email address.",

        "phone-error":
            "Please enter a valid phone number.",

        "send-success":
            "Thank you. Your message has been sent successfully.",

        "send-error":
            "Sorry, your message could not be sent. Please try again."
    },


    // ======================================
    // THAI
    // ======================================

    th: {

        "nav-home": "หน้าแรก",
        "nav-about": "เกี่ยวกับเรา",
        "nav-contact": "ติดต่อเรา",
        "nav-product": "สินค้าของเรา",
        "nav-lang-title": "ภาษา",
        "nav-dark-mode": "โหมดมืด",

        "about-title": "เกี่ยวกับเรา",

        "about-desc":
            "บริษัท เอฟแอนด์เอฟ สมุย มอร์ ไลฟ์ จำกัด ให้บริการด้านอสังหาริมทรัพย์ วิลล่า ทำความสะอาด ดูแลและบำรุงรักษา ปรับปรุงและซ่อมแซม การท่องเที่ยว การเดินทางและขนส่ง รวมถึงบริการสนับสนุนทางธุรกิจในเกาะสมุย เราพร้อมให้บริการเจ้าของบ้าน นักลงทุน ผู้พักอาศัย และนักท่องเที่ยวด้วยบริการท้องถิ่นที่สะดวกและเชื่อถือได้",

        "contact-title": "ติดต่อเรา",
        "contact-phone": "โทรศัพท์:",
        "contact-email": "อีเมล:",
        "contact-social": "โซเชียลมีเดีย",

       
        "form-email": "อีเมล:",
        "form-phone": "เบอร์โทรศัพท์:",
        "form-message": "ข้อความ:",
        "form-submit": "ส่งข้อความ",

        "product-title": "สินค้าของเรา",

        "product-desc":
            "ค้นหาบริการด้านอสังหาริมทรัพย์และบริการท้องถิ่นของเราในเกาะสมุย",

       
        "placeholder-email": "อีเมลของคุณ",
        "placeholder-phone": "เบอร์โทรศัพท์ของคุณ",
        "placeholder-message": "ข้อความของคุณ",

        "sending": "กำลังส่ง...",

        "validation-error":
            "กรุณากรอกข้อมูลให้ครบทุกช่อง",

      

        "email-error":
            "กรุณากรอกอีเมลที่ถูกต้อง",

        "phone-error":
            "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง",

        "send-success":
            "ขอบคุณค่ะ ข้อความของคุณถูกส่งเรียบร้อยแล้ว",

        "send-error":
            "ขออภัย ไม่สามารถส่งข้อความได้ กรุณาลองอีกครั้ง"
    },


    // ======================================
    // FRENCH
    // ======================================

    fr: {

        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-contact": "Contact",
        "nav-product": "Produits",
        "nav-lang-title": "Langue",
        "nav-dark-mode": "Mode sombre",

        "about-title": "À propos de nous",

        "about-desc":
            "F&F Samui More Life Co., Ltd. propose des services immobiliers, de gestion de villas, de nettoyage, d'entretien, de rénovation, de voyage, de transport et d'assistance aux entreprises à Koh Samui. Nous accompagnons les propriétaires, les investisseurs, les résidents et les visiteurs avec des services locaux fiables.",

        "contact-title": "Contactez-nous",
        "contact-phone": "Téléphone :",
        "contact-email": "E-mail :",
        "contact-social": "Réseaux sociaux",

     
        "form-email": "E-mail :",
        "form-phone": "Téléphone :",
        "form-message": "Message :",
        "form-submit": "Envoyer le message",

        "product-title": "Nos produits",

        "product-desc":
            "Découvrez nos solutions immobilières et nos services locaux à Koh Samui.",

       
        "placeholder-email": "Votre e-mail",
        "placeholder-phone": "Votre numéro de téléphone",
        "placeholder-message": "Votre message",

        "sending": "Envoi...",

        "validation-error":
            "Veuillez remplir tous les champs.",

     

        "email-error":
            "Veuillez entrer une adresse e-mail valide.",

        "phone-error":
            "Veuillez entrer un numéro de téléphone valide.",

        "send-success":
            "Merci. Votre message a été envoyé avec succès.",

        "send-error":
            "Désolé, votre message n'a pas pu être envoyé. Veuillez réessayer."
    }
};


// ==========================================
// CURRENT LANGUAGE
// ==========================================

let currentLanguage =
    localStorage.getItem("selectedLanguage") || "en";


// ==========================================
// SET LANGUAGE
// ==========================================

function setLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage = language;

    document.documentElement.lang = language;


    // Change text content
    const elements =
        document.querySelectorAll("[data-key]");

    elements.forEach((element) => {

        const key =
            element.getAttribute("data-key");

        if (
            translations[language] &&
            translations[language][key]
        ) {
            element.textContent =
                translations[language][key];
        }
    });


    // ======================================
    // PLACEHOLDERS
    // ======================================

   

    const emailInput =
        document.getElementById("email");

    const phoneInput =
        document.getElementById("phone");

    const messageInput =
        document.getElementById("message");




    if (emailInput) {
        emailInput.placeholder =
            translations[language]["placeholder-email"];
    }


    if (phoneInput) {
        phoneInput.placeholder =
            translations[language]["placeholder-phone"];
    }


    if (messageInput) {
        messageInput.placeholder =
            translations[language]["placeholder-message"];
    }


    // ======================================
    // HIGHLIGHT SELECTED LANGUAGE
    // ======================================

    document
        .querySelectorAll("[data-lang]")
        .forEach((link) => {

            const linkLanguage =
                link.getAttribute("data-lang");

            if (linkLanguage === language) {

                link.style.fontWeight = "bold";
                link.style.textDecoration = "underline";

            } else {

                link.style.fontWeight = "normal";
                link.style.textDecoration = "none";
            }
        });


    // Remember language
    localStorage.setItem(
        "selectedLanguage",
        language
    );
}


// ==========================================
// FORM VALIDATION
// ==========================================

function validateForm() {

 

    const emailEl =
        document.getElementById("email");

    const phoneEl =
        document.getElementById("phone");

    const messageEl =
        document.getElementById("message");


    // Make sure fields exist
    if (
        !emailEl ||
        !phoneEl ||
        !messageEl
    ) {

        console.error(
            "One or more contact form elements are missing."
        );

        return false;
    }




    const email =
        emailEl.value.trim();

    const phone =
        phoneEl.value.trim();

    const message =
        messageEl.value.trim();


    // ======================================
    // CHECK EMPTY FIELDS
    // ======================================

    if (
        !email ||
        !phone ||
        !message
    ) {

        alert(
            translations[currentLanguage]["validation-error"]
        );

        return false;
    }


    // ======================================
    // NAME VALIDATION
    // ======================================



    // ======================================
    // EMAIL VALIDATION
    // ======================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert(
            translations[currentLanguage]["email-error"]
        );

        emailEl.focus();

        return false;
    }


    // ======================================
    // PHONE VALIDATION
    //
    // Allows:
    // +66 81 234 5678
    // 0812345678
    // +33 6 12 34 56 78
    // (081) 234-5678
    // ======================================

    const phonePattern =
        /^[0-9+\-()\s]{7,25}$/;

    if (!phonePattern.test(phone)) {

        alert(
            translations[currentLanguage]["phone-error"]
        );

        phoneEl.focus();

        return false;
    }


    return true;
}


// ==========================================
// INITIALIZE EMAILJS
// ==========================================

function initializeEmailJS() {

    if (typeof emailjs === "undefined") {

        console.error(
            "EmailJS SDK failed to load."
        );

        return false;
    }


    try {

        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY
        });


        console.log(
            "EmailJS initialized successfully."
        );


        return true;

    } catch (error) {

        console.error(
            "EmailJS initialization error:",
            error
        );

        return false;
    }
}


// ==========================================
// CONTACT FORM
// ==========================================

function initializeContactForm() {

    const contactForm =
        document.getElementById("contact-form");


    if (!contactForm) {

        console.error(
            "Contact form was not found."
        );

        return;
    }


    contactForm.addEventListener(
        "submit",
        async function (event) {

            // Prevent normal browser/Flask submission
            event.preventDefault();


            // ==================================
            // VALIDATE FORM
            // ==================================

            if (!validateForm()) {
                return;
            }


            // ==================================
            // CHECK EMAILJS
            // ==================================

            if (typeof emailjs === "undefined") {

                console.error(
                    "EmailJS is unavailable."
                );

                alert(
                    translations[currentLanguage]["send-error"]
                );

                return;
            }


            const submitBtn =
                document.getElementById("submit-btn");


            // ==================================
            // DISABLE BUTTON WHILE SENDING
            // ==================================

            if (submitBtn) {

                submitBtn.disabled = true;

                submitBtn.textContent =
                    translations[currentLanguage]["sending"];
            }


            // ==================================
            // GET CUSTOMER INFORMATION
            // ==================================


            const customerEmail =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const customerPhone =
                document
                    .getElementById("phone")
                    .value
                    .trim();

            const customerMessage =
                document
                    .getElementById("message")
                    .value
                    .trim();


            // ==================================
            // EMAILJS TEMPLATE VARIABLES
            // ==================================
            //
            // EmailJS template should use:
            //
            // {{customer_name}}
            // {{customer_email}}
            // {{customer_phone}}
            // {{message}}
            //
            // ==================================

            const templateParams = {


                customer_email:
                    customerEmail,

                customer_phone:
                    customerPhone,

                message:
                    customerMessage,

                // Extra aliases for Reply-To
                // and compatibility if needed

                reply_to:
                    customerEmail,


                phone_number:
                    customerPhone
            };


            // ==================================
            // DEBUG INFORMATION
            // ==================================

            console.log(
                "Sending contact form..."
            );



            console.log(
                "Customer email:",
                customerEmail
            );

            console.log(
                "Customer phone:",
                customerPhone
            );


            // ==================================
            // SEND EMAIL
            // ==================================

            try {

                const response =
                    await emailjs.send(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        templateParams
                    );


                console.log(
                    "Email sent successfully:",
                    response.status,
                    response.text
                );


                alert(
                    translations[currentLanguage]["send-success"]
                );


                // Clear form after successful send
                contactForm.reset();


            } catch (error) {

                console.error(
                    "EmailJS send error:",
                    error
                );


                // Show EmailJS error details
                if (error && error.text) {

                    console.error(
                        "EmailJS error message:",
                        error.text
                    );
                }


                alert(
                    translations[currentLanguage]["send-error"]
                );


            } finally {

                // ==================================
                // ENABLE BUTTON AGAIN
                // ==================================

                if (submitBtn) {

                    submitBtn.disabled = false;

                    submitBtn.textContent =
                        translations[currentLanguage]["form-submit"];
                }
            }
        }
    );
}


// ==========================================
// HAMBURGER MENU
// ==========================================

function initializeHamburgerMenu() {

    const hamburger =
        document.getElementById("hamburger");

    const navLinks =
        document.getElementById("nav-links");


    if (!hamburger || !navLinks) {
        return;
    }


    hamburger.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );


            const isOpen =
                navLinks.classList.contains(
                    "active"
                );


            hamburger.setAttribute(
                "aria-expanded",
                isOpen
            );
        }
    );


    // Close mobile menu after clicking
    // normal navigation links

    navLinks
        .querySelectorAll("a[href^='#']")
        .forEach((link) => {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                    hamburger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
}


// ==========================================
// DARK MODE
// ==========================================

function initializeDarkMode() {

    const darkModeToggle =
        document.getElementById("dark-mode");


    if (!darkModeToggle) {
        return;
    }


    // ======================================
    // LOAD SAVED DARK MODE
    // ======================================

    const savedDarkMode =
        localStorage.getItem("darkMode");


    if (savedDarkMode === "true") {

        darkModeToggle.checked = true;

        document.body.classList.add(
            "dark-mode"
        );
    }


    // ======================================
    // DARK MODE CHANGE
    // ======================================

    darkModeToggle.addEventListener(
        "change",
        function () {

            document.body.classList.toggle(
                "dark-mode",
                this.checked
            );


            localStorage.setItem(
                "darkMode",
                this.checked
            );
        }
    );
}


// ==========================================
// LANGUAGE BUTTONS
// ==========================================

function initializeLanguageButtons() {

    document
        .querySelectorAll("[data-lang]")
        .forEach((trigger) => {

            trigger.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const selectedLanguage =
                        this.getAttribute(
                            "data-lang"
                        );


                    setLanguage(
                        selectedLanguage
                    );
                }
            );
        });
}


// ==========================================
// PAGE INITIALIZATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "F&F Samui More Life website loaded."
        );


        // Start at top
        window.scrollTo(0, 0);


        // Language
        setLanguage(
            currentLanguage
        );


        // Language buttons
        initializeLanguageButtons();


        // Dark mode
        initializeDarkMode();


        // Mobile navigation
        initializeHamburgerMenu();


        // EmailJS
        initializeEmailJS();


        // Contact form
        initializeContactForm();
    }
);


// ==========================================
// PREVENT BROWSER SCROLL RESTORATION
// ==========================================

if ("scrollRestoration" in history) {

    history.scrollRestoration =
        "manual";
}