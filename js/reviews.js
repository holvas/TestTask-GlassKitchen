const reviews = document.querySelectorAll('.review');
        let currentReview = 0;

        document.querySelector('.next').addEventListener('click', () => {
            reviews[currentReview].classList.remove('active');
            currentReview = (currentReview + 1) % reviews.length;
            reviews[currentReview].classList.add('active');
        });

        document.querySelector('.prev').addEventListener('click', () => {
            reviews[currentReview].classList.remove('active');
            currentReview = (currentReview - 1 + reviews.length) % reviews.length;
            reviews[currentReview].classList.add('active');
        });