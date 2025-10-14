# JS Projects

A collection of JavaScript projects.

This repository was created in January 2025.

GitHub: [https://github.com/k26rahul/js-projects](https://github.com/k26rahul/js-projects)

Live site: [https://k26rahul.github.io/js-projects/](https://k26rahul.github.io/js-projects/)

## Projects

- [Basic Calculator](https://k26rahul.github.io/js-projects/basic-calculator)
- [Dice Roll Simulator](https://k26rahul.github.io/js-projects/dice-roll-simulator)
- [Gallery for Vishnu](https://k26rahul.github.io/js-projects/gallery-for-vishnu)
- [Heart Trail Animation](https://k26rahul.github.io/js-projects/heart-trail-animation)
- [Mouse Event](https://k26rahul.github.io/js-projects/mouse-event)
- [Pomodoro Timer](https://k26rahul.github.io/js-projects/pomodoro-timer)
- [Ramakoti Yagna](https://k26rahul.github.io/js-projects/ramakoti-yagna)
- [Random Password Generator](https://k26rahul.github.io/js-projects/random-password-generator)
- [Restaurant Menu (Vue)](https://k26rahul.github.io/js-projects/restaurant-menu-vue)
- [Restaurant Menu with Router](https://k26rahul.github.io/js-projects/restaurant-menu-router)
- [Restaurant Menu with Store](https://k26rahul.github.io/js-projects/restaurant-menu-store)
- [Restaurant Menu with Vite](https://k26rahul.github.io/js-projects/restaurant-menu-vite/dist/)
- [Rock Paper Scissors Game](https://k26rahul.github.io/js-projects/rock-paper-scissors-game)
- [Tip Calculator (Vue)](https://k26rahul.github.io/js-projects/tip-calculator-vue)
- [Tip Calculator (Vanilla JS)](https://k26rahul.github.io/js-projects/tip-calculator-vanilla)

## Scripts

Python scripts used for project maintenance:

### process_screenshots.ipynb

Processes project screenshots:

1. Reads projects from `assets/projects_data.json`
2. Locates JPG/PNG files by project slug
3. Crops images to 4:3 aspect ratio
4. Resizes to 400px width
5. Converts to RGB format if needed
6. Saves optimized JPG output

### update_project_data.ipynb

Updates `assets/projects_data.json` by:

1. Reading existing project data
2. Getting creation dates from `index.html` files
3. Updating project timestamps
4. Sorting projects by date
5. Writing updated JSON output
