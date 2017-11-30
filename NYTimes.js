$(document).ready(function() {

    $("#submit-button").on('click', function(e) {
        e.preventDefault();
        // make variables for collecting information filled out inside the form
        // GET request
        var searchTerm = $("#search-term").val();
        console.log(searchTerm);

        var begin = $("#start-year").val();
        var beginDate = begin + "0101";
        console.log(beginDate);

        var numOfResults = $("#num").val();
        console.log(numOfResults);

        var end = $("#end-year").val();
        var endDate = end + "0101";
        console.log(endDate);
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