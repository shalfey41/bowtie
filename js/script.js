$(document).ready(function() {
  
  // Открытие модального окна
  $('#cardModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget),
        title = button.data('product-title'),
        number = button.data('product-number'),
        available = button.data('product-available'),
        cost = button.data('product-cost'),
        img1 = button.data('product-img1'),
        img2 = button.data('product-img2'),
        img3 = button.data('product-img3'),
        modal = $(this);
    
    modal.find('.modal-product-title').text(title);
    modal.find('.product-number').text(number);
    modal.find('.product-available').text(available);
    modal.find('.product-price').text(cost);
    modal.find('.small-img1').html("<img src='" + img1 + "'>");
    modal.find('.small-img2').html("<img src='" + img2 + "'>");
    modal.find('.small-img3').html("<img src='" + img3 + "'>");
    modal.find('.modal-big-img').html("<img src='" + img1 + "'>");
  });
  
  
  // Переключение картинок в модальном окне
  $("#cardModal").find(".modal-small-img").on("click", function(e) {
    e.preventDefault();
    
    var bigImg = $("#js-big-img img"),
        smallImg = $(this).children("img"),
        smallImgSrc = smallImg.attr("src");
    
    bigImg.fadeOut("fast", function() {
      bigImg.attr("src", smallImgSrc).fadeIn("fast");
    });
  });
});