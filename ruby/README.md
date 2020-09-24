This is my solution for the Caesar cipher problem.

I made a method to hold the logic for actually shifting the letters and utilized regex in order to determine if the character was a symbol or an upper/lower case letter and mapped over each value. 

New tricks I've learned
    - .ord will return the ascii value of a character
    - .chr will return the char value of an ascii value