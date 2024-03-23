# WORDLE
Wordle is a well-known word-guessing game. The basic concept of the game is to guess the secret word in six tries, based on the color of the changing tile, which indicates the accuracy of our guess. By default, Wordle has a black and white color theme for dark and light modes. As a user, I wished it had more colorful themes. Therefore, as a developer, I decided to recreate the game with vibrant themes.

![Site-view-across-devices](Add screenshot of Am I Responsive?)

The link to the game can be found [HERE](https://yagavi1994.github.io/Wordle/)

## Tabel of Contents
+ [User Experience](#user-experience "User Experience")
  + [Existing User Goals](#existing-user-goals "Existing User Goals")
  + [New User Goals](#new-user-goals "New User Goals")
+ [Design](#design "Design")
  + [Wireframe](#wireframes "Wireframes")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery")
+ [Features](#features "Features")
  + [Landing Page](#landing-page "Landing Page")
  + [Services](#services "Services")
  + [Reviews](Reviews "Reviews")
  + [Portfolio](#portfolio "Portfolio")
  + [Contact](#contact "Contact")
  + [Thank You Page](#thank-you-page "Thank You Page")
  + [404 Error Page](#404-error-page "404 Error Page")
  + [Footer](#footer "Footer")
  + [Existing Features](#existing-features "Existing Features")
  + [Future Features](#future-features "Future Features")
+ [Testing and Challenges](#testing-and-challenges "Testing and Challenges")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Technologies Used](#technologies-used "Technologies Used")
  + [Main Languages Used](#main-languages-used "Main Languages Used")
  + [Frameworks, Libraries & Programs Used](#frameworks-libraries-programs-used "Frameworks, Libraries & Programs Used")
+ [Deployment](#deployment "Deployment")
  + [How to Fork](#how-to-fork "How to Fork")
  + [How to Clone](#how-to-clone "How to Clone")
+ [Credits](#credits "Credits")
  + [Content](#content "Content")
  + [Media](#media "Media")
  + [Youtube](#youtube "Youtube")

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

I made my wireframe for the game using Figma.

![Mobile Wireframe]()
![Desktop Wireframe]()

### Colour Scheme:

The primary enhancement to the game from its original version is the inclusion of themed color palettes for the tiles. Key colors such as purple, orange, blue, and red have been carefully curated for this purpose. In the light mode, gentle and muted hues of these colors were chosen to create a soothing visual experience for players.

Conversely, in the dark mode, deeper and richer shades of purple and blue were implemented to cater to players who prefer a very dark background. This contrasts with the lighter tones of orange and red, which offer a touch of brightness to the dark-mode interface without being overly intense. The goal was to provide options for players with varying preferences regarding the darkness of the background.

Throughout both light and dark modes, the emphasis was placed on avoiding excessively bright or harsh colors that could strain the player's eyes. By maintaining a balance between aesthetics and visual comfort, the game aims to enhance the overall gaming experience for players, regardless of their chosen mode.

![Light Mode]()
![Dark Mode]()

### Typography:

Using the default "Arial" font for the game was a deliberate choice to maintain simplicity and clarity in the overall design. By opting for a widely recognized and easy-to-read font like Arial, the focus remains on the gameplay itself without introducing unnecessary distractions or complexities.

The decision to avoid excessive styling aligns with the goal of keeping the game's appearance clean and neat. Arial's straightforward and legible characteristics ensure that players can quickly interpret the text elements within the game interface without any hindrance. This approach fosters a seamless user experience, where players can engage with the game effortlessly without being overwhelmed by unnecessary design flourishes.

> "The aesthetics of the website should be simple and neat to avoid any distractions from the gameplay."

## Features

### Existing Features

#### Landing Page:
The landing page is the main and sole page of the web application. It features a navigation bar at the top, providing access to various functionalities. In the middle of the landing page lies the game area, comprising a grid of tiles where users can input letters either by typing or clicking. Directly below the game area is a keyboard interface, allowing users to select letters to form words for guessing. Finally, at the bottom of the page, there is a footer displaying a copyright message.

![Landing Page]()

#### Navigation bar:
The navigation bar on the landing page features the logo on the right side, serving as a visual identifier for the web application. On the left side of the navigation bar, users can find how to play, reset, mode, themes and statistics icons representing different functionalities to interact with the web application.

> "The user interface should be welcoming and intuitive, making it easy for first-time players to navigate and interact with the game."

![Navigation Bar]()

The features of those icons are explained as follows.

#### How to Play: 
When clicked, this icon opens a modal that offers comprehensive instructions on how to play the game. It encompasses details about the game's objective, rules, and tips for achieving success during gameplay. Additionally, the background color of the "How to Play" modal dynamically adjusts according to the current theme selected by the user. This feature enhances the overall visual appeal of the game, making it more vibrant and engaging for players.

> "The game should offer straightforward instructions on how to play, ensuring new players understand the mechanics without confusion."

> "Clear explanations should be given regarding the conditions for winning or losing the game, helping new players set their objectives."

![How To Play]()

#### Reset: 
This icon allows users to reset the game or start a new round. Upon clicking, any ongoing game progress is cleared, and the game board is reset to its initial state, ready for a fresh gameplay session.

> "Facilitating easy game resets allows frequent players to quickly start new rounds, promoting replayability and continuous enjoyment of the game."

![Reset]()

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

##### Flip Animation:
When the user enters a valid guess, the tiles in the game area perform a flipping animation to visually indicate the validation of the guess. The game then proceeds to validate the guess against the correct answer. Based on this validation, each tile receives a class that determines its color and visual representation:

- Green Tiles: Tiles representing letters that are present in the word and in the correct position are assigned a class that gives them a green color. This indicates that the user has guessed these letters correctly.

- Yellow Tiles: Tiles representing letters that are present in the word but not in the correct position are assigned a class that gives them a yellow color. This indicates that the user has guessed these letters correctly but in the wrong position.

- Grey Tiles: Tiles representing letters that are not present in the word are assigned a class that gives them a grey color. This indicates that the user has guessed these letters incorrectly.

By assigning these classes and colors to the tiles, the game provides clear visual feedback to the user, helping them understand the correctness of their guess and guiding them in subsequent attempts. Additionally, the flipping animation adds a engaging element to the gameplay experience, enhancing user immersion and enjoyment.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Flip Animation]()

##### Shake Animation:
If a word not in the list of valid words for gameplay is entered by the user, the tiles in the game area respond with a shake animation to indicate an invalid guess. This visual cue helps users recognize that their input does not match any valid words in the game's vocabulary, prompting them to try another word.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Shake Animation]()

##### Dance Tile Animation:
When the user guesses the correct word, the tiles perform a dance animation, celebrating the user's victory. This animated display adds a touch of excitement and reward to the gameplay experience, reinforcing the user's success and creating a positive interaction with the game.

> "Adding fun animations keeps the gameplay engaging and interesting."

![Dance Animation]()

##### Alert Messages:

Alert messages are displayed on the tiles for various scenarios to guide the user to play more effectively:

When the user enters an invalid guess, an alert message stating "Not in word list." is displayed. This informs the user that the entered word is not valid for the game.

If the user submits a word before entering 5 letters, an alert message displays "Not enough letters." This reminds the user to input a complete word before submitting.

When the user correctly guesses the word, an alert message appears saying "Congratulations, You win." to celebrate the user's victory.

If the user is unable to guess the word after 6 attempts, an alert message displays "Oops.. You missed it.. The correct word is ' [correct word] '." This informs the user of the correct word, providing closure to the game round.

These alert messages assist the user by providing feedback and guidance throughout the gameplay, ensuring a smoother and more engaging experience.

> "- The user interface should be welcoming and intuitive, making it easy for first-time players to navigate and interact with the game."

![Alert Messages]()

#### Keyboard Area:
The keyboard area comprises a keyboard interface that allows users to input letters into the tiles either by clicking or touching them, depending on the device they are using. The colors of the keyboard dynamically change between dark grey and half-white based on the selected dark and light mode themes. This ensures consistency with the overall color scheme of the interface, providing a visually cohesive experience for the user across different modes.

![Keyboard Area]()

#### Footer:
The footer of the landing page contains a copyright message positioned at the bottom of the page.

![Footer]()

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

## Testing and Challenges:
- I came across many challenges while creating this website. One of the major challenge which I kept facing again and again was positioning the contents in the centre of the page. Then after many trial and errors, I learnt to create a parent div and give flex values to it helped me to centre the content in many places.
- I was confused at many places about what unit to use for size of the contents. Then I figured out using percentage helps in places where responsiveness is needed and in other places I mostly went with pixels.
- Initially I struggled a lot with images since it was not uploading when I added it to the images folder and used it's relative path. Then I remebered studying somewhere in lessons about image hosting site. I googled about the same and came across "Imgbb.com" website for image hosting, which helped to host my image and solve all my issues with it.
- Whenever I felt like my code is not giving the desired style I want, I would google my query and mostly I would find my answer in it.
- For Portfolio I wanted to create a gallery which when clicked should open and display the full image. I found a YouTube tutorial for the same and followed it to achieve the desired result.
- Similarly, to create the Masonry Grid of my Portfolio too I followed a YouTube tutorial.
- In contact page, the contact information was too long for small screens, so when was confused about what to do, got an idea of adding scroll bar to overflowing content which was learnt in lessons helped.
- I was not aware of creating a form-dump page when clicked submit in the form, my mentor Martina pointed that out and after which I added a customised form-dump page to my form.
- It was quite hard designing 404 page when compared to others because any changes made to it can be seen only after deploying it in the github. So it took me more time designing this page for me when compared to others.
- I tested my website in all 4 screen sizes and which seems to work responsively without any error.
- I tested all my external links which also opens fine in new tabs.
- All my images seems to load perfectly without any delay in all browsers and devices.
- I tested my codes in validator, initially there was few errors about not to use "h1" anywhere other than main heading, stray tags, to use div instead of sections etc., and I corrected all those errors and recieved pass in the same for both HTML and CSS.
- Tested the site which opens in Chrome & Safari without issues.


### Validator Testing:
- HTML files pass through the [W3C validator](https://validator.w3.org/) with no issues found.
   - Result for index.html
   ![index.html](https://i.ibb.co/WKFTTG2/Screenshot-2024-02-08-at-11-21-14-am.png)
   - Result for portfolio.html
   ![portfolio.html](https://i.ibb.co/vZ0X4qm/Screenshot-2024-02-08-at-11-26-46-am.png)
   - Result for contact.html
   ![Contact](https://i.ibb.co/VBBTQP4/Screenshot-2024-02-08-at-11-28-01-am.png)
   - Result for thankyou.html
   ![Thank You](https://i.ibb.co/gzgj2sX/Screenshot-2024-02-08-at-11-34-49-am.png)
   - Result for 404.html
   ![404](https://i.ibb.co/31k4rm0/Screenshot-2024-02-10-at-5-16-31-pm.png)


- CSS files pass through the [Jigsaw validator](rs ) with no issues found.
![Jigsaw validator message](https://i.ibb.co/v4kgHKD/Screenshot-2024-02-08-at-11-42-47-am.png)

- All pages has a good Accessibility rating in Lighthouse
   - Result for index.html
   ![index.html](https://i.ibb.co/fGF4c6Y/Screenshot-2024-02-08-at-11-09-22-pm.png)
   - Result for portfolio.html
   ![portfolio.html](https://i.ibb.co/9cXvwt9/Screenshot-2024-02-08-at-11-13-46-pm.png)
   - Result for contact.html
   ![Contact](https://i.ibb.co/k9MDQJw/Screenshot-2024-02-08-at-11-10-04-pm.png)
   - Result for thankyou.html
   ![Thank You](https://i.ibb.co/k9RTYFP/Screenshot-2024-02-08-at-11-11-18-pm.png)
   - Result for 404.html
   ![404](https://i.ibb.co/X5y4S6v/Screenshot-2024-02-10-at-5-54-05-pm.png)


### Unfixed Bugs:

## Technologies Used
### Main Languages Used:
- HTML5
- CSS3

### Frameworks, Libraries & Programs Used:
- Google Fonts - for the font families: Karla was used for font. San-serif was used as a default font.
- Font Awesome - to add icons to the social links in the footer element and home icon in Thank You Page.
- GitPod - to creat my html files & styling sheet before pushing the project to Github.
- GitHub - to store my repository for submission.
- Adobe Photoshop - were used to edit images and create mockups of the project in various devices.
- Imgbb - to host my images, since directly adding my images to assets was not working as the size of images were huge.
- Rgbacolorpicker - to pick color for the website.

## Deployment
1. In the GitHub repositories, navigate your way to the settings tab
2. From there on your left hand side find the 'Pages' tab, click on it.
3. In the build and deployment section, select 'source' and then 'deploy from a branch'
4. Then underneath that select 'main' and 'root' 
5. Click save
6. Your page should refresh automatically or manually with a link to your deployed website. 
7. The link can be found here: [Siihraz Shades](https://yagavi1994.github.io/Siihraz-Shades/)

### How to Fork:
- Log in (or sign up) to [Github](https://github.com/).
- Go to respository for this project [Siihraz-Shades](https://github.com/Yagavi1994/Siihraz-Shades).
- Click the fork button in the top right corner.

### How to Clone:
- Log in (or sign up) to [Github](https://github.com/).
- Go to respository for this project [Siihraz-Shades](https://github.com/Yagavi1994/Siihraz-Shades).
- Click on the code button, select whether you would like to clone with HTTPS, SSH, GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the clone directory.
- Type 'git clone' into terminal and then paste the link you copied in step 3.
- Press enter.

## Credits
- I would like to credit my mentor Martina Terlevic for her guidance and support. To help me identify whether have I fulfilled all the criterias required for the project to be complete and for sharing me the links of websites that would be helpful while creating website.
- I would credit the Love Running project walkthrough, which helped a lot in creating the basic structure of my website. I wouldn't have been able to create that drop-down nav toggle menu without it.
- My husband supported me and helped a lot with this project by giving his constant constructive feedbacks and helping me with photoshopping images wherever required, so I would like to thank him for his help and support.
- I got a friend through slack named Harry. I would like to thank him for giving his idea to create a customised 404 error page. He also helped me in clarifying my doubts when I didn't know how to make the 404 error page work.
- The Youtube tutorial I followed to create [The Portfolio Masonry Grid](https://youtu.be/3TN9J3pCn6k?si=pVdm875MrmF8zwGU)
- Another youtube tutorial followed to create [The Pop-up Image Gallery](https://youtu.be/uxYfxLsUuP0?si=SdAEH1rWO-zgVJ6N)
- The Wix website template which acted as a wireframe for my project [Wix Template](https://rb.gy/384srs)
- My dear friend Sindhu, for whom I created this website. Who believed in me and gave permission to create this website for her and provided me with all the necessary informations and images.

### Media:
- [The Logo Image](https://rb.gy/pp143q)
- [Freepik.com](https://www.freepik.com/)

### Youtube:

- [Masonry Grid](https://youtu.be/3TN9J3pCn6k?si=pVdm875MrmF8zwGU)
- [Pop-up Image](https://youtu.be/uxYfxLsUuP0?si=SdAEH1rWO-zgVJ6N)
