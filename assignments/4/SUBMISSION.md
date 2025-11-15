# Assignment 4 Implementation Documentation

# Calculator App

https://jasant753.github.io/CSC317/assignments/4/calculator.html

# Design Decisions

[I focused on usability and tried to account for as many edge cases that a regular user of a calculator might run into. 
while trying to emulate how a normal physical calculator might do button inputs. For example, adding the negative symbol
before the users current operand instead of just adding it in the middle. Another example is overwriting the previous 
operator if the user tries to input two operators in a row.]

# Core features

Calculator layout is based on the ios layout, using following buttons:

- [Utility] ⌫, AC, %, +/-
- [Digits] 0-9
- [Operators] +.-.*,/

# Core features:

- Addition, subtraction, multiplication, division
- Decimal handling
- Negative number toggle
- Clear and backspace
- Percentage conversion
- Error handling
- Input Validation
- Event listeners for clicks and keyboard input
- Console messages showing function calls for debugging

# Smart Expression Handling:

- Consecutive operator replacement
  (If the user enters + followed by -, the calculator replaces the previous operator instead of stacking them.)
- One decimal per number
  (Prevents entering multiple . in the same operand.)
- Operand detection
  (Detects current user's current operand and handles decimals, negative toggles and backspace edge cases)

# Keyboard input support

- [0–9]    Number entry
- [+, -, *, /]    Operators
- [.]    Decimal
- [=] or Enter Evaluate
- [Backspace] Backspace
- [Delete, Esc]    Clear
- [%] Percent
- [p or P]    Negative toggle

# Styling
[I based my style mostly on "gaming" mechanical keyboards. Sharp 2x2 buttons with bold letters and an underglow that
emulates the rgb lights of a keyboard while also doubling as a feature that shows the user what buttons were pressed. 
The dark theme is based on the hybrid style we designed in Assignment 3, and I added a light theme to accompany it.]

# Themes and layout

- Dark theme featuring blue operator buttons
- Light Theme featuring green operator buttons
- Four column layout matching the ios calculator
- Operators color highlighted for ease of use

# Button features

- Hover effects
- Scale down to simulate button press
- Lingering underglow animation emulating an rgb gaming keyboard

# Profile Updates

- From assignment 3, profile was updated to reflect my information and past projects
- Added a "Try me" button that takes the user to the calculator app
- Calculator App contains a "profile" button that takes the user back to profile
