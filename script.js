// Define a function to find and display data
function findAndDisplayData() {
    console.log("findAndDisplayData()");
    // Get the values from the textboxes
    const textBox1Value = document.getElementById('textBox1').value;
    const textBox2Value = document.getElementById('textBox2').value;

    // Construct the key
    const key = `${textBox1Value} - ${textBox2Value}`;

    var rawbase = 'https://raw.githubusercontent.com/';
    var jsonloc = 'octocat/octocat.github.io/master/params.json';

    $.getJSON(rawbase + jsonloc, function( data ) {
        console.log(data);
        //do what you want with data
        if (data[key]) {
            const resultDiv = document.getElementById('result');
            // Display the data
            resultDiv.innerHTML = `
                <h2>Result:</h2>
                <p>Key: ${key}</p>
                <p>Name: ${data[key].name}</p>
                <p>Possible Loan: ${data[key].possible_loan}</p>
            `;
        } else {
            alert('Key not found in JSON data.');
        }
    });

    // // Fetch the JSON data
    // $.getJSON('data.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Check if the key exists in the JSON data
            
    //     })
    //     .catch(error => {
    //         console.error('Error fetching JSON data:', error);
    //     });
}
