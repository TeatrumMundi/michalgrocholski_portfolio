# Michał Grocholski – Portfolio

Personal portfolio website built with Next.js, React, and Tailwind CSS. Showcases my projects, experience, and skills, and includes a contact form with email functionality.

## 🚀 Features

- **Modern UI**: Responsive, animated, and visually appealing design
- **About Me**: Personal introduction and professional experience
- **Projects**: Interactive project gallery with live demos and GitHub links
- **Skills**: Categorized tech stack with icons
- **Contact Form**: Secure form that sends messages directly to my email
- **Social Links**: Quick access to GitHub, LinkedIn, and Facebook

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nodemailer](https://nodemailer.com/) (for email API)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Folder Structure

```
src/
  app/           # Next.js app directory (routing, API)
	 api/contact/ # Email API route
	 layout.tsx   # App layout
	 page.tsx     # Main page
  components/    # React components (About, Projects, Contact, etc.)
  config/        # Static data (projects, skills, contact info)
  styles/        # Global styles (Tailwind)
public/
  icons/         # SVG icons
  experience/    # Company logos
  projects/      # Project screenshots
  ...
```

## 📝 Setup & Usage

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Configure environment variables**
   - Copy `.env.local.example` to `.env.local` (or create `.env.local`)
   - Set up Gmail App Password for email (see `EMAIL_SETUP.md`)
3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

4. **Test the contact form**
   - Fill out and submit the form in the Contact section
   - You should receive an email at your configured address
   - See `TESTING_GUIDE.md` for troubleshooting

## 📬 Contact & Contributing

- Feel free to reach out via the contact form or connect on [LinkedIn](https://www.linkedin.com/in/michal-grocholski/)
- PRs and suggestions are welcome!

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own site!
