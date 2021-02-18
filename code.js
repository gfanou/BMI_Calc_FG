$(document).ready(function () {

    // Object containing the validation rules
    var myRules =
        {
            weightMeasure:
                {
                    required: true,
                    min:88,
                    max:353,
                    number:true,
                },
            heightMeasure:
                {
                    required: true,
                    min:59,
                    max:79,
                    number:true,
                }
        };
    // Object containing the error messages
    var myMessages =
        {
            weighMeasure:
                {
                    required: "Don't leave this blank !",
                    min:"Must be at least 88",
                    max: "Maximum weight is 353",
                },
            heightMeasure:
                {
                    required: "Don't leave this blank !",
                    min:"Must be at least 59",
                    max: "Maximum height is 79",
                }
        };

    $("#button").click(showMyBmi);

    // all other functions (program logic)
    function showMyBmi() {
        // get data from input boxes

        // Measure of weight
        var weightMeasure = parseFloat($("#weightMeasure").val());

        // Measure of height
        var heightMeasure = parseFloat($("#heightMeasure").val());


        var bmi = 703 * weightMeasure / (heightMeasure * heightMeasure)

        var output;

        if (bmi <18.3) {
            output = `Your BMI is ${bmi.toFixed(1)}. You are underweight.`;

        } else if (bmi >=18.3 & bmi< 23) {
            output = `Your BMI is ${bmi.toFixed(1)}. You are healthy.`;
        } else if (bmi >=23 & bmi<= 27.4) {
            output = `Your BMI is ${bmi.toFixed(1)}. You are overweight.`;

        } else if (bmi >27.4 & bmi< 32) {
            output = `Your BMI is ${bmi.toFixed(1)}. You are moderately obese.`;
        } else if (bmi > 32){
            output = `Your BMI is ${bmi.toFixed(1)}. You are obese.`;

        }

        // Display result
        $("#message").text(output);
            }

    $("form").validate(
        {
            submitHandler: showMyBmi,
            rules: myRules,
            messages: myMessages
        }
    );
});