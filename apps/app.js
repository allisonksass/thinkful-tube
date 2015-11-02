$(function(){


$(function(){
  $('#submit-button').click(function(event){
    event.preventDefault();
    var searchTerm = $('#search').val();
    getRequest(searchTerm);
    $("#search").val('');
  });
});


function getRequest(searchTerm){
  var params = {
  	part:'snippet',
    q: searchTerm,
    key: 'AIzaSyCdtseV-3CvBa8VPeQLAZmVU9ddlj3ffnA',
    maxResults: 20

  };

  url = 'https://www.googleapis.com/youtube/v3/search';

  //to find out name of array: https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&key=AIzaSyCdtseV-3CvBa8VPeQLAZmVU9ddlj3ffnA

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}


function showResults(name){
	var html = "";

  //Useful resource for video ID http://stackoverflow.com/questions/32410837/get-youtube-video-url-using-youtube-v3-api-javascript
  
  $.each(name, function(index,value){
  	html += "<div class='video-display'><p>" + value.snippet.title + "</p><a target='_blank' href='https://www.youtube.com/watch?v=" + value.id.videoId + "'><img width='320px' height='270px'src='" +  value.snippet.thumbnails.medium.url + "'/></a></div>" ;
    console.log(value.snippet.title);
  });

$('#search-results').html(html);

}





});