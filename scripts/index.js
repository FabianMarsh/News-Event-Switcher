/* 
The toggleInactiveClass function works by 
First checking if the clicked element is the active tab
If not toggle the inactve class on the news and events titles
*/

function toggleInactiveClass() {

    isInactive = this.classList.contains("inactive");

    if (this === events && isInactive) { 
        this.classList.toggle("inactive");
        news.classList.toggle("inactive");
    } else if (this === news && isInactive) {
        this.classList.toggle("inactive");
        events.classList.toggle("inactive");
    }
}

/* 
The toggleHiddenClass works the same as the toggleInactiveClass function
The function could have been contained in one large function but to increase readability
And help maintain the website they have been split
*/

function toggleHiddenClass() {
// if have time refactor this, works but could be so much better
    if (this === events && isInactive) { 
        newsCards.classList.toggle("hidden");
        eventsCards.classList.toggle("hidden");

        leftChevron.classList.toggle("hidden");
        rightChevron.classList.toggle("hidden");

        allNews.classList.toggle("hidden");
        fullCalendar.classList.toggle("hidden");

        leftBorder.classList.toggle("hidden");
        rightBorder.classList.toggle("hidden");
    } else if (this === news && isInactive) {
        newsCards.classList.toggle("hidden");
        eventsCards.classList.toggle("hidden");

        rightChevron.classList.toggle("hidden");
        leftChevron.classList.toggle("hidden");

        allNews.classList.toggle("hidden");
        fullCalendar.classList.toggle("hidden");

        leftBorder.classList.toggle("hidden");
        rightBorder.classList.toggle("hidden");
    }   
}

const news = document.getElementById("news");
const events = document.getElementById("events");
const newsCards = document.getElementById("news-cards");
const eventsCards = document.getElementById("events-cards");
const leftChevron = document.getElementById("left-chevron");
const rightChevron = document.getElementById("right-chevron");
const allNews = document.getElementById("all-news");
const fullCalendar = document.getElementById("full-calendar");
const leftBorder = document.getElementById("left-border");
const rightBorder = document.getElementById("right-border");

news.addEventListener("click", toggleInactiveClass);
events.addEventListener("click", toggleInactiveClass);

news.addEventListener("click", toggleHiddenClass);
events.addEventListener("click", toggleHiddenClass);
