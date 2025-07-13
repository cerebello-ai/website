#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Token for authentication
TOKEN="eyJhbGciOiJIUzI1NiIsImtpZCI6IjVxdW9IOXJ2ZFdVMlJMNTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3Rva2plaXhxeXhjbWRhamFnaWttLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI4YWY0NDE2NC0xMjQzLTQyYzMtOWI1OS02ZGQ1MTM0N2NhZjkiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzUyNDA2OTQ2LCJpYXQiOjE3NTI0MDMzNDYsImVtYWlsIjoiYmVhdWRpbm5ncmV2ZUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0xTeS1wZ3FhenBuQkk4V0JVWjZWT2ltdnE2SGVyREpublBNQW1YcS1md0pFM2xYYWc9czk2LWMiLCJlbWFpbCI6ImJlYXVkaW5uZ3JldmVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkJlYXVkaW5uIEdyZXZlIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkJlYXVkaW5uIEdyZXZlIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTFN5LXBncWF6cG5CSThXQlVaNlZPaW12cTZIZXJESm5uUE1BbVhxLWZ3SkUzbFhhZz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTAwODMwMTIzNTIwMjgxNzQ0MjY1Iiwic3ViIjoiMTAwODMwMTIzNTIwMjgxNzQ0MjY1In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3NTIxMzU2ODl9XSwic2Vzc2lvbl9pZCI6IjU0ZDMyMjA4LWQzNzEtNGJjNS1hY2QyLTY5MmFhNzZmZjFkMCIsImlzX2Fub255bW91cyI6ZmFsc2V9.RMQTbvAILWUhRI1DWbXbs3uVk6iFe3q0JimSZhMhQN4"

# Base directory for shadcnblocks components
BASE_DIR="src/components/shadcnblocks"

# Stats
SKIPPED_COUNT=0
INSTALLED_COUNT=0
FAILED_COUNT=0
MOVED_COUNT=0

# Function to get category from component name
get_category() {
    local component=$1
    # Extract the category name (everything before the number)
    echo "$component" | sed 's/[0-9]*$//'
}

# Function to check if component already exists
component_exists() {
    local component=$1
    local category=$(get_category "$component")
    
    # Check in the new organized structure
    if [ -f "${BASE_DIR}/${category}/${component}.tsx" ]; then
        return 0
    else
        return 1
    fi
}

# Function to create category directory if it doesn't exist
ensure_category_dir() {
    local category=$1
    local dir="${BASE_DIR}/${category}"
    
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo -e "${GREEN}Created directory: $dir${NC}"
    fi
}

# Function to validate token by making a test request
validate_token() {
    echo -e "${BLUE}Validating token...${NC}"
    
    # Try to fetch a simple component to test the token
    TEST_OUTPUT=$(npx shadcn@canary add "https://www.shadcnblocks.com/r/hero1?token=${TOKEN}" --dry-run 2>&1)
    
    if echo "$TEST_OUTPUT" | grep -q "401\|403\|expired\|invalid\|unauthorized"; then
        return 1
    else
        return 0
    fi
}

# Function to prompt for new token
prompt_for_token() {
    echo -e "${YELLOW}Token appears to be expired or invalid.${NC}"
    echo -e "${YELLOW}Please provide a new token from shadcnblocks.com:${NC}"
    read -p "Enter new token: " NEW_TOKEN
    
    if [ -z "$NEW_TOKEN" ]; then
        echo -e "${RED}No token provided. Exiting.${NC}"
        exit 1
    fi
    
    TOKEN="$NEW_TOKEN"
    
    # Update the token in this script
    sed -i.bak "s|TOKEN=\".*\"|TOKEN=\"$TOKEN\"|" "$0"
    echo -e "${GREEN}Token updated in script.${NC}"
}

# Function to move existing components to organized structure
move_existing_components() {
    echo -e "${BLUE}Checking for existing components to organize...${NC}"
    
    for file in src/components/*.tsx; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            component="${filename%.tsx}"
            
            # Check if it's a shadcnblocks component (matches pattern like hero1, feature2, etc.)
            if [[ "$component" =~ ^(hero|feature|footer|content|testimonial|pricing|login|logos|about|banner|bento|blog|blogpost|careers|casestudies|casestudy|changelog|community|compare|contact|cta|faq|gallery|integration|list|logo|navbar|news|product|resource|resources|signup|stats|team|timeline)[0-9]+$ ]]; then
                category=$(get_category "$component")
                ensure_category_dir "$category"
                
                echo -e "${BLUE}Moving $component to organized structure...${NC}"
                mv "$file" "${BASE_DIR}/${category}/${component}.tsx"
                echo -e "${GREEN}✓ Moved $component to ${BASE_DIR}/${category}/${NC}"
                ((MOVED_COUNT++))
            fi
        fi
    done
    
    if [ $MOVED_COUNT -gt 0 ]; then
        echo -e "${GREEN}Moved $MOVED_COUNT existing components to organized structure${NC}"
    fi
}

# Function to install a component
install_component() {
    local component=$1
    local category=$(get_category "$component")
    
    # Check if component already exists in organized structure
    if component_exists "$component"; then
        echo -e "${YELLOW}⚠ Skipping $component - already exists${NC}"
        ((SKIPPED_COUNT++))
        return
    fi
    
    # Ensure category directory exists
    ensure_category_dir "$category"
    
    echo -e "${BLUE}Installing $component into ${category}/ ...${NC}"
    
    # Install component normally (it will go to src/components/)
    npx shadcn@canary add "https://www.shadcnblocks.com/r/${component}?token=${TOKEN}" --yes --overwrite 2>&1
    
    if [ $? -eq 0 ]; then
        # Move the installed component to the correct category folder
        if [ -f "src/components/${component}.tsx" ]; then
            mv "src/components/${component}.tsx" "${BASE_DIR}/${category}/${component}.tsx"
            echo -e "${GREEN}✓ Successfully installed $component to ${category}/${NC}"
            ((INSTALLED_COUNT++))
        else
            echo -e "${RED}✗ Component file not found after installation${NC}"
            ((FAILED_COUNT++))
        fi
    else
        echo -e "${RED}✗ Failed to install $component${NC}"
        ((FAILED_COUNT++))
        
        # If we get an auth error, prompt for new token
        if [ $FAILED_COUNT -eq 1 ]; then
            validate_token
            if [ $? -ne 0 ]; then
                prompt_for_token
                # Retry the component with new token
                echo -e "${BLUE}Retrying $component with new token...${NC}"
                npx shadcn@canary add "https://www.shadcnblocks.com/r/${component}?token=${TOKEN}" --yes --overwrite
                if [ $? -eq 0 ] && [ -f "src/components/${component}.tsx" ]; then
                    mv "src/components/${component}.tsx" "${BASE_DIR}/${category}/${component}.tsx"
                    echo -e "${GREEN}✓ Successfully installed $component to ${category}/${NC}"
                    ((INSTALLED_COUNT++))
                    ((FAILED_COUNT--))
                fi
            fi
        fi
    fi
    echo "---"
}

# Main script
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Smart ShadcnBlocks Component Installer${NC}"
echo -e "${BLUE}(Organized by Category)${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Move existing components first
move_existing_components
echo ""

# Validate token
validate_token
if [ $? -ne 0 ]; then
    prompt_for_token
fi

echo -e "${GREEN}Token validated successfully!${NC}"
echo ""
echo "This script will:"
echo "- Install components into organized category folders"
echo "- Check for existing components before installing"
echo "- Skip already installed components"
echo "- Install up to 681 components across 35 categories"
echo ""
echo "Components will be organized in:"
echo "${BASE_DIR}/[category]/[component].tsx"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Installation cancelled."
    exit 1
fi

echo ""
echo -e "${BLUE}Starting installation...${NC}"
echo ""

# Hero components (141)
echo -e "${BLUE}=== Hero components (141) ===${NC}"
for i in {1..141}; do
    install_component "hero${i}"
done

# Feature components (224)
echo -e "${BLUE}=== Feature components (224) ===${NC}"
for i in {1..224}; do
    install_component "feature${i}"
done

# Footer components (15)
echo -e "${BLUE}=== Footer components (15) ===${NC}"
for i in {1..15}; do
    install_component "footer${i}"
done

# Content components (3)
echo -e "${BLUE}=== Content components (3) ===${NC}"
for i in {1..3}; do
    install_component "content${i}"
done

# Testimonial components (27)
echo -e "${BLUE}=== Testimonial components (27) ===${NC}"
for i in {1..27}; do
    install_component "testimonial${i}"
done

# Pricing components (31)
echo -e "${BLUE}=== Pricing components (31) ===${NC}"
for i in {1..31}; do
    install_component "pricing${i}"
done

# Login components (7)
echo -e "${BLUE}=== Login components (7) ===${NC}"
for i in {1..7}; do
    install_component "login${i}"
done

# Logos components (9)
echo -e "${BLUE}=== Logos components (9) ===${NC}"
for i in {1..9}; do
    install_component "logos${i}"
done

# About components (8)
echo -e "${BLUE}=== About components (8) ===${NC}"
for i in {1..8}; do
    install_component "about${i}"
done

# Banner components (6)
echo -e "${BLUE}=== Banner components (6) ===${NC}"
for i in {1..6}; do
    install_component "banner${i}"
done

# Bento components (2)
echo -e "${BLUE}=== Bento components (2) ===${NC}"
for i in {1..2}; do
    install_component "bento${i}"
done

# Blog components (17)
echo -e "${BLUE}=== Blog components (17) ===${NC}"
for i in {1..17}; do
    install_component "blog${i}"
done

# Blog Post components (6)
echo -e "${BLUE}=== Blog Post components (6) ===${NC}"
for i in {1..6}; do
    install_component "blogpost${i}"
done

# Careers components (8)
echo -e "${BLUE}=== Careers components (8) ===${NC}"
for i in {1..8}; do
    install_component "careers${i}"
done

# Case Studies components (6)
echo -e "${BLUE}=== Case Studies components (6) ===${NC}"
for i in {1..6}; do
    install_component "casestudies${i}"
done

# Case Study components (3)
echo -e "${BLUE}=== Case Study components (3) ===${NC}"
for i in {1..3}; do
    install_component "casestudy${i}"
done

# Changelog components (7)
echo -e "${BLUE}=== Changelog components (7) ===${NC}"
for i in {1..7}; do
    install_component "changelog${i}"
done

# Community components (7)
echo -e "${BLUE}=== Community components (7) ===${NC}"
for i in {1..7}; do
    install_component "community${i}"
done

# Compare components (8)
echo -e "${BLUE}=== Compare components (8) ===${NC}"
for i in {1..8}; do
    install_component "compare${i}"
done

# Contact components (12)
echo -e "${BLUE}=== Contact components (12) ===${NC}"
for i in {1..12}; do
    install_component "contact${i}"
done

# CTA components (22)
echo -e "${BLUE}=== CTA components (22) ===${NC}"
for i in {1..22}; do
    install_component "cta${i}"
done

# FAQ components (15)
echo -e "${BLUE}=== FAQ components (15) ===${NC}"
for i in {1..15}; do
    install_component "faq${i}"
done

# Gallery components (39)
echo -e "${BLUE}=== Gallery components (39) ===${NC}"
for i in {1..39}; do
    install_component "gallery${i}"
done

# Integration components (14)
echo -e "${BLUE}=== Integration components (14) ===${NC}"
for i in {1..14}; do
    install_component "integration${i}"
done

# List components (2)
echo -e "${BLUE}=== List components (2) ===${NC}"
for i in {1..2}; do
    install_component "list${i}"
done

# Logo component (1)
echo -e "${BLUE}=== Logo component (1) ===${NC}"
install_component "logo1"

# Navbar components (9)
echo -e "${BLUE}=== Navbar components (9) ===${NC}"
for i in {1..9}; do
    install_component "navbar${i}"
done

# News component (1)
echo -e "${BLUE}=== News component (1) ===${NC}"
install_component "news1"

# Product components (2)
echo -e "${BLUE}=== Product components (2) ===${NC}"
for i in {1..2}; do
    install_component "product${i}"
done

# Resource component (1)
echo -e "${BLUE}=== Resource component (1) ===${NC}"
install_component "resource1"

# Resources component (1)
echo -e "${BLUE}=== Resources component (1) ===${NC}"
install_component "resources1"

# Signup components (10)
echo -e "${BLUE}=== Signup components (10) ===${NC}"
for i in {1..10}; do
    install_component "signup${i}"
done

# Stats components (14)
echo -e "${BLUE}=== Stats components (14) ===${NC}"
for i in {1..14}; do
    install_component "stats${i}"
done

# Team components (10)
echo -e "${BLUE}=== Team components (10) ===${NC}"
for i in {1..10}; do
    install_component "team${i}"
done

# Timeline components (13)
echo -e "${BLUE}=== Timeline components (13) ===${NC}"
for i in {1..13}; do
    install_component "timeline${i}"
done

# Summary
echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Installation Summary${NC}"
echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}✓ Installed: $INSTALLED_COUNT components${NC}"
echo -e "${YELLOW}⚠ Skipped: $SKIPPED_COUNT components (already existed)${NC}"
echo -e "${YELLOW}⚠ Moved: $MOVED_COUNT components (organized from src/components)${NC}"
echo -e "${RED}✗ Failed: $FAILED_COUNT components${NC}"
echo -e "${BLUE}Total processed: $((INSTALLED_COUNT + SKIPPED_COUNT + FAILED_COUNT)) components${NC}"
echo ""

if [ $FAILED_COUNT -gt 0 ]; then
    echo -e "${YELLOW}Some components failed to install. You may want to check your token or try again.${NC}"
fi

echo -e "${GREEN}Installation complete!${NC}"
echo -e "${GREEN}Components are organized in: ${BASE_DIR}/[category]/${NC}"