import './style.css';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import torchlight from 'remark-torchlight';
import rehypeStringify from 'rehype-stringify';

async function mdToHtml() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(torchlight)
    .use(rehypeStringify)
    .process(`\`\`\`Hey man\`\`\``);

  return String(file);
}

const html = mdToHtml();
document.querySelector('#app').innerHTML = html;
