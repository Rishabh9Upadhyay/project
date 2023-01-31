let arr=['https://prod-discovery.edx-cdn.org/media/course/image/5acddd30-ce39-4042-94b8-b3fea219e73a-297b8df35490.small.jpg','https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz','https://t3.ftcdn.net/jpg/02/85/92/64/360_F_285926473_L4IqNJhss4ym9WOYUQYN0TCecpFDFerR.jpg','https://st2.depositphotos.com/1000423/5243/i/600/depositphotos_52430447-stock-photo-innovative-technologies.jpg','https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=','https://media.istockphoto.com/id/860653830/photo/digital-bits-network.jpg?s=170667a&w=0&k=20&c=2IQ-YRkVQmjpwL3RFpm0BqocufGo3J9KbteXwd9HkPY=','https://c8.alamy.com/comp/2G65NPJ/young-programmer-in-front-of-the-laptop-write-a-code-at-night-network-technology-2G65NPJ.jpg','https://www.shutterstock.com/image-photo/business-man-using-computer-hand-260nw-2059017617.jpg','https://t3.ftcdn.net/jpg/04/59/42/04/360_F_459420402_PurnNZmFvoK2YwpQabAgicp8ukIW4Jgy.jpg','https://st4.depositphotos.com/2605379/26965/i/1600/depositphotos_269655778-stock-photo-creative-coding-background.jpg']



let uri = "https://kontests.net/api/v1/all";
let responce = fetch(uri);
responce.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests)
    Rishabh = ""
    for (item in contests) {
        console.log(contests[item])
        Rishabh += `
        <div class="card mx-2 my-2" style="width: 22.7rem;">
            <img src="${arr[Math.floor(Math.random()*arr.length)]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-title">In 24 hour: ${contests[item].in_24_hours}</p>
                <p class="card-title">Site is: ${contests[item].site}</p>
                <p class="card-title">Status is: ${contests[item].status}</p>
                <p class="card-text">Start time: ${contests[item].start_time}</p>
                <p class="card-text">End time: ${contests[item].end_time}</p>
                <p class="card-text">Duration is: ${contests[item].duration}</p>
                <a href="${contests[item].url}" class="btn btn-primary">visit contest</a>
            </div>
        </div>
        `
    }
    RishabhUpadhyay.innerHTML=Rishabh;
})


