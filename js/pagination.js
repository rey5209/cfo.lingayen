
$(document).ready(function() {
    var current_page = 1;
    var max_page = 2;
    var page_main_tittles = ['KADA UMAGA | DECEMBER 10 , 2021			',
                            'A.S.P.N | DECEMBER 14 , 2021'];
    var page_sub_tittles = ['A.S.P.N','KADA UMAGA'];

    updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles)

    $('.btn-next').click(function() { 
        current_page ++;
        updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles)
    })
    $('.btn-prev').click(function() { 
        current_page --;
        updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles)
    })
})

function updatePaging(current_page,max_page,page_main_tittles,page_sub_tittles){
    console.log(page_sub_tittles[0])
    $('.table-paging').hide()
    
    $('.table-page-'+current_page).show()

    $('.page-main-tittle').text(page_main_tittles[current_page-1])
    $('.page-tittle').text(''+page_sub_tittles[current_page-1])
    
    
    if(current_page <= 1){
        $('.btn-prev').hide()
    }else{ 
        $('.btn-prev').show()
    }

    if(current_page == max_page){
        $('.btn-next').hide()
    }else{ 
        $('.btn-next').show()
    }
}