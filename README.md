# Crop Data Dashboard

Get started with the template by clicking `Use this template` button on the top of the page.

[Documentation](https://mantine.dev/guides/vite/)

# Developer :-
Sourav Kumar Gupta

# Crop Data Dashboard

A React-based application for visualizing crop data with yearly statistics and crop-specific statistics using a responsive data table.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)


## Project Description

The Crop Data Dashboard provides a user-friendly interface for displaying crop production data. The application features two main sections:

1. **Yearly Crop Data**: Displays aggregated data on crop production by year.
2. **Crop Statistics**: Shows statistics related to different crops, including average yield and cultivation area.

This project uses React for the frontend, Mantine for UI components, and includes a responsive design to ensure accessibility on various devices.

## Features

- **Responsive Design**: Adaptable layout for different screen sizes.
- **Data Visualization**: Display data in tabular format with pagination.
- **Custom Theme**: Consistent look and feel using Mantine's theming capabilities.
- **Dynamic Data**: Aggregates and displays data based on user input.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Mantine**: React components and hooks library.
- **TypeScript**: JavaScript with static type definitions.
- **CSS**: Styling the application.
- **JSON**: Data format for storing and loading data.

## Setup Instructions

To get started with the project, follow these steps:
### 1. Clone the Repository
   ```sh
    git clone [link of repo]
    cd Crop-Data-Dashboard
```
### 2.  Install Dependencies
  ```sh
yarn add
```
### 3. Start the Development Server
```sh
yarn dev
```

Open http://localhost:5173 in your browser to view the application.

## Usage

- **Yearly Crop Data**: This section displays aggregated crop production data by year. The table includes columns for:
  - `year`: The year of the data.
  - `maxProductionCrop`: The crop with the highest production for that year.
  - `minProductionCrop`: The crop with the lowest production for that year.

- **Crop Statistics**: This section provides statistics for different crops. The table includes columns for:
  - `crop`: The name of the crop.
  - `avgYield`: The average yield of the crop.
  - `avgCultivationArea`: The average area where the crop is cultivated.

To navigate through the tables, use the pagination controls provided at the bottom of each table. These controls allow you to switch between pages of data, with a default of 10 rows per page.

### Example

Here's a brief example of how the data might be displayed:

#### Yearly Crop Data

| Year | Max Production Crop | Min Production Crop |
|------|----------------------|----------------------|
| 2020 | Corn                 | Wheat                |
| 2021 | Soybean              | Barley               |

#### Crop Statistics

| Crop      | Avg Yield | Avg Cultivation Area |
|-----------|-----------|-----------------------|
| Corn      | 5.278 tons/acre | 2.856 acres           |
| Soybean   | 3.875 tons/acre | 15.256 acres           |

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your proposed changes. Make sure to follow the coding guidelines and include relevant tests for your changes.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.
