$.ajax({ url:'https://docs.google.com/spreadsheets/d/1HY3tz_1B-5GHfX_9yDpdpdgEzPVQX5Ub1J_F2cyOSF8/edit?usp=sharing' })
.then(data => console.log(data) )
.catch((err) => console.log('err -', err));

var htmlOutput = template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);

$(document).ready(function() {
    let myElement = $('#subtext');
    myElement.css('font-size', "30px")
    myElement.css('color', 'darkred')
});

// This code was used from the SEIR js-google-sheet-as-json-using-ajax

$.ajax({ url:'https://spreadsheets.google.com/feeds/list/1HY3tz_1B-5GHfX_9yDpdpdgEzPVQX5Ub1J_F2cyOSF8/od6/public/values?alt=json' })
   .then((data) => {

    console.log("data", data);
    
    let projects = data.feed.entry.map((project) => {
    return{ title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
    };
    });
    app(projects);
})

function app(projectsArr) {
    console.log("app - projects", projectsArr);
    projectsArr.forEach((project) => {
    
        
        $("#image").attr('src', project.image);
        // $('.picture').append(img);
        $("a#a-tag").prop("href", project.url)
    })


}; 




    
   

   

  