#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const kebabToPascalCase = (str) => {
  return str.split('-').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('用法: node new-page.js <页面目录名> <页面标题>');
  process.exit(1);
}

const [pageDir, pageTitle] = args;
const pagesDir = path.join(process.cwd(), 'src/views');
const newPageDir = path.join(pagesDir, pageDir);
const appConfigPath = path.join(process.cwd(), 'src/app.config.ts');

// 1. 创建新页面目录和文件
try {
  // 创建页面目录
  if (!fs.existsSync(newPageDir)) {
    fs.mkdirSync(newPageDir, { recursive: true });
  } else {
    console.error(`错误：页面目录 ${pageDir} 已存在`);
    process.exit(1);
  }

  // 创建 index.tsx 文件
  const indexContent = `import Page from '@/components/common/Page'
import NavBar from '@/components/layout/NavBar'
import PagePlaceholder from '@/components/common/PagePlaceholder'

export const ${kebabToPascalCase(pageDir)} = () => {

  return (
    <Page>
      <NavBar title='${pageTitle}' showLeft={false} />
      <PagePlaceholder />
    </Page>
  )
}

export default ${kebabToPascalCase(pageDir)}
`;

  fs.writeFileSync(path.join(newPageDir, 'index.tsx'), indexContent);

  // 创建 index.config.ts 文件
  const configContent = `export default definePageConfig({
  navigationBarTitleText: "${pageTitle}"
})`;
  fs.writeFileSync(path.join(newPageDir, 'index.config.ts'), configContent);

  console.log(`已创建新页面：src/pages/${pageDir}/`);
} catch (err) {
  console.error('创建页面文件时出错:', err);
  process.exit(1);
}

// 2. 更新 app.config.ts 文件
try {
  let appConfig = fs.readFileSync(appConfigPath, 'utf8');

  // 查找 pages 数组并插入新页面
  const pagesRegex = /pages:\s*\[([^\]]*)\]/;
  const match = appConfig.match(pagesRegex);

  if (match) {
    const existingPages = match[1];
    // 在最后一个页面后添加新页面路径
    const newPages = existingPages.replace(/\s*\]\s*$/, '') +
      `,\n    'pages/${pageDir}/index'`;

    // 替换原来的 pages 数组
    appConfig = appConfig.replace(pagesRegex, `pages: [${newPages}]`);
    fs.writeFileSync(appConfigPath, appConfig);
    console.log('已更新 src/app.config.ts 文件');
  } else {
    console.error('无法在 app.config.ts 中找到 pages 数组');
    process.exit(1);
  }
} catch (err) {
  console.error('更新 app.config.ts 时出错:', err);
  process.exit(1);
}

console.log('新页面创建成功！');