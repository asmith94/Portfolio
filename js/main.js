//I was getting errors accessing the google document, so I found a work-around. Uploading it to this site let me access the data.
$.ajax({ url:'https://www.xodo.com/app/#/view/49b5b202-9fd4-4ecb-8af5-81df18cd5990' })
.then(data => console.log(data) )
.catch((err) => console.log('err -', err));


//This is a basic css setter function that changes the element through JS
$(document).ready(function() {
    let myElement = $('#subtext');
    myElement.css('font-size', "30px")
    myElement.css('color', 'blue')
    myElement.css('max-width', '100%')
    myElement.css('font-style', 'italic')
});


$(document).ready(function() {
    let myElement = $('#subtext');
    myElement.css('font-size', "30px")
    myElement.css('color', 'blue')
    myElement.css('max-width', '100%')
    myElement.css('font-style', 'italic')
});



// This code was used from the SEIR js-google-sheet-as-json-using-ajax

$.ajax({ url:'https://spreadsheets.google.com/feeds/list/1HY3tz_1B-5GHfX_9yDpdpdgEzPVQX5Ub1J_F2cyOSF8/od6/public/values?alt=json' })
   .then((data) => {

    console.log("data", data);
    
    const projects = data.feed.entry.map((project) => {
    return{ title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
    };
    });
    app(projects);
   })
   
// function app(projectsArr) {
    
//     projectsArr.forEach(function(projectsArr) {
    
       
        
//         $("#image").attr('src', projectsArr.image);
//         // $('.card-img').append(img);
//         $("#a-tag").prop("href", projectsArr.url);
        
//     })

    
//  }; 

// This is to show that I was able to populate the Object correctly
 console.log("app - projects", projectsArr);



// Unfortunately I was not able to get the function 'app' to work correctly. I spend the entire night working on it,
// and hopefully by the morning I can get it done.
    
   

   

  