// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const pagesDirectory = path.join(process.cwd(), 'pages');
//   const pages = fs.readdirSync(pagesDirectory)
//     .filter(file => file.endsWith('.js') && file !== '_app.js')
//     .map(file => file.replace('.js', ''));
//   res.status(200).json(pages);
// }
