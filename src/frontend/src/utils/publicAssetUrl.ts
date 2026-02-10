/**
 * Constructs a properly encoded URL for public static assets.
 * Handles filenames with spaces and special characters.
 * Production-safe: respects base path and encodes segments correctly.
 * 
 * @param path - Relative path from /assets/ (e.g., "gallery/image.jpg")
 * @returns Properly encoded absolute URL
 */
export function getPublicAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Split path into segments and encode each segment separately
  // This preserves slashes while encoding spaces and special chars
  const segments = cleanPath.split('/');
  const encodedSegments = segments.map(segment => encodeURIComponent(segment));
  const encodedPath = encodedSegments.join('/');
  
  // Get base path from import.meta.env (Vite provides this)
  // In production on IC, this will be set correctly by the build
  const base = import.meta.env.BASE_URL || '/';
  
  // Construct the full URL with proper base and /assets/ prefix
  // Remove trailing slash from base if present to avoid double slashes
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  
  return `${cleanBase}/assets/${encodedPath}`;
}
