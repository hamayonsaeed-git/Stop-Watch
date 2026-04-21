# Stop Watch ⏱️

A simple and elegant stopwatch web application built with vanilla JavaScript, HTML, and CSS.

## Features

- **Easy to Use**: Simple and intuitive interface with three main buttons
- **Time Tracking**: Displays time in `HH:MM:SS:FF` format (Hours:Minutes:Seconds:Fraction)
- **Controls**:
  - ▶️ **Start** - Begin the stopwatch
  - ⏹️ **Stop** - Pause the stopwatch
  - 🔄 **Reset** - Reset the time to 00:00:00:00
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Modern dark theme with gradient background

## How It Works

1. Click the **Start** button to begin timing
2. Click the **Stop** button to pause the timer
3. Click the **Reset** button to clear and start over

### Time Units

- **Hours**: Count from 00 to 99 (resets at 100)
- **Minutes**: Count from 00 to 59 (increments when seconds reach 60)
- **Seconds**: Count from 00 to 59 (increments when fractions reach 100)
- **Fraction**: Two-digit decimal showing hundredths of a second (00 to 99)

## Project Structure

```
Stop-Watch/
├── index.html      # Main HTML file with inline JavaScript
├── style.css       # Styling and responsive design
├── stopwatch.js    # Backup JavaScript file (not currently used)
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (Vanilla)** - Functionality and logic
- **Font Awesome** - Icons for buttons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hamayonsaeed-git/Stop-Watch.git
```

2. Navigate to the project folder:
```bash
cd Stop-Watch
```

3. Open `index.html` in your web browser

## Learning Project

This stopwatch was built as a learning project for JavaScript beginners. It demonstrates:
- DOM manipulation
- Event listeners
- Timer functions (`setInterval`, `clearInterval`)
- String formatting and padding
- Conditional logic for time increments and rollovers

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for personal and educational use.

---

**Created by**: Muhammad Hamayon Saeed  
**Last Updated**: April 22, 2026
