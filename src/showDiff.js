const compareImages = require("resemblejs/compareImages");
const fs = require("fs");

function searchDiff(TestOne, TestTwo) {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function

    try {
        var compareOne = fs.readFile(TestOne, function (err, image1) {
            if (err) {
                console.log(err);
            } else {
                console.log(image1);
            }
        });
        var compareTwo = fs.readFile(TestTwo, function (err, image2) {
            if (err) {
                console.log(err);
            } else{
                console.log(image2);
            }
        });

        const data = compareImages(
            compareOne,
            compareTwo,
            options
        );
        return data;
    } catch (error) {
        console.log(error);
    }

    //await fs.writeFile("./output.png", data.getBuffer());
    //outImage.setAttribute("src","./output.png");
}

exports.diffImages = searchDiff;


