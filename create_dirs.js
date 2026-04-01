const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\randy\\Documents\\programming\\pgi-compro';

const dirsToCreate = [
    'src/types',
    'src/lib',
    'src/lib/data',
    'src/components',
    'src/components/ui',
    'src/components/layout',
    'src/components/features',
    'src/components/animations',
    'public/images',
    'public/images/hero',
    'public/images/logo',
    'public/images/business-units',
    'public/images/projects',
    'public/images/team',
    'public/images/clients',
    'public/images/about',
];

dirsToCreate.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✓ Created: ${dir}`);
    } else {
        console.log(`• Already exists: ${dir}`);
    }
});

console.log('\n✓ All directories processed successfully!');
