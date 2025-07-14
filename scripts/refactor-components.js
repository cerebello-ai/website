#!/usr/bin/env node

/**
 * Script to refactor shadcnblocks components to use props
 * This script will systematically update components to accept props
 */

const fs = require('fs');
const path = require('path');

const SHADCNBLOCKS_DIR = './src/components/shadcnblocks';

// Common patterns to look for and replace
const REFACTOR_PATTERNS = {
  // Hero components
  hero: {
    patterns: [
      {
        search: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/,
        replace: 'const $1 = ({ title, description, buttons = [], features = [], ...props }: HeroProps = {}) => {'
      },
      {
        search: /<h1[^>]*>[^<]*<\/h1>/g,
        replace: '<h1 className="...">{title || "Default Title"}</h1>'
      }
    ],
    imports: `import { HeroProps } from "../types/common";`
  },
  
  // CTA components  
  cta: {
    patterns: [
      {
        search: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/,
        replace: 'const $1 = ({ title, description, buttons = [], features = [], ...props }: CtaProps = {}) => {'
      }
    ],
    imports: `import { CtaProps } from "../types/common";`
  },

  // Feature components
  feature: {
    patterns: [
      {
        search: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/,
        replace: 'const $1 = ({ title, description, features = [], ...props }: FeatureProps = {}) => {'
      }
    ],
    imports: `import { FeatureProps } from "../types/common";`
  },

  // Stats components
  stats: {
    patterns: [
      {
        search: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/,
        replace: 'const $1 = ({ title, description, stats = [], ...props }: StatsProps = {}) => {'
      }
    ],
    imports: `import { StatsProps } from "../types/common";`
  },

  // Testimonial components
  testimonial: {
    patterns: [
      {
        search: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/,
        replace: 'const $1 = ({ title, description, testimonials = [], ...props }: TestimonialProps = {}) => {'
      }
    ],
    imports: `import { TestimonialProps } from "../types/common";`
  }
};

function getComponentType(filePath) {
  const dir = path.dirname(filePath).split('/').pop();
  return dir;
}

function refactorComponent(filePath) {
  const componentType = getComponentType(filePath);
  const refactorConfig = REFACTOR_PATTERNS[componentType];
  
  if (!refactorConfig) {
    console.log(`No refactor config for ${componentType}, skipping ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Add imports
  if (!content.includes('from "../types/common"')) {
    const importIndex = content.indexOf('import { Button }') || content.indexOf('import {');
    if (importIndex !== -1) {
      const beforeImports = content.substring(0, importIndex);
      const afterImports = content.substring(importIndex);
      content = beforeImports + refactorConfig.imports + '\n' + afterImports;
    }
  }

  // Apply patterns
  refactorConfig.patterns.forEach(pattern => {
    content = content.replace(pattern.search, pattern.replace);
  });

  // Only write if content changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Refactored: ${filePath}`);
    return true;
  }

  return false;
}

function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const itemPath = path.join(currentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        traverse(itemPath);
      } else if (item.endsWith('.tsx') && !item.includes('types')) {
        files.push(itemPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

async function main() {
  console.log('🚀 Starting shadcnblocks component refactoring...\n');
  
  const componentFiles = findComponentFiles(SHADCNBLOCKS_DIR);
  console.log(`Found ${componentFiles.length} component files\n`);
  
  let refactoredCount = 0;
  
  // Process priority components first
  const priorityComponents = ['hero', 'cta', 'feature', 'stats', 'testimonial'];
  
  for (const priority of priorityComponents) {
    const priorityFiles = componentFiles.filter(file => file.includes(`/${priority}/`));
    console.log(`\n📁 Processing ${priority} components (${priorityFiles.length} files):`);
    
    for (const file of priorityFiles.slice(0, 5)) { // Limit to first 5 for each category
      if (refactorComponent(file)) {
        refactoredCount++;
      }
    }
  }
  
  console.log(`\n✨ Refactoring complete! Modified ${refactoredCount} components.`);
  console.log('\n📝 Next steps:');
  console.log('1. Test the refactored components');
  console.log('2. Update your page imports to pass props');
  console.log('3. Run the remaining components in batches');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { refactorComponent, findComponentFiles };