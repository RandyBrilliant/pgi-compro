#!/usr/bin/env python3
import os

base_path = r'c:\Users\randy\Documents\programming\pgi-compro'
os.chdir(base_path)

# Create src/ subdirectories
dirs_to_create = [
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
]

for dir_path in dirs_to_create:
    os.makedirs(dir_path, exist_ok=True)
    print(f'✓ Created: {dir_path}')

print('\n✓ All directories created successfully!')
