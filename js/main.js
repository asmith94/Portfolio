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
    let myElement = $('#coding');
    myElement.css('font-size', "30px")
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

//Fun little random function to add some personality

let click = document.getElementById('dblclick');

document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  click.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}  

const $div = $('div');

function app(projectsArr) {
    const createTable = () => {
        projectsArr.forEach(iconData => {
            let $a = $(<div class="card-img"> <i class="${iconData.image}"></i>
                <a href="${iconData.url}"> <img src="${iconData.image}" id="image" alt="${iconData.title}"></a>
                </div>
                <div class="card-box">
                <h4 class="card-title pb-3 mbr-fonts-style display-7">
                    "${iconData.title}"
                </h4>
                <p class="mbr-text mbr-fonts-style display-7">
                          We made a article/website for a fashion magazine. This was a fun one!
                </p>
                </a>
          </div>)
        $div.append($a);
        })
    };
    createTable();
}         

            


// This is to show that I was able to populate the Object correctly
 console.log("app - projects", projectsArr);



// Unfortunately I was not able to get the function 'app' to work correctly. I spend the entire night working on it,
// and hopefully by the morning I can get it done.
    
   

   

  