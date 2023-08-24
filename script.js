
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".forms-select__span").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".forms-select__option");
      
      document.querySelectorAll(".forms-select__span").forEach(el => {
        if (el != btn) {
          el.classList.remove("forms-select__span-active");
        }
      });
      
      document.querySelectorAll(".forms-select__option").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("forms-select__option-active");
        }
      })
      dropdown.classList.toggle("forms-select__option-active");
      btn.classList.toggle("forms-select__span-active")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".forms-select")) {
      document.querySelectorAll(".forms-select__option").forEach(el => {
          el.classList.remove("forms-select__option-active");
      })
       document.querySelectorAll(".forms-select__span").forEach(el => {
          el.classList.remove("forms-select__span-active");
      });
    }
  })
  
  })

