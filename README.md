# Text Analyzer

This is a React-based Text Analyzer application that allows users to input text and perform various analyses, such as counting unique words, character counts, and searching/replacing text.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Bonus Features](#bonus-features)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Text Input**: Users can input and edit text directly within a content-editable area.
- **Unique Word Count**: Automatically counts the number of unique words in the input text.
- **Character Count**: Displays the total number of characters in the text.
- **Search and Highlight**: Users can search for a specific string, which highlights all occurrences in the text.
- **Replace Functionality**: Users can replace specified text with another string, with options for replacing one or all occurrences.
- **Auto Highlight and Clear**: After performing a search or replace, highlighted text will automatically clear after 2 seconds.
- **Approach**: The application is built using a modular approach in React, allowing for reusable components and easier maintainability.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For the application logic.
- **Tailwind CSS**: For styling the components.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alokvns48/text-analyzer.git
   cd text-analyzer
   ```
2. Install dependencies: Make sure you have Node.js installed. Then run:
    ```bash
    npm install

    ```
3. Start the development server:
    ```bash
        npm run dev
    ```

4. Open your browser and navigate to http://localhost:3000 to see the app in action.


## Usage

- Enter text in the text area.
- The unique word count and character count will update automatically.
- Use the search input to find a specific string and highlight it.
- Use the replace input to replace specific text with another string, choosing to replace one or all occurrences.

## Bonus Features

- **Auto Highlight and Clear**: After performing a search or replace, highlighted text will automatically clear after 2 seconds.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

