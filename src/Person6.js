import React from 'react';

function Person6() {
  
  ///////////////////////////////////////////////
  //fetch data from the given source (text)
  //////////////////////////////////////////////
fetch("https://swapi.py4e.com/api/people")
//process the response if it's ok, show an error if it's not ok
.then((response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error("Network response error");
  }
})
// display the data in HTML
.then(data => {
  //console.log(data);
  displayPerson(data);
})

.catch((error) => console.error("FETCH ERROR:", error));

///////////////////////////////////////////////////
///////////// displaying fetched data ////////////
/////////////////////////////////////////////////

//declare the function to display fetched data
function displayPerson(data) {
  const person = data.results[5];

// det element by id (div)
const personDiv = document.getElementById("person-info");

//create the name for the variable to display the html element
// what comes after the dot .[name] comes form data structure, check that in the console
const personName = person.name;
const personAge = person.birth_year;
const personEyeColor = person.eye_color;

//create text element for the extracted data
const heading = document.createElement("h2");
const ageInfo = document.createElement("h3");
const eyeInfo = document.createElement("h3");

// set the html value to the extracted data
heading.innerHTML = personName;
personDiv.appendChild(heading);

ageInfo.innerHTML = "age: " + personAge;
personDiv.appendChild(ageInfo);

eyeInfo.innerHTML = "eye color: " + personEyeColor;
personDiv.appendChild(eyeInfo);
}

  return (
    <>
    <h1>Dominika Wojewska</h1>
    <a href="/form"><button class="form-btn">formularz rejestracyjny</button></a>

    <div id="person-card" class="container">
      
      <div id="person-img">
        <img src="https://picsum.photos/534/383?random=1.jpg" alt="person profile picture. Here it is a randomly generated image"></img>
      </div>

      <div id="person-info">
      </div>

      <div id="icons">
        <span>
          <svg id="icon1" width="53" height="36"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.6057 22.5723C27.2207 22.5723 14.4744 25.5176 14.4744 31.4304V35.8594H52.737V31.4304C52.737 25.5176 39.9908 22.5723 33.6057 22.5723ZM33.6057 18.1433C36.1427 18.1433 38.5757 17.21 40.3696 15.5488C42.1636 13.8876 43.1714 11.6345 43.1714 9.28524C43.1714 6.93594 42.1636 4.68286 40.3696 3.02165C38.5757 1.36044 36.1427 0.427185 33.6057 0.427185C31.0688 0.427185 28.6357 1.36044 26.8418 3.02165C25.0479 4.68286 24.0401 6.93594 24.0401 9.28524C24.0401 11.6345 25.0479 13.8876 26.8418 15.5488C28.6357 17.21 31.0688 18.1433 33.6057 18.1433ZM9.69162 20.9779L15.5506 24.2775L13.9962 18.0547L19.2573 13.8914L12.3461 13.3378L9.69162 7.49148L6.98932 13.3378L0.125977 13.8914L5.33925 18.0547L3.71309 24.2775L9.69162 20.9779Z" fill="white"/>
        </svg></span>
        <span>
        <svg id="icon2" width="48" height="45"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5335 26.7751L15.3853 21.9586C14.9513 21.5526 14.4187 21.3496 13.7875 21.3496C13.1563 21.3496 12.604 21.571 12.1306 22.0139C11.6967 22.4199 11.4797 22.9366 11.4797 23.5641C11.4797 24.1915 11.6967 24.7082 12.1306 25.1142L18.8766 31.4256C19.3106 31.8316 19.8629 32.0346 20.5335 32.0346C21.2042 32.0346 21.7565 31.8316 22.1904 31.4256L35.6232 18.8582C36.0572 18.4522 36.2741 17.954 36.2741 17.3634C36.2741 16.7729 36.0374 16.2562 35.564 15.8133C35.1301 15.4073 34.5778 15.2043 33.9071 15.2043C33.2365 15.2043 32.6842 15.4073 32.2502 15.8133L20.5335 26.7751ZM23.8473 44.9341C20.573 44.9341 17.4959 44.3525 14.616 43.1891C11.7361 42.0272 9.23105 40.4497 7.10075 38.4567C4.97044 36.4636 3.28434 34.1199 2.04245 31.4256C0.798981 28.7313 0.177246 25.8524 0.177246 22.789C0.177246 19.7256 0.798981 16.8467 2.04245 14.1524C3.28434 11.4581 4.97044 9.11437 7.10075 7.12131C9.23105 5.12825 11.7361 3.55004 14.616 2.38668C17.4959 1.2248 20.573 0.64386 23.8473 0.64386C27.1217 0.64386 30.1988 1.2248 33.0787 2.38668C35.9585 3.55004 38.4636 5.12825 40.5939 7.12131C42.7242 9.11437 44.4103 11.4581 45.6522 14.1524C46.8957 16.8467 47.5174 19.7256 47.5174 22.789C47.5174 25.8524 46.8957 28.7313 45.6522 31.4256C44.4103 34.1199 42.7242 36.4636 40.5939 38.4567C38.4636 40.4497 35.9585 42.0272 33.0787 43.1891C30.1988 44.3525 27.1217 44.9341 23.8473 44.9341Z" fill="#19940E"/>
        </svg>
        </span>
      </div>


    </div>

    
      <a href="/"><button class="next-profiles-btn">next profiles</button></a>
    </>
  );
}

export default Person6;