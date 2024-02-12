
// Элемент выполняется после того, как документ полностью загрузится.
// Можно использовать событие DOMContentLoaded для этого.

document.addEventListener("DOMContentLoaded", function () {

        var scrollTopButton = document.getElementById("test");
        var socks = document.getElementById("socks-img");
        var product_text = document.getElementById("text-product");

    window.addEventListener("scroll", function () {

        const OneBlocks = document.querySelectorAll(".describe-number");
        OneBlocks.forEach(function (block) {
            const speed = 0.5;
            const yPos = window.scrollY * speed;
            block.style.marginRight = yPos + "px";
        });

        const MainProducts = this.document.querySelectorAll(".main-products");
        MainProducts.forEach(function (block) {

            var movePos = 144;

            if (window.screen.width >= 350 && window.screen.width <= 500) {
                movePos = 184;

            } else if (window.screen.width >= 667 && window.screen.width <= 960) {
                movePos = 646;
            } 
            // else if(window.screen.width >= 1200 && window.screen.width <= 1399) {

                
            // }

            const speed = 2;
            const yPos = window.scrollY * speed;

            if (yPos < movePos) {
                block.style.zIndex = '';
                socks.style.zIndex = '';
                product_text.style.zIndex = '';

            } else if (yPos >= movePos) {
                block.style.zIndex = '1';
                socks.style.zIndex = '3';
                product_text.style.zIndex = '2';
            }
            
        });

        const ImageBlock = document.querySelectorAll(".image-in-main");
        ImageBlock.forEach(function (block) {
            const speed = 2;
            const yPos = window.scrollY * speed;
            block.style.marginBottom = yPos + "px";
        });

        const ProductText = document.querySelectorAll(".product-text");
        ProductText.forEach(function (block) {

            var productTextPos = 225;
            var finalProductTextPos = '222px';
            var speed = 0.5;

            if (window.screen.width >= 350 && window.screen.width <= 500) {
                productTextPos = 103;
                finalProductTextPos = '103px';
                speed = 0.5;

            } else if (window.screen.width >= 667 && window.screen.width <= 960) {
                productTextPos = 100;
                finalProductTextPos = '100px';
                speed = 0.2;

            } else if (window.screen.width >= 1000 && window.screen.width <= 1199) {
                productTextPos = 164;
                finalProductTextPos = '164px';
                speed = 0.5;

            } else if (window.screen.width >= 1200 && window.screen.width <= 1399) {
                productTextPos = 164;
                finalProductTextPos = '164px';
                speed = 0.5;

            } else if (window.screen.width >= 1400 && window.screen.width <= 1600) {
                productTextPos = 165;
                finalProductTextPos = '165px';
                speed = 0.5;

            }

            const yPos = window.scrollY * speed;

            if(yPos <= productTextPos) {
                block.style.marginTop = yPos + "px";

            } else if (yPos > productTextPos) {
                block.style.marginTop = finalProductTextPos;
            }
        });

        const AboutText = document.querySelectorAll(".about-text");
        AboutText.forEach(function (block) {
            
            var productAboutPosMin = 650;
            var productAboutPosMax = 7600;
            var productAboutPosSeparation = 18;

            if (window.screen.width >= 350 && window.screen.width <= 500) {
                productAboutPosMin = 650;
                productAboutPosMax = 5700;
                productAboutPosSeparation = 90;

            } else if(window.screen.width >= 667 && window.screen.width <= 960) {
                productAboutPosMin = 650;
                productAboutPosMax = 4800;
                productAboutPosSeparation = 60;
            
            } else if (window.screen.width >= 1000 && window.screen.width <= 1199) {
                productAboutPosMin = 650;
                productAboutPosMax = 7000;
                productAboutPosSeparation = 60;


            } else if (window.screen.width >= 1200 && window.screen.width <= 1470) {
                productAboutPosMin = 650;
                productAboutPosMax = 7000;
                productAboutPosSeparation = 50;
            
            } else if (window.screen.width >= 1471 && window.screen.width <= 1600) {
                productAboutPosMin = 650;
                productAboutPosMax = 7000;
                productAboutPosSeparation = 40;  
            
            }

            const speed = 4;
            const yPos = window.scrollY * speed;

            if (yPos >= productAboutPosMin && yPos <= productAboutPosMax)
                block.style.left = yPos / productAboutPosSeparation + "px";
        });
    });


    // Прокрутить страницу вверх при нажатии кнопки
    scrollTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // Для поддержки старых браузеров
        document.documentElement.scrollTop = 0;
    });

});