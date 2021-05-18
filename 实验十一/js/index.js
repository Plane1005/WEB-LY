$('#openmain').click(()=>{
    $('.m-main').show()
    $('#closemain').show()
    $('#openmain').hide()
})

$('#closemain').click(()=>{
    $('.m-main').hide()
    $('#closemain').hide()
    $('#openmain').show()
})
// $('.opendetail').bind("click",()=>{
//     var index = $('.opendetail').index(this)
//     console.log(index);
//     $('.u-main').eq(index).show()
//     $('.closedetail').eq(index).show()
//     $('.opendetail').eq(index).hide()
// })
$.each($(".opendetail"),function(index,val){  //index为选择器的index位置，val为当前元素
	val.index = index; //为每个类数组的子元素添加index属性并将其在类数组的下标赋值给index属性
	$(val).click(function(){
	    $('.u-main').eq(index).show()
        $('.closedetail').eq(index).show()
        $('.opendetail').eq(index).hide()
	})
})
// $('#opendetail').click((a)=>{
//     var i = $(".opendetail").index(a.currentTarget);
//     $(".u-main").each((index, ele) => {
//         index === i ? ele.style.display = "block" : ele.style.display = ele.style.display
//     })
//     $('#closedetail').show()
//     $('#opendetail').hide()
// })

// $('#closedetail').click(()=>{
//     $('.u-main').hide()
//     $('#closedetail').hide()
//     $('#opendetail').show()
// })

$.each($(".closedetail"),function(index,val){  //index为选择器的index位置，val为当前元素
	val.index = index; //为每个类数组的子元素添加index属性并将其在类数组的下标赋值给index属性
	$(val).click(function(){
	    $('.u-main').eq(index).hide()
        $('.closedetail').eq(index).hide()
        $('.opendetail').eq(index).show()
	})
})