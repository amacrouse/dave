//the formula for this is (mass/height^2)*703
//inputs have to be in a valid range
    //for weight: between 88-353 pounds
    //for height: between 59-79 inches
//there are a lot of categories, but for this i'm gonna do these
    //severely underweight: anything under 16
    //underweight: 16-18.5
    //healthy: 18.5-25
    //overweight: 25-30
    //obese: anything above 30

//ask height
//ask weight
//validate the height and weight

//plug into formula
//determine the bmi

//display bmi and category

$(init);

function init(){
    var height = parseInt("#height");
    var weight = parseInt("#weight");

    if (height <59){

    }
    if (height>79){

    }
    if (weight<88){

    }
    if (weight>353){

    }

    var total = (weight/(height^2))*703;

    if (total<16) {
        $("#comment") = "Severely Underweight";
    }
    else if (total>=16 && total<=18.5) {
        $("#comment")  = "Underweight";
    }
    else if (total>=18.5 && total<=25){
        $("#comment")  = "Healthy weight";
    }
    else if (total>=25 && total<=30){
        $("#comment") = "Overweight";
    }
    else if (total>30){
        $("#comment") = "Obese";
    }
}
