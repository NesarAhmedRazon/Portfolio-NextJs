import React from 'react'

export function ImageUrl(ImageUrl: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const wp = process.env.WP_URL || '/';
  // Check if the image is from the WordPress site, if not, return the image as is, else, replace the WordPress URL with the base URL
    if (ImageUrl.includes(wp)) {
        return ImageUrl.replace(wp+'/wp-content/uploads/', base+'/assets/');
    } else {
        return ImageUrl;
    }
}

