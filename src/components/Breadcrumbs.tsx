"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Auto-generate breadcrumbs from pathname if no items provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
  
  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
  <ol className="flex items-center space-x-2 text-muted-foreground">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 && <Home className="h-4 w-4 mr-1" />}
            
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = formatSegmentLabel(segment);
    breadcrumbs.push({
      label,
      href: currentPath
    });
  });

  return breadcrumbs;
}

function formatSegmentLabel(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}