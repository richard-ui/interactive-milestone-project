# Interactive Project

## Rick's Restaurant's

- Link to Project - [View](https://richard-ui.github.io/interactive-milestone-project/)

![All_Devices](/assets/images/responsive_image.png)

## Brief Introduction to the Project

The purpose of this website is to load a map which implements the Googlemaps api functionality that shows a number of Restaurant markers on the map.
These markers are interactive and allow customers to view, click and book a reservation table using a contact form.

## UX User Stories

- As a First Time user I want to understand the main concept of the site and learn the intention of its relevance.

- As a First time user I want to be able to navigate the site in an easy and efficient way without any complex design.

- As a First time user I want to be able to read information in a clear and concise way, with appropriate font and content formatted in a consistent way on the page.

- As a First time user, I want to be able to see a Map that is scaled nicely on the page.

- As a Customer, I'd like to have an option that allows me to search restaurants from a particular region/city that will display location markers within a specific area on the map.

- As a Customer, I want to be able to interact with the Markers on the GoogleMap, allowing them to show relevant information in an infoWindow.

- As a Customer, I want to be able to use the form as way of communication to book a slot for a particular Restaurant.

## Design

1. Colour Scheme
- The two main colours used on the site are blue and white. Using a dark and white color together contrasted nicely with the flow of the page.
2. Typography
- The 'Epilogue' font is the main font used throughout the website with Sans Serif as the fallback font in case for any reason the font is not supported by the browser.

## Wireframes

- Home Page Wireframe - [View](https://github.com/richard-ui/interactive-milestone-project/tree/master/assets/wireframes/MapPage.pdf)

- Mobile Wireframe - [View](https://github.com/richard-ui/interactive-milestone-project/tree/master/assets/wireframes/Mobile.pdf)

## Languages Used

- HTML5

  - This was the main language used and provided the website with semantic elements, giving each section a meaningful name, such as nav, section and footer to easily define.

- CSS3

- JavaScript

    -Programming language that was responsible for calculating, manipulating and validating data.

## Frameworks, Libraries & Programs Used

1. Bootstrap 4.5
- Bootstrap is a CSS framework and used throughly throughout the website. The main target of using BootStrap within my site was to make it easier
making the site responsive on mobile devices.
2. Hover.css:
- Hover.css was used added in the head tag. This was used for implementing a cool looking hover effect when hovering over navbar links.
3. Google Fonts:
- Google fonts were used to import the 'Epilogue' font into the style.css file which is used on all pages throughout the project.
4. Font Awesome:
- Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
5. jQuery:
- jQuery is a feature of bootstrap to make the navbar responsive in Javascript.
6. Git
- Git was used for version control by utilizing the Gitpod terminal and initialising commands.
7. GitHub:
- GitHub is used to store the projects code after being commited from Gitpod.
8. Gitpod
- Gitpod is a Program that contained the project workspace and was used to develop and view the html/css inside it.
9. Balsamiq:
- Balsamiq was used to create the wireframes during the design process.
The Technologies that were used were new and updated versions of HTML and CSS.

## Testing

- The W3C Markup Validator was a feature used to validate all html elements on each page.

- Whereas the W3C CSS Validator Services were used to validate every snippet of css in the style sheet.

- JSHint was used to validate all the JavaScript code within each file.
  - ![All_Devices](/assets/images/jshint.png)

- These were used to prevent mistakes and would run snytax errors if there was something wrong.

## Testing User Stories from User Experience (UX) Section

- First Time Visitor Goals

  i. As a First Time Visitor, I want to easily understand main concept of the site and learn the intention of its relevance.
     
     - Upon entering the site, users are automatically greeted with a jumbotron which was a flexible component that showcased what the site was about, containing a bold title. 

  ii. As a First time user I want to be able to navigate the site in an easy and efficient way without any complex design.

    - The overall site has been made with a fluid design, with a navigation bar that clearly defines links to each page.
     
    - On the Map Page when the reservation form has been submitted the page will refresh and take the user back to the top of the page.

  iii. As a First time user, I want to be able to see a Map that is scaled nicely on the page.

    - Underneath the Jumbotron on the Map page is a GoogleMap that takes up the width of the screen and is made clear for the viewer to see the markers.
    
    ![map](/assets/images/map_load.png)

- Customer Goals

   i. As a Customer, I'd like to have an option that allows me to search restaurants from a particular region/city that will display location markers within a specific area on the map.

    - A dropdown list is clearly visible and displayed above the the map.

    - The list is an interactive box that contains a list of Cities from the NorthWest, which allows them to select only one option.

    -  Once selected, Red Markers will then display within that given area on the Google Map.

     ![searchCity](/assets/images/searchcity.png)
   
   ii. As a Customer, I want to be able to interact with the Markers on the GoogleMap, allowing them to show relevant information in an infoWindow.
     
     - When the Red Markers appear on the map, The user is given a choice of which Red marker they want to select.

     - The user can hover over a marker which a white box, named an 'infoWindow' will pop up over the marker.

     - This displays information such as a Name, Description, Image and a Button Representing a certain location.

     ![markerinfo](/assets/images/markers.png)

  ii. As a Customer, I want to be able to use the form as way of communication to book a reservation slot for a particular Restaurant.

     - The form has input fields that contain labels to identity what they mean aswell as icons to emphasise there relevance even more, so the user understands what to enter into the text box.
     
     - Once the submit button is clicked it, all fields will be validated with errors next to fields that are empty. If successful a message saying 'E-mail Message Sent' will appear on the Form.
     
     - Once validated, an email will be sent to the developers email account to make them aware of the reservation.

     ![form](/assets/images/form.png)

## Further Testing

- The website was tested on multiple browsers such as Microsoft Edge, Opera and FireFox, but the main one that was used was Chrome. This was because I was using the chrome extension at the time for gitpod and I felt chrome was fast and reliable.

- The website was viewed on iPhone, Android, Laptop and Desktop Devices. There was also use of the developer tools as a faster way to look at the site becoming responsive such as using the example devices in the tools area. Friends and family members were asked
  to review the site and documentation to point out any bugs and/or user experience issues.

- ### Chrome
 
   ![Chrome](/assets/cross-browser/chrome.png)

- ### Microsoft Edge
 
   ![Edge](/assets/cross-browser/edge.png)

- ### FireFox
 
   ![FireFox](/assets/images/big_chief.jpg)


- ### Responsiveness
 
   ![Responsinator](/assets/cross-browser/responsinator.png)

- The Responsinator tool was a feature used to view the deployed site and look to see how each device would display it. Device screens such as Android, iPhone and iPads were used to view on. In doing so
they were viewed in a landscape and portrait perspective.

## Deployment

- Step-by-step guide

1. Log in to GitHub
2. Locate the repositories and chose one that you want to Deploy
3. Press the "Settings"
4. Scroll down to the GitHub pages section
5. Under "Source" enter the drop down list with the first value of "None" and select "Master branch" instead
6. The page will refresh to be took to the top of the page
7. Scroll down until you get to the "Github pages" section to identify your now deployed link to your website

## Forking the GitHub Repository

Forking the repsoitory means we are making a copy of the original version  to edit and modify any changes without affecting the original.

- Step-by-step guide

1. Log in to GitHub and locate the Github Repository
2. At the top of the Repository (not top of the page) just above the "Settings" button on the menu, locate the "Fork" button
3. You should now have a copy of the original Repository in your GitHub Account

## Making  a Local Clone

1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

    `$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

7. Press Enter. Your local clone will be created.

    `$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

## Content
- The Images of Restaurants that were displayed in the infoWindows were taken from Google Images using Googles advanced search tool to verify there free of use availability.

## Code
- Code to help design Reservation Form input fields was took from w3schools [youtube.com](https://www.youtube.com/watch?v=Bs2jdg0oRLM)

- Code to implement sticky footer in media queries, using 'bottom: 0' and 'position: fixed'  [w3schools.com](https://www.w3schools.com/howto/howto_css_fixed_footer.asp)

- Code for styling Form icons within input Fields was taken from [geeksforgeeks.org](https://www.geeksforgeeks.org/css-to-put-icon-inside-an-input-element-in-a-form/)

- Code to colour Navbar toggler lines was taken from [geeksforgeeks.org](https://www.geeksforgeeks.org/how-to-change-hamburger-toggler-color-in-bootstrap/)

- Code to check whether an input is empty [techiedelight.com](https://www.techiedelight.com/check-input-text-box-empty-javascript/#:~:text=To%20check%20if%20input%20text,undefined%20on%20an%20empty%20collection.)

## Acknowledgements
- My Mentor for continuous helpful feedback.

- Slack was a very helpful useful source to gain information about ceratin JavaScript functionality.

- Tutor support at Code Institute for their support.
