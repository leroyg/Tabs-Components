class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    console.log(element);
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
console.log(this.button);


// assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    console.log(this.content);


    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
    // {
    //     this.toggleContent();
    // })
  }

  toggleContent(element) {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    // console.log(`I was clicked`); -> click works!
    console.log(this.content.classList);
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

{/* <div class="dropdown">
				<div class="dropdown-button">Dropdown</div>
				<div class="dropdown-content dropdown-hidden">
					<a class="dropdown-link" href="https://lambdaschool.com/" target="_blank">Lambda</a>
					<a class="dropdown-link" href="https://www.google.com/" target="_blank">Google</a>
					<a class="dropdown-link" href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a>
				</div>
			</div>
			<img src="./lambda_logo_light_small.png" class="header" />
		</div> */}