
# SyncPad

SyncPad is a real-time collaborative text editor built with Liveblocks and Lexical. It offers a rich, feature-packed platform for creating, editing, and sharing documents. SyncPad integrates Clerk for secure user authentication and session management, ensuring a seamless user experience.

## Features
- **Real-time Collaboration**: Collaborate with others in real-time as you edit documents.
- **Rich Text Editing**: Built with Lexical for a powerful and flexible text editing experience.
- **User Authentication**: Secure sign-up and sign-in process using Clerk.
- **Document Sharing**: Effortlessly share documents with others for collaborative editing.
- **Session Management**: Clerk handles user sessions to keep everything in sync.

## Technologies Used
- **Liveblocks**: For real-time collaboration.
- **Lexical**: For rich text editing.
- **Clerk**: For secure user authentication and session management.
- **Next.js 14**: For building the full-stack web application.
- **React**: For building the front-end.

## Prerequisites
Before running the project, make sure you have the following installed:

- npm or Yarn
- Clerk and Liveblocks API keys

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/grep-many/syncpad.git
    cd syncpad
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    LIVEBLOCKS_SECRET_KEY=your-liveblocks-secret-key
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign In/Sign Up**: Use Clerk's authentication system to sign in or sign up to your account.
- **Start Collaborating**: Create a new document and invite others to edit in real-time.
- **Editing**: Edit documents using the powerful features provided by Lexical.
- **Share Documents**: Easily share documents with collaborators.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
