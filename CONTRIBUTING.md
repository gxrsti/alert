# Contributing to Our Project

Thank you for considering contributing to our project! Your help is greatly appreciated, and it's contributions from the community that make this project thrive. To ensure a smooth and effective collaboration, please follow the guidelines below.

## Reporting Issues / Suggesting New Features

If you encounter a bug or have an idea for a new feature, please let us know by opening an issue. To do so, [open an issue here](https://github.com/gxrsti/alert/issues).

When reporting an issue or suggesting a new feature, please provide as much detail as possible, including:

- A clear and descriptive title.
- A detailed description of the problem or feature.
- Steps to reproduce the issue (if applicable).
- Any relevant error messages or screenshots.

## Development Workflow

If you'd like to contribute by fixing an existing issue or adding a new feature, please follow this development workflow:

1. **Fork this repository**: Click the "Fork" button on the top right of this GitHub page to create a copy of the project in your GitHub account.

2. **Clone your fork**: Use `git clone` to clone the repository to your local machine.

    ```bash
    git clone https://github.com/your-username/alert.git
    ```

3. **Create a new feature branch**: Before making any changes, create a new branch based on the `master` branch. Use a descriptive branch name that relates to the issue or feature you're working on.

    ```bash
    git checkout -b feature/my-new-feature
    ```

4. **Install dependencies**: Make sure you have the required dependencies installed. You can use [pnpm](https://pnpm.io/) to install them.

    ```bash
    pnpm install
    ```

5. **Run the development website**: Start the development server to test your changes.

    ```bash
    pnpm run dev:website
    ```

6. **Implement your changes**: Make your changes and ensure that all tests are passing. You can also add new tests if necessary.

7. **Commit your changes**: Follow the [conventional commits] pattern for your commit messages. In short, commit types include:
   - **feat**: A new feature.
   - **fix**: A bug fix.
   - **docs**: Documentation-only changes.
   - **refactor**: A code change that neither fixes a bug nor adds a feature.
   - **test**: Adding missing or correcting existing tests.
   - **chore**: Changes to the build process or auxiliary tools and libraries, such as documentation generation.

8. **Submit a Pull Request (PR)**: Once your changes are ready, create a Pull Request from your feature branch to the original repository's `master` branch.

## Pull Request Guidelines

Please keep your Pull Requests focused and small in scope. Try to avoid including unrelated commits in your PR.

After you've submitted your PR, our team will review it as soon as possible. We may provide feedback or suggest improvements to your code. Your patience and cooperation during this process are highly appreciated.

Thank you for contributing to our project! Your efforts make a difference, and we look forward to working with you. :heart:

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/
