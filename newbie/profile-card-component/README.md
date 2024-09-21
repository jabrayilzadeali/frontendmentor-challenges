# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Profile card component solution](#frontend-mentor---profile-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview
- Challenge is to build the design in any technology you know. Thank you FrontEndMentor for providing this design!!

### The challenge

- Build out the project to the designs provided

### Screenshot

![desktop](screenshot/desktop.png)
![mobile](screenshot/mobile.png)


### Links

- FrontEndMentor profile: [here](https://www.frontendmentor.io/solutions/profilecardcomponent-qQLu5YMt-6)
- You can view the site: [here](https://jabrayilzadeali.github.io/profile-card-component-by-frontendmentor/)


## My process
- I use mobile first workflow

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Profile card component</title>

  <link rel="stylesheet" href="styles/style.css">
  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <main>
    <div class="main-bg-images">
      <img class="top-left-img" src="/images/bg-pattern-top.svg" alt="">
      <img class="bottom-right-img" src="/images/bg-pattern-bottom.svg" alt="">
    </div>
    <div class="container">
      <div class="top">
        <img class="bg" src="images/bg-pattern-card.svg" alt="">
        <img class="person" src="images/image-victor.jpg" alt="">
      </div>
      <div class="bottom">
        <div class="person-info">
          <h1 class="name">
            Victor Crest
            <span class="age">26</span>
          </h1>
          <p class="city">London</p>
        </div>
        <div class="grid border-top">
          <div class="col">
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          <div class="col">
            <h3>803K</h3>
            <p>Likes</p>
          </div>
          <div class="col">
            <h3>1.4K</h3>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
</html>

```
```css
:root {
    --clr-cyan: hsl(185, 75%, 39%);
    --clr-dark-blue: hsl(229, 23%, 23%);
    --clr-grayish-blue: hsl(227, 10%, 46%);
    --clr-grayish-blue-less-opacity: hsla(227, 10%, 46%, 0.3);
    --clr-dark-gray: hsl(0, 0%, 59%);
}
/* Josh Comeau CSS_RESET */
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}

/*
    2. Remove default margin
  */
* {
    margin: 0;
}

/*
    3. Allow percentage-based heights in the application
  */
html,
body {
    height: 100%;
}

/*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

/*
    6. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

/*
    7. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
    font: inherit;
}

/*
    8. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

/*
    9. Create a root stacking context
  */
#root,
#__next {
    isolation: isolate;
}
/* Josh Comeau CSS_RESET end */
body {
    font-family: 'Kumbh Sans', sans-serif;
}

main {
    display: grid;
    place-content: center;
    height: 100%;
    z-index: 1;
    text-align: center;
    background-color: var(--clr-cyan);
}

.main-bg-images {
    position: absolute;
    z-index: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
}

.top-left-img {
    position: absolute;
    width: 450px;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
}

.bottom-right-img {
    position: absolute;
    width: 450px;
    z-index: 0;
    bottom: 0;
    right: 0;
    transform: translateX(50%) translateY(20%);
}

@media screen and (min-width: 650px) {
    .top-left-img {
        width: 550px;
        transform: translateX(-40%) translateY(-40%);
    }

    .bottom-right-img {
width: 550px;
        transform: translateX(40%) translateY(40%);
    }
}

@media screen and (min-width: 1050px) {
    .top-left-img {
        width: 750px;
        transform: translateX(-20%) translateY(-40%);
    }

    .bottom-right-img {
        width: 750px;
        transform: translateX(10%) translateY(40%);
    }
}

.border-top {
    border-top: 1px solid var(--clr-grayish-blue-less-opacity);
}

.background {
    height: 2rem;
    /* background-image: url("../images/bg-pattern-top.svg"); */
}

.container {
    z-index: 1;
    width: 340px;
    border-radius: 1rem;
    background-color: hsl(0, 0%, 100%);
    overflow: hidden;
}

.top {
    position: relative;
    height: 200px;
}

.bg {
    width: 100%;
}

.person {
    display: block;
    margin: 0 auto;
    border: 10px solid white;
    border-radius: 5rem;
    transform: translateY(-50%);

}

.person-info {
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.name {
    color: var(--clr-dark-blue);
    font-size: 1.3rem;
}

.name span{
    color: var(--clr-grayish-blue);
    font-weight: 400;
}

.city {
    color: var(--clr-grayish-blue);
}

.grid {
    padding: .5rem 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
}

.grid p {
    color: var(--clr-dark-gray)
}



```

## Author

- Github - [jabrayilzadeali](https://github.com/jabrayilzadeali)
- Frontend Mentor - [Jabrayilzade Ali](https://www.frontendmentor.io/profile/jabrayilzadeali)
- Twitter - [Jabrayilzade Ali](https://twitter.com/JabrayilzadeAli)