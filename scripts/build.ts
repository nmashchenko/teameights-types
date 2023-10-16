import fs from 'fs-extra';
import path from 'path';

const srcDir = path.join(__dirname, '../src');

async function generateIndexFile() {
  // List all .ts files in the src directory
  const tsFiles = (await fs.readdir(srcDir)).filter(
    file => file.endsWith('.ts') && file !== 'index.ts'
  );

  // Construct export statements for each .ts file
  const exportStatements = tsFiles
    .map(file => `export * from './${path.basename(file, '.ts')}';`)
    .join('\n');

  // Write the export statements to index.ts
  const indexPath = path.join(srcDir, 'index.ts');
  await fs.writeFile(indexPath, exportStatements);

  console.log(`Generated index.ts with exports for ${tsFiles.length} TypeScript files.`);
}

generateIndexFile().catch(err => {
  console.error('Failed to generate index.ts:', err);
});
