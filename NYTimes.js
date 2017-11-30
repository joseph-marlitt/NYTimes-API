$(document).ready(function() {

    $("#search-button").on('click', function() {
        // make variables for collecting information filled out inside the form
        // GET request
        var searchTerm = $("#serch-term").val();

        var begin = $("#start-year").val();
        var beginDate = begin + "0101";

        var numOfResults = ;

        var end = $("#end-year").val();
        var endDate = end + "0101";
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7b8facd071474e0eaef550125d430f18&q=" + searchTerm + "&begin_date=" + beginDate + "&end_date=" + endDate;

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
            // append response values to the appropriate HTML divs
            
            




        }).fail(function(err) {
            throw err;
        });


    }); // end of click event

}); // end of doc ready