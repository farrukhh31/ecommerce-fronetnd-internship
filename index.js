
document.querySelector('.shipto-selected').addEventListener('click', function () {
  this.parentElement.classList.toggle('open');
});

document.querySelectorAll('.shipto-options div').forEach(function (option) {
  option.addEventListener('click', function () {
    const selected = document.querySelector('.shipto-selected');
    selected.innerHTML = this.innerHTML;
    selected.setAttribute('data-value', this.getAttribute('data-value'));
    selected.parentElement.classList.remove('open');
  });
});

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission

  // Get textarea value
  const notesValue = document.getElementById('notes').value;

  // Show preview or simulate sending
  document.getElementById('responseMsg').innerHTML =
    `<strong>Preview:</strong> ${notesValue}`;
});
document.getElementById('supplierForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('.b2-input').value;
  const message = document.querySelector('.b2-text').value;
  document.getElementById('supplierResponse').innerHTML = `<strong>Thank you,</strong> ${name}. Your message: ${message}`;
});

document.getElementById("Join-btn").addEventListener("click", function(e){
  const btn = e.currentTarget;
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
document.getElementById("login-btn").addEventListener("click", function(e){
  const btn = e.currentTarget;
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

  let targetDate = new Date();
  targetDate.setSeconds(0);
  targetDate.setMinutes(0);
  targetDate.setHours(0);
  targetDate.setDate(targetDate.getDate() + 30); // Set to 30 days from now

  function resetTargetDate() {
    const now = new Date();
    targetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Add 30 days again
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    // If countdown ended, reset it
    if (distance <= 0) {
      resetTargetDate();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Run once on load

 


const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');
const productContainer = document.querySelector('.product-container');

 const grid_Btn = document.getElementById("gridViewBtn");
  const list_Btn = document.getElementById("listViewBtn");
  const container = document.getElementById("productContainer");

  // Load saved view from localStorage
  const savedView = localStorage.getItem("viewMode");
  if (savedView) {
    container.className = `product-container ${savedView}`;
    updateActiveButton(savedView);
  }

  gridBtn.addEventListener("click", () => {
    container.className = "product-container product-grid";
    updateActiveButton("product-grid");
    localStorage.setItem("viewMode", "product-grid");
  });

  listBtn.addEventListener("click", () => {
    container.className = "product-container product-list";
    updateActiveButton("product-list");
    localStorage.setItem("viewMode", "product-list");
  });

  function updateActiveButton(mode) {
    gridBtn.classList.toggle("active", mode === "product-grid");
    listBtn.classList.toggle("active", mode === "product-list");
  }



document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const mainContent = document.getElementById("main-content");

    // Handle product clicks
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function () {
            const detailPage = this.getAttribute("data-detail");

            // Load product detail via fetch
            fetch(detailPage)
                .then(response => response.text())
                .then(html => {
                    mainContent.innerHTML = html;

                    // Add back button
                    const backBtn = document.createElement("button");
                    backBtn.textContent = "← Back to Home";
                    backBtn.addEventListener("click", () => {
                        mainContent.style.display = "none";
                        productList.style.display = "block";
                    });
                    mainContent.prepend(backBtn);

                    // Toggle views
                    productList.style.display = "none";
                    mainContent.style.display = "block";
                })
                .catch(err => console.error("Error loading product page:", err));
        });
    });
});












