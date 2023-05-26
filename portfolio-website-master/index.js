let bar = document.querySelector('.bar')
let topBtn = document.querySelector('.topBtn')
let btn = document.querySelector('.topBtn i')
let contactBtn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn a')
let nav = document.querySelector('nav ul')

bar.addEventListener('click', () => {
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})

topBtn.addEventListener('click', () => {
    btn.click()
})
contactBtn.addEventListener('click', () => {
    btn2.click()
})


var options = {
    strings: ['Favio Valentino Jasso'],
    typeSpeed: 300,
    backSpeed: 50,
    loop: false
};

var typed = new Typed('.typing1', options);
//   var typed = new Typed('.typing2', options);

ScrollOut({
    targets: '.img, .aboutText , .box, div.left, div.right, .card'
})
ScrollOut({
    targets: '.header',
    offset: 50
})





//   if ($(".dropdown").length) {
//     $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
//         e.preventDefault();
//         if (!$(this).hasClass("active")) {
//             var swalWithBootstrapButtons = Swal.mixin({
//                 customClass: {
//                     confirmButton: "btn btn-primary",
//                     cancelButton: "btn btn-danger me-3",
//                 },
//                 buttonsStyling: false,
//             });
//             swalWithBootstrapButtons
//                 .fire({
//                     title: "Are you sure?",
//                     text: "Do you really want to change your current language!",
//                     icon: "warning",
//                     confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Yes, I am!",
//                     cancelButtonText: "<i class='fas fa-times-circle me-1'></i> No, I'm Not",
//                     showCancelButton: true,
//                     reverseButtons: true,
//                     focusConfirm: true,
//                 })
//                 .then((result) => {
//                     if (result.isConfirmed) {
//                         if (!$(this).hasClass("active")) {
//                             $(".dropdown-menu .dropdown-item").removeClass("active");
//                             $(this).addClass("active");
//                             $(this)
//                                 .parents(".dropdown")
//                                 .find(".btn")
//                                 .html("<span class='flag-icon flag-icon-us me-1'></span>" + $(this).text());
//                         }
//                         Swal.fire({
//                             icon: "success",
//                             title: "Amazing!",
//                             text: "Your current language has been changed successfully.",
//                             showConfirmButton: false,
//                             timer: 1500,
//                         });
//                     }
//                 });
//         }
//     });
// }


