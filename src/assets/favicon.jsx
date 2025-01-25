import { renderToStaticMarkup } from 'react-dom/server';
import { Sparkles } from 'lucide-react';
import fs from 'fs';

const svgContent = renderToStaticMarkup(<Sparkles />);
fs.writeFileSync('./public/sparkles.svg', svgContent);
