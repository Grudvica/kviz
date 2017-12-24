$ (function() {
    var btn = $('#play');
    var url;
    btn.click(function(){
        var urlFixed = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
        var option = $ ('option:selected');
        var categoryId = option.val();
        var urlCategory = '&category=' + categoryId;
        var url = urlFixed + urlCategory;
        console.log(url);
        getData();

    });

    function getData(){
        $.ajax({
            url: url,
            method: 'GET'
        }).done(getQuestions);
    }
    function getQuestions(res){
        console.log(res.results);
    }

}); 
