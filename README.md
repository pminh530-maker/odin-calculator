# odin-calculator
In this project, I tried to do everything on my own without AI assistance. 

I realized the gaps in my debugging skills, which prevent me from grasping the inner workings of my code and how to fix errors, so I went back and revised the relevant materials. It truly helped me configure the logic.
Additionally, the sense of accomplishment that completing the work on my own created is far greater than in the previous Etch-A-Sketch project. I plan to go back and redo the entirety of Etch-A-Sketch with a similar approach to reinforce my understanding.

Right now, my code largely largely consists of conditional statements and can be hard to read at times. Other solutions pack these conditions inside separate functions instead. I think that will improve readability and allow me to integrate keyboard support without code repetition (there is currently no keyboard support in my calculator yet because doing so would require me to rewrite essentially all of my code). 

Some skills that I learned/demonstrated in this project:
a. Create container variables and select DOM elements at the start of the script for easy access.
b. Use forEach to add event handlers to each element in a Node list (because it is an array returned by document.querySelectorAll)
c. In a math operation, the operator acts as a switch to confirm whether the first number or the second number is being stored. This can be done in an if statement.
d. This is a very novice mistake, but we need to check if the javascript file is linked with the HTML file. It took some several frustrating minutes for me to realize why my code was not working even though the logic was correct.
e. Styling with CSS using flex box.