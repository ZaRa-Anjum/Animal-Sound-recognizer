function startClassfication(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PPesCRdRR/model.json', modelReady);

}
 function modelReady(){
     classifier.classify(gotResults);
 }
  function gotResults(error, results){
      if(error){
          console.error(error);
        }
        else {
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_label").innerHTML= 'I can Hear '+ results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+ "%";
            document.getElementById("result_label").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
            document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
            
            img = document.getElementById("animal_image")
            if(result[0].label == "Barking")
            {
                img.src = 'https://i.gifer.com/origin/54/5458299c1e072fc93f1dca2c9911078c_w200.gif';
                

            } else if (results[0].label == "Meowing") {
                img.src = 'https://i.gifer.com/NAk7.gif';
            
            }
            else if (results[0].label == "Mooing") {
                img.src = 'https://cdn.dribbble.com/users/242629/screenshots/1642483/cow.gif';
            
            }
            else {
                img.src = "https://i.gifer.com/IlkL.gif";
               
            }

        }
      
  }