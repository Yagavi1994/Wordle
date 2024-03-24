# WORDLE
Wordle is a well-known word-guessing game. The basic concept of the game is to guess the secret word in six tries, based on the color of the changing tile, which indicates the accuracy of our guess. By default, Wordle has a black and white color theme for dark and light modes. As a user, I wished it had more colorful themes. Therefore, as a developer, I decided to recreate the game with vibrant themes.

![Site view across devices](documentation/responsive-screen.png)

The link to the game can be found [HERE](https://yagavi1994.github.io/Wordle/)

## Tabel of Contents
+ [User Experience](#user-experience "User Experience")
+ [Design](#design "Design")
+ [Features](#features "Features")
+ [Testing](#testing "Testing")
+ [Technologies Used](#technologies-used "Technologies Used")
+ [Deployment](#deployment "Deployment")
+ [Credits](#credits "Credits")
 
## User Experience

### First time player:

- As a first-time player, it's important to provide a clear introduction to the website's purpose and how to engage with it effectively.

- The game should offer straightforward instructions on how to play, ensuring new players understand the mechanics without confusion.

- Clear explanations should be given regarding the conditions for winning or losing the game, helping new players set their objectives.

- The user interface should be welcoming and intuitive, making it easy for first-time players to navigate and interact with the game.

- The aesthetics of the website should be simple and neat to avoid any distractions from the gameplay.

### Frequent Player:

- For frequent players, ensuring the website's responsiveness across various screen sizes is crucial for seamless gameplay experiences.

- Adding fun animations keeps the gameplay engaging and interesting.

- Tracking and displaying the best scores across multiple sessions adds motivation for frequent players, allowing them to monitor their progress and strive for improvement.

- Offering a variety of colorful themes helps maintain engagement for frequent players, preventing monotony and enhancing the overall user experience.

- Implementing a toggle between dark and light modes caters to frequent players' preferences for comfortable viewing, especially during extended gameplay sessions.

- Facilitating easy game resets allows frequent players to quickly start new rounds, promoting replayability and continuous enjoyment of the game.

## Design

### Wireframes:

I made wireframes for the game using Figma.

##### Mobile Wireframe:

![Mobile Wireframe](documentation/mobile-wireframe.png)

##### Desktop Wireframes:

![Game Area](documentation/game-area-wireframe.png)
![How to play](documentation/how-to-play-wireframe.png)
![Statistics](documentation/statistics-wireframe.png)

### Colour Scheme:

The primary enhancement to the game from its original version is the inclusion of themed color palettes for the tiles. Key colors such as purple, orange, blue, and red have been carefully curated for this purpose. In the light mode, gentle and muted hues of these colors were chosen to create a soothing visual experience for players.

Conversely, in the dark mode, deeper and richer shades of purple and blue were implemented to cater to players who prefer a very dark background. This contrasts with the lighter tones of orange and red, which offer a touch of brightness to the dark-mode interface without being overly intense. The goal was to provide options for players with varying preferences regarding the darkness of the background.

Throughout both light and dark modes, the emphasis was placed on avoiding excessively bright or harsh colors that could strain the player's eyes. By maintaining a balance between aesthetics and visual comfort, the game aims to enhance the overall gaming experience for players, regardless of their chosen mode.

##### Light Mode:

![Light Mode](documentation/light-mode-palette.png)

##### Dark Mode:
![Dark Mode](documentation/dark-mode-palette.png)

### Typography:

Using the default "Arial" font for the game was a deliberate choice to maintain simplicity and clarity in the overall design. By opting for a widely recognized and easy-to-read font like Arial, the focus remains on the gameplay itself without introducing unnecessary distractions or complexities.

The decision to avoid excessive styling aligns with the goal of keeping the game's appearance clean and neat. Arial's straightforward and legible characteristics ensure that players can quickly interpret the text elements within the game interface without any hindrance. This approach fosters a seamless user experience, where players can engage with the game effortlessly without being overwhelmed by unnecessary design flourishes.

> "The aesthetics of the website should be simple and neat to avoid any distractions from the gameplay."

## Features

### Existing Features

#### Landing Page:
The landing page is the main and sole page of the web application. It features a navigation bar at the top, providing access to various functionalities. In the middle of the landing page lies the game area, comprising a grid of tiles where users can input letters either by typing or clicking. Directly below the game area is a keyboard interface, allowing users to select letters to form words for guessing. Finally, at the bottom of the page, there is a footer displaying a copyright message.

![Landing Page](documentation/landing-page.png)

#### Navigation bar:
The navigation bar on the landing page features the logo on the right side, serving as a visual identifier for the web application. On the left side of the navigation bar, users can find how to play, reset, mode, themes and statistics icons representing different functionalities to interact with the web application.

> "The user interface should be welcoming and intuitive, making it easy for first-time players to navigate and interact with the game."

![Navigation Bar](documentation/nav-bar.png)

The features of those icons are explained as follows.

#### How to Play: 
When clicked, this icon opens a modal that offers comprehensive instructions on how to play the game. It encompasses details about the game's objective, rules, and tips for achieving success during gameplay. Additionally, the background color of the "How to Play" modal dynamically adjusts according to the current theme selected by the user. This feature enhances the overall visual appeal of the game, making it more vibrant and engaging for players.

> "The game should offer straightforward instructions on how to play, ensuring new players understand the mechanics without confusion."

> "Clear explanations should be given regarding the conditions for winning or losing the game, helping new players set their objectives."

![How To Play]()

#### Reset: 
This icon allows users to reset the game or start a new round. Upon clicking, any ongoing game progress is cleared, and the game board is reset to its initial state, ready for a fresh gameplay session.

> "Facilitating easy game resets allows frequent players to quickly start new rounds, promoting replayability and continuous enjoyment of the game."

#### Mode: 
Clicking on this icon toggles between different display modes, such as light mode and dark mode. Users can select their preferred mode for optimal viewing comfort, depending on their surroundings or personal preferences.

> "Implementing a toggle between dark and light modes caters to frequent players' preferences for comfortable viewing, especially during extended gameplay sessions."

![Mode]()

#### Themes: 
This icon provides access to a panel where users can choose from various color themes for the game interface. By selecting a theme, users can customize the appearance of the game according to their preferences or mood.

> "Offering a variety of colorful themes helps maintain engagement for frequent players, preventing monotony and enhancing the overall user experience."

![Themes]()

#### Statistics: 
Clicking on this icon opens a modal displaying game statistics of player's achievements. It includes information such as number of games played, win percentage, games won and games lost for tracking progress and performance.

> "Tracking and displaying the best scores across multiple sessions adds motivation for frequent players, allowing them to monitor their progress and strive for improvement."


![Statistics]()

#### Game Area:
The game area consists of grid of tiles in which the user can enter the letters to guess the word. The color of the tiles can be changed by choosing a color in the themes menu. The background of the game area will be changed between black and half-white according to dark and light mode.
Apart from this the tiles also performs various animations and shows alert messages as follows.

![Game Area]()

#### Flip Animation:
When the user enters a valid guess, the tiles in the game area perform a flipping animation to visually indicate the validation of the guess. The game then proceeds to validate the guess against the correct answer. Based on this validation, each tile receives a class that determines its color and visual representation:

- Green Tiles: Tiles representing letters that are present in the word and in the correct position are assigned a class that gives them a green color. This indicates that the user has guessed these letters correctly.

- Yellow Tiles: Tiles representing letters that are present in the word but not in the correct position are assigned a class that gives them a yellow color. This indicates that the user has guessed these letters correctly but in the wrong position.

- Grey Tiles: Tiles representing letters that are not present in the word are assigned a class that gives them a grey color. This indicates that the user has guessed these letters incorrectly.

By assigning these classes and colors to the tiles, the game provides clear visual feedback to the user, helping them understand the correctness of their guess and guiding them in subsequent attempts. Additionally, the flipping animation adds a engaging element to the gameplay experience, enhancing user immersion and enjoyment.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Flip Animation]()

#### Shake Animation:
If a word not in the list of valid words for gameplay is entered by the user, the tiles in the game area respond with a shake animation to indicate an invalid guess. This visual cue helps users recognize that their input does not match any valid words in the game's vocabulary, prompting them to try another word.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Shake Animation]()

#### Dance Tile Animation:
When the user guesses the correct word, the tiles perform a dance animation, celebrating the user's victory. This animated display adds a touch of excitement and reward to the gameplay experience, reinforcing the user's success and creating a positive interaction with the game.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Dance Animation]()

#### Confetti Animation:
A confetti animation is played when the user guesses the right word and wins the game to celebrate their victory.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Confetti Animation]()

#### Alert Messages:

Alert messages are displayed on the tiles for various scenarios to guide the user to play more effectively:

When the user enters an invalid guess, an alert message stating "Not in word list." is displayed. This informs the user that the entered word is not valid for the game.

If the user submits a word before entering 5 letters, an alert message displays "Not enough letters." This reminds the user to input a complete word before submitting.

When the user correctly guesses the word, an alert message appears saying "Congratulations, You win." to celebrate the user's victory.

If the user is unable to guess the word after 6 attempts, an alert message displays "Oops.. You missed it.. The correct word is ' [correct word] '." This informs the user of the correct word, providing closure to the game round.

These alert messages assist the user by providing feedback and guidance throughout the gameplay, ensuring a smoother and more engaging experience.

> "- The user interface should be welcoming and intuitive, making it easy for first-time players to navigate and interact with the game."

![Alert Messages]()

#### Keyboard Area:
 - The keyboard area comprises a keyboard interface that allows users to input letters into the tiles either by clicking or touching them, depending on the device they are using. 
 - The colors of the keyboard dynamically change between dark grey and half-white based on the selected dark and light mode themes. This ensures consistency with the overall color scheme of the interface, providing a visually cohesive experience for the user across different modes. 
 - The color of the keys changes to green, yellow, and grey, matching the tiles. This helps the user to identify which letters are in the right place, wrong place, or not in the game to play more effectively.
 - The color of key changes when hovered over for the user to identify on which key the mouse is in to type easily.

![Keyboard Area]()

#### Footer:
The footer of the landing page contains a copyright message positioned at the bottom of the page.

![Footer](documentation/footer.png)

### Future Features:
##### Sound Effects: 
Implementing sound effects to enhance the gaming experience, making it more enjoyable and immersive for users.

##### Difficulty Modes: 
Introducing easy and hard modes to cater to varying skill levels and preferences among players. This allows users to adjust the game's difficulty according to their proficiency and desired level of challenge.

##### Guess Distribution Graph: 
Adding a graphical representation of guess distribution in the statistics section, similar to the original Wordle version. This feature provides insights into the user's guessing patterns and performance over time.

##### Login Feature: 
Incorporating a login feature to enable users to save their game statistics and progress to their account. This allows users to access their data from different devices and continue their gameplay seamlessly.

##### Expanded Theme Selection: 
Adding more themes with vibrant colors and diverse designs to enhance the visual appeal of the gameplay. Offering a variety of themes allows users to customize their gaming experience according to their preferences and mood.

## Testing:
##### Browser Compatibility:
  - Tested playing the game in Chrome, Firefox, and Safari browsers.
  - Confirmed that the game functions smoothly across different browsers without any issues.
##### Responsive Design:
  - Played the game on various devices including mobile phones, laptops, and desktop computers.
  - Ensured that the game is responsive and adapts well to different screen sizes.
#### Accessibility:
  - Ran Lighthouse tests to evaluate the accessibility of the website.
  - Verified that the website has a high accessibility rating, ensuring inclusivity for all users.
##### Gameplay Features:
  - Tested all the features of the gameplay, including entering guesses, resetting the game, and changing themes.
  - Confirmed that the gameplay mechanics work as expected without any errors.
##### Theme Compatibility:
  - Played the game multiple times with different themes to ensure compatibility.
  - Verified that the gameplay flows smoothly with all theme options without encountering any issues.
##### Modal and Menu Functionality:
  - Verified that modals and menus open and close properly when clicking the respective icons.
  - Ensured that all modal content and menu options are displayed correctly.
##### Animations and Alert Messages:
  - Confirmed that animations, alert messages, and tile colors change appropriately during gameplay interactions.
##### Game Controls:
  - Tested the functionality of the reset button, mode toggle button, and keyboard keys.
  - Ensured that the page reloads when clicking the reset button and toggles between light and dark modes when clicking the mode button.
  - Verified that all keyboard keys function correctly and change colors according to tile statuses.
##### Theme Consistency:
  - Checked that the color of the tiles and background of the "How to Play" modal change accordingly based on the selected theme.
  - Confirmed that theme changes are reflected consistently throughout the gameplay interface.
##### Statistics Update:
  - Checked that the statistics are updated accurately in the statistics menu after each gameplay session.
  - Verified that statistics such as win percentage are displayed correctly and reflect the user's progress.
##### Conclusion:
  - Overall, the testing confirms that Wordle functions smoothly, providing an enjoyable, colorful and error-free gaming experience across different browsers, devices, and themes.

### Validator Testing:
- HTML files pass through the [W3C validator](https://validator.w3.org/) with no issues found.

   - Result for index.html
   ![index.html](documentation/html-validator.png)

- CSS files pass through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.

   - Result for CSS.
   ![CSS](documentation/css-validator.png)

- The Javascript files passed through the validator testing with some warnings from [Javascript validator](https://jshint.com/)

   - Result for Javascript.
   ![Javascript](documentation/javascript-validator.png)

- All pages has a good Accessibility rating in Lighthouse.

   - Result for Lighthouse testing.
   ##### Light Mode:
   ![Light Mode Lighthouse](documentation/lighthouse-lightmode.png)

   ##### Dark Mode:
   ![Dark Mode Lighthouse](documentation/lighthouse-darkmode.png)

### Bugs:
##### Tile Color Change Bug: 
Initially, the tiles were not changing colors after flipping when different themes were set. Upon investigation, it was discovered that the respective color theme classes were not added to the tiles in the JavaScript code. Adding these classes resolved the issue.

##### Overlay Effect Disappearance: 
The overlay effect applied to the "How to Play" and "Statistics" modals disappeared when clicking anywhere inside the modals. Assigning different overlay classes to each modal solved this problem, ensuring the overlay effect remained intact.

##### Close Button Dysfunctionality: 
On smaller screens, the close button in the "How to Play" modal was not functioning properly. Increasing the z-index of the modal resolved this issue, allowing users to close the modal seamlessly.

##### Unintended Modal Opening: 
While the themes menu was open, users could click on other icons and open additional modals without closing the themes menu. To address this bug, a transparent overlay was created to block access to other icons when the themes menu is open, ensuring proper behavior.

##### Theme and Mode Reset Bug: 
Themes and modes were reverting to default settings upon page reset. Implementing local storage to save theme and mode selections ensured that these preferences persisted across page resets.

##### Flash of White Background: 
When the reset icon was pressed in dark mode, there was a brief flash of white background. This issue was debugged by moving the theme reset code to the top of the HTML, eliminating the flash of white background upon reset.

These bug fixes and debugging efforts contribute to a smoother and more seamless user experience, ensuring that the game functions as intended across different scenarios and interactions.

### Unfixed Bugs:
- There is no unfixed bugs to my knowledge.

## Technologies Used
### Main Languages Used:
- HTML5
- CSS3
- Javascript

### Frameworks, Libraries & Programs Used:
- Font Awesome - To add icons to the nav bar and close button in themes menu and statistics modal.
- GitPod - To create my html files & styling sheet before pushing the project to Github.
- GitHub - To store my repository for submission.
- Figma - To create wireframe for project.
- Coolors - To pick color for the website.
- Vistaprint - To create logo for the website.
- Am I responsive - To see the responsiveness of the screen.

## Deployment
1. In the GitHub repositories, navigate your way to the settings tab
2. From there on your left hand side find the 'Pages' tab, click on it.
3. In the build and deployment section, select 'source' and then 'deploy from a branch'
4. Then underneath that select 'main' and 'root' 
5. Click save
6. Your page should refresh automatically or manually with a link to your deployed website. 
7. The link can be found here: [Wordle](https://yagavi1994.github.io/Wordle/)

### How to Fork:
- Log in (or sign up) to [Github](https://github.com/).
- Go to respository for this project [Wordle](https://github.com/Yagavi1994/Wordle).
- Click the fork button in the top right corner.

### How to Clone:
- Log in (or sign up) to [Github](https://github.com/).
- Go to respository for this project [Wordle](https://github.com/Yagavi1994/Wordle).
- Click on the code button, select whether you would like to clone with HTTPS, SSH, GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the clone directory.
- Type 'git clone' into terminal and then paste the link you copied in step 3.
- Press enter.

## Credits
- I would like to credit the [Wordle](https://www.nytimes.com/games/wordle/index.html) game, which served as inspiration for this project. Wordle has been a favorite pastime for me, and its gameplay mechanics influenced the development of this project.
- I extend my gratitude to my mentor, Martina Terlevic, for her invaluable guidance and support throughout the project. Her encouragement and feedback played a significant role in shaping the project and boosting my confidence.
- Special thanks to my husband, who is a game designer, for his constructive criticism and attention to detail in the UI and UX aspects of the project. His insights greatly contributed to the refinement of the project.
- I would like to credit my cousin, a developer, for his assistance in resolving some JavaScript bugs and adding the confetti animation to the game.
- I appreciate the valuable inputs provided by a fellow student  Dajana Isbaner in the peer code review. 

#### Code
- I would like to credit [Web Dev Simplified](https://www.youtube.com/watch?v=Wak7iN4JZzU) for their helpful tutorial, which provided guidance and assistance in writing the code for the main function of the game.

