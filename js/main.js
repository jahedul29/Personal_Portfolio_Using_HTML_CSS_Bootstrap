$(document).ready(function(){
    
    var btns = $('.project-area .button-group button');
    
    btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        
        var selector = $(e.target).attr('data-filter');
        
        $('.project-area .grid').isotope({
            filter:selector
        });
        
        return false;
    })
    
});