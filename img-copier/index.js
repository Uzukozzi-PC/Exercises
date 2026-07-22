import path from 'node:path';
import fs from 'node:fs/promises';

const sourcePath = "/home/uzukozzi/Scaricati/img-copier/";
const destinationPath = "/home/uzukozzi/Scaricati/new-img-copier/";
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

async function main() {
    try {
        if (destinationPath === sourcePath) {
            throw new Error('Source and destination paths cannot be the same.');
        }

        await fs.mkdir(destinationPath, { recursive: true });
        console.log(`Destination directory created at: ${destinationPath}`);

        await copyImage(sourcePath, destinationPath);
        
    } catch (error) {
        console.error('Error occurred:', error.message);
    }
}


async function copyImage (sourcePath, destinationPath) {
    const files = await fs.readdir(sourcePath);
    
    for (const filename of files) {
        if (isImage(filename)) {
            await fs.copyFile(path.join(sourcePath, filename), path.join(destinationPath, filename));
            console.log(`Copied: ${filename}`);
        }
    }
}

function isImage(filename) {
    const ext = path.extname(filename).toLowerCase();
    return imageExtensions.includes(ext);
}

main();
