# Dice Probability App

## Overview

This ReactJS application simulates a customizable dice roll experience. Users can choose between even and custom probabilities for the dice faces, roll the dice based on these probabilities, and view the results.

## Features

1. **Even Probability Dice Roll**: Users can select an option to roll a dice with equal probability for each face.
2. **Custom Probability Dice Roll**: Users can input specific probabilities for each of the six faces of the dice.
3. **Roll the Dice**: The app rolls the dice according to the selected probabilities.
4. **View Results**: Users can see the result of their roll and choose to re-roll if desired.

## Technology Stack

- **ReactJS**: Front-end library for building user interfaces.
- **React Router**: For navigation between pages.

## Components

### 1. App.js

Manages global state and routing.

### 2. Page1.js

Allows users to select between even or custom dice probabilities.

### 3. Page2.js

Handles the dice roll according to the selected probabilities.

### 4. Page3.js

Displays the result of the dice roll and offers a re-roll option.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NatnaeAssefa/roll-dice.git
   cd dice-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Page 1: Select Dice Probability

- **Even Probability**: Click the "Even Probability" button to use a uniform 1/6 probability for each dice face.
- **Custom Probability**: Click the "Uneven Probability" button to input custom probabilities. Ensure the total sums to 1.

### Page 2: Roll the Dice

- Click the "Roll" button to roll the dice according to the selected probabilities.

### Page 3: View Results

- The result of the dice roll is displayed.
- Click "Re-roll" to go back to Page 1 and select probabilities again.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [natnaelassefa27@gmail.com](mailto:natnaelassefa27@gmail.com).