/** Information Section */
document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.lines');
  
  const handleScroll = () => {
    textElements.forEach(text => {
      const rect = text.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
        text.style.backgroundSize = '100%';
      } else {
        text.style.backgroundSize = '0%';
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to set the correct state on load
});

/** End of Information Section */

/** Article Section **/ /*

var menuItems = document.querySelectorAll(".article-photo .article-item");
var cursor = document.querySelector(".article-photo .custom-cursor");
var getXY = function (e) { return [e.clientX, e.clientY]; };

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("mouseenter", function (e) {
        var _a = getXY(e), x = _a[0], y = _a[1];
        cursor.animate([
            {
                opacity: 0,
                transform: "translate(" + x + "px, " + y + "px) scale(0)"
            },
            {
                opacity: 1,
                transform: "translate(" + x + "px, " + y + "px) scale(1)"
            }
        ], { duration: 300, fill: "forwards" });
        menuItem.addEventListener("mouseleave", function (e) {
            var _a = getXY(e), x = _a[0], y = _a[1];
            cursor.animate([
                {
                    opacity: 1,
                    transform: "translate(" + x + "px, " + y + "px) scale(1)"
                },
                {
                    opacity: 0,
                    transform: "translate(" + x + "px, " + y + "px) scale(0)"
                }
            ], { duration: 300, fill: "forwards" });
        });
    });
    menuItem.addEventListener("mousemove", function (e) {
        var _a = getXY(e), x = _a[0], y = _a[1];
        cursor.animate([
            {
                transform: "translate(" + x + "px, " + y + "px)"
            }
        ], { duration: 500, delay: 50, fill: "forwards" });
    });
});  */
/** End of Article Section */

/** Value Proposition */
const clamp = (min, number, max) => Math.min(max, Math.max(number, min));
let prevX = 0;

document.querySelectorAll(".member").forEach((member) => {
  const img = member.querySelector(".member-photo");
  let timeout;

  member.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    const x = e.clientX - member.getBoundingClientRect().left - img.clientWidth / 2;
    const y = e.clientY - member.getBoundingClientRect().top - img.clientHeight / 2;
    const rotate = e.clientX - prevX;
    prevX = e.clientX;
    
    // console.log({y, x, rotate});

    requestAnimationFrame(() => {
      img.style.translate = `${x}px ${y}px`;
      img.style.rotate = clamp(-8, rotate * 2, 8) + "deg";
    });

    timeout = setTimeout(() => {img.style.rotate = "0deg"}, 250);
  });

  member.addEventListener("mouseenter", () => {
    setTimeout(() => {
      img.style.transition = "1200ms cubic-bezier(0.23, 1, 0.320, 1)";
      img.style.opacity = 1;
    }, 1);
  });

  member.addEventListener("mouseleave", () => {
    img.style.transition = "none";
    img.style.opacity = 0;
  });
});
/** End of Value Proposition */

/** Headings reveal Effect */
// Function to detect when an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to add or remove 'visible' class based on scroll position
function handleScrollReveal() {
  const headings = document.querySelectorAll('.reveal-heading');

  headings.forEach(heading => {
    if (isInViewport(heading)) {
      heading.classList.add('visible');
    } else {
      heading.classList.remove('visible');
    }
  });
}

// Listen for scroll event
window.addEventListener('scroll', handleScrollReveal);

// Initial check in case the headings are already in the viewport on page load
document.addEventListener('DOMContentLoaded', handleScrollReveal);

/** End of Headings reveal Effect */
