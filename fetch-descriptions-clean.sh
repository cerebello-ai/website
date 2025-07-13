#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Output markdown file
OUTPUT_FILE="SHADCNBLOCKS_COMPLETE_REFERENCE.md"
BASE_DIR="src/components/shadcnblocks"

# Counters
FETCHED_COUNT=0
FAILED_COUNT=0

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}ShadcnBlocks Description Fetcher (Clean Version)${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Function to get category from component name
get_category() {
    local component=$1
    echo "$component" | sed 's/[0-9]*$//'
}

# Function to extract description from webpage
fetch_description() {
    local url="$1"
    local component="$2"
    
    # Show progress
    echo -e "${BLUE}Fetching $component...${NC}"
    
    # Fetch webpage content
    local webpage_content=$(curl -s "$url")
    local description=""
    
    # Try multiple extraction methods
    # Method 1: Meta description
    description=$(echo "$webpage_content" | \
        grep -o '<meta[^>]*name="description"[^>]*content="[^"]*"' | \
        sed 's/.*content="//g' | \
        sed 's/".*//g' | \
        head -1)
    
    # Method 2: OG description
    if [ -z "$description" ]; then
        description=$(echo "$webpage_content" | \
            grep -o '<meta[^>]*property="og:description"[^>]*content="[^"]*"' | \
            sed 's/.*content="//g' | \
            sed 's/".*//g' | \
            head -1)
    fi
    
    # Method 3: Twitter description
    if [ -z "$description" ]; then
        description=$(echo "$webpage_content" | \
            grep -o '<meta[^>]*name="twitter:description"[^>]*content="[^"]*"' | \
            sed 's/.*content="//g' | \
            sed 's/".*//g' | \
            head -1)
    fi
    
    # Clean up description
    if [ -n "$description" ]; then
        description=$(echo "$description" | \
            sed 's/&quot;/"/g' | \
            sed 's/&amp;/\&/g' | \
            sed 's/&lt;/</g' | \
            sed 's/&gt;/>/g' | \
            sed 's/&nbsp;/ /g' | \
            sed 's/  */ /g' | \
            sed 's/^ *//g' | \
            sed 's/ *$//g')
    fi
    
    # Return result
    if [ -n "$description" ] && [ ${#description} -gt 10 ] && [ "$description" != "ShadcnBlocks" ]; then
        echo "$description"
        ((FETCHED_COUNT++))
    else
        echo "Description not available"
        ((FAILED_COUNT++))
    fi
}

# Function to process a category of components
process_category() {
    local category_name="$1"
    local component_prefix="$2"
    local count="$3"
    local category_number="$4"
    
    echo -e "${YELLOW}=== Processing $category_name ($count components) ===${NC}"
    
    # Add category header to markdown
    echo "## $category_number. $category_name ($count components)" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    # Process each component in the category
    for ((i=1; i<=count; i++)); do
        component="${component_prefix}${i}"
        url="https://www.shadcnblocks.com/block/${component}"
        
        description=$(fetch_description "$url" "$component")
        category=$(get_category "$component")
        path="${BASE_DIR}/${category}/${component}.tsx"
        
        # Write to markdown file
        cat >> "$OUTPUT_FILE" << EOF
- **${component}**: ${description}
  - **Path**: \`${path}\`
  - **URL**: [View Component](https://www.shadcnblocks.com/block/${component})

EOF
        
        sleep 0.3  # Be respectful to the server
    done
    
    echo ""
}

# Initialize markdown file
cat > "$OUTPUT_FILE" << 'EOF'
# ShadcnBlocks Complete Component Reference

This comprehensive reference documents all 681 shadcnblocks components with their descriptions and file paths.

## Overview

- **Total Components**: 681 across 35 categories
- **Built with**: shadcn/ui, Tailwind CSS, React
- **Framework Support**: Next.js, Astro
- **Installation**: Use `./install-all-shadcnblocks-organized.sh`
- **Organization**: Components are organized in category folders

## Component Categories and Descriptions

EOF

echo "Starting component description fetching..."
echo "This will take approximately 6-8 minutes..."
echo ""

# Process all categories
process_category "Hero Components" "hero" 141 1
process_category "Feature Components" "feature" 224 2
process_category "Footer Components" "footer" 15 3
process_category "Content Components" "content" 3 4
process_category "Testimonial Components" "testimonial" 27 5
process_category "Pricing Components" "pricing" 31 6
process_category "Login Components" "login" 7 7
process_category "Logos Components" "logos" 9 8
process_category "About Components" "about" 8 9
process_category "Banner Components" "banner" 6 10
process_category "Bento Components" "bento" 2 11
process_category "Blog Components" "blog" 17 12
process_category "Blog Post Components" "blogpost" 6 13
process_category "Careers Components" "careers" 8 14
process_category "Case Studies Components" "casestudies" 6 15
process_category "Case Study Components" "casestudy" 3 16
process_category "Changelog Components" "changelog" 7 17
process_category "Community Components" "community" 7 18
process_category "Compare Components" "compare" 8 19
process_category "Contact Components" "contact" 12 20
process_category "CTA Components" "cta" 22 21
process_category "FAQ Components" "faq" 15 22
process_category "Gallery Components" "gallery" 39 23
process_category "Integration Components" "integration" 14 24
process_category "List Components" "list" 2 25
process_category "Logo Component" "logo" 1 26
process_category "Navbar Components" "navbar" 9 27
process_category "News Component" "news" 1 28
process_category "Product Components" "product" 2 29
process_category "Resource Component" "resource" 1 30
process_category "Resources Component" "resources" 1 31
process_category "Signup Components" "signup" 10 32
process_category "Stats Components" "stats" 14 33
process_category "Team Components" "team" 10 34
process_category "Timeline Components" "timeline" 13 35

# Add footer to markdown
cat >> "$OUTPUT_FILE" << 'EOF'

## Usage Instructions

### Import Components
```typescript
// Import a specific component
import Hero1 from '@/components/shadcnblocks/hero/hero1'
import Feature5 from '@/components/shadcnblocks/feature/feature5'

// Use in your pages
export default function HomePage() {
  return (
    <div>
      <Hero1 />
      <Feature5 />
    </div>
  )
}
```

### Installation
Use the installation script to get all components:
```bash
chmod +x install-all-shadcnblocks-organized.sh
./install-all-shadcnblocks-organized.sh
```

---

*This reference was generated automatically by fetching descriptions from shadcnblocks.com*
EOF

# Summary
echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Description Fetching Complete${NC}"
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}✓ Successfully fetched: $FETCHED_COUNT component descriptions${NC}"
echo -e "${RED}✗ Failed to fetch: $FAILED_COUNT component descriptions${NC}"
echo -e "${BLUE}Total processed: $((FETCHED_COUNT + FAILED_COUNT)) components${NC}"
echo ""
echo -e "${GREEN}Complete reference saved to: $OUTPUT_FILE${NC}"
echo ""