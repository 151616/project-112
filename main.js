var images = [
{"name": "Mouse", "link":"mouse.png",},
{"name": "Phone", "link":"phone.png",},
{"name": "Water bottle", "link":"water-bottle.png.crdownload",},
{"name": "Alarm Clock", "link": "alarm-clock.png"},
{"name": "Rubix Cube", "link": "rubix-cube.png"},
{"name": "Pikachu","link":"pikachu.png.crdownload"},
{"name": "Beyblade","link":"beyblade.png"},
{"name": "Tree","link":"tree.png"},
{"name": "Watch","link":"watch.png"},
{"name": "Globe", "link": "globe.png"}

]
wolfram = ["Mouse", "Phone", "Water Bottle", "Alarm Clock", "Rubix Cube", "Pikachu", "Beyblade", "Tree", "Watch", "Globe"];
var i = 0;
function next(){
    if(i == 10){
        i = 0;

    }
    document.getElementById("label").innerHTML = images[i].name;
    document.getElementById("image").src = images[i].link;
    document.getElementById("wolfram").innerHTML = wolfram[i];
    if(0 == 0){
    img = document.getElementById("image");
    classifier.classify(img, gotresult);
    }
i++;
}
console.log("Ml5 version: ", ml5.version);
var classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}

function gotresult(error, results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("mobilenet").innerHTML = results[0].label;
        
    }
}
