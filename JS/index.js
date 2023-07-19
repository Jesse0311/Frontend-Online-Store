const sizeCheckbox = document.querySelector('.size-checkbox');


$('.size-checkbox').on('change', function(){
    $('.size-checkbox').not(this).prop('checked', false);
});